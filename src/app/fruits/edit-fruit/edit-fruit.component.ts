import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { EditService } from '../../core/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit, OnDestroy {
  isChildrenLoaded: boolean;

  private subscription: Subscription;

  constructor(
    private editService: EditService,
    private changeDetectionReferace: ChangeDetectorRef
  ) { }

  ngOnInit() {
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
