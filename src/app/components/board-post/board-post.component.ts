import { Component, Input } from '@angular/core'; 

@Component({ 
    templateUrl: './board-post.component.html', 
    styleUrls: ['./board-post.component.css'],
    selector: 'boardPost'
})

export class BoardPost {
    @Input('quiz') quiz: String; 
}