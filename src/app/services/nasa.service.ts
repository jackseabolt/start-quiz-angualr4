import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable() 
export class NasaService {
   constructor(private http: Http) {}

    private url ='https://api.nasa.gov/planetary/apod?api_key=IBNbXHbyn8pC2k9EVxumOUauFaccdzinCD0WJcSA';

   getPicture() {
       return this.http.get(this.url); 
   }
}