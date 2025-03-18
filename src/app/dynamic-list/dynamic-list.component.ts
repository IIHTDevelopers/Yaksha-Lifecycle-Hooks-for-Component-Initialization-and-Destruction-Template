import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, OnDestroy } from '@angular/core';
import { DynamicListService } from '../dynamic-list.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  filter: string = '';
  items: string[] = [];
  private subscription: any;

  constructor(private dynamicListService: DynamicListService) {
  }

  // ngOnInit: Called once after the component is initialized
  ngOnInit(): void {
  }

  // ngOnChanges: Called whenever an input property changes
  ngOnChanges(changes: SimpleChanges): void {
  }

  // ngDoCheck: Called during every change detection cycle
  ngDoCheck(): void {
  }

  // ngOnDestroy: Called when the component is destroyed
  ngOnDestroy(): void {
  }
}
