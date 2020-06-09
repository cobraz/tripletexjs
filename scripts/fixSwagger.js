'use strict';

const fs = require('fs');
const camelCase = require('camelcase');
const transform = require('js-object-transform');
const sway = require('sway');

const validate = async (swaggerFile) => {
  const api = await sway.create({
    definition: swaggerFile,
  });

  return api.validate();
};

(async () => {
  const rawSwaggerFile = fs.readFileSync(`${__dirname}/../swagger.json`);
  const swaggerFile = JSON.parse(rawSwaggerFile);

  // Fix issue with /ledger/voucher/{id}/attachment
  const deleteIssue = swaggerFile.paths['/ledger/voucher/{id}/attachment']['delete'];
  const parameters = deleteIssue.parameters.map((parameter) =>
    parameter.name === 'id'
      ? {
          ...parameter,
          name: 'voucherId',
        }
      : {
          ...parameter,
        }
  );
  swaggerFile.paths['/ledger/voucher/{voucherId}/attachment']['delete'] = {
    ...deleteIssue,
    parameters,
  };
  delete swaggerFile.paths['/ledger/voucher/{id}/attachment'];
  // console.log(swaggerFile.paths['/ledger/voucher/{voucherId}/attachment']);

  // Fix multiple
  for (const key in swaggerFile.definitions) {
    if (swaggerFile.definitions.hasOwnProperty(key)) {
      for (const propKey in swaggerFile.definitions[key].properties) {
        const { readOnly, description, ...prop } = swaggerFile.definitions[key].properties[
          propKey
        ];
        swaggerFile.definitions[key].properties[propKey] = prop;
      }
    }
  }

  // console.log(JSON.stringify(warnings, null, 2));
  let validation;
  // for (let index = 0; index < 4; index++) {
  //   validation = await validate(swaggerFile);
  //   validation.warnings
  //     .filter((warning) => warning.code === 'UNUSED_DEFINITION')
  //     .map((warning) => {
  //       if (warning.path[1] && swaggerFile.definitions[warning.path[1]]) {
  //         delete swaggerFile.definitions[warning.path[1]];
  //       } else {
  //         console.log(warning.path);
  //       }
  //     });
  // }

  validation = await validate(swaggerFile);
  console.log(validation.warnings);

  fs.writeFileSync(`${__dirname}/../swagger-fixed.json`, JSON.stringify(swaggerFile, null, 2));
})();
