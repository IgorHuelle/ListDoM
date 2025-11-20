const paper = document.querySelector('.paper');
const upperFold = document.querySelector('.paper-fold:nth-child(1)');
const lowerFold = document.querySelector('.paper-fold:nth-child(3)');

gsap.set(paper, {
    scale: .8,
    rotate: 20
})

gsap.set(upperFold, {
    rotateX: "179deg" 
});

gsap.set(lowerFold, {
    rotateX: "179deg"
});