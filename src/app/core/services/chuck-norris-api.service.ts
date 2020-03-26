import { debounceTime } from 'rxjs/operators';
import { ChuckNorrisJoke, JokesQueryResult } from './../interfaces/chuck-norris-joke';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisApiService {

  constructor(
    private http: HttpClient
  ) { }

  getJoke(category?: string){
    // environment.api_chuck_norris + ""
    //return this.http.get<any>(`${environment.api_chuck_norris}random`, {observe: 'response'}); Así se hace con el cuerpo http Completo
    /*const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('access_token'));*/
    
    let params;
    if(category){
      params = new HttpParams().set('category', category);
    }
    //return this.http.get<ChuckNorrisJoke>(`${environment.api_chuck_norris}random`, {params, headers});
    return this.http.get<ChuckNorrisJoke>(`${environment.api_chuck_norris}random`, {params});
  }

  getCategories(){
    return this.http.get<string[]>(`${environment.api_chuck_norris}categories`);
  }

  getJokesByQuery(query: string){
    const params = new HttpParams()
      .set('query', query)
    return this.http.get<JokesQueryResult>(`${environment.api_chuck_norris}search`, {params});
  }
}
