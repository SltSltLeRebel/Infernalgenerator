
function fileCreate(object, str){

        return `# ${str} 
## Alphabet 
\`\`\`
${object.randomlyGeneratedAlphabet}
\`\`\`
## Text a traduire 
\`\`\`
${object.textToTranslate}
\`\`\`
## Text Traduit
\`\`\`
${object.translatedText}
\`\`\`
`
    }

function dowloadAsMarkdown(object , str){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(fileCreate(object, str));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", str + ".md");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
} 
export {dowloadAsMarkdown};