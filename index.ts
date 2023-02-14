interface ResData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class FifteenthSale {
  static #URL = 'https://jsonplaceholder.typicode.com/posts';
  static #ID = 15;

  static #get() {
    fetch(FifteenthSale.#URL)
      .then((res: Response) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((resData: ResData[]) => FifteenthSale.#getTitleFromJson(resData))
      .then((title) => console.log(title))
      .catch(({ message }) => console.error(message));
  }

  static #getTitleFromJson(resData: ResData[]) {
    const itemWithTitle = resData.find((item) => item.id === FifteenthSale.#ID);
    const title = itemWithTitle?.title;
    console.log(title);

    return title;
  }

  run() {
    FifteenthSale.#get();
  }
}

const fifteenthSale = new FifteenthSale();
fifteenthSale.run();
