'use strict';

const fs = require('fs');
const camelCase = require('camelcase');

const convertName = (url, func, withParam = false) => {
  let safeUrlName = url.replace(/\/|\<|:|\>/gi, ' ').replace('<', ' ');
  if (!safeUrlName.match(/\{/) && func === 'get') {
    func = 'list';
    safeUrlName = safeUrlName.replace(/\{id\}/gm, '').replace(/\{(.*)\}/gm, '');
  } else {
    if (withParam) {
      safeUrlName = safeUrlName.replace(/\{(.*)\}/gm, '$1');
    } else {
      safeUrlName = safeUrlName.replace(/\{(.*)\}/gm, '');
    }
  }
  return `${func} ${safeUrlName}`.replace('put', 'update').replace('post', 'create');
};

(async () => {
  const rawSwaggerFile = fs.readFileSync(`${__dirname}/../swagger.json`);
  const swaggerFile = JSON.parse(rawSwaggerFile);

  let generatedOperationIds = [];

  Object.keys(swaggerFile.paths).map(url => {
    //   .replace(/\{id\}/, 'BYID');
    // console.log(pascalCase(safeUrlName));
    const data = swaggerFile.paths[url];
    Object.keys(data).map(func => {
      let convertedName = convertName(url, func);
      if (generatedOperationIds.includes(camelCase(convertedName)) && url.match(/\{/)) {
        convertedName = convertName(url, func, true);
      }
      const name = camelCase(convertedName);
      if (name === 'listEvent') {
        // console.log(url, func);
      }
      generatedOperationIds.push(name);
      swaggerFile.paths[url][func].operationId = name;
    });
  });
  
  fs.writeFileSync(`${__dirname}/../swagger-fixed.json`, JSON.stringify(swaggerFile, null, 2));
})();
