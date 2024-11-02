import { Component, input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user-menu-item',
    standalone: true,
    imports: [BadgeModule, NgIf, Ripple],
    templateUrl: './user-menu-item.component.html',
    styleUrl: './user-menu-item.component.scss',
})
export class UserMenuItemComponent {
    item = input.required<MenuItem>();
}
