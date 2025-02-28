    var nav = document.getElementById('nav');
var slideShow = document.getElementById('show');
var slide = document.getElementById('slide');
var slide1 = document.getElementById('slide');
var slide2 = document.getElementById('slide1');
var slide3 = document.getElementById('slide2');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var load = document.getElementById('load');
var a = document.getElementById('a');
var outer = document.getElementById('outer');
var outer1 = document.getElementById('outer1');
var outer2 = document.getElementById('outer2');
var inner = document.getElementById('inner');
var inner1 = document.getElementById('inner1');
var inner2 = document.getElementById('inner2');
var circ = document.getElementById('circ');
var circ1 = document.getElementById('circ1');
var circ2 = document.getElementById('circ2');
var alone = document.getElementById('alone');
var fader = document.getElementById('fader');
var canc = document.getElementById('canc');
var part1 = document.getElementById('part1');

var fists = document.querySelectorAll('.fist')

let fistCount = 0;

window.onload = function(){
    slide.style.marginLeft = '0px';
}
one.onclick = function(){
    one.style.background ='#4883ff';
    three.style.background ='#cdcdcd';
    two.style.background ='#cdcdcd';
    slide.style.marginLeft = '0px';

}

two.onclick = function(){
    two.style.background ='#4883ff';
    one.style.background ='#cdcdcd';
    three.style.background ='#cdcdcd';
    slide.style.marginLeft = '-1350px';

}
three.onclick = function(){;
    three.style.background ='#4883ff';
    one.style.background ='#cdcdcd';
    two.style.background ='#cdcdcd';
    slide.style.marginLeft = '-2780px';
    }







function scrolling(){
    if(window.scrollY > 125){
        a.style.visibility = 'visible';
    }
    else{
        a.style.visibility = 'hidden';
    }
}


window.addEventListener('scroll', scrolling);






window.onload = function(){
setInterval(() => {
    load.style.opacity = '0.5';
}, 170);
setInterval(() => {
    load.style.display = 'none';
}, 300);
}



fader.style.marginLeft = '-3700px';
alone.style.visibility = 'hidden';
fader.style.transition = '.4s ease-in-out';
alone.style.transition = '.5s ease-in-out';
fader.style.zIndex = '100000000000000000000000000000000000000';
part1.style.zIndex = '90999900000000000000000000000000000000000000';

function fade(){
    alone.style.visibility = 'visible';
    fader.style.marginLeft = '0px';
    alone.style.zIndex = '1';
}
function cancle(){
    alone.style.visibility = 'hidden';
    fader.style.marginLeft = '-2900px';
}


function changeDiv(){
    let fistOne = document.querySelector('.fist.open')
    fistOne.classList.remove('open')
    fists[fistCount].classList.add('open')
    fists[fistCount].querySelector('.inner .circ').classList.add("hightlight")

}

fists.forEach((fist,index)=>{
    fist.addEventListener('click',()=>{
        fistCount = index
        changeDiv()
        
    })
})