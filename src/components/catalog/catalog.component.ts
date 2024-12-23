import { MatIconModule } from '@angular/material/icon';
import { Component, HostListener, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatIconModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  pesci = inject(ServiziService);

  colonne: number = 1;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  updateGridCols(width: number) {
    if (width < 600) {
      this.colonne = 1;
    } else if (width < 960) {
      this.colonne = 2;
    } else {
      this.colonne = 3;
    }
  }

  aggiungiAlCarrello(pesce: number):void{


  }
}
