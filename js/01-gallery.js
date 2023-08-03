import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

function createMarkup(arr){
return arr.map(({preview, original, description}) => `
<li class ='item js-prod-item'>
<img src="${preview}" alt="${description}" data-source="${original}" width=300px>
</li>`).join('')//объединяет все элементы массива в строку. В моем случае масив картинок
}


container.insertAdjacentHTML('beforeend', createMarkup(galleryItems) )//Параметр beforeend указывает, что HTML-код должен быть вставлен внутрь элемента
//вызывает метод insertAdjacentHTML() на объекте container. Метод используется для вставки строки HTML-кода в дерево DOM
container.addEventListener('click', handlerProductClick)



    function handlerProductClick(evt) {
        // Проверяем, не содержит ли цель события класс 'item'
        if (!evt.target.classList.contains('gallery__item')) {
            return 
        }
        console.log('target', evt.target);
// Добавляем обработчик события на элемент ul.gallery
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openModal);
//          const currentProduct = evt.target.closest('.js-prod-item')//closest() используется для поиска ближайшего родительского элемента, соответствующего заданному селектору CSS
// // console.log('target', evt.target);//вывод самого эл-та
// // console.log(currentProduct);// работа метода closest()
// const {original} = currentProduct.dataset;


     }
    
     function openModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== "IMG") return;
        
        const sourceUrl = event.target.dataset.source;
      
        const instance = basicLightbox.create(`
          <div class="modal">
            <img src="${sourceUrl}" ">
          </div>
        `);
      
        instance.show();
      }
      
      // Добавляем обработчик события на элемент ul.gallery
      const gallery = document.querySelector('.gallery');
      gallery.addEventListener('click', openModal);
     



