/** */
import { Component } from '@angular/core';

/** Interface from Material Angular CheckBox */
import { MatCheckboxChange } from '@angular/material/checkbox';

/** Interfaces */
import { ItemModel } from './interfaces/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  /** All Items Selected */
  public allItemsSelected: boolean = false;

  /** Items */
  public items: ItemModel[] = [
    {
      display: 'Item',
      checked: false
    },
    {
      display: 'Item',
      checked: false
    },
    {
      display: 'Item',
      checked: false
    },
    {
      display: 'Item',
      checked: false
    }
  ];
  constructor() { }

  /**
   * 
   * @param event
   * On event change checkbox "Select All" if true we checked all checkbox.
   */
  public onSelectAll(event: MatCheckboxChange): void {
    console.log(event);
    if (event.checked) {
      for (const item of this.items) {
        item.checked = true;
      }
    }
  }

  /**
   *
   * @param event
   * @param index
   *  On event change on select item if all items are checked so we checked "Select All" checkbox.
   */
  public onSelectItem(event: MatCheckboxChange, index: number): void {
    this.items[index].checked = event.checked;
    let allItemsSelected: boolean = true;
    for (const item of this.items) {
      if (!item.checked) {
        allItemsSelected = false;
        break;
      }
    }
    this.allItemsSelected = allItemsSelected;
  }

}
