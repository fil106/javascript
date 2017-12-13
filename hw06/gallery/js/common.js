window.onload = main;

function main() {
    var images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
    var gallery = createGallery(images);

    document.getElementsByClassName('container')[0].appendChild(gallery);
    document.getElementsByClassName('gallery_list')[0].addEventListener('click', thumbClick);
}

function createGallery(arr) {
    //создаем необходимые элементы
    var gallery = document.createElement('div');
    var mainView = document.createElement('div');
    var galleryList = document.createElement('div');
    var img = document.createElement('img');
    var galleryBg = document.getElementById('gallery_bg');

    //небольшие манипуляции с созданными элементами =)
    gallery.classList.add('gallery');
    mainView.classList.add('main_view');
    galleryList.classList.add('gallery_list');
    img.classList.add('hvr-grow-shadow');

    for(var i = 0; i < arr.length; i++) {
        img.src = 'img/small/' + arr[i];
        galleryList.appendChild(img.cloneNode(true));
    }

    var rand = getRandom(arr);

    img.src = 'img/big/' + rand;
    img.className = '';
    mainView.appendChild(img.cloneNode(true));
    galleryList.querySelector('img[src="' + 'img/small/' + rand + '"]').classList.add('active');

    gallery.appendChild(mainView.cloneNode(true));
    gallery.appendChild(galleryList.cloneNode(true));

    return gallery;
}

function thumbClick(event) {
    var mainView = this.parentNode.querySelector('.main_view');
    var galleryBg = document.getElementById('gallery_bg');

    if(event.target.tagName === 'IMG') {
        var img = event.target.cloneNode(true);
        var bigImg = img.src.replace('small', 'big');

        img.className = '';
        img.classList.add('animated', 'fadeIn');

        img.src = bigImg;

        mainView.innerHTML = '';
        mainView.appendChild(img.cloneNode(true));

        removeClass('active', document.getElementsByClassName('active'));
        event.target.classList.add('active');
    }
}

function removeClass(cls, arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i].classList.remove(cls);
    }
}

function getRandom(arr) {
    var rand = Math.floor(Math.random() * (arr.length));
    return arr[rand];
}