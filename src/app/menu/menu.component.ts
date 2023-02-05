import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItemModal } from '../shared/menu-item-modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  menuItems: IMenuItemModal[] = [
    {
      id: "home",
      name: "Home",
      path: "home",
      class: "active",
      iconClass: "material-symbols-outlined",
      iconName: "home"
    },
    {
      id: "tasks",
      name: "Tasks",
      path: "task/list",
      iconClass: "material-symbols-outlined",
      iconName: "task"
    }
  ]
  // get menu(): IMenuItemModal[] {
  //   console.log(this.route.getCurrentNavigation())
  //   return this.menuItems;
  // }
  onClick(id: string) {
    const menuItem = this.menuItems.find(x => x.id == id);
    this.menuItems.forEach((item) => {
      item.class = '';
    })
    menuItem.class = 'active';
    this.route.navigate([menuItem.path]);
  }
}
