import { Component, OnInit } from '@angular/core'; 
import { NasaService } from '../../services/nasa.service'; 
import { AppState } from '../../reducers/reducer'; 
import { NgRedux, select } from 'ng2-redux';
import { setNasaImage, togglePicture } from '../../actions/actions'; 


@Component({
    templateUrl: './nasa.component.html', 
    selector: 'nasa', 
    styleUrls: ['./nasa.component.css']
})

export class Nasa implements OnInit {
    constructor(private service: NasaService, private ngRedux: NgRedux<AppState>) {

    }

    @select('nasaImageUrl') nasaImageUrl; 

    ngOnInit() {
        this.service.getPicture()
            .subscribe(res => {
                let imageData = res.json()
                this.ngRedux.dispatch(setNasaImage(imageData))
            }), error => {
                console.error(error); 
            }
    } 

    photoToggle() {
        this.ngRedux.dispatch(togglePicture())
    }
}