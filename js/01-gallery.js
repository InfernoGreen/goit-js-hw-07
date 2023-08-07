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



    function handlerProductClick(event) {

      event.preventDefault();
      if (event.target.nodeName !== "IMG")  return;
      
      const sourceUrl = event.target.dataset.source;
      const descriptionUrl = event.target.alt;
      const instance = basicLightbox.create(`
        <div class="modal">
          <img src="${sourceUrl}" alt="${descriptionUrl}">

        </div>
      `);
    
      instance.show();
 //  прослушивания кликов в модальном окне
      instance.element().addEventListener('click', () => instance.close());


 // прослушиваю нажатие клавиши Esc
        const handleEscKey = (event) => {
          if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', handleEscKey);
          }
        };
        document.addEventListener('keydown', handleEscKey);
  }



