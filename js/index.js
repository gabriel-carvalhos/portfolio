const intro = document.querySelector('.intro')
const tl = gsap.timeline()
tl.to(".intro", {
    fontSize: "85px",
    lineHeight: "50px",
    position: "relative",
    top: 25,
    left: 20,
    width: "415px",
    height: "125px",
    duration: 2,
    delay: 5,
    ease: 'power4.inOut'
})

const text = new SplitType('.intro-text', { types: 'words' })
tl.to(".word", {
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
    intro.style.setProperty('font-family', 'DM Serif Display')
}, 4125)