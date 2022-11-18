import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor:'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'green',
        color: 'white'
      })),
      transition('closed <=> open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseHorizontal', [
      state('open', style({
        width: '200px',
        opacity: 1,
        backgroundColor:'red'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.8,
        backgroundColor: "pink",
        color: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ 
          opacity: 1,
          color: 'cyan' 
        })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ 
          opacity: 0,
          color: 'orange' 
        }))
      ])
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      // this.isOpen = !this.isOpen;
    }, 3000)
  }

}
