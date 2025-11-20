const paper = document.querySelector('.paper');
const upperFold = document.querySelector('.paper-fold:nth-child(1)');
const lowerFold = document.querySelector('.paper-fold:nth-child(3)');

const tl = gsap.timeline();

tl.from(paper, {
    yPercent: 100,
    scale: .8,
    rotate: 20
}).from(upperFold, {
    rotateX: "179deg" 
}).from(lowerFold, {
    rotateX: "179deg"
});