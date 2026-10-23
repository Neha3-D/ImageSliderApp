// step 1 : initialize slide index
// index: 0 => slide1,
// 1 => slide2
// 2 => slide3
let currentSlideIndex = 0;
let interval;

// function to show active slides
function showSlide(index){
// collect all slides
    // js store them like:
    // slides[0] slides[1] slides[2]
    const slides = document.getElementsByClassName("carousel-slide")

    // collect dots
    const dots = document.getElementsByClassName("dot")

    // to reset timeinterval to 0 when the slide change
    resetInterval()

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

    // remove all active dot
    for(let i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active", "")
    }

    slides[currentSlideIndex].style.display ="block";
    dots[currentSlideIndex].className += " dot-active"

    // Level2: assigning the current img to popup
    const popupImage = document.getElementById("popup-image")
    popupImage.src = slides[currentSlideIndex].src 
}

// function to change slide
function changeSlide(n){
    showSlide((currentSlideIndex +=n))
}

// dot navigation
function currentSlide(n){
    showSlide((currentSlideIndex =n))
}

// timeinterval
function resetInterval(){
    clearInterval(interval);
    interval = setInterval(()=>{
        changeSlide(1)
    },3000)
}

// Level 2: open and close popup
function openPopup(){
    clearInterval(interval)
    const modal =document.getElementById("imagePopup")
    modal.style.display ="flex"
}

function closePopup(){
    const modal =document.getElementById("imagePopup")
    modal.style.display ="none"
    resetInterval() // resume 
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