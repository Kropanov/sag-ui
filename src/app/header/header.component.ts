import { Component } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { AppMenuComponent } from './app-menu/app-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        AvatarModule,
        MegaMenuModule,
        PrimeTemplate,
        MenubarModule,
        BadgeModule,
        NgClass,
        InputTextModule,
        Ripple,
        NgIf,
        MenuModule,
        CommonModule,
        AppMenuComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {}
