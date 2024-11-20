let paragraph = document.getElementsByTagName('p');

paragraph.addEventListener('click', function () {
    let el = document.querySelector('p');
    el.textContent = 'clickされました';
});

//模範解答
document.addEventListener('keydown', function (event) {
    if (event.key === 'y') {
        let p = document.createElement('p');
        p.textContent = '「y」キーが入力されました。';
        document.getElementById('key').appendChild(p);
    }
});

let input = document.getElementsByTagName('input');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', function () {
        this.style['background-color'] = 'purple';
    });
    input[i].addEventListener('blur', function () {
        this.style['background-color'] = 'white';
    });
}

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let p = document.createElement('p');
    p.textContent = '追加されました';

    p.addEventListener('mouseover', function () {
        p.textContent = 'カーソルが重なりました';
    });

    document.getElementById('result').appendChild(p);
});
