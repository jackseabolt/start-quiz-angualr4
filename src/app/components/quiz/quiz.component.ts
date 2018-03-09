import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../../reducers/reducer';
import { QuizService } from '../../services/quiz.service';  
import { clearQuiz } from '../../actions/actions'; 

@Component({ 
    selector: 'quiz', 
    templateUrl: './quiz.component.html', 
    styleUrls: ['./quiz.component.css']
})

export class Quiz implements OnInit {
    constructor(private ngRedux: NgRedux<AppState>, private service: QuizService) {}

    @select('currentQuiz') currentQuiz$;
    @select('currentQuestion') currentQuestion;
    @select('quizLength') quizLength;
    @select('answers') answers; 
    @select('sessionId') sessionId$; 
    @select('continue') continue$; 
    @select('correctAnswer') correctAnswer$; 
    correctAnswer; 
    sessionId; 
    continue; 
    currentQuiz; 

    started = false; 
    answered = false;
    userAnswer; 

    ngOnInit() {
        this.sessionId$.subscribe(sessionId => this.sessionId = sessionId); 
        this.correctAnswer$.subscribe(correctAnswer => this.correctAnswer = correctAnswer); 
        this.continue$.subscribe(cont => this.continue = cont); 
        this.currentQuiz$.subscribe(currentQuiz => this.currentQuiz = currentQuiz);  
    }

    startQuiz() {
        this.started = !this.started
    }

    // handleSubmit(event) {  
    //     event.preventDefault();
    //     if (this.props.correctAnswer && this.props.continue) {
    //         this.props.dispatch(getNewQuestion(this.props.title, this.props.sessionId)); 
    //     }
    //     else if (this.props.continue) {
    //         const { answer } = this.form; 
    //         this.props.dispatch(answerQuiz(this.props.title, answer.value, this.props.sessionId)); 
    //     }
    //     else {
    //         this.props.dispatch(deleteSession(this.props.sessionId))
    //     }
    // }

    handleSubmit(quizAnswer) {
        console.log(this.currentQuiz, this.userAnswer, this.continue, this.sessionId, this.correctAnswer)


        if (this.correctAnswer && this.continue) {
            // this.props.dispatch(getNewQuestion(this.props.title, this.props.sessionId)); 
        }
        else if (this.continue) {
            this.answered = !this.answered
            console.log("HEEEEEEYYYYYY")
            this.service.answerQuiz(this.currentQuiz, this.userAnswer, this.sessionId) 
                .subscribe(res => {
                    console.log(res.json())
                    console.log(res.json().correct_answer)
                })
                // .then(quiz => {}
            //     if(quiz.quizLength) {
            //         return dispatch(setCurrentQuizStatus(quiz))
            //     } else {
            //         return console.error('Quiz has no questions!')
            //     }
            // })
            // .catch(err => console.error(err)); 
        // }
        }
        else {
            // this.props.dispatch(deleteSession(this.props.sessionId))
        }
    }

    handleClose() {
        this.service.deleteSession(this.sessionId)
            .subscribe(res => {
                this.ngRedux.dispatch(clearQuiz())
            })
            , error => {
                console.error(error); 
            }
    }
}