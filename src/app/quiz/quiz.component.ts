import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../reducers/reducer';  

@Component({ 
    selector: 'quiz', 
    templateUrl: './quiz.component.html', 
    styleUrls: ['./quiz.component.css']
})

export class Quiz {
    constructor(private ngRedux: NgRedux<AppState>) {}
}