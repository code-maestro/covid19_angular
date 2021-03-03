import { Component, OnInit} from '@angular/core';

import { ApiClient } from "../ApiClient";

import { Post } from '../posts';

@Component({
  selector: 'app-uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.css']
})

export class UgandaComponent implements OnInit {
	
  confirmed_cases : String = "Total confirmed cases";

	readonly WORLD_ROOT_URL = '';

  readonly ROOT_URL = 'https://covid-19-data.p.rapidapi.com/country';
	readonly API_KEY = 'cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6';
	readonly API_HOST = 'covid-19-data.p.rapidapi.com';

	posts: any;
	
  ngOnInit(): void {
		//this.loadWorldCases();
    this.loadUgCases();
		this.loadKeData();
		this.loadTzData();
		this.loadRwData();
		this.loadBuData();
		this.loadSSData();
		this.loadSoData();
  }

	public worldCases: Post[];
  public ugCases: Post[];
	public keCases: Post[];
	public tzCases: Post[];
	public rwCases: Post[];
	public buCases: Post[];
	public ssCases: Post[];
	public soCases: Post[];
 
	private apiClient: ApiClient;
 
	// I initialize the app-component.
	constructor( apiClient: ApiClient ) {
 
		this.apiClient = apiClient;

		this.worldCases = [];
		this.ugCases = [];
		this.keCases = [];
		this.tzCases = [];
		this.rwCases = [];
		this.buCases = [];
		this.ssCases = [];
		this.soCases = [];
	
	}

		// FUNCTION TO RETRIEVE UGANDAN DATA/STATS
		public async loadWorldCases() : Promise<void> {
 
			try {
				this.ugCases = await this.apiClient.get<Post[]>({
					url: this.ROOT_URL,
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

	// FUNCTION TO RETRIEVE UGANDAN DATA/STATS
	public async loadUgCases() : Promise<void> {
 
		try {
			this.ugCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
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

	// FUNCTION TO RETRIEVE KENYAN DATA/STATS
	public async loadKeData() : Promise<void> {
		try {
			this.keCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
          name: 'kenya' 
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

	// FUNCTION TO RETRIEVE TANZANIAN DATA/STATS
	public async loadTzData() : Promise<void> {
		try {
			this.tzCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
          name: 'tanzania' 
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

	// FUNCTION TO RETRIEVE RWANDAN DATA/STATS
	public async loadRwData() : Promise<void> {
		try {
			this.rwCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
					name: 'rwanda' 
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

	// FUNCTION TO RETRIEVE BURUNDI DATA/STATS
	public async loadBuData() : Promise<void> {
		try {
			this.buCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
					name: 'burundi' 
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

	// FUNCTION TO RETRIEVE SOUTH SUDANESE DATA/STATS
	public async loadSSData() : Promise<void> {
		try {
			this.keCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
					name: 'southsudan' 
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

	// FUNCTION TO RETRIEVE SOMALIA DATA/STATS
	public async loadSoData() : Promise<void> {
		try {
			this.soCases = await this.apiClient.get<Post[]>({
				url: this.ROOT_URL,
				params: {
					name: 'somalia' 
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


