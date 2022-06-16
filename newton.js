//DOMから値の取得
//原関数取得
let funcFlag2 = 0;
let graph2 = null;
let pointA2 = null;
let lineA2 = null;
let result2 = null;
let firstA2 = 0;

$("#NE_btn1").click(function() {
  board2.removeObject(graph2);
  funcFlag2 = 1;
  graph2 = board2.create('functiongraph', [func_y2, -50, 50]);  
});

$("#NE_btn2").click(function() {
  board2.removeObject(graph2);
  funcFlag2 = 2;
  graph2 = board2.create('functiongraph', [func_y2, -50, 50]);  
});

$("#NE_btn3").click(function() {
  board2.removeObject(graph2);
  funcFlag2 = 3;  
  graph2 = board2.create('functiongraph', [func_y2, -50, 50]);  
});

let a2 = 0.0;
$("#NE_aBtn").click(function(){
  a2 = Number($("#NE_aNum").val());
  firstA2 = a2;
});

//Graph2描画
let board2 = JXG.JSXGraph.initBoard('plot2', {
  boundingbox: [ -31, 31, 31, -31],  // 領域の座標[左、上、右、下]
  axis: true,  // 軸を表示する
  showNavigation: false,  // ナビゲーションボタンを表示しない
  showCopyright: false    // コピーライト文字列を表示しない
});

const text_css2 = 'font-family: "Times New Roman", Times, "serif"; font-style: italic';
board2.create('text', [29, 3, 'x'],{ fontSize: 16, cssStyle: text_css2 });
board2.create('text', [2, 31, 'y'],{ fontSize: 16, cssStyle: text_css2 });

const EPS2 = 0.0001; // 許容誤差
/**
 * ニュートン法による根の計算
 */
function main2() {
  a2 = firstA2;
  board2.removeObject(lineA2);
  board2.removeObject(pointA2);
  board2.removeObject(result2);
  if(funcFlag2 == 0){
    alert("原関数を定義してください");
    return;
  }
  pointA2 = board2.create('point', [firstA2,3.0], {name: 'a',face:''});
  lineA2 = board2.create("line",[[firstA2,-31.0],[firstA2,31.0]],{strokeColor: '#ff6600'});
  let b2;
  while (1) {
    b2 = a2 - func_y2(a2) / func_z(a2); // 式(1.9)
    if (Math.abs(a2 - b2) < EPS2) break;  // 収束判定
    else a2 = b2;
  }
  result2 = board2.create('point', [b2,0.0], {name: 'X'});
}

/**
 * 根を求めたい関数
 * @param {number} x X座標
 * @return {number} Y座標
 */
function func_y2(x) {
  switch (funcFlag2) {
    case 1:
      return Math.pow(x,3)/20-3*x-5;
    case 2:
      return Math.pow(x,2)/10-x-10;
    case 3:
      return Math.pow(x/3,3)+x/5+5;
    default:
      return 0;
  }
}

/**
 * 根を求めたい関数の微分関数
 * @param {number} x X座標
 * @return {number} Y座標
 */
function func_z(x) {
  switch (funcFlag2) {
    case 1:
      return 3*Math.pow(x,2)/20-3;
    case 2:
      return 2*x/10-1;
    case 3:
      return 3*Math.pow(x/3,2)+1/5;
    default:
      return 0;
  }
}

$("#NE_startBtn").click(function(){  
  main2();
});