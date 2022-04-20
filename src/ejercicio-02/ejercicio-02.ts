

interface Streamable <T> {
  nameFind();
  yearFind();

}

class BasicStreamableCollection <T extends Streamable  <T>> {
  constructor(private items: T[]) {
  }

  public addStreamable(item: T) {
    this.items.push(item);
  }

  public getStreamable(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    return undefined;
  }

  public getNumberOfStreamable(): number {
    return this.items.length;
  }
}


class Serie {
  constructor(name: string, date: Date, ) {
    // Empty method
  }
};

class Pelicula {

};

class Documental {

};