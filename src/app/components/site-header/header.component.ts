import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";

@Component({
  standalone: true,
  selector: 'app-site-header',
  templateUrl: 'header.component.html',
  imports: [ 
    RouterModule, 
    MdbCollapseModule,
    MdbDropdownModule ]
})
export class HeaderComponent {
}
