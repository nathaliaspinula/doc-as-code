var Documentation = require('./documentation');
var jsonex = require('./examples/openapi.json');
var doc = new Documentation(jsonex);
doc.buildTextDocumentation();

// console.log(doc.textDocument)
