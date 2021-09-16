import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tree } from 'src/app/models/tree.model';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnDestroy {

  public treeData: Tree[];
  public subscriptions: Subscription[] = [];

  constructor(
    private treeService: TreeService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.treeService.getContacts().subscribe(data => {
        this.treeData = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
