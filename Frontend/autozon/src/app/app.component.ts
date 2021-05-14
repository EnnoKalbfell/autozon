import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autozon';
  @ViewChild('sidenav') public sidenav?: MatSidenav;
  @ViewChild('drawer') public drawer?: MatSidenav;

  toggleSideNav = (): void => {
    if (this.drawer && this.drawer.opened) {
      this.drawer.close();
    } else if (this.drawer) {
      this.drawer.open();
    }
  }
}
