import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink, RouterLinkActive,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}