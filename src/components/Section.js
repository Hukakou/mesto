export class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }

    addItem(item) {
        this._container.prepend(item);
    }

    renderItems(items) {
        this._container.textContent = '';
        items.reverse().forEach(item => {
            const element = this._renderer(item);
            this.addItem(element);
        });
    }
};


