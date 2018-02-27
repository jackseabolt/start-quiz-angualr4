import { Component, OnInit } from '@angular/core'; 
import { QuizService } from '../services/quiz.service';

@Component({ 
    selector: 'board', 
    templateUrl: './board.component.html', 
    styleUrls: ['./board.component.css']
})

export class Board {
    constructor(private service: QuizService) {}

    quizes; 

    ngOnInit() {
        this.service.getQuizzes()
            .subscribe(res => {
                console.log("IT WORKED")
                this.quizes = res.json();
                console.log(this.quizes);  
            }), error => {
                console.error(error)
            }
    }

}