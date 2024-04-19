$(document).ready(function(){

	$("#btn1").click(function(){
		$("div").slideUp(500, "linear", function(){ alert("슬라이드 업! 성공"); });
	});

	$("#btn2").click(function(){
		$("div").slideDown(700,"swing",function(){ alert("슬라이드 다운 성공!"); });
	});

	$("#btn3").click(function(){
		$(".textArea").css({"color":"red"}).fadeTo(500, "0.5");
		$("img").delay(1000).fadeTo(500,"0.5");
	});

	$("#btn4").click(function(){
		$("img").fadeTo(500,1);
		$(".textArea").fadeTo(500,1).css({"textAlign":"center","padding":"20px 0","fontSize":"20px"});
	});
});

/*
	[기능설명]
	
	1) 
	주의) id로 대상을 만들었기 때문에 id명 주의하기
	효과 (effect) : slideUp
	작동시간 (duration) : 500		or		"fast"
	기능(function) : alert("문구 수정가능")
	
	2)
	주의) id로 대상을 만들었기 때문에 id명 주의하기
	효과 (effect) : slideDown
	작동시간 (duration) : 700		or		"fast"	or  "slow"
	기능(function) : alert("문구 수정가능")

	3) 
	주의) id로 대상을 만들었기 때문에 id명 주의하기
	효과(effect )	:	 
		글자영역(textArea) :  css,		fadeTo( duration, opacity )
		이미지( img ) : delay (duration)	,	fadeTo(duration, opacity)
	
	기능 (function) : 제외
	
	4) 
	주의) id로 대상을 만들었기 때문에 id명 주의하기
	효과(effect) :
		이미지(img)	: fadeTo(duration, opacity)
		글자영역 (textArea)	: fadeTo(duration, opacity)	, css
	
	기능 (function) : 제외
*/