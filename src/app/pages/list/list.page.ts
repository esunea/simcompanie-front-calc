import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EncycloService } from 'src/app/services/encyclo/encyclo.service';
import { CalculatorService } from 'src/app/services/calc/calculator.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  list
  data: any
  constructor(private router: Router, private location: Location,private calc:CalculatorService, private encyclo:EncycloService) {
    this.data = this.calc.calcIterate()
    this.list = []
    // this.data.forEach(element => {
    //     this.list.push({
    //       name:this.encyclo.getKindName(element.id),
    //       benefHT:element.benefHT
    //     })
    // });
    
    console.log("plouf")
    // console.log(this.data)
    
  }
  
  ngOnInit() {
    this.ht()
    console.log(this.data)
    console.log(this.list)
  }
  
  ht(){
    console.log("wesh")
    let tempList = this.data.sort((right, left)=>{ return left.htProfit - right.htProfit})
    this.list = []
    tempList.forEach(elem=>{
      this.list.push({
        name:this.encyclo.getKindName(elem.id),
        value:elem.htProfit,
        id:elem.id
      })
    })
  }
  market(){
    let tempList = this.data.sort((right, left)=>{ return left.marketProfit - right.marketProfit})
    this.list = []
    tempList.forEach(elem=>{
      this.list.push({
        name:this.encyclo.getKindName(elem.id),
        value:elem.marketProfit,
        id:elem.id
      })
    })
  }
  contract(){
    let tempList = this.data.sort((right, left)=>{ return left.contractProfit - right.contractProfit})
    this.list = []
    tempList.forEach(elem=>{
      this.list.push({
        name:this.encyclo.getKindName(elem.id),
        value:elem.contractProfit,
        id:elem.id
      })
    })
  }

  bestRoi(){
    let tempList = this.data.sort((right, left)=>{ return left.htProfit/left.costHour - right.htProfit/right.costHour})
    this.list = []
    tempList.forEach(elem=>{
      this.list.push({
        name:this.encyclo.getKindName(elem.id),
        value:elem.htProfit/elem.costHour,
        id:elem.id
      })
    })
  }
  
  goToDetails(elem){
    this.router.navigateByUrl('/details/' + elem.id);
  }
  
}
