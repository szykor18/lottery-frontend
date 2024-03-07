import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MainPageService } from '../service/main-page.service';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {
  errorMessage: any = '';
  
  constructor(private route:ActivatedRoute,
    private service: MainPageService){}
  
    ngOnInit(): void {
    //
  }

}
