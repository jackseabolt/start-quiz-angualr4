import { Component, OnInit } from '@angular/core'; 
import { NasaService } from './services/nasa.service'; 

@Component({
    templateUrl: './nasa.component.html', 
    selector: 'nasa', 
    styleUrls: ['./nasa.component.css']
})

export class Nasa implements OnInit {
    constructor(private service: NasaService) {

    }

    imageUrl; 

    ngOnInit() {
        console.log("this was called")
        this.service.getPicture()
            .subscribe(res => {
                this.imageUrl = res.json().url
                console.log(this.imageUrl)
            }), error => {
                console.error(error); 
            }
    }
    
}