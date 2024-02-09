import { Component, OnInit } from '@angular/core';
import { trigger,state,transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations:[
    trigger('animations',[
      state('active',style({
        TransformStream:'translate(10px,20px)'
      })),
      state('inactive',style({
        TransformStream:'translate(40px,50px)'
      })),
      transition('inactive => active',animate('1000ms ease-in')),
      transition('active => inactive',animate('1000ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
state: string = 'inactive'
  constructor(){}
  ngOnInit():void{
    setTimeout({} => {
      this.state = 'active';
      },500);
    }
}
