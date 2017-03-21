import _ from 'lodash'
import fs from 'fs'

let schemas = {};

_.each(fs.readdirSync(`${__dirname}/`), file => {
  if (file.substr(-9) !== 'Schema.js') return;
  let schemaName = file.replace('.js', '');
  let schema = require('./' + file);
  schemas[schemaName] = schema;
});

export default schemas;
