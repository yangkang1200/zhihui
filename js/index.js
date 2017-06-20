$(function(){
	$(".login_ym input").focusin(function(){
		$(this).parent().css('border','solid 1px #29b1ef')
		$(this).siblings().css('color',"#000")
	})
	$(".login_ym input").focusout(function(){
		$(this).parent().css('border','solid 1px #ccc')
		$(this).siblings().css('color',"#777")
	})
})
$(function(){
	$('.hqyz').click(function(){
		$(this).css('background','#ccc').text('验证码已发送')
	})
})
$(function(){
	$('.wfb_qiehuan li').click(function(){
		var j = $(this).index()
		$(this).addClass('blueColor').siblings().removeClass('blueColor')
		$(".cwdz ul").eq(j).addClass('cwxs').siblings().removeClass('cwxs')
	})
})
$(function(){
	$('.gx_cz li').click(function(){
		var j = $(this).index()
		$(this).addClass('blueColor').siblings().removeClass('blueColor')
		$(".cwdz ul").eq(j).addClass('cwxs').siblings().removeClass('cwxs')
	})
})
$(function(){
	$('.yycw_con li').click(function(){
			location.href="yycg.html"
	})
})
$(function(){
	$('.yycg_con small span').click(function(){
			location.href="find-parking.html"
	})
})
$(function(){
	$('.tcc_button').click(function(){
			location.href="yycg.html"
	})
})
$(function(){
	$('.byy li:nth-child(1)').click(function(){
			location.href="tcc_detail.html"
	})
	$('.byy li:nth-child(2)').click(function(){
			location.href="rent_person.html"
	})
})
$(function(){
	$('.dz_dh span:nth-child(1)').click(function(){
			location.href="share_person.html"
	})
	$('.dz_dh span:nth-child(2)').click(function(){
			location.href="find-parking.html"
	})
})
$(function(){
	$('.login_dl').click(function(){
			location.href="login.html"
	})
})
$(function(){
	$('.login_ym p').click(function(){
			location.href="register.html"
	})
})
$(function(){
	$('.zs').click(function(){
			location.href="login.html"
	})
})
$(function(){
	$('.tb_pic img').click(function(){
			location.href="user_detail.html"
	})
})
$(function(){
	$('.gr').click(function(){
			location.href="user_detail.html"
	})
})
$(function(){
	$('.us').click(function(){
			location.href="user.html"
	})
})