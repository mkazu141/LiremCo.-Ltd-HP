$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},100); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
		$('.start').fadeOut(1600);
    },3200)
});

let cnt = 0
let timerId = setInterval(function(){
    $('#start_flex').fadeOut(60,function(){$(this).fadeIn(60)});
    cnt++
    if(cnt==9){   
        $('.start_f1').addClass('change')
        $('.start_f4').addClass('change')
        clearInterval(timerId);   
    }
},120);



$(function() {
    $('.hamburger-menu a').on('click', function(event) {
        $('#menu-btn-check').prop('checked', false);
        $('#flame4').css('display','block');
    });
});
function checkfunction(){
    var check = document.getElementById("menu-btn-check");
    var message = document.getElementById("flame4");
    if(check.checked == true){
        message.style.display = "none";
    }
    else{
        message.style.display ="block";
    }
}


