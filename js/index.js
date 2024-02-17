const intro = document.querySelector('.intro')
const tl = gsap.timeline()

let introConfig
if (window.matchMedia("(min-width: 768px)").matches) {
    // MAIOR
    introConfig = { fs: '85px', w: '350px', h: '110px', t: '33px' }
} else {
    // MENOR
    introConfig = { fs: '40px', w: '176.203px', h: '60px', t: '24px' }
}

tl.to(".intro", {
    fontSize: introConfig.fs,
    width: introConfig.w,
    height: introConfig.h,
    top: introConfig.t,
    left: "20px",
    duration: 2,
    delay: 5,

    /* duration: .3,
    delay: 0, */

    ease: "power4.inOut",
    onComplete() {
        intro.classList.add('md:intro-text', 'intro-text')
        
        intro.style.fontSize = ''
        intro.style.width = 'fit-content'
        intro.style.height = 'fit-content'
        intro.style.position = 'relative'
        intro.style.top = '0'
        intro.style.left = '0'
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