// JavaScript Document
$(document).ready(function(){
	$('.all').hover(function(){
		$(this).children('div').toggle();
	});
	function scroll(){
		var leng=$('.ban_wrap ul li').width();
		var firstClone=$('.ban_wrap ul li').first().clone();
		$('.ban_wrap ul').animate({left:-leng},'slow',function(){
			$(this).append(firstClone);
			$(this).children().first().remove();
			$(this).css('left',0);
		});
	};
	setInterval(scroll,3000);
	/*$('ol li').hover(function(e){
		e.stopPropagation();
		$(this).children('div').stop().animate({top:86+'px'},'linear');
	},function(e){
		e.stopPropagation();
		$(this).children('div').stop().animate({top:186+'px'},'linear');
	});*/
	var leng1=-($('.box ol').children().outerWidth(true));
	var leng2=$('.box ol').children().outerWidth(true);
	function nextscroll(){
		var firstItem=$('.box ol').children().first();
		$('.box ol').animate({left:leng1},function(){
			$(this).append(firstItem);
			$(this).css('left',0);
		});
	}
	$('.next').click(function(){
		nextscroll();
	});
	$('.prev').click(function(){
		var lastItem=$('.box ol').children().last();
		$('.box ol').prepend(lastItem);
		$('.box ol').css('left',leng1);
		$('.box ol').animate({left:0},function(){
		});
	});
	setInterval(nextscroll,4000);
})