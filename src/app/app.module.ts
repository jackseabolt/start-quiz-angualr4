import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Nasa } from './nasa.component';
import { NasaService } from './services/nasa.service';
import { Header } from './header/header.component';
import { Welcome } from './welcome/welcome.component'; 
import { BoardHeader } from './board-header/board-header.component'; 
import { QuizService } from './services/quiz.service';
import { Board } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent, 
    Nasa, 
    Header, 
    Welcome,
    BoardHeader, 
    Board 
  ],
  imports: [
    BrowserModule, 
    HttpModule
  ],
  providers: [NasaService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
