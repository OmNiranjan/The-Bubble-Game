var hitrn;
var score = 0;
function increaseScore(){
    score += 10;
    document.getElementById("score").textContent = score;
}
function makebubble(){
    var clutter = '';
    for(let i=1;i<169;i++){
     var rn = Math.floor(Math.random()*10);
     clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector('#btm').innerHTML = clutter;
}
function newhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent = hitrn;
}
var timer=60;
function timeset(){
    var timee = setInterval(function(){
    if(timer>0){
    timer--;
     document.getElementById("tim").textContent = timer;
    
}
    else{
    clearInterval;
    document.querySelector("#btm").innerHTML = `<h1 >Game Over</h1>`;
}
},1000)
}
timeset();
makebubble();
newhit();

document.querySelector("#btm").addEventListener("click", function(dets) {
    var clickednum = Number(dets.target.textContent);
    
    if(clickednum === hitrn) {
        increaseScore();
        makebubble();
        newhit();
    }
});

