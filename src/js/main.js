import $ from './lib/lib';


//Примеры использования созданных функций
// $('button').on('click', function(){
//         $('div').eq(4).toggleClass('active');
// });     //применяем написанные вручную методы

// //$('div').addClass('privet');
// $('.active').setAttr('sdfsdf',1235);
// $('.active').toggleAttr('privet', 123);

// //console.log($('button').html('sdfgdfg'));

// $('div').click(function(){
//         console.log($(this).index());
// });

// //console.log($('div').eq(2).find('.some'));
// // console.log($('.some').closest('.findddme').addClass('sfrgedrg'));

// $('.findme').fadeIn(1000);

// $('#first').on('click', () => {
//         $('div').eq(1).fadeOut(800);
// });

// $('[data-count="second"]').on('click', () => {
//         $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', () => {
//         $('.w-500').fadeToggle(800);
// });

// $('.wrap').html(
//         `<div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown btn</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">Action</a>
//                 <a href="#" class="dropdown-item">Action2</a>
//                 <a href="#" class="dropdown-item">Action3</a>
//         </div>
// </div>`
// );

// $('.dropdown-toggle').dropdown();

// $('#trigger').click(() => $('#trigger').createModal({
//         text: {
//                 title: 'Modal title',
//                 body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
//         },
//         btns: {
//                 count: 3,
//                 settings: [
//                         [
//                                 'Close',
//                                 ['btn-danger', 'mr-10'],
//                                 true
//                         ],
//                         [
//                                 'Save changes',
//                                 ['btn-success'],
//                                 false,
//                                 () => {
//                                         alert('Data saved');
//                                 }
//                         ],
//                         [
//                                 'Another button',
//                                 ['btn-warning', 'ml-10'],
//                                 false,
//                                 () => {
//                                         alert('Hi');
//                                 }
//                         ]
//                 ]
//         }
// }));

// $().get('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res => console.log(res));