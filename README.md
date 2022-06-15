# LiremCo.-Ltd-HP
株式会社Liremのホームページ制作をしました．
###
株式会社Liremは令和3年10月15日に学生企業で創業した会社です.
Liremは人の繋がりが強い東三河を拠点として、
ITと繋がりを組み合わせて、
”オモシロイ”を想像し続けます。
###
デザインが完成した状態から依頼を受け，コーディングから公開までの工程を担当しました．
###
完成したWEBサイトから一部ピックアップして紹介します．

## 起動時のアニメーション実装について
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
指定したテキストの点滅．
###
	@keyframes fadeIn { /*animation-nameで設定した値を書く*/
   		 0% {color: transparent} /*アニメーション開始時は不透明度0%*/
    		100% {color: #fff;} /*アニメーション終了時は不透明度100%*/
	}
#

### 起動後のタイトル回転アニメーション
タイトルにテキストアニメーションを実装．二つのテキストを用意し，一方を上から真ん中，もう一方を真ん中から下へ移動させ回転しているような表現をした．

![lirem_loopm](https://user-images.githubusercontent.com/104476684/173905980-960f5d3e-8b8b-48cb-aedd-943aa393da42.gif)

### 

想定した構造↓
上真ん中下をループする．
###
//============上（非表示部分 座標y1）
###
//   真ん中       (表示部分 座標y2)
###
//============下（非表示部分 座業y3）
###
以下二つのクラスを用いた．
##
change_vertical
###
//スタート：opacity1 真ん中(y2)
###
//エンド：opacity0 下(y3)に移動した後，上(y1)に移動
##
change_vertical_2
###
//スタート：opacity0 上(y1)に位置
###
//エンド：opacity1 真ん中(2)まで移動
##

各クラスを一定のリズムで入れ替える jsコード
画面起動後のアニメーションが終わるまで待つ（count==10まで）．
count==8とcount==16でクラスの入れ替えを行う．
###

	
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
    		}
    		else if(count >= 11  && count % 16 == 0){
				$('.keyword').removeClass('change_vertical');
				$('#start_text').removeClass('change_vertical_2');

				//クラスの入れ替え
				$('.keyword').addClass('change_vertical_2');
				$('#start_text').addClass('change_vertical');
    		}
    		else if(count >= 11 && count % 8 == 0){
				$('.keyword').removeClass('change_vertical_2');
				$('#start_text').removeClass('change_vertical');

				//クラスの入れ替え
				$('.keyword').addClass('change_vertical');	
				$('#start_text').addClass('change_vertical_2');
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
	
###
各クラスのcssコード．opacityとpadding-topを調整．
###
middle_to_bottomでは次の処理のために，下（y3）に移動させた後にopacityを0にした状態で上側(y1)に移動させる
###

	.change_vertical{
	    position: absolute;
	    animation: middle_to_bottom 3s linear;
	    animation-iteration-count: 1;
	    animation-fill-mode: forwards;
	    padding-left: 5.5vw;
	}
	@keyframes middle_to_bottom{
	    0%{
		opacity: 1;
		padding-top: 4vw;
	    }
	    10%{
		opacity: 0;
	    }
	    30%{
		opacity: 0;
		padding-top: 8vw;
	    }
	    40%{
		opacity: 0;
		padding-top: 8vw;
	    }
	    100%{
		opacity: 0;
		padding-top: 0vw;
	    }
	}

	.change_vertical_2{
	    position: absolute;
	    animation: up_to_middle 1.5s linear;
	    animation-iteration-count: 1;
	    animation-fill-mode: forwards;
	    padding-left: 5.5vw;
	}
	@keyframes up_to_middle{
	    0%{
		opacity: 0;
		padding-top: 0vw;
	    }
	    20%{
		opacity: 0;
		padding-top: 1vw;
	    }
	    40%{
		opacity: 1;
	    }
	    80%{
		opacity: 1;
		padding-top: 4vw;
	    }
	    100%{
		opacity: 1;
		padding-top: 4vw;
	    }
	}


## topページ
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



