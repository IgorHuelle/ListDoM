const paper = document.querySelector('.paper');
const upperFold = document.querySelector('.paper-fold:nth-child(1)');
const lowerFold = document.querySelector('.paper-fold:nth-child(3)');

let canOpen = false

const openTl = gsap.timeline();
openTl.pause();

gsap.set([upperFold, lowerFold], {
    rotateX: "179deg"
})

gsap.set(paper, {
    rotate: 10,
    scale: .9
})

gsap.from(paper, {
    yPercent: 100,
    duration: 1.5,
    onComplete: () => {
        canOpen = true
    }
})

paper.addEventListener('click', () => {
    if(canOpen) {
        canOpen = false;
        openTl.play();
    }
});

openTl.to(upperFold, {
    rotateX: 0
}).to(lowerFold, {
    rotateX: 0
}).to(paper, {
    scale: 1,
    rotate: 0,
    width: "100dvw"
});

// tl.from(paper, {
//     yPercent: 100,
//     scale: .8,
//     rotate: 20,
//     onFinish: () => {
        
//     }
// }).from(upperFold, {
//     rotateX: "179deg" 
// }).from(lowerFold, {
//     rotateX: "179deg"
// });