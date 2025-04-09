import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
// import { CommentSection } from '../comments.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, FormsModule, CommonModule, UpperCasePipe, RouterModule, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showMessage = false;
  buttonText = 'Click To Redeem Eternal Life ';
  fruits = [' Apples', 'Grapes', 'Peaches'];
  username = '';
  password = '';
  isLoggedIn = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
    this.buttonText = this.showMessage ? 'Hide' : 'Show'
  }

  login() {
    if (this.username === 'lamlankosi' && this.password === 'password') {
      this.isLoggedIn = true
    } else {
      alert('Invalid Credentials please try again')
    }
  }
}
