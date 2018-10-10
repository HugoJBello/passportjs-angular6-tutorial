import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private http: HttpClient) { }
  urlBackend = 'http://localhost:3000';


  async getEntry(title: string): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    return await this.http.get(this.urlBackend + '/titled/' + title, httpOptions).toPromise();
  }

  async getEntries(limit: number, skip: number): Promise<any> {
    return await this.http.get(this.urlBackend + '/entries/entries_list/limit=' + limit + '&skip=' + skip).toPromise();
  }

  async saveEntry(entry: BlogEntry): Promise<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
    };
    return await this.http.post(this.urlBackend + '/entries/save_entry', entry, httpOptions).toPromise();
  }

}

export interface BlogEntry {
  title: string;
  content: string;
  tags: string;
}
