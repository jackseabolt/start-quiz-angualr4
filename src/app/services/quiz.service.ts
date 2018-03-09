import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()

export class QuizService {
    constructor(private http: Http) {}

    getQuizzes() {
        return this.http.get('http://localhost:8080/quiz/'); 
    }

    getNewQuiz(title){
        return this.http.get(`http://localhost:8080/quiz/${title}/question/new`)
    }

    deleteSession(id) {
        console.log("HERE IS ID", id)
        return this.http.delete(`http://localhost:8080/session/${id}`)
    }

    answerQuiz(title, answer, sessionId) {
        return this.http.post(`http://localhost:8080/quiz/${title}/answer/${sessionId}`, answer)
    }
}
