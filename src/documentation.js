const fs = require('fs');
const GeneralInformation = require('./domain/GeneralInformation');
const Path = require("./domain/Path");
const Method = require("./domain/Method");

class Documentation {
    constructor(jsonDocument) {
        this.jsonDocument = jsonDocument;
        this.textDocument = '';
    }

    saveToFile(fileName, content) {
        fs.writeFileSync(fileName, content);
    }

    generateTextDocumentation() {
        const swagger = this.jsonDocument;

        const generalInformationDoc = new GeneralInformation(swagger.info).build();

        let documentation = generalInformationDoc;
        // Paths
        Object.keys(swagger.paths).forEach((path) => {
            const pathsDoc = new Path({
                name: path,
                methods: Object.keys(swagger.paths[path]).map(method => new Method({
                    method,
                    tags: swagger.paths[path][method].tags,
                    summary: swagger.paths[path][method].summary,
                    description: swagger.paths[path][method].description,
                    requestBody: swagger.paths[path][method].requestBody,
                    responses: swagger.paths[path][method].responses,
                    security: swagger.paths[path][method].security
                }))
            }).build();

            documentation += pathsDoc;
        });

        this.textDocument = documentation;
    }

    buildTextDocumentation() {
        this.generateTextDocumentation();
        this.saveToFile('./src/docs/documentation.md', this.textDocument);
    }
}

module.exports = Documentation;