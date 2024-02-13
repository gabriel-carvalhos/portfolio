const intro = document.querySelector('.intro')
const tl = gsap.timeline()
tl.to(".intro", {
    fontSize: "85px",
    lineHeight: "50px",
    duration: 2,
    delay: 5,
    ease: 'power4.inOut'
})

/* tl.to("") */

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