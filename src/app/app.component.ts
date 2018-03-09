import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from './reducers/reducer'; 
import { togglePicture } from './actions/actions'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  { 
  constructor(private ngRedux: NgRedux<AppState>) {}
  @select('photoDisplayed') photoDisplayed;

  quizDisplayed: false; 
}
