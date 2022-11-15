import $ from '../core';

$.prototype.setAttr = function (name, value) {
        if (!name || !value) {
                return this;
        }
        for (let i = 0; i < this.length; i++) {
                if (!this[i].setAttribute(name, value)) {
                        continue;
                }
                return this[i].setAttribute(name, value);
        }
        return this;
};

$.prototype.delAttr = function (name) {
        if (!name) {
                return this;
        }
        for (let i = 0; i < this.length; i++) {
                if (!this[i].removeAttribute(name)) {
                        continue;
                }
                return this[i].removeAttribute(name);
        }
        return this;
};

$.prototype.hasAttr = function (name) {
        if (!name) {
                return this;
        }
        for (let i = 0; i < this.length; i++) {
                if (!this[i].hasAttribute(name)) {
                        continue;
                }
                return this[i].hasAttribute(name);
        }
        return this;
};

$.prototype.getAttr = function (name) {
        if (!name) {
                return this;
        }
        for (let i = 0; i < this.length; i++) {
                if (!this[i].getAttribute(name)) {
                        continue;
                }
                console.log(this[i].getAttribute(name));
                return this[i].getAttribute(name);                
        }
        return this;
};

$.prototype.toggleAttr = function (name, value) {
        if (!name || !value) {
                return this;
        }
        for (let i = 0; i < this.length; i++) {
                if (!this[i].setAttribute(name, value)) {
                        continue;
                }
                if (this[i].hasAttribute(name)) {
                        return this[i].removeAttribute(name);
                } else {
                        return this[i].setAttribute(name, value);
                }
        }
        return this;
};