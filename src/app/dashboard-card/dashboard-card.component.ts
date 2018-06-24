import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../services/boutique.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  public boutiques;
  public loading: boolean;

  constructor(private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    this.getBoutiques();
  }

  getBoutiques(): void {
    this.loading = true;
    this.boutiqueService.getBoutiques().subscribe(response => {
      this.boutiques = JSON.parse(response['_body']);
      this.loading = false;
    });
  }

}
