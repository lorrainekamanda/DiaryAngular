import { Component, OnInit } from '@angular/core';
import{Diary} from '../diary'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // toggling(){
  //   this.newDiary.showGoals = !this.newDiary.showGoals
  // }
  addNewGoal(goal){
    this.diaries.push(goal)
  }


  completeGoal(finish,index){
     if(finish){
       this.diaries.splice(index,1)
     }
  }

  newDiary = new Diary("",new Date(),"")
  diaries:Diary[] = [
    new Diary ("Diary App",new Date(2020,3,30),"Complete Building My Diary App"),
    new Diary ("Submit Assignment",new Date(2020,4,1),"Submit project to TM")
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
