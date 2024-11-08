import { Component } from '@angular/core';
import { Skill } from '../../Models/skill';

@Component({
  selector: 'app-skils',
  standalone: true,
  imports: [],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css'
})
export class SKilsComponent {

  skills:Skill[] =[
                {
                  name:"Angular",
                  imgUrl:"https://img.icons8.com/?size=100&id=71257&format=png&color=000000"
                },
                {
                  name:"",
                  imgUrl:""
                }
  ]

}
