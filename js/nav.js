
			var nav_white=false;
			$(document).ready(function(){
				$(window).scroll(function(){
					if($(document).scrollTop()<=1)
					{
						$("#nav").css("position","absolute");
						$("#nav").animate({backgroundColor:"rgba(255,255,255,0)"});
						$(".nav_bu").animate({color:"rgba(255,255,255,1)"});
						nav_white=false;
					}else
					{
						$("#nav").css("position","fixed");
						if (nav_white==false)
						{
							$("#nav").animate({backgroundColor:"rgba(255,255,255,1)"});
							$(".nav_bu").animate({color:"rgba(0,0,0,1)"});
							nav_white=true;
							console.log("sdsd")
						}
					}
				})
			})
