import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Array<any> = []
  fav: Array<any> = []
  constructor() { }

  ngOnInit() {
    Axios("https://www.breakingbadapi.com/api/characters").then(response =>{this.characters = response.data;})
  }

  onDelete(e){
    const index = this.characters.findIndex(val => {
      return val.char_id == e
    })
    this.characters.splice(index, 1)
  }
  onFav(e){
    const index = this.characters.findIndex(val => {
      return val.char_id == e
    })
    this.fav.push(this.characters[index])
  }
}
