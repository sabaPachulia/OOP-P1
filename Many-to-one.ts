class Page {
  constructor(private readonly number: number) {}
}

class Book {
  constructor(private readonly pages: Page[]) {}
}

const page1 = new Page(1);
const page2 = new Page(2);
const book = new Book([page1, page2]);
