import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../../reducers/reducer';  

@Component({
    templateUrl: './score.component.html', 
    styleUrls: ['./score.component.css'], 
    selector: 'score'
})

export class Score {
    constructor(private ngRedux: NgRedux<AppState>) {}

    @select('score') score; 
    @select('currentIndex') currentIndex;
}