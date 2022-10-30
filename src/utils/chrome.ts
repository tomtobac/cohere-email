class Storage {
  async get(keys: string[]) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(keys, (items) => {
        console.log({ items });
        resolve(items);
      });
    });
  }
  async set(values: { [key: string]: any }) {
    console.log({ values });
    return chrome.storage.sync.set(values);
  }
}

export default new Storage();
