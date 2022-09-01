"use strict"; 

var canvas = document.getElementById("tela"); 
var ctx = canvas.getContext("2d"); 

var x = 200, y = 100;

var larg = 70, comp = 150;
var lanternaComp = 10;
var lanternaLarg = 20;
var retMenorComp = 70;
var retMenorLarg = 30;
var ca, co, H;
var ang = 0;
var mod = 0;

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        
        desanharRetangulos(-comp/2, -larg/2, comp, larg, "#ffc0cb");
        desanharRetangulos(-comp/2, -larg/2, lanternaComp, lanternaLarg, "#ff0000");
        desanharRetangulos(-comp/2, (larg/2) - lanternaLarg, lanternaComp, lanternaLarg, "#ff0000");
        desanharRetangulos((comp/2) - lanternaComp, -larg/2, lanternaComp, lanternaLarg, "#FFD700");
        desanharRetangulos((comp/2) - lanternaComp, larg/2 - lanternaLarg, lanternaComp, lanternaLarg, "#FFD700");
        desanharRetangulos(-comp/5, -larg/5, retMenorComp, retMenorLarg, "#FF69B4");

    ctx.restore();

    requestAnimationFrame(desenhar);
}

function desanharRetangulos(x, y, larg, alt, cor){
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, larg, alt);
}

document.onkeydown = function (evt){ 
    console.log(evt.keyCode);
   
    if(evt.keyCode === 38){ //tecla pra cima
        x += Math.cos(ang)*5;
        y += Math.sin(ang)*5;
    }  
        
    if(evt.keyCode === 40){ //tecla pra baixo
        x -= Math.cos(ang)*5;
        y -= Math.sin(ang)*5;
    }
        
    if(evt.keyCode === 37){ //tecla da esquerda
        ang -= 0.1;
    } 
        
    if(evt.keyCode === 39){ //tecla da direita
        ang += 0.1;
    } 
        
} 

requestAnimationFrame(desenhar);