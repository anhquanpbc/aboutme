fetch('./configs/langs-and-tools.json')
    .then(response => response.json())
    .then(data => {
        // Duyệt qua mảng các đối tượng
        data.forEach(item => {

            const img = document.createElement('img');
            img.className = 'logo-32';

            img.src = item.url;
            img.title = item.name;
            img.alt = item.name;

            const div = document.createElement('div');
            div.className = 'lt-items';
            div.appendChild(img);

            const h6 = document.createElement('h6');
            h6.textContent = item.name;
            div.appendChild(h6);

            switch (item.type) {
                case 0:
                    document.getElementById('langs').appendChild(div);
                    break;
                case 1:
                    document.getElementById('tools').appendChild(div);
                    break;
                case 2:
                    document.getElementById('env-other').appendChild(div);
                    break;
                case 3:
                    document.getElementById('os').appendChild(div);
                    break;
                case 5:
                    const link = document.createElement('a');
                    link.href = item.target;
                    link.target = "_blank";
                    link.title = item.name;
                    link.appendChild(img);
                    document.getElementById('contacts').appendChild(link);
                    break;
            }
        });
    })
    .catch(error => console.error('Error:', error));

function toggleMenu() {
    document.getElementById('home').style.display = "none";
    document.getElementById('panel2').style.display = "flex";
    scroolToTop();
}

function getIndex() {
    document.getElementById('panel2').style.display = "none";
    document.getElementById('home').style.display = "flex";
    scroolToTop();
}

function scroolToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.getElementById('scroll-to-top').addEventListener('click', scroolToTop);
document.getElementById('index').addEventListener('click', getIndex);
document.getElementById('button2').addEventListener('click', toggleMenu);

window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('scroll-to-top').style.display = "block";
    } else {
        document.getElementById('scroll-to-top').style.display = "none";
    }
}