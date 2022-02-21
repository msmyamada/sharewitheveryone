var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Image オブジェクトを生成
var img = new Image();
img.src = 'rocket.jpg';

// 画像読み込み終了してから描画
img.onload = function(){
    c.drawImage(img, 10, 10);
}
