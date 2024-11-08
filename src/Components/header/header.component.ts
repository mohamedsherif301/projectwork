import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  atTop: boolean = true;

  @HostListener('window:scroll', [])
onWindowScroll() {
  this.atTop = window.scrollY < 50;
}


}

