import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import{ Diary} from '../diary'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 @Input() newDiary:Diary

  @Output() finish = new EventEmitter <boolean>()

  @Input() diary:Diary
  deleteGoal(complete:boolean){
    this.finish.emit(complete)
  }

constructor() { }
 
  ngOnInit(): void {
  }

}
