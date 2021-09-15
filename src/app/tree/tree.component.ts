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
        this.treeData = success;
      });
  }
}
