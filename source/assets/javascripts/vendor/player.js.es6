import plyr from "plyr";
plyr.setup('.video__video--player', {});

const audioControls = ["<div class='plyr__controls is-small'>",
    "<button type='button' data-plyr='play'>",
        "<svg><use xlink:href='#plyr-play'></use></svg>",
        "<span class='plyr__sr-only'>Play</span>",
    "</button>",
    "<button type='button' data-plyr='pause'>",
        "<svg><use xlink:href='#plyr-pause'></use></svg>",
        "<span class='plyr__sr-only'>Pause</span>",
    "</button>",
"</div>"].join("");

plyr.setup('.gallery__item__player', {
  html: audioControls
});
