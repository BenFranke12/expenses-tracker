import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  people = signal<string[]>([]);

  add(name = '') {
    // append by returning a new array
    this.people.update(arr => [...arr, name]);
  }

  remove(index: number) {
    // remove by index and return a new array
    this.people.update(arr => arr.filter((_, i) => i !== index));
  }

  update(index: number, name: string) {
    // replace item at index by creating a shallow copy
    this.people.update(arr => {
      const copy = arr.slice();
      copy[index] = name;
      return copy;
    });
  }

  clearAll() {
    this.people.set([]);
  }
}