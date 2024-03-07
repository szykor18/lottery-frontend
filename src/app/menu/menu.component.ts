import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  constructor(public authService: AuthService) {}

}
