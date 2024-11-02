import { Component, input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { NgClass, NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'app-menu-item',
    standalone: true,
    imports: [BadgeModule, NgIf, Ripple, NgClass],
    templateUrl: './menu-item.component.html',
    styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
    item = input.required<MenuItem>();
    root = input.required<boolean>();
}
