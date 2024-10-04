const generateMarkdownTable = require('../utils/generateMarkdownTable');

class Method {
    constructor({
        method,
        tags,
        summary,
        description,
        parameters,
        requestBody, // classe
        responses, // classe
        security // classe
    }) {
        this.method = method;
        this.tags = tags;
        this.summary = summary;
        this.description = description;
        this.parameters = parameters;
        this.requestBody = requestBody;
        this.responses = responses;
        this.security = security;
    }

    build() {
        let documentation = `### [${this.method.toUpperCase()}]\n`;
        
        documentation += `**Description:** ${this.description}\n`;

        if (this.parameters && this.parameters.length) {
            documentation += `**Parameters:**\n`;
            const headers = Object.keys(this.parameters[0]);

            documentation += generateMarkdownTable(headers, this.parameters);
        }

        // Responses
        documentation += `**Responses:**\n`;
        Object.keys(this.responses).forEach((status) => {
            documentation += `- ${status}: ${this.responses[status].description}\n`;

            if (this.responses[status].content) {
                const ref =
                    this.responses[status].content['application/json'].schema[
                    '$ref'
                    ];

                if (ref) {

                    // // Schema
                    // const schema = swagger.components.schemas[ref.split('/')[3]];

                    // Object.keys(schema.properties ? schema.properties : {}).forEach((prop) => {
                    //     documentation += `  - ${prop}: ${schema.properties[prop].description}\n`;

                    //     const items = schema.properties[prop].items;
                    //     if (items) {
                    //         documentation += `   - Items:\n`;
                    //         Object.keys(items.properties ? items.properties : {}).forEach((item) => {
                    //             documentation += `      - ${item}: ${items.properties[item].type}\n`;
                    //         });
                    //     }
                    // });
                }
            }
        });

        return documentation;
    }
}

module.exports = Method;