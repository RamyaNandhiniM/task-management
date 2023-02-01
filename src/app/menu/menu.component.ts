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
      path: "home"
    },
    {
      id: "tasks",
      name: "Tasks",
      path: "task/list"
    }
  ]
  onClick(id: string) {
    const menuItem = this.menuItems.find(x => x.id == id);

    //let listElements = document!.getElementsByTagName('ul');

    // if (listElements != null) {
    //   for (let i = 0; i < listElements.length; i++) {
    //     if (listElements.item(i) != null) {
    //       listElements.item(i).className = '';
    //     }
    //   }
    // }

    // console.log(listElements)
    // let menuIdEle = document.getElementById(id);
    // if (menuIdEle != null) menuIdEle.className = 'active'
    console.log(menuItem.path)
    this.route.navigate([menuItem.path]);
  }
}
