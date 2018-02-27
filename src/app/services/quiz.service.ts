import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()

export class QuizService {
    constructor(private http: Http) {}

    getQuizzes() {
        return this.http.get('http://localhost:8080/quiz/'); 
    }
}