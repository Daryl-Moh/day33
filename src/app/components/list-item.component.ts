import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnChanges {

  @Input()
  items = [] as Item [] 

  // @Input()
  // get items(): Item[] {
  //   return this._items
  // }
  // set items(i: Item[]) {
  //   this._items = i
  //   this.itemCount = 0;
  //   for(let num of this._items)
  //     this.itemCount += num.quantity
  // }
  // private _items: Item [] = []

  @Output()
  onSelection = new Subject<number>()

  itemCount = 0;
  
  ngOnChanges(changes: SimpleChanges) {
    console.info('>>> simple changes: ', changes)
    let items: Item[] = changes['items'].currentValue
    this.itemCount = 0
    for (let i of items)
      this.itemCount += i.quantity
  }

  selected(idx: number) {
    console.info('selected >>> ', idx)
    this.onSelection.next(idx)
  }

}
