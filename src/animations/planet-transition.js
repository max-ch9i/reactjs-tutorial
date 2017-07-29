import { TimelineLite, Power2 } from 'gsap';

export default (elm, duration, cb) => {
    const tl = new TimelineLite();
    const animationDuration = duration;

    tl.to(elm, animationDuration, { x: '300px',
        ease: Power2.easeIn,
        onComplete: cb,
    })
    .set(elm, { x: '-300px' })
    .to(elm, animationDuration, { x: '0',
        ease: Power2.easeOut
    });
};
