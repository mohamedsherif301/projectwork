import { Component } from '@angular/core';
import { Project } from '../../Models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {

  projects!:Project[]
  filerProject!:Project[];

  colors = ['blue-600', 'teal-400', 'purple-600','teal-600'];
    getTechnologyColor(index: number) {
      console.log(index);

    console.log(this.colors[index]);


    return this.colors[index ];

  // Cycle through the colors array if there are more technologies than colors
  //
   // استخدم this.colors.length بدلاً من length
  }
  constructor(){

    this.projects = [
        {
          name:"AngularEcommerce",
          imgUrl:"https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png",
          technologyies:["Angular","Tailwind","TypeScript"],
          color:"indigo",
          LiveLink:"",
          GithupLink:"https://github.com/mohamedsherif301/AngularEcommerce"

        },
        {
          name:"Tazkarti ",
          imgUrl:"https://tse1.mm.bing.net/th?id=OIP.tKBzb1E-fSNeZnXQ81MIEgHaEH&pid=Api&P=0&h=220",
          technologyies:["C#Asp.NET","msSql","JavaScript"],
          color:"purple",
          LiveLink:"https://github.com/mohamedsherif301/Tazkarti",
          GithupLink:"https://github.com/mohamedsherif301/Tazkarti"

        },
        {
          name:"UnversityCoursers",
          imgUrl:"https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=220",
          technologyies:["React","Authentication","DB Handel"],
          color:"cyan",
          LiveLink:"https://github.com/mohamedsherif301/ReactProject",
          GithupLink:"https://github.com/mohamedsherif301/ReactProject"

        },{
          name:"DashBoard Market",
          imgUrl:"https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
          technologyies:["JavaScript","LocalStoradge","CSS"],
          color:"purple",
          LiveLink:"https://market-fb824.web.app/",
          GithupLink:"https://github.com/mohamedsherif301/CRUDOPerations"

        },
      ]

      this.filerProject = this.projects;




  }
    filterProjects(cat:string):void{
        if(cat != "All"){

          this.filerProject = this.projects.filter((i)=>i.technologyies[0]== cat);
        }

    }
    ReturnAllProjects(){
      this.filerProject = this.projects;
    }





  }





