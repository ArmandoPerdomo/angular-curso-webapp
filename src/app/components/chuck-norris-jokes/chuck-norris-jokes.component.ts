import { FormatDatePipe } from './../../core/pipes/format-date.pipe';
import { ChuckNorrisJoke, JokesQueryResult } from './../../core/interfaces/chuck-norris-joke';
import { ChuckNorrisApiService } from './../../core/services/chuck-norris-api.service';
import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { timeout, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.scss']
})
export class ChuckNorrisJokesComponent implements OnInit, AfterViewInit {

  actualJoke: ChuckNorrisJoke;
  categories: string[];

  actualCategory: string;
  loadingJoke: boolean;
  loadingFilteredJokes: boolean;

  resulSetQuery: JokesQueryResult;

  page_size: number;
  page_number: number;
  pageSizeOptions: number[];

  @ViewChild('filterInput') filterInput: ElementRef;

  constructor(
    private chuckNorrisService: ChuckNorrisApiService,
    private formatDatePipe: FormatDatePipe
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getRandomJoke();
    //this.queryJokes("8000");
    this.page_size = 3;
    this.page_number = 1;
    this.pageSizeOptions = [3,5,10,20];
  }

  ngAfterViewInit(){
    console.log(this.filterInput);
    this.handleSearchField();
  }

  getRandomJoke(){
    this.loadingJoke = true;
    this.chuckNorrisService.getJoke(this.actualCategory).subscribe(
      (joke) => {
        console.log('Respuesta correcta: Joke', joke);
        this.actualJoke = joke;
        console.log('llamando el pipe desde mi controlador', this.formatDatePipe.transform(joke.updated_at, 'LT'))
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

  /**
   * https://medium.com/aviabird/rxjs-reducing-number-of-api-calls-to-your-server-using-debouncetime-d71c209a4613
   * Debounce Time ¿Como Funciona?
   */
  handleSearchField(){
    const el = this.filterInput.nativeElement;
    const obs = fromEvent(el, 'keydown'); // rxjs (keydown) (keypress) (enter) (click)
    obs.pipe(debounceTime(1000)).subscribe(
      (event: any) => {
        const value = event.target.value || '';
        console.log('Valor escrito en el input ->', event.target.value);
        if(value.length < 3){
          alert('Debe de escribir al menos 3 caracteres');
          return;
        }
        this.queryJokes(value);
      }
    )
  }

  queryJokes(query: string){
    this.loadingFilteredJokes = true;
    this.chuckNorrisService.getJokesByQuery(query).subscribe(
      (data) => {
        console.log('Llegó la data filtrada', data);
        this.resulSetQuery = data;
        this.loadingFilteredJokes = false;
      }, (error) => {
        console.error(error);
        alert("Error al llamar al api: Error categories");
        this.loadingFilteredJokes = false;
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

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

}
