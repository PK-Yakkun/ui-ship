export class ComponentList {
  private list: string[];

  constructor() {
    this.list = ["ScrollLine", "Button", "SvgIcon", "Dock"].sort();
  }

  public get sortedList(): string[] {
    return this.list;
  }
}
