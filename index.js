//first question js
let div1=document.createElement("div");


let element1=document.querySelector(".msec4div2div1");
element1.insertAdjacentElement("afterend",div1);

let element2=document.querySelector(".msec4div2").children[1];
element2.setAttribute("class","msec4div2jsdiv1");
element2.innerHTML="<div>Playlists are a great way to save collections of music, either for your own listening or to share.</div>";
element2.style.fontSize="18px";
element2.style.marginTop="35px";
element2.style.marginBottom="35px";

element2.style.display="none";

let back=document.querySelector(".msec4");
let hr=document.querySelectorAll(".msec4div2 hr")[0];



let x1=document.querySelector(".msec4div2div1 span i");
x1.addEventListener("click",(e)=>{

    if(element2.style.display=="none"){
        element2.style.display="block";
        back.style.height="690px";
        hr.style.color="LightGrey"
    }
    else{
        element2.style.display="none";
        back.style.height="600px";
        hr.style.color="grey"
    }
})

//second question js

let div2=document.createElement("div");  
let element3=document.querySelector(".msec4div2div2") ;

element3.insertAdjacentElement("afterend",div2);

let element4=document.querySelector(".msec4div2").children[4];
element4.setAttribute("class","msec4div2jsdiv2");
element4.innerHTML="<div>Tap Home>Tap Settings>Tap Data Saver>Switch on Data Saver.</div>";

element4.style.fontSize="18px";
element4.style.marginTop="35px";
element4.style.marginBottom="35px";

element4.style.display="none";

let hr2=document.querySelectorAll(".msec4div2 hr")[1];
let x2=document.querySelector(".msec4div2div2 span i");
x2.addEventListener("click",(e)=>{


    if(element4.style.display=="none"){
        element4.style.display="block";
        back.style.height="690px";
        hr2.style.color="LightGrey"
    }
    else{
        element4.style.display="none";
        back.style.height="600px";
        hr2.style.color="grey"
    }

})

//third question js


let div3=document.createElement("div");  
let element5=document.querySelector(".msec4div2div3") ;

element5.insertAdjacentElement("afterend",div3);

let element6=document.querySelector(".msec4div2").children[7]

element6.setAttribute("class","msec4div2jsdiv3");
element6.innerHTML="<div>Any playlist with the shuffle icon will play on shuffle.Some playlists won't have the shuffle icon, so you can tap any song to play it.</div>";

element6.style.fontSize="18px";
element6.style.marginTop="35px";
element6.style.marginBottom="35px";

element6.style.display="none";

let hr3=document.querySelectorAll(".msec4div2 hr")[2];
let x3=document.querySelector(".msec4div2div3 span i");
x3.addEventListener("click",(e)=>{


    if(element6.style.display=="none"){
        element6.style.display="block";
        back.style.height="690px";
        hr3.style.color="LightGrey"
    }
    else{
        element6.style.display="none";
        back.style.height="600px";
        hr3.style.color="grey"
    }

})

//question 4 js


let div4=document.createElement("div");  
let element7=document.querySelector(".msec4div2div4") ;

element7.insertAdjacentElement("afterend",div4);

let element8=document.querySelector(".msec4div2").children[10];


element8.setAttribute("class","msec4div2jsdiv4");
element8.innerHTML="<div>Tap Search. Under Browse All, tap Podcasts.</div>";

element8.style.fontSize="18px";
element8.style.marginTop="35px";
element8.style.marginBottom="35px";

element8.style.display="none";

let hr4=document.querySelectorAll(".msec4div2 hr")[3];
let x4=document.querySelector(".msec4div2div4 span i");
x4.addEventListener("click",(e)=>{


    if(element8.style.display=="none"){
        element8.style.display="block";
        back.style.height="690px";
        hr4.style.color="LightGrey"
    }
    else{
        element8.style.display="none";
        back.style.height="600px";
        hr4.style.color="grey"
    }

})

