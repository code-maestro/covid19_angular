import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../posts';
import { ApiClient } from '../ApiClient';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  	
  confirmed_cases : String = "Total confirmed cases";

  readonly WORLD_ROOT_URL = '';
  readonly API_KEY = 'cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6';
  readonly API_HOST = 'covid-19-data.p.rapidapi.com';

  posts: any;

  public worldCases: Post[];

  private apiClient: ApiClient;

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // I initialize the app-component.
  constructor( apiClient: ApiClient ) {
  
    this.apiClient = apiClient;
  
    this.worldCases = [];

    this.loadWorldCases();

  }
  
  // FUNCTION TO RETRIEVE UGANDAN DATA/STATS
  public async loadWorldCases() : Promise<void> {

    try {
      this.worldCases = await this.apiClient.get<Post[]>({
        url: this.WORLD_ROOT_URL,
        params: {
          name: 'uganda' 
        },
        headers: {
          'x-rapidapi-key': this.API_KEY,
          'x-rapidapi-host': this.API_HOST
        }
      });
    } catch ( error ) {
      console.error( error ); 
    }
  }
}
