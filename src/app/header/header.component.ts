import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faCartShopping, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  envelope = faEnvelope;
  phone = faPhoneVolume;
  user = faUser;
  cart = faCartShopping;
  downArrow = faAngleDown;

  subMenus: string[] = ['Sofas', 'Beds', 'Mattress', 'Chairs', 'Tables', 'Storages', 'Lightings', 'Decors'];

  constructor() { }

  ngOnInit(): void {
  }

}
