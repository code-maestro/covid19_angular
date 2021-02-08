import { Component, Output, EventEmitter, OnInit} from '@angular/core';

import { ApiClient } from "../ApiClient";

import { Post } from '../posts';

@Component({
  selector: 'app-uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.css']
})

export class UgandaComponent implements OnInit {

  
  deaths : String = "Total deaths from all over the country";
  active : String = "Total Active cases from all over the country";
  samples : String = "Total Samples taken from all over the country";
  confirmed : String = "Total confirmed cases from all over the country";
  recoveries : String = "Total recovered cases from all over the country";
  followup : String = "Total follow up contacts of the confirmed cases from all over the country";

  readonly ROOT_URL = 'https://covid-19-data.p.rapidapi.com/country';

	posts: any;
	
  ngOnInit(): void {
    this.loadFriends();
  }

  public friends: Post[];
 
	private apiClient: ApiClient;
 
	// I initialize the app-component.
	constructor( apiClient: ApiClient ) {
 
		this.apiClient = apiClient;
		this.friends = [];
	}

	public async loadFriends() : Promise<void> {
 
		try {
			this.friends = await this.apiClient.get<Post[]>({
				url: 'https://covid-19-data.p.rapidapi.com/country',
				params: {
          name: 'uganda' 
        },
        headers: {
          'x-rapidapi-key': 'cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6',
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
			});
		} catch ( error ) {
			console.error( error ); 
		}
	}

		// SHARING DATA TO PARENT
		numbers: string = "Hello wolrd";

		@Output() numbersEvent = new EventEmitter<string>();

		public sendNumbers(){
			this.numbersEvent.emit(this.numbers);
		}

}


