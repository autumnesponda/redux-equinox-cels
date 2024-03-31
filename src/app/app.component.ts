import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/site-header/header.component";
import { FooterComponent } from './components/site-footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {}
