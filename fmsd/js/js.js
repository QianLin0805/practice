// JavaScript Document
$(function(){
	(function(){
		var scroller=false;
		var d=886-$(window).height();
		if($("svg").get(0)=="[object HTMLUnknownElement]"){
			$("svg").remove();
			$('.circle').show();
			$('.icons').children().css({opacity:1});
		}else{
			if($(window).scrollTop()>=d){
				draw();	
			};
			$(window).scroll(function(){
				if($(window).scrollTop()>=d&&!scroller){
					draw();
					scroller=true;
				}
			});
		}
		function draw(){
			$('svg').css("visibility","visible");
			icon1=new Vivus('icon1', {type: 'async',pathTimingFunction:Vivus.EASE_IN, duration: 100, forceRender: false});
			icon2=new Vivus('icon2', {type: 'async',pathTimingFunction:Vivus.EASE_IN, duration: 100, forceRender: false});
			icon3=new Vivus('icon3', {type: 'async',pathTimingFunction:Vivus.EASE_IN, duration: 100, forceRender: false});
			icon4=new Vivus('icon4', {type: 'async',pathTimingFunction:Vivus.EASE_IN, duration: 100, forceRender: false});
			icon1.reset().play();
			icon2.reset().play();
			icon3.reset().play();
			icon4.reset().play();
			var path1=Snap("#path1");
			var path2=Snap("#path2");
			var path3=Snap("#path3");
			var path4=Snap("#path4");
			setTimeout(function(){
				path1.animate({fill:'#97c8e9'},1000);
				path2.animate({fill:'#97c8e9'},1000);
				path3.animate({fill:'#97c8e9'},1000);
				path4.animate({fill:'#97c8e9'},1000);
			},2000);
			if(BrowserDetect.browser=="Internet Explorer"){
				setTimeout(function(){
					$('.icons').children().animate({opacity:1},"fast");
				},2500);
			}else{
				setTimeout(function(){
					$('.icons').children().animate({opacity:1},"fast");
				},2200);
			}
		}
		setInterval(function(){
			$('#news').animate({top:"-30px"},function(){
				$(this).append($(this).children().first());
				$(this).css('top',0);
			});
		},6000);
	})();
	$('.list').children().on('mouseover',function(){
		var curNav=$('.current').index();
		var focusNav=$(this).index();
		var sliderWidth=$('#slider').width();
		var leftWidth=focusNav*sliderWidth;
		//alert(curNav)
		if(focusNav>curNav){
			$('#slider').stop().animate({left:leftWidth+40+"px"},300,function(){
				$(this).animate({left:leftWidth},80);
				$('.list').children().eq(focusNav).addClass('current').siblings().removeClass('current');
			});
		}else{
			$('#slider').stop().animate({left:leftWidth-40+"px"},300,function(){
				$(this).animate({left:leftWidth},80);
				$('.list').children().eq(focusNav).addClass('current').siblings().removeClass('current');
			});
		}
		$('.list').on('mouseout',function(){
			$(this).children().first().addClass('current').siblings().removeClass('current');
			$('#slider').stop().animate({left:"-40px"},300,function(){
				$(this).animate({left:0},80);
			});
		});
	});
	$('.item').on('mouseover',function(){
		$(this).children('.slideColor').show();
	});
	$('.item').on('mouseout',function(){
		$(this).children('.slideColor').hide();
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=400){
			$('.fixed').fadeIn();
		}else{
			$('.fixed').hide();
		}
	});
	$('.fixed li').on('mouseover',function(){
		$(this).children().show();
		$(this).mouseout(function(){
			$(this).children().hide();
		});
	});
	$('.toTop').on('click',function(){
		$('html,body').animate({scrollTop:0},"fast");
	});
})