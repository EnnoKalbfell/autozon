import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';

describe('DeleteConfirmationDialog', () => {
  let component: DeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
