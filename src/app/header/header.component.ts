import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { NgClass, NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';

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
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

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
}
