const intro = document.querySelector('.intro')
const tl = gsap.timeline()
tl.to(".intro", {
    fontSize: "85px",
    width: "350px",
    height: "110px",
    top: "33px",
    left: "20px",
    duration: 2,
    delay: 5,

    /* duration: .3,
    delay: 0, */

    ease: "power4.inOut",
    onComplete() {
        intro.classList.add('md:text-[85px]', '[font-size:9.25vw]')
        
        intro.style.width = 'fit-content'
        intro.style.height = 'fit-content'
        intro.style.position = 'relative'
        intro.style.top = '0'
        intro.style.left = '0'
        intro.style.fontSize = ''
    }
})

const text = new SplitType('.hero-text', { types: 'words' })
tl.to(".hero-text .word", {
    y: 0,
    opacity: 1,
    stagger: .25,
    delay: .05,
    duration: .75,
    ease: 'back.out'
})

const fonts = ['Cooper', 'Forma', 'Capitolina', 'DM Serif Display']
let i = 0
const id = setInterval(() => {
    intro.style.setProperty('font-family', fonts[i % 4])
    i++
}, 125)
setTimeout(() => {
    clearInterval(id)
    intro.style.setProperty('font-family', fonts[3])
}, 4125)