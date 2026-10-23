// step 1 : initialize slide index
// index: 0 => slide1,
// 1 => slide2
// 2 => slide3
let currentSlideIndex = 0;

// function to show active slides
function showSlide(index){
// collect all slides
    // js store them like:
    // slides[0] slides[1] slides[2]
    const slides = document.getElementsByClassName("carousel-slide")

    // collect dots
    const dots = document.getElementsByClassName("dot")

    // handle edge cases
    if(index>=slides.length){
        currentSlideIndex = 0
    }
    else if(index <0){

        currentSlideIndex = slides.length-1
    }

    // hide all slides before showing active
    for(let i=0; i< slides.length; i++){
        slides[i].style.display ="none"
    }

    // remove all active dot=
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active", "")
    }

    slides[currentSlideIndex].style.display ="block";
    dots[currentSlideIndex].className += " dot-active"
}

// function to change slide
function changeSlide(n){
    showSlide((currentSlideIndex +=n))
}

// dot navigation
function currentSlide(n){
    showSlide((currentSlideIndex =n))
}

// initially display setup
showSlide(currentSlideIndex)

// page loads
//     |
// currentSlideIndex=0
//      |
// showSlide(0)
//      |
// hide all slides
//      |
// Remove active dots
//      |
// shoSlide(0)
//      |
// Active Dot 0
//      |
// User clicks next
//      |
//changeSlide(1)
//      |
// showSlide(1)
//      |
// slide1 appears