import { Component } from '@angular/core';
import { GameService } from '../service/game.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})

export class PlayComponent {
  numbersInput: string = ''; // User input as a string
  ticket: any; // To store the ticketDto from the response
  message: string = ''; // To store the success/failure message

  constructor(private gameService: GameService) { }

  submitNumbers(): void {
    const numbers = this.numbersInput.split(',').map(num => parseInt(num.trim(), 10)); 
    this.gameService.inputNumbers(numbers).subscribe(
      response => {
        this.ticket = response.ticketDto;
        this.message = response.message;
      },
      error => {
        console.error('Error submitting numbers', error);
        this.message = 'Failed to submit numbers. Please try again.';
      }
    );
  }
}