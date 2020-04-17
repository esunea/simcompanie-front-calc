import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private id=1
  constructor(private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    
    this.activeRoute.params.subscribe((res) => {
      console.log(res)
      if (res) {
        console.log("hello")
        this.id = res.id
      }
    });
    
  }
  
}
