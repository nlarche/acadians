var baseurl = "http://res.cloudinary.com/acadians/image/upload/v1523641257/";

document.addEventListener('DOMContentLoaded', function (){

    initGalleryCaroussel();
    initGallery();

    $('.popup-image').magnificPopup({
        type:'image'
    });

});

function initGallery(){
    
    var div = document.querySelector("[data-gallery]");
    if (div){
        for (var i= 1; i <= 11; i++){

            var galleryItem = createElement("div", "eight wide column");
            galleryItem.appendChild(createImageForThemes(i));

            div.appendChild(galleryItem);
        }
    }
}

function initGalleryCaroussel(){
    
    var div = document.querySelector("[data-gallery-carousel]");
    if (div){
        for (var i= 1; i <= 11; i++){

            var galleryItem = createElement("div", "gallery_item");
            galleryItem.appendChild(createImageForThemes(i));

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
    image.src =imageUrl
    
    var span = createElement("span", "image-button");
    var a = createElement("a", "popup-image");
    a.href = imageUrl;
    a.appendChild(span);
    a.appendChild(image);

    var imageLightbox = createElement("div", "image-lightbox");
    imageLightbox.appendChild(a);
    return imageLightbox;
}