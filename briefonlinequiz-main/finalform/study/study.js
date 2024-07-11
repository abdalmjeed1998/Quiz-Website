
let homeButton =document.getElementById('homeButton')
homeButton.addEventListener(('click'),(e)=>{
    window.location.href='/home.html';
})
let backToCourses = document.getElementById('backToCourses')
backToCourses.addEventListener(('click'), (e)=>{
    window.location.href='/exploreCourses/brefcard-b.html';

})
/////////////////////////////////////

let show1 = document.getElementById('p1_show');
let div1 = document.getElementById('p1_text');
show1.onclick = function () {
    if (div1.style.display === "none" || div1.style.display === "") {
        div1.style.display = "block";
    } else {
        div1.style.display = "none";
    }
}

let show2 = document.getElementById('p2_show');
let div2 = document.getElementById('p2_text');
show2.onclick = function () {
    if (div2.style.display === "none" || div2.style.display === "") {
        div2.style.display = "block";
    } else {
        div2.style.display = "none";
    }
}
let show3 = document.getElementById('p3_show');
let div3 = document.getElementById('p3_text');
show3.onclick = function () {
    if (div3.style.display === "none" || div3.style.display === "") {
        div3.style.display = "block";
    } else {
        div3.style.display = "none";
    }
}
let show4 = document.getElementById('p4_show');
let div4 = document.getElementById('p4_text');
show4.onclick = function () {
    if (div4.style.display === "none" || div4.style.display === "") {
        div4.style.display = "block";
    } else {
        div4.style.display = "none";
    }
}
let show5 = document.getElementById('p5_show');
let div5 = document.getElementById('p5_text');
show5.onclick = function () {
    if (div5.style.display === "none" || div5.style.display === "") {
        div5.style.display = "block";
    } else {
        div5.style.display = "none";
    }
}
let show6 = document.getElementById('p6_show');
let div6 = document.getElementById('p6_text');
show6.onclick = function () {
    if (div6.style.display === "none" || div6.style.display === "") {
        div6.style.display = "block";
    } else {
        div6.style.display = "none";
    }
}
let show7 = document.getElementById('p7_show');
let div7 = document.getElementById('p7_text');
show7.onclick = function () {
    if (div7.style.display === "none" || div7.style.display === "") {
        div7.style.display = "block";
    } else {
        div7.style.display = "none";
    }
}
/////////////////////////////////////
// const navToggle = document.querySelector(".navbar_toggle");
// const links = document.querySelector(".main_nav");

// navToggle.addEventListener('click', function () {
//     links.classList.toggle("show_nav");
// })
////////////////////////////////////


