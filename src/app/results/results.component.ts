import { Component } from '@angular/core';
import { ResultsService } from '../service/results.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  uid: string = '';
  resultMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private resultsService: ResultsService) { }

  fetchResults(): void {
    this.resultsService.getResults(this.uid).subscribe({
      next: (data) => {
        this.resultMessage = data.message;
        this.errorMessage = null;
      },
      error: (error) => {
        console.error('Error fetching results', error);
        this.errorMessage = error.error.message || 'Failed to fetch results. Please try again.';
        this.resultMessage = null;
      }
    });
  }
}