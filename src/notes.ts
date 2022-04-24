

export class Notes {
  constructor(private owner: string, 
              private title: string, 
              private body?: string, 
              private color?: string) {}

  getOwner(): string {
    return this.owner;
  }
  
  getTitle(): string {
    return this.title;
  }

  getBody(): string | undefined {
    return this.body;
  }

  getColor(): string | undefined {
    return this.color;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  setBody(newBody: string) {
    this.body = newBody;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }

}