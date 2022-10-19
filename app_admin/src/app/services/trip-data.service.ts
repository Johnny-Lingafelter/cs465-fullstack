import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Authresponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { Trip } from '../models/trip';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http, @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;
  private httpOptions = new RequestOptions({
      headers: new Headers({'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`})
  });

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData, this.httpOptions)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    return this.http
      .put(this.tripUrl + formData.code, formData, this.httpOptions)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#DeleteTrip');
    return this.http
      .delete(this.tripUrl + formData.code, this.httpOptions)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    const url: string = `${this.apiBaseUrl}${urlPath}`;
    return this.http.post(url, user)
                    .toPromise()
                    .then(response => response.json() as Authresponse)
                    .catch(this.handleError);
  }
}
