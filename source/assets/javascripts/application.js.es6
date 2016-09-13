import $ from 'jQuery';
import smoothScroll from 'smooth-scroll';
import './vendor/player.js.es6';
import './vendor/gallery.js.es6';

require('jquery-ui');
require('modernizr');
require('wow');

$(document).ready(() => {
  smoothScroll.init({
    offset: 100
  });
});

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});
