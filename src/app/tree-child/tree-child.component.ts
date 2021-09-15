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

    if (this.parentId) {
      const element: any = document.getElementById(this.parentId);
      element.indeterminate = true;
    }
  }
}
