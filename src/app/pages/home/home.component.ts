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
      display: 'Item 1',
      checked: false
    },
    {
      display: 'Item 2',
      checked: false
    },
    {
      display: 'Item 3',
      checked: false
    },
    {
      display: 'Item 4',
      checked: false
    }
  ];
  constructor() { }

  /**
   *
   * @param event MatCheckboxChange
   * @description On event change checkbox "Select All" if true we checked all checkbox.
   */
  public onSelectAll(event: MatCheckboxChange): void {
    this.allItemsSelected = event.checked;
    if (event.checked) {
      for (const item of this.items) {
        item.checked = true;
      }
    }
  }

  /**
   *
   * @param event MatCheckboxChange
   * @param index Number
   * @description On event change on select item if all items are checked so we checked "Select All" checkbox.
   */
  public onSelectItem(event: MatCheckboxChange, index: number): void {
    this.items[index].checked = event.checked;
    if (!event.checked) {
      this.allItemsSelected = false;
      return;
    }
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
