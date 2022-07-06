"use strict";

var displayContainer = document.querySelector('.display-container');
var block2header = document.getElementById('block2header');
var container = document.querySelector('.container');
var mapMarker = document.getElementById('mapMarker');
var mapMain = document.getElementById('mapMain');
var gameBoard = document.getElementById('gameBoard');
var createCounter = 0;
var Flagcounter = 0;
var gifFlag = 0;
container.addEventListener('scroll', function () {
  var scrollTop = $(window).scrollTop(),
      elementOffsetBlock2 = $('#block2').offset().top,
      distanceBlock2 = elementOffsetBlock2 - scrollTop,
      elementOffsetBlock3 = $('#block3').offset().top,
      distanceBlock3 = elementOffsetBlock3 - scrollTop,
      elementOffsetBlock4 = $('#block4').offset().top,
      distanceBlock4 = elementOffsetBlock4 - scrollTop,
      elementOffsetBlock5 = $('#block5').offset().top,
      distanceBlock5 = elementOffsetBlock5 - scrollTop,
      elementOffsetBlock6 = $('#block6').offset().top,
      distanceBlock6 = elementOffsetBlock6 - scrollTop;
  var block2HeaderOffset = 449.5 - distanceBlock2;
  var block3HeaderOffset = 449.5 - distanceBlock3;
  var block4HeaderOffset = 449.5 - distanceBlock4;
  var block5HeaderOffset = 1440 - 450 - distanceBlock5 * -1;
  block2header.style.transform = "translateX(".concat(block2HeaderOffset, "px)");

  if (block2HeaderOffset >= 790) {
    block2header.classList.add("js--hidden");
  } else if (block2HeaderOffset < 790) {
    block2header.classList.remove("js--hidden");
  }

  if (distanceBlock3 <= 449.5 && distanceBlock3 >= 250) {
    mapMarker.style.transform = "scale(".concat(block3HeaderOffset, ")");
    mapMarker.classList.remove('js--normal');
  } else if (distanceBlock3 < 250) {
    mapMarker.classList.add('js--normal');
    mapMain.style.backgroundImage = 'url(./assets/images/content/map_detailed.jpg)';
    mapMarker.classList.add('js--hidden--slow');
  } else {
    mapMarker.style.transform = "scale(1)";
    mapMain.style.backgroundImage = 'url(./assets/images/content/map.png)';
    mapMarker.classList.remove('js--hidden--slow');
  }

  if (distanceBlock5 < 550) {
    if (createCounter == 0) {
      var _overlay = document.createElement('div');

      _overlay.classList.add('white-overlay');

      displayContainer.append(_overlay);
      createCounter++;
    }

    var overlay = document.querySelector('.white-overlay');
    overlay.style.transform = "translateX(".concat(block5HeaderOffset, "px)");

    if (block5HeaderOffset > -5 && block5HeaderOffset < 5) {
      Flagcounter = 1;
    }

    if (Flagcounter == 1) {
      overlay.style.transform = "translateX(0px)";
    }
  }

  if (distanceBlock6 < 550 && distanceBlock6 > -204) {
    gameBoard.classList.add('js--show--slow');

    if (gifFlag == 0) {
      var image = gameBoard.querySelector('img');
      image.src = "./assets/images/content/board.gif";
      gifFlag++;
    }
  } else if (distanceBlock6 <= -210) {
    var _overlay2 = document.querySelector('.white-overlay');

    _overlay2.style.transform = "translateX(0px)";
  } else if (distanceBlock6 >= 550 && document.querySelector('.white-overlay')) {
    var _overlay3 = document.querySelector('.white-overlay');

    _overlay3.style.transform = "translateX(".concat(block5HeaderOffset, "px)");
    gameBoard.classList.remove('js--show--slow');
    gifFlag = 0;
  }
}); // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });