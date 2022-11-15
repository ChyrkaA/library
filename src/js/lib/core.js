// //заменяем длинную конструкцию поиска элемента через document.qwerySelectorAll на знак $
// (()=>{
//         const $ = function (selector){
//                 const elements = document.querySelectorAll(selector);
//                 const obj = {};

//                 //создаем метод для скрытия блока через инлайн стили
//                 obj.hide = ()=>{
//                         elements.forEach(elem =>{
//                                 elem.style.display = 'none';
//                         });
//                         return obj;
//                 };

//                 //создаем метод для показа блока через инлайн стили
//                 obj.show = ()=>{
//                         elements.forEach(elem =>{
//                                 elem.style.display = '';
//                         });
//                         return obj;
//                 };
//                 return obj;
//         };

//         window.$ = $;
// })();

const $ = function (selector) {
        return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
        if (!selector) {
                return this; //возвращаем контекстом вызова пустой объект {}
        }

        if (selector.tagName) {
                this[0] = selector;
                this.length = 1;
                return this;
        }

        Object.assign(this, document.querySelectorAll(selector));
        this.length = document.querySelectorAll(selector).length;
        return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;