class Storage {
  async get(keys: string[]) {
    return new Promise((resolve) => {
      chrome.storage.sync.get(keys, (items) => {
        resolve(items);
      });
    });
  }
  async set(values: { [key: string]: any }) {
    return chrome.storage.sync.set(values);
  }
}

export default new Storage();
