const li1=document.getElementById('li1'),
    li2=document.getElementById('li2'),
    li3=document.getElementById('li3'),
    li4=document.getElementById('li4'),
    li5=document.getElementById('li5');


document.addEventListener('scroll',hltsec);

function hltsec(){
    Ycoord=window.scrollY;
    console.log(Ycoord);
    if(Ycoord>=0 && Ycoord<300){
        li1.classList.add('scrollhlt');
        li2.classList.remove('scrollhlt');
    }

    
    if(Ycoord>=300 && Ycoord<660){
        li1.classList.remove('scrollhlt');
        li2.classList.add('scrollhlt');
        li3.classList.remove('scrollhlt');
    }

    
    if(Ycoord>=660 && Ycoord<973){
        li2.classList.remove('scrollhlt');
        li3.classList.add('scrollhlt');
        li4.classList.remove('scrollhlt');
    }

    
    if(Ycoord>=973 && Ycoord<1356){
        li3.classList.remove('scrollhlt');
        li4.classList.add('scrollhlt');
        li5.classList.remove('scrollhlt');
    }
    
    if(Ycoord>1356){
        li4.classList.remove('scrollhlt');
        li5.classList.add('scrollhlt');
    }
}
