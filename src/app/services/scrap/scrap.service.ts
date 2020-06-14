import { Injectable } from '@angular/core';
// import  * as https from 'https';
import { HttpClient } from '@angular/common/http';

import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ScrapService {

  constructor(public http: HttpClient,) { }
  scrapPrices(){
    let today = new Date()
    let yesterday = new Date(today.getTime()-86400000)
    console.log(yesterday.toISOString())

    return new Promise(async (resolve)=>{
      let result = await this.scrap(yesterday.toISOString())
      resolve(result)
    })
  }

  scrap(market_ticker_date){
    return new Promise((resolve) => {
      const url = "https://www.simcompanies.com/api/v1/market-ticker/" + market_ticker_date;
      this.http.get(url, {}).subscribe((res) => {
        // if (res.status === 200) {
          // const resParse = JSON.parse(res.data);
          // const token: HttpLogin = {token: resParse.token};
          console.log(res)
          resolve(res);
        // } else {
          // resolve(null);
        // }
      })
    });
  }

  // scrap(path):any {
  //   return new Promise(function (resolve, reject){
  //     const options = {
  //       hostname: "www.simcompanies.com",
  //       path: path,
  //       method:'GET',
  //       headers: {
  //       }
  //     }
  //     const req = https.request(options, res =>{
  //       res.on('data', d=>{
  //         // console.log(d.toString())
  //         resolve({code : res.statusCode,data: d.toString()})
  //       })
  //     })
  //     req.on('error', error=>{
  //       console.log(error)
  //       reject(error);
  //     })
  //     req.end()
  //   })
  // }

}
