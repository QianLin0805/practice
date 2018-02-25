// JavaScript Document
$(document).ready(function(){
	var p = $('.slide').position().left;
	$('.list').hover(function(){
		var i = $(this).index();
		var eachWidth = $(this).width();
		var leng = eachWidth*i;
		if($(this).children().length==2){
			//alert(1)
			$('.slide').stop(true).animate({left:leng},300,function(){
				$('.list').children('ol').show();
			});
		}else{
			$('.slide').stop(true).animate({left:leng},300);
		}
	},function(){
		var i = $(this).index();
		var eachWidth = $(this).width();
		var leng = eachWidth*i;
		$('.slide').animate({left:p},300);
		if($(this).children().length==2){
			$(this).children('ol').hide();
		}
	})
	$('.city').hover(function(){
		$(this).children('div').toggle();
	})
	$('.city_inform').children().click(function(e){
		var clickCity=$(this).text();
		e.preventDefault();
		$(this).addClass('current_city').siblings().removeClass('current_city');
		$('.city').children('p').children('b').text(clickCity);
	});
	$('.qhxg').hover(function(){
		$(this).children('div').children('.name').animate({right:'5px'},500);
		$(this).children('div').children('.area').fadeIn(300);
		$(this).children('div').children('span').fadeIn(300);
	},function(){
		$(this).children('div').children('.name').stop().animate({right:'-20px'},500);
		$(this).children('div').children('.area').fadeOut(300);
		$(this).children('div').children('span').fadeOut(300);
	})
	$('.xx_last').children().click(function(){
		$('.choose').children().last().slideToggle();
		$(this).children().toggleClass('hide');
	})
	$('.choose li').children('a').click(function(e){
		e.preventDefault();
		$(this).addClass('cur_choose').siblings().removeClass('cur_choose');
	})
	$('.more').click(function(){
		var clone=$('.detail').children('dl:lt(5)').clone();
		if($('.detail').children('dl').length<=15){
			$('.detail').append(clone);
		}
	})
	$('.foot_wrap').children('img').click(function(){
		$('body,html').animate({scrollTop:0});
	})
})