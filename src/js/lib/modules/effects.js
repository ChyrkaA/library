import $ from '../core';

$.prototype.animateOverTime = function (duration, callBack, finall) {
        let timeStart;

        function _animateOverTime(time) {
                if (!timeStart) {
                        timeStart = time;
                }

                let timeElapsed = time - timeStart;
                let complection = Math.min(timeElapsed / duration, duration);

                callBack(complection);

                if (timeElapsed < duration) {
                        requestAnimationFrame(_animateOverTime);
                } else {
                        if (typeof finall === 'function') {
                                finall();
                        }
                }
        }

        return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, finall) {
        for (let i = 0; i < this.length; i++) {
                this[i].style.display = display || 'block';
                const _fadeIn = (complection) => {
                        this[i].style.opacity = complection;
                };
                const ani = this.animateOverTime(duration, _fadeIn, finall);
                requestAnimationFrame(ani);
        }
        return this;
};

$.prototype.fadeOut = function (duration, finall) {
        for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
                        this[i].style.opacity = 1 - complection;
                        if (complection > 1 || complection === 1) {
                                this[i].style.display = 'none';
                        }
                };
                const ani = this.animateOverTime(duration, _fadeOut, finall);
                requestAnimationFrame(ani);
        }
        return this;
};

$.prototype.fadeToggle = function (duration, display, finall) {
        for (let i = 0; i < this.length; i++) {
                //проверка, скрыт ли элемент
                if (window.getComputedStyle(this[i]).display === 'none') {
                        $(this[i]).fadeIn(duration, display, finall);
                } else {
                        $(this[i]).fadeOut(duration, display, finall);
                }
        }
        return this;
};