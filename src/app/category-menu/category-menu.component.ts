import { Component } from '@angular/core';

@Component({
    selector: 'app-category-menu',
    templateUrl: './category-menu.component.html',
    styleUrls: ['./category-menu.component.css']
})

export class CategoryMenuComponent{
    items: string[] = ['Fashion', 'Electronic', 'Sport', 'Music'];
}