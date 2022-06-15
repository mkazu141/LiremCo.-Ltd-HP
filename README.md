# LiremCo.-Ltd-HP
株式会社Liremのホームページ制作をしました．
###
株式会社Liremは令和3年10月15日に学生企業で創業した会社です.
Liremは人の繋がりが強い東三河を拠点として、
ITと繋がりを組み合わせて、
”オモシロイ”を想像し続けます。
###
一部ピックアップして紹介します
## topページ
###
起動時にテキストアニメーション付きのロゴを表示させる機能を実装．

###
![lirem_main](https://user-images.githubusercontent.com/104476684/173825215-8821807a-edbd-41a2-b1ce-05c2ce5bca2b.gif)

画面全体に背景とロゴを数秒表示させる．
###
    $(function() {
	    setTimeout(function(){
		    $('.start p').fadeIn(1600);
	    },100); //0.5秒後にロゴをフェードイン!
        setTimeout(function(){
		    $('.start').fadeOut(1600);
        },3200)
    });
###
テキストアニメーション開始のためのクラスの取得．
###
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
###


## <img width="702" alt="lirem_top" src="https://user-images.githubusercontent.com/104476684/173806464-8adc21dc-c6b5-4e30-ac19-7f4f8d90866b.png">

## 会社情報ページ
## <img width="851" alt="lirem_com" src="https://user-images.githubusercontent.com/104476684/173807427-df82e95c-19c7-4cb2-b099-40e94735f1c5.png">

## 会社情報
## <img width="720" alt="lirem_info" src="https://user-images.githubusercontent.com/104476684/173807657-af582f28-bd17-45ac-95e2-c7f8b0f0d36b.png">

## 事業内容
### 
linear-gradientで背景のグラデーションと面取りを実装．
###
    linear-gradient(to right top, transparent 1vw, #29a4bf 1vw, #2ba4c0 50%, #5f8ae0 70%, #936ffe 96%, transparent 96%);

## <img width="652" alt="lirem_n" src="https://user-images.githubusercontent.com/104476684/173808116-09112bd4-cc59-40b7-9f7f-f34a733c45a7.png">

## 事業内容2
###
contentとpositionを用いて，画像の前面に枠線を表示．
###
    position: absolute;
    content: '';

## <img width="829" alt="lirem_n2" src="https://user-images.githubusercontent.com/104476684/173808364-9a640317-b8e0-46cc-937b-f04bcb403edd.png">



