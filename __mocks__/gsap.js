export class TimelineLite {
    to(dom, dur, config) {
        setTimeout(() => {
            if (config.onComplete) {
                config.onComplete();
            }
        }, dur * 1000);
        return this;
    }
    set() {
        return this;
    }
}

export class Power2 {
    easeOut() {

    }
}
