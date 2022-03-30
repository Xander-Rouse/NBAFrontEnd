/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './players.model';

@Injectable()
export class PlayersService {
  apiUrl: string = 'https://613d68c694dbd600172ab8c6.mockapi.io';\

  constructor(private http: HttpClient) { }
 
  getAllMovies() {
    return this.http.get<Player[]>(`${this.apiUrl}/movies`);
  }

  getMovieById(playerId: string) {
    return this.http.get<Player>(`${this.apiUrl}/players/${playerId}`)
  }
}*/