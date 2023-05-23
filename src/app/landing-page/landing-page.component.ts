import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  showSideMenu: boolean | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.showSideMenu = this.activatedRoute.snapshot.data['showSideMenu'] ?? true;

  }

}
