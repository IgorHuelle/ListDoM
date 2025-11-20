const decoration = document.querySelector('.decoration');
const roses = document.querySelector('.roses');
const cover = document.querySelector('.cover');
const paper = document.querySelector('.paper');
const glow = document.querySelector('.paper-glow');
const paperText = document.querySelector('.paper-text');
const upperFold = document.querySelector('.paper-fold:nth-child(1)');
const lowerFold = document.querySelector('.paper-fold:nth-child(3)');

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    cover.style.display = "none";

    const splitOptions = {
        type: "words lines",
        mask: "lines"
    }

    let canOpen = false

    let headingSplit = SplitText.create(paperText.querySelector('p:nth-child(1)'), splitOptions);
    let firstSplit = SplitText.create(paperText.querySelector('p:nth-child(2)'), splitOptions);
    let secondSplit = SplitText.create(paperText.querySelector('p:nth-child(3)'), splitOptions);
    let thirdSplit = SplitText.create(paperText.querySelector('p:nth-child(4)'), splitOptions);
    let forthSplit = SplitText.create(paperText.querySelector('p:nth-child(5)'), splitOptions);
    let lastSplit = SplitText.create(paperText.querySelector('p:nth-child(6)'), splitOptions);

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
        duration: 2,
        ease: "power1.inOut",
        onComplete: () => {
            canOpen = true
            gsap.to(glow, {
                width: "150vw"
            })
        }
    })

    paper.addEventListener('click', () => {
        if(canOpen) {
            canOpen = false;
            openTl.play();
        }
    });

    openTl.to(upperFold, {
        rotateX: 0,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)"
    }).add(() => {
        decoration.style.display = "none"
    }, "<25%").to(lowerFold, {
        rotateX: 0
    }).to(paper, {
        scale: 1,
        rotate: 0,
        width: "100dvw",
    }).from(headingSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(firstSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(secondSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(thirdSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(forthSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(lastSplit.words, {
        yPercent: 100,
        stagger: .02,
        delay: .5
    }).from(roses, {
        opacity: 0
    });
});