// JavaScript Document

jQuery(document).ready(function(){

  $('.navi>li').mouseover(function(){        
	  $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){
	  $(this).find('.submenu').stop().slideUp(500);
  });
  
  $('.imageSlide a:gt(0)').hide();
  setInterval(function(){
	$('.imageSlide a:first-child').fadeOut()
	   .next('a').fadeIn()
	   .end().appendTo('.imageSlide');},3000);

  $(function(){
   $('.tabmenu>li>a').click(function(){
	$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
	  });
  });

  $(".notice li:first").click(function(){
	$("#modal").addClass("active");
  });
  $(".btn").click(function(){
	$("#modal").removeClass("active");
  });    
	     
});




