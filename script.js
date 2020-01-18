const panels = document.querySelectorAll('.panel');
const secondChild = document.querySelectorAll('.panel :nth-child(2)');


panels.forEach((a,index) => a.addEventListener('mouseover', function(){
        a.classList.add('active');
        a.classList.add('open');
        secondChild[index].style.fontSize = "5rem";
        secondChild[index].style.transition = "1s 0.3s";
    }));

panels.forEach((a,index) => a.addEventListener('mouseout', function(){
    a.classList.remove('active');
    a.classList.remove('open');
    secondChild[index].style.fontSize = "3rem";
}));

panels.forEach((a,index) => a.addEventListener('click', function() {
    for(let i = 0; i < panels.length; i++) {
        if(i !== index) {
            panels[i].classList.toggle('none');
        }
    }
    a.classList.toggle('fullScreen');
}));