import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // images:String[]=['./assets/poert1.png','./assets/port2.png','./assets/port3.png'];

  // showImg(ele:HTMLDivElement):void{
  //   // console.log(ele);
  //   ele.style.display-Block;

  // }
  isCollapsed:boolean=true;

}
