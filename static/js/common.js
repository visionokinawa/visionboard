// // // ここにコードを書いていく
// // console.log("Javascriptが読み込まれていれば表示されます");
// //
// // var sunabako = "スナバコ";
// // // console.log(sunabako);
// //
// // sunabako = "沖縄県沖縄市中央1-14-3";
// // console.log(sunabako);
// //
// //
// // console.log(1+2);
// // console.log(3-1);
// // console.log(2*3);
// // console.log(3/2);
// // console.log(5%3);
// //
// // console.log("ここから下がaの計算結果になります");
// // console.log("----------------------------");
// // var a = 0;
// //
// // console.log(a);
// //
// // a = 1;
// //
// // console.log(a);
// //
// // // 2 = 1 + 1;
// // // もしくは
// // a += 1;
// //
// // console.log(a);
// //
// // a -= 1;
// //
// // // 1 = 2 - 1 ;
// //
// // console.log(a);
// //
// //
// // console.log("ここから下がbの計算結果になります");
// // console.log("----------------------------");
// //
// //
// //
// // var b = 1;
// //
// // console.log(b);
// //
// // console.log(++b);
// // // b = b + 1;
// //
// // console.log(b++);
// // console.log(b);
// //
// //
// // console.log(--b);
// // // b = b - 1;
// //
// // console.log(b--);
// // console.log(b);
// //
// // console.log("suna" + "bako");
// //
// // var c = "suna" ;
// // var d = "bako" ;
// //
// // console.log(c + d);
// //
// // console.log("ここから下が文字列の分割の結果になります");
// // console.log("----------------------------");
// //
// //
// // console.log("su:na:ba:ko".split(":"));
// //
// //
// //
// // console.log("ここから下が真偽値のコンソール結果になります");
// // console.log("----------------------------");
// //
// //
// // var e = 2 ;
// // var f = 2 ;
// //
// // console.log(e == f);
// // console.log(e != f);
// // console.log(e > f);
// // console.log(e >= f);
// // console.log(e < f);
// // console.log(e <= f);
// //
// //
// //
// // console.log("ここからの++gの結果になります");
// // console.log("----------------------------");
// //
// // var g = 1 ;
// //
// // console.log(g);
// //
// // console.log(g++);   //g = 2
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// // console.log(g++);
// //
// //
// //
// // console.log("ここからの配列のお話になります");
// // console.log("----------------------------");
// //
// //
// // var h = [5 , 10 , 15];
// // console.log(h[1]);
// //
// // console.log(h[2]);
// //
// // h[2] = 50 ;
// // console.log(h[2]);
// //
// //
// //
// // console.log("ここからのオブジェクト、連想配列のお話になります");
// // console.log("----------------------------");
// //
// // var book = { タイトル: "sunabakoの始まり" , total_page : 200, author : "スナバコ" };
// //
// // console.log(book["タイトル"]);
// // book["total_page"] = 100 ;
// // console.log(book["total_page"]);
//
//
// var a = 3;
// var b = 2;
//
// if( a < b ){
//
// console.log(" aはbより小さい ");
//
// } else if ( a == b ) {
//
//   console.log("a,bは等しい");
//
// } else {
//
//   console.log("aはbより大きい");
//
// }
//
//
//
// console.log("ここからの繰り返し文、for文のお話になります");
// console.log("----------------------------");
//
//
//
// var sum = 0 ;
//
// for ( var i = 0 ; i < 10 ; i++ ){
//
//   // sum += i ;
//   // 上の記述は sum = sum + i  と一緒;
//
//   sum += i++ // sum = sum + i
//              // i = i + 1
//   sum += ++i // sum = sum + i(=i+1)
//   if (i<10) {
//
//   }
//
//     console.log(sum);
// }



//
// console.log(text_node.textContent);



// var btn_node = document.getElementById("jsbtn");
// btn_node.addEventListener("mouseup" , changeTxt);
//
// function changeTxt(){
//
//   var text_node = document.getElementById("txt");
//   text_node.textContent = "ノードを更新";
//
// }

