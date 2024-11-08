import { Component } from '@angular/core';
import { SKilsComponent } from '../skils/skils.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SKilsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
