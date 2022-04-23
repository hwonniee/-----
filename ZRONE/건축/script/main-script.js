/* 메인 배경화면 */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}





/* 여기서 부터 메인 메뉴 */
$('.tab_menu_btn').on('click',function(){
  $('.tab_menu_btn').removeClass('on');
  $(this).addClass('on')
  
  var idx = $('.tab_menu_btn').index(this);
  
  $('.tab_box').hide();
  $('.tab_box').eq(idx).show();
});

/*갤러리 가로*/
$(document).ready(function () {
  //사용할 배너
  var $banner = $(".banner").find("ul");
  var $bannerWidth = $banner.children().outerWidth(); //배너 이미지의 폭
  var $bannerHeight = $banner.children().outerHeight(); // 높이
  var $bannerLength = $banner.children().length; //배너 이미지의 갯수
  var rollingId;

  //정해진 초마다 함수 실행
  rollingId = setInterval(function () {
      rollingStart();
  }, 2000); //다음 이미지로 롤링 애니메이션 할 시간차

  function rollingStart() {
      $banner.css("width", $bannerWidth * $bannerLength + "px");
      //$banner.css("height", $bannerHeight + "px");//
      //alert(bannerHeight);
      //배너의 좌측 위치를 옮겨 준다.
      $banner.animate({
          left: -$bannerWidth + "px"
      }, 1500, function () { //숫자는 롤링 진행되는 시간이다.
          //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
          $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
          //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
          $(this).find("li:first").remove();
          //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
          $(this).css("left", 0);
          //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
      });
  }
}); 