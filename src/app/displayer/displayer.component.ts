
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Diary} from '../diary'


import { from } from 'rxjs';
@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent implements OnInit {
  newDiary = new Diary("",new Date(),"")

  @Output() addDiary = new EventEmitter <Diary>()
 
 
  constructor() { }
     submitGoal(){
      this.addDiary.emit(this.newDiary)
     }


  ngOnInit(): void {
  }

}
