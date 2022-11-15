import $ from '../core';

$.prototype.html = function (content) {
        for (let i = 0; i < this.length; i++) {
                if (content) {
                        this[i].innerHTML = content;
                } else {
                        return this[i].innerHTML;
                }
        }

        return this;
};

//указывает номер элемента, с которым хотим работать
$.prototype.eq = function (i) {
        if (this[i]) {
                const swap = this[i];
                const objLength = Object.keys(this).length;

                for (let i = 0; i < objLength; i++) {
                        delete this[i];
                }

                this[0] = swap;
                this.length = 1;

                return this;
        } else {
                console.log('(eq): Cant find class with this index');
        }
};

$.prototype.index = function () {
        const parent = this[0].parentNode;
        const childs = [...parent.children];

        const findMyIndex = (item) => {
                return item == this[0];
        };

        return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
        let numberOfItems = 0;
        let counter = 0;

        const copyObj = Object.assign({}, this);
        //console.log(copyObj);
        for (let i = 0; i < copyObj.length; i++) {
                const arr = copyObj[i].querySelectorAll(selector);
                //console.log(arr);
                if (arr.length == 0) {
                        continue;
                }

                for (let j = 0; j < arr.length; j++) {
                        this[counter] = arr[j];
                        counter++;
                }
                numberOfItems += arr.length;
        }

        this.length = numberOfItems;
        //console.log(numberOfItems);

        const objLength = Object.keys(this).length;
        //console.log(objLength);
        // console.log(this);

        for (; numberOfItems < objLength; numberOfItems++) {
                //console.log(this[numberOfItems]);
                delete this[numberOfItems];
        }
        //console.log(this);
        return this;
};

$.prototype.closest = function (selector) {
        let counter = 0;
        let length = this.length;
        for (let i = 0; i < this.length; i++) {
                if (this[i].closest(selector)) {
                        this[i] = this[i].closest(selector);
                        counter++;
                } else {
                        console.log(`This parent Class ${selector} is not found for used child Class`);
                        length--;
                        continue;
                }
        }
        this.length = length;

        const objLength = Object.keys(this).length;
        console.log(objLength);
        for (; counter < objLength; counter++) {
                delete this[counter];
        }
        console.log(this);
        return this;
};

$.prototype.siblings = function () {
        console.log(this.length);
        let numberOfItems = 0;
        let counter = 0;

        const copyObj = Object.assign({}, this);
        for (let i = 0; i < copyObj.length; i++) {
                const arr = copyObj[i].parentNode.children;

                for (let j = 0; j < arr.length; j++) {
                        if (copyObj[i] === arr[j]) {
                                continue;
                        }
                        this[counter] = arr[j];
                        counter++;
                }
                numberOfItems += arr.length - 1;
        }

        this.length = numberOfItems;

        const objLength = Object.keys(this).length;
        for (; numberOfItems < objLength; numberOfItems++) {
                delete this[numberOfItems];
        }
        return this;
};