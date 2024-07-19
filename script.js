const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// This will get the length of the slides, meaning how many slides we have
// We want all the divs with the background images, so we're using slideRight instead of document
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

// We want to take the slideLength and subtract by 1 because the slides are zero-indexed and we want the last index
// We want to multiply the length by 100vh because each slide takes up the full viewport
// This line of code matches the left slide to the correct image
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// These will both call the same function but pass in a different argument
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    // The property clientHeight will give us the height of the sliderContainer
    // The sliderHeight is variable
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        // Once we get to the end, this will take us back to the beginning
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        // This will check to see if we're at the beginning, and set the index to the last slide if we are
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    }

    // In order for this to work, we need to transform the slides up and down on the y axis
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // We want to make this positive so that it goes the opposite way
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}