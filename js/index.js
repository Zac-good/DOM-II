// Your code goes here

Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  // Body
const body = document.querySelector('body');
body.addEventListener('click', function(event){
    event.target.style.background = 'grey';
    setTimeout(function(){
        event.target.style.background ="";
    }, 3000);
},false);

// Header
const header = document.querySelector('header');
header.addEventListener('mouseover', function(event){
    event.currentTarget.style.background = 'red';
    event.target.style.color = 'white'
    setTimeout(function(){
        event.target.style.color = "";
}, 1000);
}, false);

// Bus Image
const busImg = document.querySelector('.intro img');
busImg.addEventListener('pointerdown', function(event) {
    event.target.style.transition = 'all 1s ease-out';
    event.target.style.transform = 'scale(1.5)';
    setTimeout(function(){
        event.target.style.transform = "";
    }, 2000);
}, false);

// Map Image
const mapImg = document.querySelector('.img-content img');
const count = 360;
mapImg.addEventListener('dblclick', function(event) {
    event.target.style.transition = 'all 1s';
    event.target.style.transform = `rotate(${count}deg)`;
    count += 360;
});