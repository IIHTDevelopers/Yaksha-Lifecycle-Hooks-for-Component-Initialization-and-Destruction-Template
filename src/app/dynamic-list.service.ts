import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicListService {

  constructor() { }

  // Simulate fetching data (mock API call)
  getItems() {
    // Mock data as an observable
    return of(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  }
}
