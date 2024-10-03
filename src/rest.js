 
            Object.keys(methods).forEach((method) => {
                const details = methods[method];
                documentation += `### [${method.toUpperCase()}] ${path}\n`;
                documentation += `**Description:** ${details.description}\n`;

                // Parameters
                if (details.parameters) {
                    documentation += `**Parameters:**\n`;
                    details.parameters.forEach((param) => {
                        documentation += `- **(${param.in}) ${param.name}**:\n`;
                        documentation += `  - Description: ${param?.description}\n`;
                        documentation += `  - Type: ${param.schema.type}\n`;
                        documentation += `  - Required: ${param.required}\n\n`;
                    });
                }

                // Responses
                documentation += `**Responses:**\n`;
                Object.keys(details.responses).forEach((status) => {
                    documentation += `- ${status}: ${details.responses[status].description}\n`;

                    if (details.responses[status].content) {
                        const ref =
                            details.responses[status].content['application/json'].schema[
                            '$ref'
                            ];

                        if (ref) {

                            // Schema
                            const schema = swagger.components.schemas[ref.split('/')[3]];

                            Object.keys(schema.properties ? schema.properties : {}).forEach((prop) => {
                                documentation += `  - ${prop}: ${schema.properties[prop].description}\n`;

                                const items = schema.properties[prop].items;
                                if (items) {
                                    documentation += `   - Items:\n`;
                                    Object.keys(items.properties ? items.properties : {}).forEach((item) => {
                                        documentation += `      - ${item}: ${items.properties[item].type}\n`;
                                    });
                                }
                            });
                        }
                    }
                });

                documentation += '\n';
            });