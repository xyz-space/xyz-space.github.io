var linkBody = "";

var links = {
  Lockdown: {
    year: "<a href='Lockdown.html'>2020</a>",
    name: "<a href='Lockdown.html'>Lockdown Commute</a>",
    collaborator: "<a href='Lockdown.html'>—</a>",
    bio: "<a href='https://lockdowncommute.space'>Website</a>",
    type: "<a href='Lockdown.html'>Performance</a>"
  },
  SeeingRed: {
    year: "<a href='SeeingRed.html'>2020</a>",
    name: "<a href='SeeingRed.html'>Seeing Red</a>",
    collaborator: "<a href='SeeingRed.html'>Paloma Moniz, Ricardo Gonçalves</a>",
    bio: "<a href='SeeingRed.html'>Work in Progress</a>",
    type: "<a href='SeeingRed.html'>Website</a>"
  },
  NiklasStoehr: {
    year: "<a href='NiklasStoehr.html'>2020</a>",
    name: "<a href='NiklasStoehr.html'>Niklas Stoehr</a>",
    collaborator: "<a href='NiklasStoehr.html'>—</a>",
    bio: "<a href='https://niklas-stoehr.com'>Website</a>",
    type: "<a href='NiklasStoehr.html'>Website</a>"
  },
  ALWFAV3: {
    year: "<a href='ALWFAV3.html'>2019</a>",
    name: "<a href='ALWFAV3.html'>ALWFAV3</a>",
    collaborator:
      "<a href='ALWFAV3.html'>Paloma Moniz, Ricardo Gonçalves, Jaime Del Corro, Margarida Morais, Francisca Roseiro</a>",
    type: "<a href='ALWFAV3.html'>Publication, Symposium</a>"
  },
  TheCopyMachine: {
    year: "<a href='TheCopyMachine.html'>2019</a>",
    name: "<a href='TheCopyMachine.html'>The Copy Machine</a>",
    collaborator: "<a href='TheCopyMachine.html'>—</a>",
    type: "<a href='TheCopyMachine.html'>AI, Publication, Website</a>"
  },
  Nature: {
    year: "<a href='Nature.html'>2019</a>",
    name: "<a href='Nature.html'>Mother Nature</a>",
    collaborator: "<a href='Nature.html'>—</a>",
    type: "<a href='Nature.html'>AI, Publication, AR</a>"
  },
  SyntheticNostalgia: {
    year: "<a href='SyntheticNostalgia.html'>2019</a>",
    name: "<a href='SyntheticNostalgia.html'>Synthetic Nostalgia</a>",
    collaborator: "<a href='SyntheticNostalgia.html'>CMP Office</a>",
    type: "<a href='SyntheticNostalgia.html'>AI, Publication, Installation</a>"
  },
  PremiumHustler: {
    year: "<a href='PremiumHustler.html'>2019</a>",
    name: "<a href='PremiumHustler.html'>Premium Hustler</a>",
    collaborator: "<a href='PremiumHustler.html'>Paloma Moniz, Ricardo Gonçalves</a>",
    type: "<a href='PremiumHustler.html'>Installation, Website, Objects</a>"
  },
  Gradwanderung: {
    year: "<a href='Gradwanderung.html'>2018</a>",
    name: "<a href='Gradwanderung.html'>Gradwanderung Shanghai</a>",
    collaborator: "<a href='Gradwanderung.html'>Lunia D'Ambrosio</a>",
    type: "<a href='Gradwanderung.html'>App, Publication</a>"
  },
  Weizenbaum: {
    year: "<a href='Weizenbaum.html'>2018</a>",
    name: "<a href='Weizenbaum.html'>Weizenbaum Institut</a>",
    collaborator: "<a href='Weizenbaum.html'>Lunia D'Ambrosio, Catharina Sonnenberg</a>",
    type: "<a href='Weizenbaum.html'>Corporate Identity</a>"
  },
  Rundgang: {
    year: "<a href='Rundgang.html'>2018</a>",
    name: "<a href='Rundgang.html'>Rundgang 2018</a>",
    collaborator: "<a href='Rundgang.html'>—</a>",
    type: "<a href='Rundgang.html'>Poster</a>"
  },
  Transparency: {
    year: "<a href='Transparency.html'>2016</a>",
    name: "<a href='Transparency.html'>Transparency</a>",
    collaborator: "<a href='Transparency.html'>Jule Wittorf</a>",
    type: "<a href='Transparency.html'>Photography</a>"
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

function makeLinks() {

  $("#container").on("mouseenter", ".line", function () {
    let i = $(this).index() - 2;
    //console.log(i);
    // select image images[i]
    $("body").css("background-image", `url("img/${images[i]}")`);
  });

  $("#container").on("mouseleave", ".line", function () {
    let i = -1;
    //console.log(i);
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

  for (var [key, value] of Object.entries(links)) {
    let title = value.name;
    let collaborator = value.collaborator;
    let year = value.year;
    let bio = value.bio;
    let type = value.type;

    let newline = $(
      `<a class='line' href='${linkBody + key}.html' target='_top'></a>`
    );
    newline.append($(`<span class="year">${year}</span>`));
    newline.append($(`<span class="title">${title}</span>`));
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
