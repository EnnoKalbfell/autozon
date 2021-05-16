export class StorageMock {
  public storage: any = {};

  public setItem(key: string, value: string): void {
    this.storage[key] = value || '';
  }
  public getItem(key: string): string | null {
    return key in this.storage ? this.storage[key] : null;
  }
  public removeItem(key: string): void {
    delete this.storage[key];
  }
  public length(): number {
    return Object.keys(this.storage).length;
  }
  public key(i: number): string | null {
    const keys = Object.keys(this.storage);
    return keys[i] || null;
  }
}
