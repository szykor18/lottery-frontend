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
  numbers: number[] = Array(6).fill(null); 
  ticket: any;
  message: string = ''; 

  constructor(private gameService: GameService) { }

  submitNumbers(): void {
    this.gameService.inputNumbers(this.numbers).subscribe(
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

  generateRandomNumbers(): void {
    let generatedNumbers: number[] = [];
    while (generatedNumbers.length < 6) {
      let num = Math.floor(Math.random() * 99) + 1;
      if (!generatedNumbers.includes(num)) {
        generatedNumbers.push(num);
      }
    }
    this.numbers = generatedNumbers;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}