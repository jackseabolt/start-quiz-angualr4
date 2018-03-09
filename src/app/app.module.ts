import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Nasa } from './nasa.component';
import { NasaService } from './services/nasa.service';
import { Header } from './header/header.component';
import { Welcome } from './welcome/welcome.component'; 
import { QuizService } from './services/quiz.service';
import { Board } from './board/board.component';
import { BoardPost } from './board-post/board-post.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { AppState, mainReducer, initialState } from './reducers/reducer'; 
import { RouterModule } from '@angular/router';  
import { NasaPhoto } from './nasa-photo/nasa-photo.component';
import { NasaPhotoInfo } from './nasa-photo-info/nasa-photo-info.component';
import { Quiz } from './quiz/quiz.component';

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
