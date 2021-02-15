var linkBody = "";

var links = {
  Lockdown: {
    year: "2020",
    name: "Lockdown Commute",
    collaborator: "—",
    bio: "<a href='https://lockdowncommute.space'>Website</a>",
    type: "Performance"
  },
  Red: {
    year: "2020",
    name: "Seeing Red",
    collaborator: "Paloma Moniz, Ricardo Gonçalves",
    bio: "Work in Progress",
    type: "Website"
  },
  Nik: {
    year: "2020",
    name: "Niklas Stoehr",
    collaborator: "—",
    bio: "<a href='https://niklas-stoehr.com'>Website</a>",
    type: "Website"
  },
  ALine: {
    year: "<a href='ALWFAV3.html'>2019</a>",
    name: "<a href='ALWFAV3.html'>ALWFAV3</a>",
    collaborator:
      "<a href='ALWFAV3.html'>Paloma Moniz, Ricardo Gonçalves, Jaime Del Corro, Margarida Morais, Francisca Roseiro</a>",
    type: "<a href='ALWFAV3.html'>Publication, Symposium</a>"
  },
  Copy: {
    year: "<a href='TheCopyMachine.html'>2019</a>",
    name: "<a href='TheCopyMachine.html'>The Copy Machine</a>",
    collaborator: "<a href='TheCopyMachine.html'>—</a>",
    type: "<a href='TheCopyMachine.html'>AI, Publication, Website</a>"
  },
  Nature: {
    year: "2019",
    name: "Mother Nature",
    collaborator: "—",
    type: "AI, Publication, AR"
  },
  Nostalgia: {
    year: "<a href='Synthetic.html'>2019</a>",
    name: "<a href='Synthetic.html'>Synthetic Nostalgia</a>",
    collaborator: "<a href='Synthetic.html'>CMP Office</a>",
    type: "<a href='Synthetic.html'>AI, Publication, Installation</a>"
  },
  Hustler: {
    year: "2019",
    name: "Premium Hustler",
    collaborator: "Paloma Moniz, Ricardo Gonçalves",
    type: "Installation, Website, Objects"
  },
  Gradwanderung: {
    year: "2018",
    name: "Gradwanderung Shanghai",
    collaborator: "Lunia D'Ambrosio",
    type: "App, Publication"
  },
  Weizenbaum: {
    year: "2018",
    name: "Weizenbaum Institut",
    collaborator: "Lunia D'Ambrosio, Catharina Sonnenberg",
    type: "Corporate Identity"
  },
  Rundgang: {
    year: "2018",
    name: "Rundgang 2018",
    collaborator: "—",
    type: "Poster"
  },

  Transparency: {
    year: "2016",
    name: "Transparency",
    collaborator: "Jule Wittorf",
    type: "Photography"
  },
};

//if ( window.location !== window.parent.location ) {
//  $("#clockContainer").hide();
//  $("#more-info").hide();
//  $(".bio").hide();
// The page is in an iframe
//}

var images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "010.jpg",
  "011.jpg",
  "012.jpg",
];
//var tv;
//var th;

$(document).ready(function (event) {
  makeLinks();
  //tv = setInterval(rotateVertical, 1000);
  //th = setInterval(rotateHorizontal, 1200);
});

//var w = $(window).width();
//var h = $(window).height();

//$(window).resize(function(){
//  w = $(window).width();
//  h = $(window).height();
//});

$("#container").on("mouseenter", ".line", function () {
  let i = $(this).index() - 2;
  console.log(i);
  // select image images[i]
  $("body").css("background-image", `url(${images[i]})`);
});

$("#container").on("mouseleave", ".line", function () {
  let i = -1;
  console.log(i);
  $("body").css("background-image", "");
});

$("#clockContainer").click(function () {
  $(".about").toggleClass("about-alt");
  $("#th").toggleClass("th-alt");
  $("#linklist").toggleClass("linklist-alt");
  $(".line").toggleClass("line-alt");
  $(".year").toggleClass("year-alt");
  $(".title").toggleClass("title-alt");
  $(".with").toggleClass("with-alt");
  $(".collaborator").toggleClass("collaborator-alt");
  $(".type").toggleClass("type-alt");
  $(".bio").toggleClass("bio-alt");
});

$("#container").on("mouseenter", ".collaborator", function () {
  if (window.location == window.parent.location) {
    $(".bio").removeClass("bio-show");
    $(this).find(".bio").addClass("bio-show");
  }
});

$("#container").on("mouseleave", ".line", function () {
  $(".bio").removeClass("bio-show");
});

function makeLinks() {
  for (var [key, value] of Object.entries(links)) {
    let title = value.name;
    let collaborator = value.collaborator;
    let year = value.year;
    let bio = value.bio;
    let type = value.type;

    let newline = $(
      `<a class='line' href='${linkBody + key}' target='_top'></a>`
    );
    newline.append($(`<span class="year">${year}</span>`));
    newline.append($(`<span class="title"><a ">${title}</a></span>`));
    newline.append($(`<span class="with">with</span>`));
    let collaboratorSpan = $(`<span class="collaborator">${collaborator}</span>`);
    if (bio) {
      let bioDiv = $(`<div class="bio">${bio}</div>`);
      collaboratorSpan.append(bioDiv);
    }
    newline.append(collaboratorSpan);
    newline.append($(`<span class="type">${type}</span>`));

    $("#container").append(newline);
  }
}
