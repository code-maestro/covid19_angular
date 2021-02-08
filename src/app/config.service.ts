import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiClient } from "./ApiClient";
import { Post } from './posts';

@Injectable()
export class ConfigService {
  
  readonly ROOT_URL = 'https://covid-19-data.p.rapidapi.com/country';

  posts: any;

  public friends: Post[];
 
	private apiClient: ApiClient;

  public numbersSource = new BehaviorSubject<string>("default message");

  currentNumbers = this.numbersSource.asObservable();

  constructor(apiClient: ApiClient){  
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

  changeMessage(message: string){
    this.numbersSource.next(message);
  }

  getData(){
    return  EVENTS
  }

}

const EVENTS = [
  {
    id: 1,
    name: 'Uganda',
    date: '5/5/2021',
    time: '22:47',
    location: {
      address: 'Booma',
      city: 'Mbarara',
      country: 'Uganda'
    }
  }
]

