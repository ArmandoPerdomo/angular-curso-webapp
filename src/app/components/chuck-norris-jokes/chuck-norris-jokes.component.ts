import { ChuckNorrisJoke } from './../../core/interfaces/chuck-norris-joke';
import { ChuckNorrisApiService } from './../../core/services/chuck-norris-api.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.scss']
})
export class ChuckNorrisJokesComponent implements OnInit {

  actualJoke: ChuckNorrisJoke;
  categories: string[];

  actualCategory: string;
  loadingJoke: boolean;

  constructor(
    private chuckNorrisService: ChuckNorrisApiService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getRandomJoke();
  }

  getRandomJoke(){
    this.loadingJoke = true;
    this.chuckNorrisService.getJoke(this.actualCategory).subscribe(
      (joke) => {
        console.log('Respuesta correcta: Joke', joke);
        this.actualJoke = joke;
        this.loadingJoke = false;
      }, (error) => {
        console.error(error);
        alert("Error al llamar al api: Error Jokes");
        this.loadingJoke = false;
      }
    );
  }

  getCategories(){
    this.chuckNorrisService.getCategories().subscribe(
      (categories) => {
        console.log('Respuesta correcta: Categorías', categories);
        this.categories = categories;
      }, (error) => {
        console.error(error);
        alert("Error al llamar al api: Error categories");
      }
    )
  }

  setActualCategory(category: string){
    if(category !== this.actualCategory){
      this.actualCategory = category;
      //this.getRandomJoke(category);
      this.getRandomJoke();
    }else{
      this.actualCategory = null;
      this.getRandomJoke();
    }
  }

}
