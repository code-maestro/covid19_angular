import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigService {

  public numbersSource = new BehaviorSubject<string>("default message");

  currentNumbers = this.numbersSource.asObservable();

  constructor(){  }

  changeMessage(message: string){
    this.numbersSource.next(message);
  }

}

