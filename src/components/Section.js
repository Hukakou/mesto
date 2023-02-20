export class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = container;
    }

    addItem(item) {
        this._container.prepend(item);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element); 
        });
    }
};


