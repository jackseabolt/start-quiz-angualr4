import { Component, OnInit } from '@angular/core'; 
import { NasaService } from './services/nasa.service'; 
import { AppState } from './reducers/reducer'; 
import { NgRedux, select } from 'ng2-redux';
import { setNasaImage } from './actions/actions';  

@Component({
    templateUrl: './nasa.component.html', 
    selector: 'nasa', 
    styleUrls: ['./nasa.component.css']
})

export class Nasa implements OnInit {
    constructor(private service: NasaService, private ngRedux: NgRedux<AppState>) {

    }

    @select('nasaImageUrl') nasaImageUrl; 
    @select('counter') counter; 

    ngOnInit() {
        this.service.getPicture()
            .subscribe(res => {
                let imageUrl = res.json().url
                this.ngRedux.dispatch(setNasaImage(imageUrl))
            }), error => {
                console.error(error); 
            }
    } 
}