import Masonry from 'masonry-layout';

window.$ = window.jQuery = require('jquery')
const fancybox = require('@fancyapps/fancybox')
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

$(document).ready(function () {

  var elem = document.querySelector('.gallery');
  var msnry = new Masonry(elem, {
    itemSelector: '.gallery-item'
  });

  $('[data-fancybox="gallery"]').fancybox({
  });
})