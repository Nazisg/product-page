var selectedkart;
var kart;

$(".select").click((e) => {
  selectedkart = e.target.innerHTML;
  $(".option").toggle();
});
$(".item").click((e) => {
  kart = e.target.innerHTML;
  $(".select").html(
    `<div class="df-kart">${kart}</div> <img src="./images/down.svg" />`
  );
  $(".option").css("display", "none");
});

var less;
$(".more").click(() => {
  $(".description-text-more").toggle();
  less = $(".more").html(`<span>azalt</span>`);
});
// less.click(() => {
//   less.html(` <span class="more">...ardını oxu</span>`);
// });

$("#send").click(() => {
  var userName = $(".name").val();
  var userComment = $("#comment").val();
  console.log(userName);
  console.log(userComment);

  $(".new-comment").html(`
    <div class="comment-box">
                <div class="title">
                  <div class="name-date-box">
                    <h4>${userName}</h4>
                    <div class="line"></div>
                    <p>12.06.2021</p>
                  </div>
                  <div class="stars">  

                  </div>
                </div>
                <p class="comment">
                ${userComment}
                </p>
              </div>
    `);
});
var star;
$(".star-btn .stars").click((e) => {
  console.log("star click");
  star = e.target.innerHTML;
  console.log(star);
});


$("#star-1").click(() => {
  val =1
  $("#star-1 path").css("fill", "#fdd835");
  $("#star-2 path").css("fill", "#EDEDED");
  $("#star-3 path").css("fill", "#EDEDED");
  $("#star-4 path").css("fill", "#EDEDED");
  $("#star-5 path").css("fill", "#EDEDED");
});
$("#star-2").click(() => {
  val  = 2
  $("#star-1 path").css("fill", "#fdd835");
  $("#star-2 path").css("fill", "#fdd835");
  $("#star-3 path").css("fill", "#EDEDED");
  $("#star-4 path").css("fill", "#EDEDED");
  $("#star-5 path").css("fill", "#EDEDED");
});
$("#star-3").click(() => {
  $("#star-1 path").css("fill", "#fdd835");
  $("#star-2 path").css("fill", "#fdd835");
  $("#star-3 path").css("fill", "#fdd835");
  $("#star-4 path").css("fill", "#EDEDED");
  $("#star-5 path").css("fill", "#EDEDED");
});
$("#star-4").click(() => {
  $("#star-1 path").css("fill", "#fdd835");
  $("#star-2 path").css("fill", "#fdd835");
  $("#star-3 path").css("fill", "#fdd835");
  $("#star-4 path").css("fill", "#fdd835");
  $("#star-5 path").css("fill", "#EDEDED");
});
$("#star-5").click(() => {
  $("#star-1 path").css("fill", "#fdd835");
  $("#star-2 path").css("fill", "#fdd835");
  $("#star-3 path").css("fill", "#fdd835");
  $("#star-4 path").css("fill", "#fdd835");
  $("#star-5 path").css("fill", "#fdd835");
});

$("#number").on("keyup",(e)=>{
    var val = e.target.value
    if(e.code!="Backspace"){
      if(val.length==2){        
          $("#number").val(`(${val}) `)
      }else if(val.length==8){
          $("#number").val(`${val}-`)
      }else if(val.length==11){
          $("#number").val(`${val}-`)
      }
    }
})

$(".more-comment").click(()=>{
    $(".hide-comment").css("display","flex")
    $(".more-comment").css("display","none")
})


//slider
$(document).ready(function() {
  const $slider = $('.slider');
  const itemWidth = $('.slider-item').outerWidth();
  
  $('.prev-button').on('click', function() {
    $slider.animate({ scrollLeft: '-=' + itemWidth }, 300);
  });
  
  $('.next-button').on('click', function() {
    $slider.animate({ scrollLeft: '+=' + itemWidth }, 300);
  });
});
