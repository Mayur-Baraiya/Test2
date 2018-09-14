import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1> 
              Hello {{name}} </h1>
              <p> Email: {{email}} </p>
              <p>Address: {{address.street}} </p>
              <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
              <div *ngIf="showHobbies">
              <h3>Hobbies</h3>
              <ul> 
              <li *ngFor="let hobby of hobbies; let i = index">
              {{hobby}} <button (click)="deleteHobby(i)">x</button>
              </li>
              </ul>
              <form (submit)="addHobby(hobby.value)">
              <label> Add Hobby: </label><br />
              <input type="text" #hobby /> <br />
              </form>
              </div>
              <hr />
              <h3> Edit User </h3>
                <form>
                <label>Name: </label><br />
                <input type="text" name="name" [(ngModel)]="name" /><br />
                <label>Email: </label><br />
                <input type="text" name="email" [(ngModel)]="email" /><br />
                <label>Street: </label><br />
                <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
                <label>City: </label><br />
                <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
                <label>State: </label><br />
                <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
                </form>

              `,
})
export class UserComponent {
 name: string;
 email: string;
 address: address;
 hobbies: string[];
 showHobbies: boolean;
constructor(){
    this.name = "Mayur Baraiya";
    this.email = "mayur.bm2405@gmail.com"
    this.address = {
      street: '39997 cedar blvd',
      city : 'newark',
      state : 'CA'

    }
    this.hobbies = ['dance', 'movies', 'sport'];
    this.showHobbies = false;
}

toggleHobbies() {
    if(this.showHobbies== true){
        this.showHobbies = false;
    } else {
        this.showHobbies = true;

    }
}

addHobby(hobby) {
    this.hobbies.push(hobby)
}
deleteHobby(i) {
    this.hobbies.splice(i, 1);
}

}

interface address {
    street: string;
    city: string;
    state: string;
}
