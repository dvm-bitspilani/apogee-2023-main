export class Box {
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

export default class Modal {
  static Event = new Box("event");
  static Contact = new Box("contact");
  static Speaker = new Box("speaker");
  static About = new Box("about");
  static None = new Box("null");
}
