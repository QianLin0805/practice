// JavaScript Document
$(document).ready(function(){
	var i=$('.circle').children().index();
	var i=0;
	function next(){
		var firstItem=$('.pic').children().first();
		var length=-($('.pic').children().width());
		//alert(typeof(length));
		$('.pic').animate({left:length},'slow',function(){
			$(this).append(firstItem).css('left',0);
		});
		if(i<2){
		$('.circle').children().eq(i+1).addClass('current').siblings().removeClass('current');
			i++;
		}else{
			$('.circle').children().eq(0).addClass('current').siblings().removeClass('current');
			i=0;
		}
	}
	setInterval(next,3000);
	
	
	var leng=4*($('.ul_wrap ul').children('li').outerWidth(true));
	$('.next').click(function(){
		var m=$('.ul_wrap').children().position().left;
		var leng1=-leng+m;
		if(m>-2040){
			$('.ul_wrap').children().animate({left:leng1},'slow');
		}
	})
	$('.prev').click(function(){
		var m=$('.ul_wrap').children().position().left;
		var leng2=leng+m;
		if(m<0){
			$('.ul_wrap').children().animate({left:leng2},'slow');
			m++;
		}
	})
})