(() => {
    const mdConverter = new showdown.Converter();

    var mdEdit = document.getElementById('md-edit');
    var preview = document.getElementById('md-preview')

    mdEdit.addEventListener('keyup', () => {
        renderPreview();
    });

    function renderPreview(){
        const result = convertMarkdownHTML(mdEdit.value);
        preview.innerHTML = result;
    }

    function convertMarkdownHTML(markdownStr){
        return mdConverter.makeHtml(markdownStr);
    }

    function getDemoText(){
        console.log('get text to test:');
        console.log('https://raw.githubusercontent.com/showdownjs/showdown/master/README.md')
    }
    
    getDemoText();
})();