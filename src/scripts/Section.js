export class Section{
    constructor({items, renderer}, selector) {
      this._renderItems = items; 
      this._renderer = renderer;
      this._container = document.querySelector(selector);

    }

    renderItems(items) {
        items.forEach((item)=>this._renderer(item))
      }

      addItem(item) {
        this._container.prepend(item)
      }
    }
