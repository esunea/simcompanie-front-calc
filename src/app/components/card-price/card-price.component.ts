import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.scss'],
})
export class CardPriceComponent implements OnInit {
  data
  @Input() id :any=999
  constructor(private calc:CalculatorService) {
  }
  
  ngOnInit() {

    this.data = this.calc.calc(this.id)
  }
  
}
