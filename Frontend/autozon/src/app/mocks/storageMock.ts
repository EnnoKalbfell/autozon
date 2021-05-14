export class StorageMock {
  public storage: any = {}

  public setItem(key: string, value: string) {
    this.storage[key] = value || '';
  }
  public getItem(key: string) {
    return key in this.storage ? this.storage[key] : null;
  }
  public removeItem(key: string) {
    delete this.storage[key];
  }
  public length() {
    return Object.keys(this.storage).length;
  }
  public key(i: number) {
    const keys = Object.keys(this.storage);
    return keys[i] || null;
  }
}