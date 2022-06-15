$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},100); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
		$('.start').fadeOut(1600);
    },2500);
});



let cnt = 0;
let count = 0;
let timerId = setInterval(function(){
    $('h2').fadeOut(60,function(){$(this).fadeIn(60)});
    cnt++;
    if(cnt==5){   
        $('.start_f1').addClass('change');
        $('.start_f4').addClass('change');
        $('#start_flex').addClass('zoom');   
        $('.flex2').addClass('f2');    
        $('.f_back').addClass('f3');   
        clearInterval(timerId);  
    }
},120);

let timerId2 = setInterval(function(){
    if(count == 10){
        //============上（非表示部分 座標y1）
        //   真ん中       (表示部分 座標y2)
        //============下（非表示部分 座業y3）

        //スタート：opacity1 真ん中(y2)
        //エンド：opacity0 下(y3)に移動した後，上(y1)に移動
        $('.keyword').addClass('change_vertical'); 

        //スタート：opacity0 上(y1)に位置
        //エンド：opacity1 真ん中(2)まで移動
        $('#start_text').addClass('change_vertical_2'); 
        $('#start_text').removeClass('p_none');
        console.log(2);
    }
    else if(count >= 11  && count % 16 == 0){
        $('.keyword').removeClass('change_vertical');
        $('#start_text').removeClass('change_vertical_2');

        //クラスの入れ替え
        $('.keyword').addClass('change_vertical_2');
        $('#start_text').addClass('change_vertical');
        console.log(3);
    }
    else if(count >= 11 && count % 8 == 0){
        $('.keyword').removeClass('change_vertical_2');
        $('#start_text').removeClass('change_vertical');

        //クラスの入れ替え
        $('.keyword').addClass('change_vertical');
        $('#start_text').addClass('change_vertical_2');
        console.log(4);
    }
    else if(count == 1001){
        $('.keyword').removeClass('change_vertical_2');
        $('#start_text').addClass('p_none');
        clearInterval(timerId2);
    }
    else{
        ;
    }
    count++;
},400);





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


