import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  // setting component before init()
  prepare() {}

  // Return component tamplate
  toHTML() {
    return '';
  }

  // emit listeners about events
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscribing on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // initializing compomemt
  // add DOM Listeners
  init() {
    this.initDOMListeners();
  }

  // remove component
  // remove listeners
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
