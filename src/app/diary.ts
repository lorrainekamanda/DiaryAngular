export class Diary {
    showGoals:boolean
    constructor(public name:string,public date:Date,public done:string){
        this.showGoals = false
    }
}
