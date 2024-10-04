module.exports = generateMarkdownTable = (headers, parameters) => {
    let table = `| ${headers.join(' | ')} |\n`;

    table += `| ${headers.map(() => '---').join(' | ')} |\n`;

    parameters?.map(parameter => {
        table += `| ${headers.map(cabecalho => parameter[cabecalho]).join(' | ')} |\n`
    });

    return table;
}