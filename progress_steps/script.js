'use strict';

const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', function(){
    currentActive++;

    //If there are no more circles,  set the current active to be equal to the last number.
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();

 });

 prevBtn.addEventListener('click', function(){
    currentActive--;

    if(currentActive < 0){
        currentActive = circles.length;
    }
    update();

 });

 function update(){
     //The index is an optional argument on forEach that will automatically iterate.
     circles.forEach(function(circle, i){
        if(i < currentActive){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }
     });

     const actives = document.querySelectorAll('.active');
     progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

     if(currentActive === 1){
        prevBtn.disabled = true;
    } else if(currentActive === circles.length){
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
 }