// var text_node =document.getElementById("txt");
// text_node.textContent = "ノードを更新";




$(function () {  // ここはお約束

  // $("#txt").text("ノードを更新");
  // $("#jsbtn").on('click', function() {
  //   $("#sec1 h1").text("ノードを更新");
  // });

  //   $(".hum_menu").on('click', function() {
  //   $("header").toggleClass("open");
  // });
  //
  // $("#jsbtn").on('click' , function(){
  // $("#sec1 h1").css("color" , "red");
  // });





  /////////////////////////////
  // ここから課題のサンプルコード//
  ////////////////////////////

  // スマホレイアウトのときに、ハンバーガーボタンを押すとメニューを表示させる
  $('.hum_menu').on('click', function () {
    $('header').toggleClass('open');
  });

  // 課題1解答 
  // グローバルメニュー国際化
  $("#lng-ja").on('click', function () {
    $("#menu-sec1").text('見出しのエリア');
    $("#menu-sec2").text('flexのエリア');
    $("#menu-sec3").text('センタリングエリア');
    $("#menu-sec4").text('制作実績');
  });

  $("#lng-en").on('click', function () {
    $('#menu-sec1').text('Heading');
    $('#menu-sec2').text('Flex');
    $('#menu-sec3').text('Centering');
    $('#menu-sec4').text('Portfolio');
  });


  // 課題2解答 
  // 三角形の面積を求める関数
  function triangle(x, y) {
    return x * y / 2;
  }
  console.log("三角形の面積は");
  console.log(triangle(2, 3));


  // 課題3解答 
  // 制作実績画像サイズ拡大
  $("#size-up").on('click', function () {
    $("#sec4 img").css("width", "600px");
  });


  // 課題4解答 
  // ブロックエリアをボタンで追加
  function appendFlex() {
    var appendedDiv = '<div class="flex_area_padding"><h2>flexを使って左から詰めていく</h2><p>ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります ここにflexに関してのテキストが入りますここにflexに関してのテキストが入ります</p></div>'
    $(".flex_area").append(appendedDiv);
  }

  $("#append").on('click', function () {
    appendFlex();
  });


  // 課題5解答 
  // 制作実績の画像を変更する
  //(全ての画像を更新する)
  $("#img-change").on('click', function () {
    $("#sec4 img").attr("src", "/static/img/thumb_01.png"); // 好きな画像を用意してください
  });


  // 課題6解答 
  // 入力した数字（1~10）でブロックエリアを追加
  $("#appendDivNum").on("click", function (e) {
    // イベントをキャンセルしてページ最上部への移動を防ぐ
    e.preventDefault();
    // 入力フォームの値を取得
    var textForm = $("#textForm").val();
    // 入力フォームから入力された値は「文字列型」
    console.log(typeof textForm);
    // 入力されたものは「文字列型」なので「数値型」に型変換
    textForm = Number(textForm);
    console.log(typeof textForm);

    if (textForm > 0 && textForm < 11 && Number.isInteger(textForm)) {
      console.log("1~10までの整数です")
      for (var i = 0; i < textForm; i++) {
        appendFlex();
        $("#attention").css("display", "none");
      }
    } else {
      console.log("文字列または0または11以上の整数または小数です")
      $("#attention").css("display", "block");
    }
  });


  ////////////////////////////
  // ここからプラグイン用の記述 //
  ///////////////////////////

  // スライドイン
  $(window).fadeThis();

  //ドロワーメニュー
  $(".drawer").drawer();






  // こちらは現在使われておりません

  //   背景色変更
  // $("#bg-blue").on('click', function() {
  //   $('body').removeClass("bg-red"); // 青にする前に赤を取り除く
  //   $('body').toggleClass("bg-blue");
  // });

  // $("#bg-red").on('click', function() {
  //   $('body').removeClass("bg-blue"); // 赤にする前に青を取り除く
  //   $('body').toggleClass("bg-red");
  // });

  // 制作実績の画像を変更する
  // (特定の画像を更新する)
  // $("#img-change").on('click', function() {
  //  $("#change-target").attr("src", "img/change_img.jpg");
  // });


});