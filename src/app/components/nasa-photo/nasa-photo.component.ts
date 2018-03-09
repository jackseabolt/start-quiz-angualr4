import { Component } from '@angular/core'; 
import { AppState } from '../../reducers/reducer'; 
import { NgRedux, select } from 'ng2-redux'; 
import { togglePicture, togglePictureInfo } from '../../actions/actions'; 

@Component({
    selector: 'nasaPhoto',
    templateUrl: './nasa-photo.component.html', 
    styleUrls: ['./nasa-photo.component.css']
})

export class NasaPhoto {
    constructor(private ngRedux: NgRedux<AppState>) {}

    @select('nasaImageUrl') nasaImageUrl; 
    @select('infoOn') infoOn; 

    photoToggle() {
        this.ngRedux.dispatch(togglePicture()); 
    }

    infoToggle() {
        this.ngRedux.dispatch(togglePictureInfo()); 
    }
}