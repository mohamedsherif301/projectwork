import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import { HomeComponent } from '../Components/home/home.component';
import { SKilsComponent } from "../Components/skils/skils.component";
import { ProjectsComponent } from "../Components/projects/projects.component";
import { AboutUSComponent } from "../Components/about-us/about-us.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, SKilsComponent, ProjectsComponent, AboutUSComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectWork';
}
