import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ReportModalComponent } from '../reportmodal/reportmodal.component';

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.css']
})
export class TopbarComponent {
  constructor(private storeService: StoreService,
              public dialog: MatDialog) {}

  public onEnter(value: string): void {
    this.storeService.loadStores(value);
  }

  public openDialog(): void {
    this.dialog.open(ReportModalComponent, {
      width: '500px',
      height: '600px'
    } as MatDialogConfig);
  }
}
