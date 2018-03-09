import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../../reducers/reducer';
import { QuizService } from '../../services/quiz.service';  
import { clearQuiz, setCurrentQuizStatus } from '../../actions/actions'; 

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
    @select('response') response; 

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


    handleSubmit(quizAnswer) {
        if (this.correctAnswer && this.continue) {
            this.service.getNewQuestion(this.currentQuiz, this.sessionId) 
                .subscribe(res => {
                    let quiz = res.json()
                    if(quiz.quizLength) {
                        this.answered = !this.answered
                        return this.ngRedux.dispatch(setCurrentQuizStatus(quiz))
                    } else {
                        return console.error('Quiz has no questions!')
                    }
                }),
            error => console.error(error); 
        }
        else if (this.continue) {
            this.answered = !this.answered
            this.service.answerQuiz(this.currentQuiz, this.userAnswer, this.sessionId) 
                .subscribe(res => {
                    let quiz = res.json()
                    this.ngRedux.dispatch(setCurrentQuizStatus(quiz))
                }), error => {
                    console.error(error); 
                }
        }
        else {
            this.service.deleteSession(this.sessionId)
                .subscribe(res => {
                    this.ngRedux.dispatch(clearQuiz())
                }), error => {
                    console.error(error); 
                }
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