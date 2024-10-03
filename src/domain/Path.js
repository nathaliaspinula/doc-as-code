class Path {
    constructor({
        name, 
        methods,
    }) {
        this.name = name;
        this.methods = methods;
    }

    build() {
        let doc = `\n # ${this.name}\n`;
        for (const method of this.methods) {
            doc += method.build();
        }
        return doc + "\n\n";
    }
}

module.exports = Path;