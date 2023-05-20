export class ComponentList {
  private list: string[];

  constructor() {
    this.list = ["Modal", "ScrollLine", "Button", "SvgIcon"].sort();
  }

  public get sortedList(): string[] {
    return this.list;
  }
}
