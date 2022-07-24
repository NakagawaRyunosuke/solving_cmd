//DOMから値の取得
//原関数取得
let funcFlag1 = 0;
let graph1 = null;
let pointA = null;
let pointB = null;
let lineA = null;
let lineB = null;
let result1 = null;

$("#NI_btn1").click(function() {
  board1.removeObject(graph1);
  funcFlag1 = 1;
  graph1 = board1.create('functiongraph', [func_y1, -50, 50]);  
});

$("#NI_btn2").click(function() {
  board1.removeObject(graph1);
  funcFlag1 = 2;
  graph1 = board1.create('functiongraph', [func_y1, -50, 50]);  
});

$("#NI_btn3").click(function() {
  board1.removeObject(graph1);
  funcFlag1 = 3;  
  graph1 = board1.create('functiongraph', [func_y1, -50, 50]);  
});

//a,b取得
let a = 0.0,
  b = 0.0;
$("#NI_aBtn").click(function(){
  a = Number($("#NI_aNum").val());
});

$("#NI_bBtn").click(function(){
  b = Number($("#NI_bNum").val());
});

//Graph1描画
let board1 = JXG.JSXGraph.initBoard('plot1', {
  boundingbox: [ -31, 31, 31, -31],  // 領域の座標[左、上、右、下]
  axis: true,  // 軸を表示する
  showNavigation: false,  // ナビゲーションボタンを表示しない
  showCopyright: false    // コピーライト文字列を表示しない
});

const text_css1 = 'font-family: "Times New Roman", Times, "serif"; font-style: italic';
board1.create('text', [29, 2, 'x'],{ fontSize: 16, cssStyle: text_css1 });
board1.create('text', [2, 30, 'y'],{ fontSize: 16, cssStyle: text_css1 });


const EPS1 = 0.0001; // constは定数の定義

/**
 * 2分法による根の計算
 */
function main1() {
  if(funcFlag1 == 0){
    alert("原関数を定義してください");
    return;
  }
  board1.removeObject(pointA);
  board1.removeObject(pointB);
  board1.removeObject(lineA);
  board1.removeObject(lineB);
  board1.removeObject(result1);
  pointA = board1.create('point', [a,3.0], {name: 'a',face:''});
  lineA = board1.create("line",[[a,-31.0],[a,31.0]],{strokeColor: '#ff6600'});
  pointB = board1.create('point', [b,3.0], {name: 'b',face:""});
  lineB = board1.create("line",[[b,-31.0],[b,31.0]],{strokeColor: '#ff6600'});
  let x = nibun(a, b); // 解
  result1 = board1.create('point', [x,0.0], {name: 'X',attractToGrid: true});
}

/**
 * 実際の計算部分
 * @param {number} a 計算範囲
 * @param {number} b 計算範囲
 * @return {number} 近似解
 */
function nibun(a, b) {
  let parent = document.getElementById("resultArea1");
  parent.innerHTML = "";
  let c;
  let i = 1;
  do {
    c = (a + b) / 2.0; // 2分計算
    console.log(c);
    let nibunResult = document.createElement("div");
    let countText = document.createElement("h4");
    countText.textContent = "〜"+i+"回目〜";
    let domA = document.createElement("p");
    domA.textContent = "a: "+a;
    let domB = document.createElement("p");
    domB.textContent = "b: "+b;
    let domC = document.createElement("p");
    domC.textContent = "二分点: "+c;
    nibunResult.appendChild(countText);
    nibunResult.appendChild(domA);
    nibunResult.appendChild(domB);
    nibunResult.appendChild(domC);
    document.getElementById("resultArea1").appendChild(nibunResult);
    if (func_y1(c) * func_y1(a) < 0) {
      b = c; // 式(1.2)
    }else {
      a = c; // 式(1.3)
    }
    i++;
  } while (Math.abs(a - b) > EPS1); // 収束判別　式(1.4)の変形
  return c;
}

/**
 * 根を求めたい関数
 * @param {number} x X座標
 * @return {number} Y座標
 */
function func_y1(x) {
  switch (funcFlag1) {
    case 1:
      return Math.pow(x,3)+Math.pow(x,2)*5+10;
    case 2:
      return Math.pow(x,2)/10-x-2;
    case 3:
      return Math.pow(x/3,3)+x/5+5;
    default:
      return 0;
  }
}


$("#NI_startBtn").click(function(){  
  main1();
});



