import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree.model';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  public treeData: Tree[];

  constructor(
    private treeService: TreeService
  ) { }

  ngOnInit(): void {
    this.treeService.getContacts()
      .then(data => data.json())
      .then(success => {
        this.treeData = Object.values(success);
        this.treeData.forEach(contact => {
          contact.selected = false;
          contact.opened = false;
          if (contact.children) {
            contact.children = Object.values(contact.children);
            contact.children.map(child => {
              child.selected = false;
              child.opened = false;
            });
          }
        });
        console.log(this.treeData);
      });
  }

  selectChildren(value: any, item: any): void {
    console.log(value);
    if (item.children) {
      item.children.forEach(child => {
        child.selected = value;
      });
    }
  }

}
