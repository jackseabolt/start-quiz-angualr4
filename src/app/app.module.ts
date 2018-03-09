import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { Nasa } from './components/nasa/nasa.component';
import { NasaService } from './services/nasa.service';
import { Header } from './components/header/header.component';
import { Welcome } from './components/welcome/welcome.component'; 
import { QuizService } from './services/quiz.service';
import { Board } from './components/board/board.component';
import { BoardPost } from './components/board-post/board-post.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AppState, mainReducer, initialState } from './reducers/reducer'; 
import { RouterModule } from '@angular/router';  
import { NasaPhoto } from './components/nasa-photo/nasa-photo.component';
import { NasaPhotoInfo } from './components/nasa-photo-info/nasa-photo-info.component';
import { Quiz } from './components/quiz/quiz.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent, 
    Nasa, 
    Header, 
    Welcome, 
    Board, 
    BoardPost,
    NasaPhoto, 
    NasaPhotoInfo, 
    Quiz 
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    NgReduxModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: AppComponent}, 
      { path: 'picture', component: NasaPhoto}, 
    ])
  ],
  providers: [NasaService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(mainReducer, initialState)
  }
}
