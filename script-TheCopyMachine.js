var linkBody = "";

var links = {
  Copy: {
    year: "2019",
    name: "The Copy Machine",
    collaborator: "—",
    type: "AI, Publication, Website"
  },
};


$(document).ready(function (event) {
  makeLinks();
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

//slider

// function scroller() {
//   $('.product:first-child').appendTo(".products-inner");
// 	$(".products-inner").css("left","0");
// 	$(".products-inner").animate({left:"-289px"},2000, "linear");
// 	setTimeout("scroller()",2012);
// };


// scroller();

// $(".prev").click(function() {
//   $('.feed-item:last-child').prependTo(".news-feed-inner");
// 	$(".news-feed-inner").css({"top":"-150px"});
// 	$(".news-feed-inner").animate({top:"0"},500);
// });

// $(".next").click(function() {
//   $('.feed-item:first-child').appendTo(".news-feed-inner");
// 	$(".news-feed-inner").css("top","0");
// 	$(".news-feed-inner").animate({top:"-150px"},500);
// });


var vox_news = 0;

$('.voxNews li').each(function() {
    vox_news += $(this).outerWidth( true );
});

$('.voxNews').parent().append($('.voxNews').clone());
  function setupNews(w) {
      function phase1() {
          var voxNews = $('.voxNews').first(),
              curMargin = voxNews.css('margin-left').replace("px", ""),
              animSpeed = (w*20) - (Math.abs(curMargin)*20);

          voxNews.animate({'margin-left' : '-' + w + 'px'}, animSpeed, 'linear', phase2);
      }
      function phase2() {
          $('.voxNews').first().css({'margin-left' : '0px'});
           phase1();
      }
      $('.voxNews img').hover(function() {
          $('.voxNews').stop();
      }, function() {
          phase1();
      });
      phase1();
  }

setupNews(vox_news);
