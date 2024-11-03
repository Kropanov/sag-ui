import { Component, OnInit, viewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { NgIf } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { UserMenuItemComponent } from './user-menu-item/user-menu-item.component';

@Component({
    selector: 'app-user-menu',
    standalone: true,
    imports: [MenuModule, BadgeModule, AvatarModule, NgIf, Ripple, UserMenuItemComponent],
    templateUrl: './user-menu.component.html',
    styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent implements OnInit {
    items: MenuItem[] | undefined;
    menu = viewChild<Menu>('menu');

    ngOnInit(): void {
        this.items = [
            {
                separator: true,
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N',
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S',
                    },
                ],
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O',
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2',
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q',
                    },
                ],
            },
            {
                separator: true,
            },
        ];
    }

    toggleMenu(event: Event) {
        this.menu()!.toggle(event);
    }
}
