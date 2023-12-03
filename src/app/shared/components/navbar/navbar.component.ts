import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menus = [
    { name: "Home", path: "/home" },
    { name: "Genre", path: "/genre" },
    { name: "Movie", path: "/movie" },
  ];
}
