export class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    addItem(item) {
        this._containerSelector.prepend(item);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            const element = this._renderer(item);
            this.addItem(element); 
        });
    }
};


