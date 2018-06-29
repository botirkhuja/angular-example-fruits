import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { EditService } from '../../core/edit.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit, OnDestroy {
  isChildrenLoaded: boolean;
  resolvedData: {loginStatus: boolean, message: string}

  private subscription: Subscription;

  constructor(
    private editService: EditService,
    private changeDetectionReferace: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((result: Data) => {
      this.resolvedData = result.data;
    });

    this.subscription = this.editService.currentEditingItem.subscribe((num: any) => {
      // 0: false
      // any other number: true
      // if (typeof num === 'number') {
      if (num >= 0) {
        console.log('editing number', num);
        this.isChildrenLoaded = true;
        this.changeDetectionReferace.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
