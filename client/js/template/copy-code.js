// ----------1st begin---------
const htmltext1 = '<h1 class="main-test1">MAYUR</h1>';
const csstext1 =
  '.main-test1 {margin: 0px;font-size: 12vw;color: transparent;-webkit-text-stroke: 1px #fff;background: url(img/1.png);-webkit-background-clip: text;background-position: 0 0;animation: back 20s linear infinite;font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;display: inline-block;}@keyframes back {100% {background-position: 2000px 0;}}@media only screen and (max-width: 800px) {.main-test1 {font-size: 90px;}}';
// ----------1st end---------

// ----------2nd begin---------
const htmltext2 =
  '<span class="content"></span><script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"> </script>';
const csstext2 =
  '@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");.tagcloud {font-family: "Poppins", sans-serif;font-size: 20px;margin: auto;width: 50%;color: #fff;margin-left: 0px;}.tagcloud--item:hover {color: #91ff00;}';

const jstext2 =
  'const myTags = ["JavaScript","CSS","HTML","C","C#","React","Java","git","GitHub","MySQL","php",];var tagCloud = TagCloud("content", myTags, {// radius in pxradius: 250,/* animation speed*//* slow, normal, fast*/maxSpeed: "fast",initSpeed: "fast",/* 0 = top90 = left 135 = right-bottom*/direction: 135,/* interact with cursor move on mouse out*/keep: true,});var color = ["fff"];document.querySelector(".content").style.color = color;';
// ----------2nd end---------

// ----------3rd begin---------
const htmltext3 = '<h2 class="selection">Selection color</h2>';
const csstext3 =
  ".selection{  ::-moz-selection {  color: rgb(0, 0, 0);background: #91ff00;}::selection {color: rgb(0, 0, 0);background: #91ff00;}}";
// ----------3rd end---------
