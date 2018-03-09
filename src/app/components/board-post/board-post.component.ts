import { Component, Input, OnInit } from '@angular/core'; 
import { NgRedux } from 'ng2-redux'; 
import { AppState } from '../../reducers/reducer'; 
import { QuizService } from '../../services/quiz.service'; 
import { setCurrentQuizStatus } from '../../actions/actions'; 

@Component({ 
    templateUrl: './board-post.component.html', 
    styleUrls: ['./board-post.component.css'],
    selector: 'boardPost'
})

export class BoardPost {
    constructor(private ngRedux: NgRedux<AppState>, private service: QuizService ) {}

    @Input('quiz') quiz; 

    handleClick() {
        console.log(this.quiz.title)
        this.service.getNewQuiz(this.quiz.title)
            .subscribe(res => {
                let quiz = res.json()
                if(quiz.quizLength) {
                    console.log(quiz)
                    this.ngRedux.dispatch(setCurrentQuizStatus(quiz))
                } else {
                    return console.error('Quiz has no questions!', quiz)
                }
            })
             , error => {
                console.error(error); 
            }
    }
}