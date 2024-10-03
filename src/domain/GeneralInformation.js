class GeneralInformation {
    constructor({
        title,
        description,
        termsOfService,
        contact,
        license,
        version
    }) {
        this.title = title;
        this.description = description;
        this.termsOfService = termsOfService;
        this.contact = contact;
        this.license = license;
        this.version = version;
    }

    build() {
        let documentation = `## ${this.title} Documentation - v${this.version}\n`;
        documentation += `*Automatically Generated at: ${new Date()}*\n\n`;
        documentation += `${this.description}\n\n`;
        documentation += `${this.termsOfService}\n\n`;

        if (this.contact) {
            documentation += 'Contact\n';
            Object.keys(this.contact).map(c => {
                documentation += `${c}: ${this.contact[c]}`;
            })
        }

        return documentation;
    }


}

module.exports = GeneralInformation;