
var x;
var y="CD";
var m;
var n;
var questions =["有一只棉羊变成了羊，今天他今天晚上的状态是？","孙悟空掉进了湖里，变成了六耳猕猴，请问他掉进的是哪个湖？","麒麟去了北极，请问它变成了什么？（打一甜品名称）",
"麻雀叽叽喳喳，但压一下就能让它安静为什么？（打一成语）","圣诞夜，圣诞老公公放进袜子的第一件东西是什么？",
"有一个字，人人见了都会念错。这是什么字？ ","错","什么英文字母最多人喜欢听?","什么人生病从来不看医生?"];
var answers=["失眠","贝加尔湖","冰淇淋","鸦雀无声","脚","错","CD","盲人"];

function my_func(){
        x=document.getElementById("ans").value;
        if(x==y) {swal("诶呦不错哦") ;
          }
        else  {swal("嗯~不对不对") ;
        swal("不是吧", {
          buttons: {
            //cancel: "Run away!",
            catch: {
              text: "再试一次",
              value: "catch",
            },
            defeat: "放弃？",
          },
        })
        .then((value) => {
          switch (value) {
            case "defeat":
              swal("雄起！", "就这？");
              break;

          }
        });
}}

function tip(){
      document.getElementById("demo").innerHTML = z;
}

function re(){
    n=m;
    m=parseInt(6*Math.random());
    if (m==n & m<=6){
      m=m+1;
    }
    else {m=m;}
    console.log(m);
    document.getElementById("question").innerHTML = questions[m];
    y=answers[m];
    z=hints[m];
}
