import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { EncycloService } from '../../services/encyclo/encyclo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id =87
  show
  constructor(private calc:CalculatorService, private encyclo:EncycloService) {
    this.show = this.calc.calcIterate()

  }

}
