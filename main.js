
const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "img/pause.png";
    }else{
        mySong.pause();
        icon.src = "img/play.png";
    }
}


const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click',() => {
        nav.classList.toggle('show')
    })
}