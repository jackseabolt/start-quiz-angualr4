import { Component, OnInit } from '@angular/core'; 
import { QuizService } from '../../services/quiz.service';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../../reducers/reducer'; 
import { setAllQuizes } from '../../actions/actions';

@Component({ 
    selector: 'board', 
    templateUrl: './board.component.html', 
    styleUrls: ['./board.component.css']
})

export class Board {
    constructor(private service: QuizService, private ngRedux: NgRedux<AppState>) {}

    @select('quizes') quizes; 

    ngOnInit() {
        this.service.getQuizzes()
            .subscribe(res => {
                let quizes = res.json().quizes; 
                this.ngRedux.dispatch(setAllQuizes(quizes))
            }), error => {
                console.error(error)
            }
    }

}