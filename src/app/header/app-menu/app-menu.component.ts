import { Component, OnInit, viewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { NgClass, NgIf } from '@angular/common';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        AvatarModule,
        BadgeModule,
        InputTextModule,
        MenuModule,
        MenubarModule,
        NgIf,
        PrimeTemplate,
        Ripple,
        NgClass,
        MenuItemComponent,
        UserMenuComponent,
    ],
    templateUrl: './app-menu.component.html',
    styleUrl: './app-menu.component.scss',
})
export class AppMenuComponent implements OnInit {
    items: MenuItem[] | undefined;
    userMenu = viewChild<UserMenuComponent>(UserMenuComponent);

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Features',
                icon: 'pi pi-star',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '⌘+B',
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '⌘+U',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette',
                                badge: '2',
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette',
                                badge: '3',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope',
                badge: '3',
            },
        ];
    }

    toggleUserMenu(event: Event) {
        this.userMenu()!.toggleMenu(event);
    }
}
