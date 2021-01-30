import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//import axios from 'axios';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  // const headerDict = {
  //   "x-rapidapi-key": "cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6",
	// 	"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
	// 	"useQueryString": true
  // }
  
  // const requestOptions = {                                                                                                                                                                                 
  //   headers: new Headers(this.headerDict), 
  // };
  
  // return this.http.get(this.heroesUrl, requestOptions)

  // options: {
  //   headers?: HttpHeaders | {["x-rapidapi-key"]: string | "cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6"},
  //   observe?: 'body' | 'events' | 'response',
  //   params?: HttpParams|{[param: string]: string | string[]},
  //   reportProgress?: boolean,
  //   responseType?: 'arraybuffer'|'blob'|'json'|'text',
  //   withCredentials?: boolean,
  // }

  var axios: any = require("axios").default;

  const options = {
    method: 'GET',
    url: 'https://covid-19-statistics.p.rapidapi.com/reports/total',
    params: {date: '2020-04-07'},
    headers: {
      'x-rapidapi-key': 'cc23854be3msh80f7d131de623c6p14400djsnff7e1752faa6',
      'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response: any) {
    console.log(response.data);
  }).catch(function (error: any) {
    console.error(error);
  });


}