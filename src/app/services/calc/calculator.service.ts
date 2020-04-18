import { Injectable } from '@angular/core';
import { EncycloService } from '../encyclo/encyclo.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  
  // TTC = Toutes taxes comprises, Means fee included ( fee, transport)
  // HT = Hors Taxes, Means Fee excluded ( what you get if you use it on premise)
  
  private transportCost 
  constructor(private encyclo:EncycloService ) { 
    this.transportCost = this.encyclo.getPrices(13)
  }
  price(id){
    
    return this.encyclo.prices.filter(elem=>{
      return elem.kind == id 
    })[0] 
  }
  
  calc(id){
    let craft = this.encyclo.getCraft(id)
    // calculer le montant de stock 24H
    // Roi
    let intrantsPriceArray = []
    
    craft.intrants.forEach(element => {
      // console.log(this.encyclo.getKindName(element.id))
      console.log(element.id)
      intrantsPriceArray.push(element.amount *this.encyclo.getPrices(element.id))
    });
    let intrantPrice = 0
    if(intrantsPriceArray.length != 0){
      intrantPrice = intrantsPriceArray.reduce((accumulator,next)=>{return accumulator + next})
    }
    //TODO transportcost
    console.log(this.transportCost)
    let price = this.encyclo.getPrices(id)
    let prodhour = craft.prod_hour
    let salary = this.encyclo.getBuilding(craft.building).salary
    let transportcost = this.transportCost*craft.transport
    let costHour = salary+intrantPrice*prodhour
    let sellHourTTC = price*prodhour
    let htProfit = sellHourTTC - costHour
    let marketProfit = sellHourTTC*0.97 - costHour - transportcost
    let contractProfit = sellHourTTC - costHour- transportcost/2
    let costFor24H = costHour*24
    
    let data = {
      id:craft.id,
      name:craft.name,
      priceUnit:price,
      priceIntrants: intrantPrice,
      prodHour: prodhour,
      costHour:costHour,
      sellHourTTC:sellHourTTC,
      salary: salary,
      htProfit: htProfit,
      marketProfit:marketProfit,
      contractProfit:contractProfit,
      costFor24H: costFor24H
    }
    return data
    
    
  }
  
  calcIterate(){
    let profitHT :any = []
    
    this.encyclo.prices.forEach(element => {
      if(element && element.kind != 100){
        profitHT[element.kind] = this.calc(element.kind)
      }
    });
    return profitHT
  }
  
  
}
