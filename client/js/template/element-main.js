const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C#",
  "React",
  "Java",
  "git",
  "GitHub",
  "MySQL",
  "php",
];

var tagCloud = TagCloud(".content", myTags, {
  // radius in px
  radius: 250,

  /* animation speed*/
  /* slow, normal, fast*/
  maxSpeed: "fast",
  initSpeed: "fast",

  /* 0 = top90 = left 135 = right-bottom*/
  direction: 135,

  /* interact with cursor move on mouse out*/
  keep: true,
});

var color = ["fff"];
document.querySelector(".content").style.color = color;
