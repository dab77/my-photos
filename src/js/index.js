import Masonry from 'masonry-layout';

window.$ = window.jQuery = require('jquery')
const fancybox = require('@fancyapps/fancybox')
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

$(document).ready(function () {
  const elem = $('#gallery');

  if (elem.length !== 0) {
    const dataName = elem.data('gallery');
    $.ajax({
      url: 'http://localhost:3002/gallery',
      data: {
        name: dataName
      },
      dataType: 'JSONP'
    }).done(function (response) {
      if (response.length > 0) {
        let content = '';
        response.forEach(item => {
          content = content + `<a href="./img/${item.image}" class="gallery-item" data-fancybox="gallery" ><img src="./img/${item.thumb}" /></a>`;
        });
        elem.append(content);
        setTimeout(function () {
          var msnry = new Masonry(elem[0], {
            itemSelector: '.gallery-item'
          });
        }, 100);

        $('[data-fancybox="gallery"]').fancybox({
        });
      }
    }).fail(function (jqXHR, textStatus) {
      console.log('error load AJAX data', jqXHR, textStatus);
    });
  }
})