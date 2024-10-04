class Parameter {
    constructor({
        pIn,
        name,
        description,
        type,
        required
    }) {
        this.pIn = pIn;
        this.name = name;
        this.description = description;
        this.type = type;
        this.required = required;
    }

    build() {
        let documentation = `- **(${this.pIn}) ${this.name}**:\n`;
        documentation += `  - Description: ${this?.description}\n`;
        documentation += `  - Type: ${this.type}\n`;
        documentation += `  - Required: ${this.required}\n\n`;

        return documentation;
    }
}

module.exports = Parameter;