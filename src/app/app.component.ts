import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: string = '';  // Input property to filter the dynamic list

  updateFilter(value: string): void {
  }
}
