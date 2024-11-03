import { Component } from '@angular/core';
import { AppMenuComponent } from './app-menu/app-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [AppMenuComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {}
