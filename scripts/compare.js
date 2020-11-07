const fs = require('fs');
const { diffSpecs } = require('openapi-diff');

const run = async () => {
  const newSpec = fs.readFileSync('./swagger.json', 'utf-8');
  const oldSpec = fs.readFileSync('./old-swagger.json', 'utf-8');

  const res = await diffSpecs({
    sourceSpec: {
      content: oldSpec,
      location: 'source.json',
      format: 'swagger2',
    },
    destinationSpec: {
      content: newSpec,
      location: 'destination.json',
      format: 'swagger2',
    },
  });
  console.log(res);
};

run().then(console.log).catch(console.error);
