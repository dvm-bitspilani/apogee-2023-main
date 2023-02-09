export default class Modal {
  static Event = new Modal("event");
  static Contact = new Modal("contact");
  static None = new Modal("null");

  constructor(name) {
    this.name = name;
    this.loc = [0, 0];
  }

  setName(newName) {
    this.name = newName;
  }

  setLoc(posX, posY) {
    this.loc = [posX, posY];
  }

  getValue() {
    return this.name;
  }
}
