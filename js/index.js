
// 1~6の画像を表示する
var pics_src = new Array
  ("https://github.com/amber-0/sk/blob/main/img/main1.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main2.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main3.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main4.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main5.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main6.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main7.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main8.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main9.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main10.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main11.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main12.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main13.gif?raw=true",
  "https://github.com/amber-0/sk-/blob/main/img/main14.gif?raw=true");
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
