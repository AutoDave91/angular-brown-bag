import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-angular';
  name: string = 'David';
  input: string = '';

  handleChange(e){
    this.input = e.target.value
  }
}
