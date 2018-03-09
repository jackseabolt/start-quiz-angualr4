import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { AppState } from '../reducers/reducer';  
import { togglePictureInfo } from '../actions/actions'; 

@Component({
    selector: 'nasaPhotoInfo', 
    templateUrl: './nasa-photo-info.component.html', 
    styleUrls: ['./nasa-photo-info.component.css']
})

export class NasaPhotoInfo {
    constructor(private ngRedux: NgRedux<AppState>) {}

    @select('infoOn') infoOn; 
    @select('nasaImageExplanation') nasaImageExplanation; 
    @select('nasaImageTitle') nasaImageTitle; 

    infoToggle() {
        this.ngRedux.dispatch(togglePictureInfo()); 
    }
}