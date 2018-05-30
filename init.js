var baseurl = "https://res.cloudinary.com/acadians/image/upload/v1527360791/";

document.addEventListener('DOMContentLoaded', function (){

    initGalleryCaroussel();
    initGallery();

    $('.popup-image').magnificPopup({
        type:'image'
    });

    loadImage();

});

document.addEventListener('scroll', function (){
    loadImage();
})

function initGallery(){
    
    var div = document.querySelector("[data-gallery]");
    if (div){
        for (var i= 1; i <= 36; i++){

            var galleryItem = createElement("div", "eight wide column");
            galleryItem.appendChild(createImageForThemes(i));

            div.appendChild(galleryItem);
        }
    }
}

var dataCarrousel = [1, 2, 3, 7, 8, 9, 10, 11, 12, 13];
function initGalleryCaroussel(){
    
    var div = document.querySelector("[data-gallery-carousel]");
    if (div){
        for (var i=0; i <= dataCarrousel.length -1; i++){

            var galleryItem = createElement("div", "gallery_item");
            galleryItem.appendChild(createImageForThemes(dataCarrousel[i]));

            div.appendChild(galleryItem);
        }

        $(".gallery_carousel").owlCarousel({
            items : 5,
            itemsDesktop: [1199,5],
            itemsDesktopSmall: [979,4],
            itemsTablet: [768,2],
            navigationText: ['<i class="angle left icon"></i>','<i class="angle right icon"></i>'],
            lazyLoad : true,
            navigation : true
        });
    }
}

function createElement(name, className){
    var elm = document.createElement(name);
    elm.className = className;
    return elm;
}

function createImageForThemes(i){
    var imageUrl = baseurl + "gallery/" + i + ".jpg";
    var image = document.createElement("img");
    image.dataset.src = imageUrl
    
    var span = createElement("span", "image-button");
    var a = createElement("a", "popup-image");
    a.href = imageUrl;
    a.appendChild(span);
    a.appendChild(image);

    var imageLightbox = createElement("div", "image-lightbox");
    imageLightbox.appendChild(a);
    return imageLightbox;
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }


  function loadImage(){
    [].forEach.call(document.querySelectorAll('img[data-src]'),  function(img) {
        console.log(img);
        if (elementInViewport(img)){
            img.setAttribute('src', img.getAttribute('data-src'));
            img.removeAttribute('data-src');
        }
    });
  }
