import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '../models/tree.model';

@Component({
  selector: 'app-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.scss']
})
export class TreeChildComponent implements OnInit {

  @Input() list;
  @Input() parentId;

  constructor() { }

  ngOnInit(): void {
  }

  selectChildren(value: any, item: any): void {
    Object.values(item.children).forEach((child: Tree) => {
      child.selected = value;

      if (child.children) {
        this.selectChildren(value, child);
      }
    });
  }

  setParentIndeterminated(item: any, listObject: Tree): void {
    if (item.level > 0 && this.parentId) {
      const list: Tree[] = Object.values(listObject);
      const selectedList = list.filter(i => i.selected);
      const element: any = document.getElementById(this.parentId);
      if (list.length !== selectedList.length) {
        element.indeterminate = true;
      } else {
        element.indeterminate = false;
      }
    }
  }
}
