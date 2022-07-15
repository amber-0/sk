
// 1~6の画像を表示する
var pics_src = new Array
  ("img/main1.gif",
  "img/main2.gif",
  "img/main3.gif",
  "img/main4.gif",
  "img/main5.gif",
  "img/main6.gif",
  "img/main7.gif",
  "img/main8.gif",
  "img/main9.gif",
  "img/main10.gif",
  "img/main11.gif",
  "img/main12.gif",
  "img/main13.gif",
  "img/main14.gif");
  var num = 0;

  function go_forward(){
      if (num == 13) {
          num = 0;
      }
      else {
          num ++;
      }
      document.getElementById("mypic").src=pics_src[num];
  }

  function go_back(){
      if (num == 0) {
          num = 13;
      }
      else {
          num --;
      }
      document.getElementById("mypic").src=pics_src[num];
  }
