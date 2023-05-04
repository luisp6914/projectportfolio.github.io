//First Project
let project1SlideIndex = 1;
project1ShowSlides(project1SlideIndex);

//slide control
function project1PlusSlides(n){
    project1ShowSlides(project1SlideIndex += n);
}

//Thumbnail image control
function project1CurrentSlide(n){
    project1ShowSlides(project1SlideIndex = n);
}

//display slide
function project1ShowSlides(n){
    let i;
    let slides = document.getElementsByClassName("project1Slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length){
        project1SlideIndex = 1
    }
    if (n < 1){
        project1SlideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[project1SlideIndex - 1].style.display = "block";
    dots[project1SlideIndex - 1].className += " active";
}

//Second Project
let project2SlideIndex = 1;
project2ShowSlides(project2SlideIndex);

//slide control
function project2PlusSlides(n){
    project2ShowSlides(project2SlideIndex += n);
}

//Thumbnail image control
function project2CurrentSlide(n){
    project2ShowSlides(project2SlideIndex = n);
}

//display slide
function project2ShowSlides(n){
    let j;
    let slides2 = document.getElementsByClassName("project2Slides");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length){
        project2SlideIndex = 1
    }
    if (n < 1){
        project2SlideIndex = slides2.length
    }
    for(j = 0; j < slides2.length; j++){
        slides2[j].style.display = "none";
    }
    for(j = 0; j < dots2.length; j++){
        dots2[j].className = dots2[j].className.replace(" active", "");
    }
    slides2[project2SlideIndex - 1].style.display = "block";
    dots2[project2SlideIndex - 1].className += " active";
}

//Fourth Project
let project4SlideIndex = 1;
project4ShowSlides(project4SlideIndex);

//slide control
function project4PlusSlides(n){
    project4ShowSlides(project4SlideIndex += n);
}

//Thumbnail image control
function project4CurrentSlide(n){
    project4ShowSlides(project4SlideIndex = n);
}

//display slide
function project4ShowSlides(n){
    let k;
    let slides4 = document.getElementsByClassName("project4Slides");
    let dots4 = document.getElementsByClassName("dot4");
    if (n > slides4.length){
        project4SlideIndex = 1
    }
    if (n < 1){
        project4SlideIndex = slides4.length
    }
    for(k = 0; k < slides4.length; k++){
        slides4[k].style.display = "none";
    }
    for(k = 0; k < dots4.length; k++){
        dots4[k].className = dots4[k].className.replace(" active", "");
    }
    slides4[project4SlideIndex - 1].style.display = "block";
    dots4[project4SlideIndex - 1].className += " active";
}