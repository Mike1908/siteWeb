let animB = document.querySelector(".navbarrClas");
let animBText= document.querySelector(".Logo a img");

//console.log(animB);
window.addEventListener('scroll',() =>{
        if (window.scrollY > 30) {
            animB.classList.add('anim-navbarr');
            animBText.classList.add('LogoDef');
            //console.log(animBText);
        } else {
            animB.classList.remove('anim-navbarr');
            animBText.classList.remove('LogoDef');

            //console.log(animB)
        }
        //console.log(navigation);
    })
    