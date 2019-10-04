import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  openMenu(e: Event) {
    // tslint:disable-next-line: no-shadowed-variable
    const selectElement =  document.querySelector('nav');
   // selectElement(element: 'nav').classList.toggle(token: 'active');
    selectElement.classList.toggle('active');
  }

}
