import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calc/calculator.service';
import { EncycloService } from '../../services/encyclo/encyclo.service';
import { ScrapService } from 'src/app/services/scrap/scrap.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id =87
  show
  constructor(private calc:CalculatorService, private encyclo:EncycloService, private scrapService : ScrapService, private router: Router) {
    this.show = this.calc.calcIterate()

  }
  scrap(){
    this.scrapService.scrapPrices()
  }
  goTo(){
    this.router.navigateByUrl('/list')
  }
}
