class Method {
    constructor({
        method,
        tags,
        summary,
        description,
        requestBody, // classe
        responses, // classe
        security // classe
    }) {
        this.method = method;
        this.tags = tags;
        this.summary = summary;
        this.description = description;
        this.requestBody = requestBody;
        this.responses = responses;
        this.security = security;
    }

    build() {
        let documentation = `### [${this.method.toUpperCase()}]\n`;
        documentation += `**Description:** ${this.description}\n`;
        return documentation;
    }
}

module.exports = Method;