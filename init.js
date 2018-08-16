var baseurl = "https://res.cloudinary.com/acadians/image/upload/v1527360791/";
var dateTourUrl = "https://docs.google.com/spreadsheets/d/1vNvVsd_llw7D962SpSYVnaLo94xnuvBlw_sknxoBN4Q/edit?usp=sharing"

document.addEventListener('DOMContentLoaded', function (){

    initGalleryCaroussel();
    initGallery();
    initDateTour();

    $('.popup-image').magnificPopup({
        type:'image'
    });

    loadImage();

});

document.addEventListener('scroll', function (){
    loadImage();
})

function getJsDateFromExcel(excelDate) {

    // JavaScript dates can be constructed by passing milliseconds
    // since the Unix epoch (January 1, 1970) example: new Date(12312512312);
  
    // 1. Subtract number of days between Jan 1, 1900 and Jan 1, 1970, plus 1 (Google "excel leap year bug")             
    // 2. Convert to milliseconds.
  
      return new Date((excelDate - (25567 + 1))*86400*1000);
  
  }

function initGallery(){
    
    var div = document.querySelector("[data-gallery]");
    if (div){
        for (var i= 1; i <= 36; i++){

            var galleryItem = createElement("div", "eight wide column");
            galleryItem.appendChild(createImageForThemes(i, true));

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
            galleryItem.appendChild(createImageForThemes(dataCarrousel[i], false));
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

function initDateTour(){
    gsheets.getWorksheet('1vNvVsd_llw7D962SpSYVnaLo94xnuvBlw_sknxoBN4Q', 'date')
    .then(resolveDateTour, err => console.error(err));
}

function resolveDateTour(res){
    if (res.data.length === 0){
        return;
    }
    var parent = document.querySelector("[data-tour-date]");
    res.data
        .map(function (d) {
            d.date = getJsDateFromExcel(d.date);
            return d;
        })
        .forEach(function (d){
            var article = createElement("article", "post");
            parent.appendChild(article);
            article.appendChild(createEventLeft(d));
            article.appendChild(createEventDetails(d));
    });
}

function createEventLeft(data){
    var divDate = createElement("div", "event_left");
    var date = createElement("div", "event_date");
    date.innerText = dateFns.format(data.date, "D");
    var month = createElement("div", "event_month");
    month.innerText = dateFns.format(data.date, "MMM");;
    divDate.appendChild(date);
    divDate.appendChild(month);
    return divDate;
}

function createEventDetails(data){
    var detail = createElement("div", "event_detail");
    var title = createElement("h2", "event_title");
    var titleHref = createElement("a");
    titleHref.innerText = data.lieu;
    title.appendChild(titleHref);
    var time = createElement("div", "event_time");
    var timeI = createElement("i", "time icon");
    time.appendChild(timeI);
    time.appendChild(document.createTextNode(" " + dateFns.format(data.date, "D MMMM YY")));
    var location = createElement("div", "event_location");
    var locationI = createElement("i", "map marker icon");
    location.appendChild(locationI);
    location.appendChild(document.createTextNode(" " + data.ville));
    var buy = createElement("a", "event_button ui button colored");
    buy.href = data.lien;
    buy.innerText = "+ infos"
    detail.appendChild(title);
    detail.appendChild(time);
    detail.appendChild(location);
    detail.appendChild(buy);
    return detail;
}

function createElement(name, className){
    var elm = document.createElement(name);
    elm.className = className;
    return elm;
}

function createImageForThemes(i, lazy){
    var imageUrl = baseurl + "gallery/" + i + ".jpg";
    var image = document.createElement("img");
    if (lazy){
        image.dataset.src = imageUrl;
    } else {
        image.src = imageUrl;
    }

    
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
