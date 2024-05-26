document.addEventListener('DOMContentLoaded', function() {
    fetch("../markdown/content.md")
        .then(response => response.text())
        .then(markdownText => {
            const htmlContent = marked(markdownText);
            document.getElementById('html-output').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error fetching the markdown file:', error));
});
