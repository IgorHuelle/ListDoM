const decoration = document.querySelector('.decoration');
const cover = document.querySelector('.cover');
const paper = document.querySelector('.paper');
const paperText = document.querySelector('.paper-text');
const upperFold = document.querySelector('.paper-fold:nth-child(1)');
const lowerFold = document.querySelector('.paper-fold:nth-child(3)');

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    cover.style.display = "none";

    let canOpen = false
    let textSplit = SplitText.create(paperText, {
        type: "words lines",
        mask: "lines"
    });

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
    }).add(() => {
        decoration.style.display = "none"
    }, "<25%").to(lowerFold, {
        rotateX: 0
    }).to(paper, {
        scale: 1,
        rotate: 0,
        width: "100dvw",
    }).from(textSplit.words, {
        yPercent: 100,
        stagger: .02
    });
});