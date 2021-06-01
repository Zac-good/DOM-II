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
