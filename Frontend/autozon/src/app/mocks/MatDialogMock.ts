import { of } from 'rxjs';

export class MatDialogMock {
  open(): any {
   return {
     afterClosed: () => of(true)
   };
 }
}
