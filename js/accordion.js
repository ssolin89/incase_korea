	$(document).ready(function(){
			
			$("dd").css({"display":"none"});
			$("dt").click(function(){
				$("dd").slideUp(500,"linear");
				$(this).next().slideDown(500,"linear");
			});

});

/*
	1) 클릭전에 시간개념이 없는 기능으로 배치하기
	hide나 slideUp처럼 시간개념이 있는 기능을 사용하면 화면에 
	잠시 보였다가 사라짐

	2) dt다음의 dd를 보여주는 구조이기 때문에 "순서유지 매우중요!"
*/