import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncycloService {
  public prices :any; 
  public crafts :any; 
  public buildings :any; 
  public transportID : number = 13
  public names:any
  constructor() { 
    this.prices = this.price()
    this.crafts = this.craft()
    this.buildings = this.building()
    this.names = this.name()
  }
  
  getBuilding(id){
    return this.buildings.filter(x=>{return x.id == id})[0]
  }
  getCraft(id){
    return this.crafts.filter(x=>{return x.id == id})[0]
  }
  getPrices(id){
    return this.prices.filter(x=>{return x.kind == id})[0].price
  }
  getKindName(kind){
    return this.names[kind]
  }
  
  name(){
    return [
      null,
      "power",
      "water",
      "apples",
      "oranges",
      "grapes",
      "grain",
      "steak",
      "sausages",
      "eggs",
      "crude-oil",
      "petrol",
      "diesel",
      "transport",
      "minerals",
      "bauxite",
      "silicon",
      "chemicals",
      "aluminium",
      "plastic",
      "processors",
      "electronic-components",
      "batteries",
      "displays",
      "smart-phones",
      "tablets",
      "laptops",
      "monitors",
      "televisions",
      "plant-research",
      "energy-research",
      "mining-research",
      "electronics-research",
      "breeding-research",
      "chemistry-research",
      "software",
      null,
      null,
      null,
      null,
      "cotton",
      "fabric",
      "iron-ore",
      "steel",
      "sand",
      "glass",
      "leather",
      "on-board-computer",
      "electric-motor",
      "luxury-car-interior",
      "car-interior",
      "car-body",
      "combustion-engine",
      "economy-e-car",
      "luxury-e-car",
      "economy-car",
      "luxury-car",
      "truck",
      "automotive-research",
      "fashion-research",
      "underwear",
      "gloves",
      "dress",
      "simmi-shoes",
      "handbags",
      "sneakers",
      "seeds",
      "Xmas-crackers",
      "gold-ore",
      "golden-bars",
      "gold-watch",
      "necklace",
      "sugarcane",
      "ethanol",
      "methane",
      "carbon-fiber",
      "carbon-composite",
      "fuselage",
      "wing",
      "high-grade-e-components",
      "flight-computer",
      "cockpit",
      "attitude-control",
      "rocket-fuel",
      "fuel-tank",
      "solid-rocket",
      "rocket-engine",
      "heat-shield",
      "ion-drive",
      "jet-engine",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "quadcopter",
      null,
      "aero-research",
      "reinforced-concrete",
      "bricks",
      "cement",
      "clay",
      "limestone",
      "wood",
      "steel-beams",
      "planks",
      "windows",
      "tools",
      "construction-units",
      "bulldozer",
      "materials-research"
    ]
  }
  
  
  craft(){
    
    return [
      {
        "name": "Power",
        "id": 1,
        "prod_hour": 2566.9447221102296,
        "transport": 0,
        "building": "E",
        "intrants": []
      },
      {
        "name": "Water",
        "id": 2,
        "prod_hour": 1626.4285714285716,
        "transport": 0,
        "building": "W",
        "intrants": [
          {
            "id": 1,
            "amount": 0.2
          }
        ]
      },
      {
        "name": "Apples",
        "id": 3,
        "prod_hour": 202.18844174373334,
        "transport": 1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 3
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Oranges",
        "id": 4,
        "prod_hour": 186.01336640423466,
        "transport": 1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 3
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Grapes",
        "id": 5,
        "prod_hour": 161.75075339498665,
        "transport": 1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 4
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Grain",
        "id": 6,
        "prod_hour": 808.7537669749333,
        "transport": 0.1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 0.5
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Steak",
        "id": 7,
        "prod_hour": 45.210537717861584,
        "transport": 1,
        "building": "F",
        "intrants": [
          {
            "id": 2,
            "amount": 8
          },
          {
            "id": 6,
            "amount": 10
          }
        ]
      },
      {
        "name": "Sausages",
        "id": 8,
        "prod_hour": 135.63161315358477,
        "transport": 0.1,
        "building": "F",
        "intrants": [
          {
            "id": 2,
            "amount": 3
          },
          {
            "id": 6,
            "amount": 2
          }
        ]
      },
      {
        "name": "Eggs",
        "id": 9,
        "prod_hour": 316.47376402503113,
        "transport": 0.1,
        "building": "F",
        "intrants": [
          {
            "id": 2,
            "amount": 0.4
          },
          {
            "id": 6,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Crude oil",
        "id": 10,
        "prod_hour": 41.52052427246143,
        "transport": 1,
        "building": "O",
        "intrants": [
          {
            "id": 1,
            "amount": 25
          }
        ]
      },
      {
        "name": "Petrol",
        "id": 11,
        "prod_hour": 111.41168223330178,
        "transport": 1,
        "building": "R",
        "intrants": [
          {
            "id": 1,
            "amount": 15
          },
          {
            "id": 10,
            "amount": 0.75
          },
          {
            "id": 73,
            "amount": 0.25
          }
        ]
      },
      {
        "name": "Diesel",
        "id": 12,
        "prod_hour": 115.12540497441184,
        "transport": 1,
        "building": "R",
        "intrants": [
          {
            "id": 1,
            "amount": 15
          },
          {
            "id": 10,
            "amount": 0.75
          },
          {
            "id": 73,
            "amount": 0.25
          }
        ]
      },
      {
        "name": "Transport",
        "id": 13,
        "prod_hour": 3173.9508697581,
        "transport": 0,
        "building": "S",
        "intrants": [
          {
            "id": 12,
            "amount": 0.005
          },
          {
            "id": 1,
            "amount": 0.01
          }
        ]
      },
      {
        "name": "Minerals",
        "id": 14,
        "prod_hour": 119.23290870972747,
        "transport": 1,
        "building": "M",
        "intrants": [
          {
            "id": 1,
            "amount": 20
          },
          {
            "id": 2,
            "amount": 1
          }
        ]
      },
      {
        "name": "Bauxite",
        "id": 15,
        "prod_hour": 96.5218784793032,
        "transport": 1,
        "building": "M",
        "intrants": [
          {
            "id": 1,
            "amount": 14
          },
          {
            "id": 2,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Silicon",
        "id": 16,
        "prod_hour": 154.01668332661376,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 3
          },
          {
            "id": 44,
            "amount": 2
          }
        ]
      },
      {
        "name": "Chemicals",
        "id": 17,
        "prod_hour": 213.91206017585245,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 0.2
          },
          {
            "id": 14,
            "amount": 1
          }
        ]
      },
      {
        "name": "Aluminium",
        "id": 18,
        "prod_hour": 119.79075369847737,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 15
          },
          {
            "id": 15,
            "amount": 1
          }
        ]
      },
      {
        "name": "Plastic",
        "id": 19,
        "prod_hour": 204.25475076105326,
        "transport": 1,
        "building": "R",
        "intrants": [
          {
            "id": 1,
            "amount": 5
          },
          {
            "id": 10,
            "amount": 0.2
          }
        ]
      },
      {
        "name": "Processors",
        "id": 20,
        "prod_hour": 9.183815625368613,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 16,
            "amount": 4
          },
          {
            "id": 17,
            "amount": 1
          }
        ]
      },
      {
        "name": "Electronic components",
        "id": 21,
        "prod_hour": 41.32717031415876,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 16,
            "amount": 3
          },
          {
            "id": 17,
            "amount": 1
          }
        ]
      },
      {
        "name": "Batteries",
        "id": 22,
        "prod_hour": 25.255492969763683,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 17,
            "amount": 4
          }
        ]
      },
      {
        "name": "Displays",
        "id": 23,
        "prod_hour": 32.14335468879014,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 16,
            "amount": 5
          },
          {
            "id": 17,
            "amount": 4
          }
        ]
      },
      {
        "name": "Smart phones",
        "id": 24,
        "prod_hour": 11.479769531710765,
        "transport": 2,
        "building": "L",
        "intrants": [
          {
            "id": 20,
            "amount": 2
          },
          {
            "id": 21,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 1
          },
          {
            "id": 23,
            "amount": 1
          },
          {
            "id": 18,
            "amount": 2
          }
        ]
      },
      {
        "name": "Tablets",
        "id": 25,
        "prod_hour": 11.479769531710765,
        "transport": 2,
        "building": "L",
        "intrants": [
          {
            "id": 20,
            "amount": 2
          },
          {
            "id": 21,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 1
          },
          {
            "id": 23,
            "amount": 2
          },
          {
            "id": 18,
            "amount": 3
          }
        ]
      },
      {
        "name": "Laptops",
        "id": 26,
        "prod_hour": 9.183815625368613,
        "transport": 2,
        "building": "L",
        "intrants": [
          {
            "id": 20,
            "amount": 4
          },
          {
            "id": 21,
            "amount": 3
          },
          {
            "id": 22,
            "amount": 2
          },
          {
            "id": 23,
            "amount": 2
          },
          {
            "id": 19,
            "amount": 3
          }
        ]
      },
      {
        "name": "Monitors",
        "id": 27,
        "prod_hour": 18.367631250737226,
        "transport": 2,
        "building": "L",
        "intrants": [
          {
            "id": 21,
            "amount": 2
          },
          {
            "id": 23,
            "amount": 3
          },
          {
            "id": 19,
            "amount": 3
          }
        ]
      },
      {
        "name": "Televisions",
        "id": 28,
        "prod_hour": 16.07167734439507,
        "transport": 2,
        "building": "L",
        "intrants": [
          {
            "id": 20,
            "amount": 1
          },
          {
            "id": 21,
            "amount": 4
          },
          {
            "id": 23,
            "amount": 4
          },
          {
            "id": 19,
            "amount": 5
          }
        ]
      },
      {
        "name": "Plant research",
        "id": 29,
        "prod_hour": 4.783200850394605,
        "transport": 0,
        "building": "p",
        "intrants": []
      },
      {
        "name": "Energy research",
        "id": 30,
        "prod_hour": 3.3038359820105594,
        "transport": 0,
        "building": "h",
        "intrants": []
      },
      {
        "name": "Mining research",
        "id": 31,
        "prod_hour": 3.0034872563732358,
        "transport": 0,
        "building": "h",
        "intrants": []
      },
      {
        "name": "Electronics research",
        "id": 32,
        "prod_hour": 2.4027898050985885,
        "transport": 0,
        "building": "h",
        "intrants": []
      },
      {
        "name": "Breeding research",
        "id": 33,
        "prod_hour": 3.850417083165344,
        "transport": 0,
        "building": "b",
        "intrants": []
      },
      {
        "name": "Chemistry research",
        "id": 34,
        "prod_hour": 4.706065323868754,
        "transport": 0,
        "building": "c",
        "intrants": []
      },
      {
        "name": "Software",
        "id": 35,
        "prod_hour": 5.7066257871091475,
        "transport": 0,
        "building": "s",
        "intrants": []
      },
      [],
      [],
      [],
      [],
      {
        "name": "Cotton",
        "id": 40,
        "prod_hour": 258.80120543197864,
        "transport": 0.5,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 1
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Fabric",
        "id": 41,
        "prod_hour": 241.12286782859513,
        "transport": 0.5,
        "building": "T",
        "intrants": [
          {
            "id": 40,
            "amount": 2
          },
          {
            "id": 1,
            "amount": 1
          }
        ]
      },
      {
        "name": "Iron ore",
        "id": 42,
        "prod_hour": 181.68824184339425,
        "transport": 1,
        "building": "M",
        "intrants": [
          {
            "id": 1,
            "amount": 7
          },
          {
            "id": 2,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Steel",
        "id": 43,
        "prod_hour": 192.5208541582672,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 5
          },
          {
            "id": 42,
            "amount": 1
          },
          {
            "id": 17,
            "amount": 0.1
          }
        ]
      },
      {
        "name": "Sand",
        "id": 44,
        "prod_hour": 1419.4393894015175,
        "transport": 1,
        "building": "Q",
        "intrants": [
          {
            "id": 1,
            "amount": 2
          }
        ]
      },
      {
        "name": "Glass",
        "id": 45,
        "prod_hour": 128.34723610551148,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 2
          },
          {
            "id": 16,
            "amount": 1
          }
        ]
      },
      {
        "name": "Leather",
        "id": 46,
        "prod_hour": 30.14035847857439,
        "transport": 1,
        "building": "F",
        "intrants": [
          {
            "id": 2,
            "amount": 5
          },
          {
            "id": 6,
            "amount": 10
          }
        ]
      },
      {
        "name": "On-board computer",
        "id": 47,
        "prod_hour": 13.775723438052918,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 20,
            "amount": 2
          },
          {
            "id": 21,
            "amount": 3
          }
        ]
      },
      {
        "name": "Electric motor",
        "id": 48,
        "prod_hour": 30.781557044450057,
        "transport": 2,
        "building": "D",
        "intrants": [
          {
            "id": 43,
            "amount": 2
          },
          {
            "id": 21,
            "amount": 3
          }
        ]
      },
      {
        "name": "Luxury car interior",
        "id": 49,
        "prod_hour": 19.930003543310857,
        "transport": 2,
        "building": "1",
        "intrants": [
          {
            "id": 23,
            "amount": 6
          },
          {
            "id": 18,
            "amount": 2
          },
          {
            "id": 46,
            "amount": 5
          }
        ]
      },
      {
        "name": "Basic interior",
        "id": 50,
        "prod_hour": 31.88800566929737,
        "transport": 2,
        "building": "1",
        "intrants": [
          {
            "id": 23,
            "amount": 2
          },
          {
            "id": 19,
            "amount": 2
          },
          {
            "id": 41,
            "amount": 5
          }
        ]
      },
      {
        "name": "Car body",
        "id": 51,
        "prod_hour": 23.91600425197303,
        "transport": 2,
        "building": "1",
        "intrants": [
          {
            "id": 18,
            "amount": 30
          },
          {
            "id": 45,
            "amount": 5
          },
          {
            "id": 43,
            "amount": 5
          }
        ]
      },
      {
        "name": "Combustion engine",
        "id": 52,
        "prod_hour": 5.596646735354556,
        "transport": 2,
        "building": "D",
        "intrants": [
          {
            "id": 43,
            "amount": 6
          },
          {
            "id": 17,
            "amount": 5
          },
          {
            "id": 21,
            "amount": 5
          }
        ]
      },
      {
        "name": "Economy e-car",
        "id": 53,
        "prod_hour": 19.930003543310857,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 48,
            "amount": 2
          },
          {
            "id": 50,
            "amount": 1
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 15
          },
          {
            "id": 47,
            "amount": 1
          }
        ]
      },
      {
        "name": "Luxury e-car",
        "id": 54,
        "prod_hour": 3.9860007086621714,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 48,
            "amount": 4
          },
          {
            "id": 49,
            "amount": 1
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 30
          },
          {
            "id": 47,
            "amount": 2
          }
        ]
      },
      {
        "name": "Economy car",
        "id": 55,
        "prod_hour": 13.9510024803176,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 52,
            "amount": 1
          },
          {
            "id": 50,
            "amount": 1
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 47,
            "amount": 1
          }
        ]
      },
      {
        "name": "Luxury car",
        "id": 56,
        "prod_hour": 1.9930003543310857,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 52,
            "amount": 2
          },
          {
            "id": 49,
            "amount": 1
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 47,
            "amount": 2
          }
        ]
      },
      {
        "name": "Truck",
        "id": 57,
        "prod_hour": 4.783200850394605,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 52,
            "amount": 6
          },
          {
            "id": 50,
            "amount": 1
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 43,
            "amount": 10
          },
          {
            "id": 47,
            "amount": 1
          }
        ]
      },
      {
        "name": "Automotive research",
        "id": 58,
        "prod_hour": 4.19080101478387,
        "transport": 0,
        "building": "a",
        "intrants": []
      },
      {
        "name": "Fashion research",
        "id": 59,
        "prod_hour": 6.776201204725691,
        "transport": 0,
        "building": "f",
        "intrants": []
      },
      {
        "name": "Underwear",
        "id": 60,
        "prod_hour": 165.77197163215916,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 41,
            "amount": 1
          }
        ]
      },
      {
        "name": "Gloves",
        "id": 61,
        "prod_hour": 143.16670277322837,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 41,
            "amount": 0.5
          },
          {
            "id": 46,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Dress",
        "id": 62,
        "prod_hour": 150.70179239287197,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 41,
            "amount": 3
          },
          {
            "id": 19,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Stiletto Heel",
        "id": 63,
        "prod_hour": 97.95616505536677,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 46,
            "amount": 1
          },
          {
            "id": 19,
            "amount": 0.2
          }
        ]
      },
      {
        "name": "Handbags",
        "id": 64,
        "prod_hour": 67.81580657679238,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 46,
            "amount": 1.5
          }
        ]
      },
      {
        "name": "Sneakers",
        "id": 65,
        "prod_hour": 173.30706125180276,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 19,
            "amount": 1
          }
        ]
      },
      {
        "name": "Seeds",
        "id": 66,
        "prod_hour": 889.6291436724266,
        "transport": 0.1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 0.1
          }
        ]
      },
      {
        "name": "Xmas crackers",
        "id": 67,
        "prod_hour": 222.46854258288656,
        "transport": 0.5,
        "building": "Y",
        "intrants": [
          {
            "id": 17,
            "amount": 0.5
          },
          {
            "id": 19,
            "amount": 0.1
          }
        ]
      },
      {
        "name": "Gold ore",
        "id": 68,
        "prod_hour": 56.7775755760607,
        "transport": 10,
        "building": "M",
        "intrants": [
          {
            "id": 1,
            "amount": 80
          },
          {
            "id": 2,
            "amount": 2
          }
        ]
      },
      {
        "name": "Golden bars",
        "id": 69,
        "prod_hour": 29.947688424619344,
        "transport": 1000,
        "building": "Y",
        "intrants": [
          {
            "id": 1,
            "amount": 40
          },
          {
            "id": 68,
            "amount": 200
          }
        ]
      },
      {
        "name": "Luxury watch",
        "id": 70,
        "prod_hour": 18.837724049108996,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 69,
            "amount": 0.1
          },
          {
            "id": 21,
            "amount": 2
          },
          {
            "id": 45,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Necklace",
        "id": 71,
        "prod_hour": 41.44299290803979,
        "transport": 1,
        "building": "T",
        "intrants": [
          {
            "id": 69,
            "amount": 0.25
          }
        ]
      },
      {
        "name": "Sugarcane",
        "id": 72,
        "prod_hour": 647.0030135799466,
        "transport": 0.1,
        "building": "P",
        "intrants": [
          {
            "id": 2,
            "amount": 3
          },
          {
            "id": 66,
            "amount": 1
          }
        ]
      },
      {
        "name": "Ethanol",
        "id": 73,
        "prod_hour": 60.94032114380477,
        "transport": 1,
        "building": "6",
        "intrants": [
          {
            "id": 1,
            "amount": 20
          },
          {
            "id": 72,
            "amount": 10
          }
        ]
      },
      {
        "name": "Methane",
        "id": 74,
        "prod_hour": 55.36069902994857,
        "transport": 1,
        "building": "O",
        "intrants": [
          {
            "id": 1,
            "amount": 20
          }
        ]
      },
      {
        "name": "Carbon fibers",
        "id": 75,
        "prod_hour": 245.10570091326392,
        "transport": 0.1,
        "building": "R",
        "intrants": [
          {
            "id": 10,
            "amount": 0.1
          },
          {
            "id": 1,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Carbon composite",
        "id": 76,
        "prod_hour": 68.45185925627278,
        "transport": 1,
        "building": "Y",
        "intrants": [
          {
            "id": 75,
            "amount": 8
          }
        ]
      },
      {
        "name": "Fuselage",
        "id": 77,
        "prod_hour": 3.3038359820105594,
        "transport": 2,
        "building": "7",
        "intrants": [
          {
            "id": 76,
            "amount": 40
          }
        ]
      },
      {
        "name": "Wing",
        "id": 78,
        "prod_hour": 8.109415592207736,
        "transport": 2,
        "building": "7",
        "intrants": [
          {
            "id": 76,
            "amount": 30
          },
          {
            "id": 18,
            "amount": 5
          }
        ]
      },
      {
        "name": "High grade e-comps",
        "id": 79,
        "prod_hour": 1.8367631250737224,
        "transport": 1,
        "building": "L",
        "intrants": [
          {
            "id": 16,
            "amount": 4
          },
          {
            "id": 17,
            "amount": 3
          },
          {
            "id": 69,
            "amount": 0.0625
          }
        ]
      },
      {
        "name": "Flight computer",
        "id": 80,
        "prod_hour": 2.2631545648229796,
        "transport": 1,
        "building": "8",
        "intrants": [
          {
            "id": 79,
            "amount": 4
          },
          {
            "id": 47,
            "amount": 2
          }
        ]
      },
      {
        "name": "Cockpit",
        "id": 81,
        "prod_hour": 2.2631545648229796,
        "transport": 1,
        "building": "8",
        "intrants": [
          {
            "id": 79,
            "amount": 4
          },
          {
            "id": 23,
            "amount": 8
          },
          {
            "id": 50,
            "amount": 1
          }
        ]
      },
      {
        "name": "Attitude control",
        "id": 82,
        "prod_hour": 2.715785477787575,
        "transport": 1,
        "building": "8",
        "intrants": [
          {
            "id": 43,
            "amount": 3
          },
          {
            "id": 22,
            "amount": 5
          },
          {
            "id": 48,
            "amount": 3
          }
        ]
      },
      {
        "name": "Rocket fuel",
        "id": 83,
        "prod_hour": 77.98817756331124,
        "transport": 1,
        "building": "R",
        "intrants": [
          {
            "id": 74,
            "amount": 1
          },
          {
            "id": 1,
            "amount": 5
          }
        ]
      },
      {
        "name": "Propellant tank",
        "id": 84,
        "prod_hour": 4.505230884559854,
        "transport": 1,
        "building": "7",
        "intrants": [
          {
            "id": 18,
            "amount": 50
          },
          {
            "id": 83,
            "amount": 250
          }
        ]
      },
      {
        "name": "Solid fuel booster",
        "id": 85,
        "prod_hour": 0.2798323367677278,
        "transport": 1,
        "building": "D",
        "intrants": [
          {
            "id": 18,
            "amount": 30
          },
          {
            "id": 83,
            "amount": 100
          },
          {
            "id": 17,
            "amount": 50
          }
        ]
      },
      {
        "name": "Rocket engine",
        "id": 86,
        "prod_hour": 0.2798323367677278,
        "transport": 1,
        "building": "D",
        "intrants": [
          {
            "id": 43,
            "amount": 20
          },
          {
            "id": 79,
            "amount": 8
          },
          {
            "id": 18,
            "amount": 10
          }
        ]
      },
      {
        "name": "Heat shield",
        "id": 87,
        "prod_hour": 12.013949025492943,
        "transport": 1,
        "building": "7",
        "intrants": [
          {
            "id": 43,
            "amount": 20
          },
          {
            "id": 16,
            "amount": 30
          }
        ]
      },
      {
        "name": "Ion drive",
        "id": 88,
        "prod_hour": 0.5596646735354556,
        "transport": 1,
        "building": "D",
        "intrants": [
          {
            "id": 79,
            "amount": 8
          },
          {
            "id": 22,
            "amount": 30
          },
          {
            "id": 17,
            "amount": 15
          }
        ]
      },
      {
        "name": "Jet engine",
        "id": 89,
        "prod_hour": 0.8394970103031834,
        "transport": 1,
        "building": "D",
        "intrants": [
          {
            "id": 79,
            "amount": 4
          },
          {
            "id": 18,
            "amount": 5
          }
        ]
      },
      {
        "name": "Sub-orbital 2nd stage",
        "id": 90,
        "prod_hour": 3.0034872563732358,
        "transport": 20,
        "building": "7",
        "intrants": [
          {
            "id": 77,
            "amount": 8
          },
          {
            "id": 84,
            "amount": 2
          },
          {
            "id": 80,
            "amount": 2
          },
          {
            "id": 88,
            "amount": 4
          },
          {
            "id": 82,
            "amount": 2
          }
        ]
      },
      {
        "name": "Sub-orbital rocket",
        "id": 91,
        "prod_hour": 0.6325685208057351,
        "transport": 20,
        "building": "9",
        "intrants": [
          {
            "id": 85,
            "amount": 1
          },
          {
            "id": 90,
            "amount": 1
          }
        ]
      },
      {
        "name": "Orbital booster",
        "id": 92,
        "prod_hour": 1.5017436281866179,
        "transport": 100,
        "building": "7",
        "intrants": [
          {
            "id": 77,
            "amount": 40
          },
          {
            "id": 84,
            "amount": 16
          },
          {
            "id": 86,
            "amount": 34
          }
        ]
      },
      {
        "name": "Starship",
        "id": 93,
        "prod_hour": 0.30034872563732357,
        "transport": 100,
        "building": "7",
        "intrants": [
          {
            "id": 81,
            "amount": 2
          },
          {
            "id": 87,
            "amount": 10
          },
          {
            "id": 82,
            "amount": 4
          },
          {
            "id": 84,
            "amount": 6
          },
          {
            "id": 86,
            "amount": 7
          }
        ]
      },
      {
        "name": "BFR",
        "id": 94,
        "prod_hour": 0.2108561736019117,
        "transport": 2000,
        "building": "9",
        "intrants": [
          {
            "id": 92,
            "amount": 1
          },
          {
            "id": 93,
            "amount": 1
          }
        ]
      },
      {
        "name": "Jumbo jet",
        "id": 95,
        "prod_hour": 0.06325685208057351,
        "transport": 2000,
        "building": "0",
        "intrants": [
          {
            "id": 77,
            "amount": 40
          },
          {
            "id": 78,
            "amount": 10
          },
          {
            "id": 81,
            "amount": 2
          },
          {
            "id": 50,
            "amount": 140
          },
          {
            "id": 89,
            "amount": 4
          }
        ]
      },
      {
        "name": "Luxury jet",
        "id": 96,
        "prod_hour": 0.16868493888152936,
        "transport": 1000,
        "building": "0",
        "intrants": [
          {
            "id": 77,
            "amount": 14
          },
          {
            "id": 78,
            "amount": 2
          },
          {
            "id": 81,
            "amount": 1
          },
          {
            "id": 69,
            "amount": 2
          },
          {
            "id": 89,
            "amount": 2
          }
        ]
      },
      {
        "name": "Single engine plane",
        "id": 97,
        "prod_hour": 1.475993215213382,
        "transport": 100,
        "building": "0",
        "intrants": [
          {
            "id": 77,
            "amount": 8
          },
          {
            "id": 78,
            "amount": 2
          },
          {
            "id": 81,
            "amount": 1
          },
          {
            "id": 52,
            "amount": 1
          }
        ]
      },
      {
        "name": "Quadcopter",
        "id": 98,
        "prod_hour": 12.447350106526388,
        "transport": 2,
        "building": "8",
        "intrants": [
          {
            "id": 47,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 1
          },
          {
            "id": 21,
            "amount": 3
          },
          {
            "id": 19,
            "amount": 2
          }
        ]
      },
      {
        "name": "Satellite",
        "id": 99,
        "prod_hour": 0.11315772824114897,
        "transport": 10,
        "building": "8",
        "intrants": [
          {
            "id": 80,
            "amount": 4
          },
          {
            "id": 88,
            "amount": 1
          },
          {
            "id": 79,
            "amount": 8
          },
          {
            "id": 82,
            "amount": 2
          }
        ]
      },
      {
        "name": "Aerospace research",
        "id": 100,
        "prod_hour": 0.34600436893717856,
        "transport": 0,
        "building": "l",
        "intrants": [
          {
            "id": 91,
            "amount": 1
          },
          {
            "id": 94,
            "amount": 1
          }
        ]
      },
      {
        "name": "Reinforced concrete",
        "id": 101,
        "prod_hour": 188.26822032005654,
        "transport": 10,
        "building": "o",
        "intrants": [
          {
            "id": 103,
            "amount": 15
          },
          {
            "id": 44,
            "amount": 20
          },
          {
            "id": 2,
            "amount": 20
          },
          {
            "id": 43,
            "amount": 5
          }
        ]
      },
      {
        "name": "Bricks",
        "id": 102,
        "prod_hour": 367.3526250147445,
        "transport": 1,
        "building": "o",
        "intrants": [
          {
            "id": 104,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Cement",
        "id": 103,
        "prod_hour": 298.4740078244799,
        "transport": 1,
        "building": "o",
        "intrants": [
          {
            "id": 105,
            "amount": 3
          }
        ]
      },
      {
        "name": "Clay",
        "id": 104,
        "prod_hour": 1078.7739359451534,
        "transport": 1,
        "building": "Q",
        "intrants": [
          {
            "id": 1,
            "amount": 1
          }
        ]
      },
      {
        "name": "Limestone",
        "id": 105,
        "prod_hour": 794.8860580648499,
        "transport": 1,
        "building": "Q",
        "intrants": [
          {
            "id": 1,
            "amount": 2
          }
        ]
      },
      {
        "name": "Wood",
        "id": 106,
        "prod_hour": 76.83160786261867,
        "transport": 1,
        "building": "P",
        "intrants": [
          {
            "id": 66,
            "amount": 1
          },
          {
            "id": 2,
            "amount": 4
          }
        ]
      },
      {
        "name": "Steel beams",
        "id": 107,
        "prod_hour": 129.98029593885207,
        "transport": 5,
        "building": "x",
        "intrants": [
          {
            "id": 43,
            "amount": 1
          },
          {
            "id": 1,
            "amount": 4
          }
        ]
      },
      {
        "name": "Planks",
        "id": 108,
        "prod_hour": 115.12540497441184,
        "transport": 1,
        "building": "x",
        "intrants": [
          {
            "id": 106,
            "amount": 0.5
          }
        ]
      },
      {
        "name": "Windows",
        "id": 109,
        "prod_hour": 16.711752334995268,
        "transport": 1,
        "building": "x",
        "intrants": [
          {
            "id": 18,
            "amount": 2
          },
          {
            "id": 45,
            "amount": 1
          }
        ]
      },
      {
        "name": "Tools",
        "id": 110,
        "prod_hour": 25.996059187770413,
        "transport": 1,
        "building": "x",
        "intrants": [
          {
            "id": 43,
            "amount": 0.5
          },
          {
            "id": 108,
            "amount": 0.5
          },
          {
            "id": 21,
            "amount": 1
          },
          {
            "id": 22,
            "amount": 1
          }
        ]
      },
      {
        "name": "Construction units",
        "id": 111,
        "prod_hour": 0.9857142857142858,
        "transport": 0,
        "building": "g",
        "intrants": [
          {
            "id": 112,
            "amount": 0.125
          },
          {
            "id": 12,
            "amount": 5
          },
          {
            "id": 109,
            "amount": 4
          },
          {
            "id": 107,
            "amount": 8
          },
          {
            "id": 110,
            "amount": 4
          }
        ]
      },
      {
        "name": "Bulldozer",
        "id": 112,
        "prod_hour": 5.58040099212704,
        "transport": 5,
        "building": "1",
        "intrants": [
          {
            "id": 43,
            "amount": 4
          },
          {
            "id": 51,
            "amount": 1
          },
          {
            "id": 52,
            "amount": 2
          }
        ]
      },
      {
        "name": "Materials research",
        "id": 113,
        "prod_hour": 3.4225929628136393,
        "transport": 0,
        "building": "c",
        "intrants": []
      },
    ]
    
  }
  //******************** Buildings *******************************************************************/
  building(){
    return [
      {
        "name":"Plantation",
        "salary":103.5,
        "id":"P"
      },
      {
        "name":"Water reservoir",
        "salary":345,
        "id":"W"
      },
      {
        "name":"Power plant",
        "salary":414,
        "id":"E"
      },
      {
        "name":"Oil rig",
        "salary":517.5,
        "id":"O"
      },
      {
        "name":"Refinery",
        "salary":482.99999999999994,
        "id":"R"
      },
      {
        "name":"Shipping depot",
        "salary":310.5,
        "id":"S"
      },
      {
        "name":"Grocery Store",
        "salary":138,
        "id":"G"
      },
      {
        "name":"Electronics Store",
        "salary":172.5,
        "id":"C"
      },
      {
        "name":"Gas station",
        "salary":345,
        "id":"A"
      },
      {
        "name":"Farm",
        "salary":138,
        "id":"F"
      },
      {
        "name":"Beverage factory",
        "salary":241.49999999999997,
        "id":"6"
      },
      {
        "name":"Mine",
        "salary":276,
        "id":"M"
      },
      {
        "name":"Factory",
        "salary":414,
        "id":"Y"
      },
      {
        "name":"Electronics factory",
        "salary":379.50000000000006,
        "id":"L"
      },
      {
        "name":"Fashion factory",
        "salary":138,
        "id":"T"
      },
      {
        "name":"Fashion store",
        "salary":310.5,
        "id":"H"
      },
      {
        "name":"Car factory",
        "salary":448.5,
        "id":"1"
      },
      {
        "name":"Car dealership",
        "salary":379.50000000000006,
        "id":"2"
      },
      {
        "name":"Plant research center",
        "salary":448.5,
        "id":"p"
      },
      {
        "name":"Physics laboratory",
        "salary":586.5,
        "id":"h"
      },
      {
        "name":"Breeding laboratory",
        "salary":414,
        "id":"b"
      },
      {
        "name":"Chemistry laboratory",
        "salary":414,
        "id":"c"
      },
      {
        "name":"Software R&D",
        "salary":586.5,
        "id":"s"
      },
      {
        "name":"Automotive R&D",
        "salary":552,
        "id":"a"
      },
      {
        "name":"Fashion & Design",
        "salary":448.5,
        "id":"f"
      },
      {
        "name":"Launch pad",
        "salary":517.5,
        "id":"l"
      },
      {
        "name":"Castle",
        "salary":0,
        "id":"3"
      },
      {
        "name":"Park",
        "salary":0,
        "id":"4"
      },
      {
        "name":"Lake",
        "salary":0,
        "id":"5"
      },
      {
        "name":"Propulsion factory",
        "salary":621,
        "id":"D"
      },
      {
        "name":"Aerospace factory",
        "salary":586.5,
        "id":"7"
      },
      {
        "name":"Aerospace electronics",
        "salary":724.5,
        "id":"8"
      },
      {
        "name":"Vertical integration facility",
        "salary":759.0000000000001,
        "id":"9"
      },
      {
        "name":"Horizontal integration facility",
        "salary":759.0000000000001,
        "id":"0"
      },
      {
        "name":"Sales offices",
        "salary":586.5,
        "id":"B"
      },
      {
        "name":"Quarry",
        "salary":276,
        "id":"Q"
      },
      {
        "name":"Concrete plant",
        "salary":379.50000000000006,
        "id":"o"
      },
      {
        "name":"Construction factory",
        "salary":482.99999999999994,
        "id":"x"
      },
      {
        "name":"General contractor",
        "salary":345,
        "id":"g"
      },
      {
        "name":"Hardware store",
        "salary":172.5,
        "id":"d"
      }
    ]
  }
  
  
  building_data(){
    return [
      {
        "name": "Plantation",
        "image": "images/landscape/plantation-lvl1.png",
        "cost": 6900,
        "costUnits": 2.0,
        "steel": 100,
        "wages": 103.5,
        "secondsToBuild": 3600,
        "category": "production",
        "kind": "P",
        "production": [
          {
            "resource": {
              "name": "Seeds",
              "image": "images/resources/seeds.png",
              "db_letter": 66,
              "transportation": 0.1,
              "retailable": false,
              "research": false
            },
            "anHour": 889.6291436724266
          },
          {
            "resource": {
              "name": "Apples",
              "image": "images/resources/apples.png",
              "db_letter": 3,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 202.18844174373334
          },
          {
            "resource": {
              "name": "Oranges",
              "image": "images/resources/oranges.png",
              "db_letter": 4,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 186.01336640423466
          },
          {
            "resource": {
              "name": "Grapes",
              "image": "images/resources/grapes.png",
              "db_letter": 5,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 161.75075339498665
          },
          {
            "resource": {
              "name": "Grain",
              "image": "images/resources/grain.png",
              "db_letter": 6,
              "transportation": 0.1,
              "retailable": false,
              "research": false
            },
            "anHour": 808.7537669749333
          },
          {
            "resource": {
              "name": "Sugarcane",
              "image": "images/resources/sugarcane.png",
              "db_letter": 72,
              "transportation": 0.1,
              "retailable": false,
              "research": false
            },
            "anHour": 647.0030135799466
          },
          {
            "resource": {
              "name": "Cotton",
              "image": "images/resources/cotton.png",
              "db_letter": 40,
              "transportation": 0.5,
              "retailable": false,
              "research": false
            },
            "anHour": 258.80120543197864
          },
          {
            "resource": {
              "name": "Wood",
              "image": "images/resources/wood.png",
              "db_letter": 106,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 76.83160786261867
          }
        ]
      },
      {
        "name": "Water reservoir",
        "image": "images/landscape/reservoir-lvl1.png",
        "cost": 20700,
        "costUnits": 6.0,
        "steel": 100,
        "wages": 345.0,
        "secondsToBuild": 7200,
        "category": "production",
        "kind": "W",
        "production": [
          {
            "resource": {
              "name": "Water",
              "image": "images/resources/water.png",
              "db_letter": 2,
              "transportation": 0,
              "retailable": false,
              "research": false
            },
            "anHour": 1626.4285714285716
          }
        ]
      },
      {
        "name": "Power plant",
        "image": "images/landscape/powerplant-lvl1.png",
        "cost": 51750,
        "costUnits": 15.0,
        "steel": 100,
        "wages": 414.0,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "E",
        "production": [
          {
            "resource": {
              "name": "Power",
              "image": "images/resources/power.png",
              "db_letter": 1,
              "transportation": 0,
              "retailable": false,
              "research": false
            },
            "anHour": 2566.9447221102296
          }
        ]
      },
      {
        "name": "Oil rig",
        "image": "images/landscape/oilrig-lvl1.png",
        "cost": 69000,
        "costUnits": 20.0,
        "steel": 100,
        "wages": 517.5,
        "secondsToBuild": 14400,
        "category": "production",
        "kind": "O",
        "production": [
          {
            "resource": {
              "name": "Crude oil",
              "image": "images/resources/crude-oil.png",
              "db_letter": 10,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 41.52052427246143
          },
          {
            "resource": {
              "name": "Methane",
              "image": "images/resources/methane.png",
              "db_letter": 74,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 55.36069902994857
          }
        ]
      },
      {
        "name": "Refinery",
        "image": "images/landscape/refinery-lvl1.png",
        "cost": 69000,
        "costUnits": 20.0,
        "steel": 100,
        "wages": 482.99999999999994,
        "secondsToBuild": 14400,
        "category": "production",
        "kind": "R",
        "production": [
          {
            "resource": {
              "name": "Petrol",
              "image": "images/resources/petrol.png",
              "db_letter": 11,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 111.41168223330178
          },
          {
            "resource": {
              "name": "Diesel",
              "image": "images/resources/diesel.png",
              "db_letter": 12,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 115.12540497441184
          },
          {
            "resource": {
              "name": "Plastic",
              "image": "images/resources/plastic.png",
              "db_letter": 19,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 204.25475076105326
          },
          {
            "resource": {
              "name": "Carbon fibers",
              "image": "images/resources/carbon-fiber.png",
              "db_letter": 75,
              "transportation": 0.1,
              "retailable": false,
              "research": false
            },
            "anHour": 245.10570091326392
          },
          {
            "resource": {
              "name": "Rocket fuel",
              "image": "images/resources/rocket-fuel.png",
              "db_letter": 83,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 77.98817756331124
          }
        ]
      },
      {
        "name": "Shipping depot",
        "image": "images/landscape/shipping-lvl1.png",
        "cost": 51750,
        "costUnits": 15.0,
        "steel": 100,
        "wages": 310.5,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "S",
        "production": [
          {
            "resource": {
              "name": "Transport",
              "image": "images/resources/transport.png",
              "db_letter": 13,
              "transportation": 0,
              "retailable": false,
              "research": false
            },
            "anHour": 3173.9508697581
          }
        ]
      },
      {
        "name": "Grocery Store",
        "image": "images/landscape/grocery2-lvl1.png",
        "cost": 10350,
        "costUnits": 3.0,
        "steel": 100,
        "wages": 138.0,
        "secondsToBuild": 3600,
        "category": "sales",
        "kind": "G",
        "retail": [
          {
            "resource": {
              "name": "Apples",
              "image": "images/resources/apples.png",
              "db_letter": 3,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 3.98496213340862,
            "saturation": 0.821308980954862,
            "retailModeling": "(Math.pow(price*2.995075 + (-7.061656 + (saturation - 0.5)/0.455885), 2.000000)*0.748513 + 20.189612)*amount"
          },
          {
            "resource": {
              "name": "Oranges",
              "image": "images/resources/oranges.png",
              "db_letter": 4,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 4.32073473541773,
            "saturation": 0.803506582496542,
            "retailModeling": "(Math.pow(price*5.236556 + (-12.883340 + (saturation - 0.5)/0.216229), 2.000000)*0.191699 + 24.799298)*amount"
          },
          {
            "resource": {
              "name": "Grapes",
              "image": "images/resources/grapes.png",
              "db_letter": 5,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 5.13078284003658,
            "saturation": 0.828182241055406,
            "retailModeling": "(Math.pow(price*5.811794 + (-17.550478 + (saturation - 0.5)/0.183729), 2.000000)*0.144223 + 27.629893)*amount"
          },
          {
            "resource": {
              "name": "Steak",
              "image": "images/resources/steak.png",
              "db_letter": 7,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 19.3422378810838,
            "saturation": 1.37979844783079,
            "retailModeling": "(Math.pow(price*0.182243 + (-2.422384 + (saturation - 0.5)/2.050372), 2.000000)*48.724567 + 65.291091)*amount"
          },
          {
            "resource": {
              "name": "Eggs",
              "image": "images/resources/eggs.png",
              "db_letter": 9,
              "transportation": 0.1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1.75891180211189,
            "saturation": 0.406059819729431,
            "retailModeling": "(Math.pow(price*5.128403 + (-5.974585 + (saturation - 0.5)/0.862915), 2.000000)*0.772698 + 6.674475)*amount"
          },
          {
            "resource": {
              "name": "Sausages",
              "image": "images/resources/sausages.png",
              "db_letter": 8,
              "transportation": 0.1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 5.70644783073387,
            "saturation": 0.690998518184504,
            "retailModeling": "(Math.pow(price*4.106472 + (-16.234460 + (saturation - 0.5)/0.355552), 2.000000)*0.363354 + 20.481459)*amount"
          }
        ]
      },
      {
        "name": "Electronics Store",
        "image": "images/landscape/estore-lvl1.png",
        "cost": 17250,
        "costUnits": 5.0,
        "steel": 100,
        "wages": 172.5,
        "secondsToBuild": 3600,
        "category": "sales",
        "kind": "C",
        "retail": [
          {
            "resource": {
              "name": "Smart phones",
              "image": "images/resources/smart-phones.png",
              "db_letter": 24,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 777.871148422218,
            "saturation": 0.759543765151169,
            "retailModeling": "(Math.pow(price*1.067335 + (-688.293804 + (saturation - 0.5)/0.013942), 2.000000)*0.055175 + 1139.233564)*amount"
          },
          {
            "resource": {
              "name": "Tablets",
              "image": "images/resources/tablets.png",
              "db_letter": 25,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1176.63674993369,
            "saturation": 0.837634541150332,
            "retailModeling": "(Math.pow(price*0.548092 + (-449.003038 + (saturation - 0.5)/0.011182), 2.000000)*0.082295 + 2828.716348)*amount"
          },
          {
            "resource": {
              "name": "Laptops",
              "image": "images/resources/laptops.png",
              "db_letter": 26,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1519.79230905931,
            "saturation": 0.715233017404033,
            "retailModeling": "(Math.pow(price*1.699452 + (-2093.645552 + (saturation - 0.5)/0.004871), 2.000000)*0.010992 + 1954.933848)*amount"
          },
          {
            "resource": {
              "name": "Monitors",
              "image": "images/resources/monitors.png",
              "db_letter": 27,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 734.028360587467,
            "saturation": 0.291672528399683,
            "retailModeling": "(Math.pow(price*0.070214 + (-38.459328 + (saturation - 0.5)/0.212900), 2.000000)*12.510591 + 1139.169396)*amount"
          },
          {
            "resource": {
              "name": "Televisions",
              "image": "images/resources/televisions.png",
              "db_letter": 28,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1124.83196873638,
            "saturation": 0.37487718603003,
            "retailModeling": "(Math.pow(price*0.708221 + (-658.193804 + (saturation - 0.5)/0.018829), 2.000000)*0.109842 + 1275.456767)*amount"
          },
          {
            "resource": {
              "name": "Quadcopter",
              "image": "images/resources/quadcopter.png",
              "db_letter": 98,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1182.48691473095,
            "saturation": 0.617810921092317,
            "retailModeling": "(Math.pow(price*0.630065 + (-585.200701 + (saturation - 0.5)/0.012714), 2.000000)*0.081533 + 2291.183118)*amount"
          }
        ]
      },
      {
        "name": "Gas station",
        "image": "images/landscape/gasstation-lvl1.png",
        "cost": 24150,
        "costUnits": 7.0,
        "steel": 100,
        "wages": 345,
        "secondsToBuild": 7200,
        "category": "sales",
        "kind": "A",
        "retail": [
          {
            "resource": {
              "name": "Petrol",
              "image": "images/resources/petrol.png",
              "db_letter": 11,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 45.8100567871268,
            "saturation": 0.647287489974352,
            "retailModeling": "(Math.pow(price*2.629946 + (-107.859842 + (saturation - 0.5)/0.214227), 2.000000)*0.140876 + 21.806339)*amount"
          },
          {
            "resource": {
              "name": "Diesel",
              "image": "images/resources/diesel.png",
              "db_letter": 12,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 45.4235460415396,
            "saturation": 0.649895905905105,
            "retailModeling": "(Math.pow(price*2.748311 + (-111.804599 + (saturation - 0.5)/0.203185), 2.000000)*0.126156 + 21.401559)*amount"
          }
        ]
      },
      {
        "name": "Farm",
        "image": "images/landscape/farm-lvl1.png",
        "cost": 10350,
        "costUnits": 3.0,
        "steel": 100,
        "wages": 138.0,
        "secondsToBuild": 7200,
        "category": "production",
        "kind": "F",
        "production": [
          {
            "resource": {
              "name": "Steak",
              "image": "images/resources/steak.png",
              "db_letter": 7,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 45.210537717861584
          },
          {
            "resource": {
              "name": "Sausages",
              "image": "images/resources/sausages.png",
              "db_letter": 8,
              "transportation": 0.1,
              "retailable": true,
              "research": false
            },
            "anHour": 135.63161315358477
          },
          {
            "resource": {
              "name": "Eggs",
              "image": "images/resources/eggs.png",
              "db_letter": 9,
              "transportation": 0.1,
              "retailable": true,
              "research": false
            },
            "anHour": 316.47376402503113
          },
          {
            "resource": {
              "name": "Leather",
              "image": "images/resources/leather.png",
              "db_letter": 46,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 30.14035847857439
          }
        ]
      },
      {
        "name": "Beverage factory",
        "image": "images/landscape/beverage-factory-lvl1.png",
        "cost": 13800,
        "costUnits": 4.0,
        "steel": 100,
        "wages": 241.49999999999997,
        "secondsToBuild": 7200,
        "category": "production",
        "kind": "6",
        "production": [
          {
            "resource": {
              "name": "Ethanol",
              "image": "images/resources/ethanol.png",
              "db_letter": 73,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 60.94032114380477
          }
        ]
      },
      {
        "name": "Mine",
        "image": "images/landscape/mine-lvl1.png",
        "cost": 24150,
        "costUnits": 7.0,
        "steel": 100,
        "wages": 276.0,
        "secondsToBuild": 14400,
        "category": "production",
        "kind": "M",
        "production": [
          {
            "resource": {
              "name": "Minerals",
              "image": "images/resources/minerals.png",
              "db_letter": 14,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 119.23290870972747
          },
          {
            "resource": {
              "name": "Bauxite",
              "image": "images/resources/bauxite.png",
              "db_letter": 15,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 96.5218784793032
          },
          {
            "resource": {
              "name": "Gold ore",
              "image": "images/resources/gold-ore.png",
              "db_letter": 68,
              "transportation": 10,
              "retailable": false,
              "research": false
            },
            "anHour": 56.7775755760607
          },
          {
            "resource": {
              "name": "Iron ore",
              "image": "images/resources/iron-ore.png",
              "db_letter": 42,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 181.68824184339425
          }
        ]
      },
      {
        "name": "Factory",
        "image": "images/landscape/factory-lvl1.png",
        "cost": 48300,
        "costUnits": 14.0,
        "steel": 100,
        "wages": 414.0,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "Y",
        "production": [
          {
            "resource": {
              "name": "Silicon",
              "image": "images/resources/silicon.png",
              "db_letter": 16,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 154.01668332661376
          },
          {
            "resource": {
              "name": "Chemicals",
              "image": "images/resources/chemicals.png",
              "db_letter": 17,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 213.91206017585245
          },
          {
            "resource": {
              "name": "Aluminium",
              "image": "images/resources/aluminium.png",
              "db_letter": 18,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 119.79075369847737
          },
          {
            "resource": {
              "name": "Golden bars",
              "image": "images/resources/golden-bars.png",
              "db_letter": 69,
              "transportation": 1000,
              "retailable": false,
              "research": false
            },
            "anHour": 29.947688424619344
          },
          {
            "resource": {
              "name": "Steel",
              "image": "images/resources/steel.png",
              "db_letter": 43,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 192.5208541582672
          },
          {
            "resource": {
              "name": "Glass",
              "image": "images/resources/glass.png",
              "db_letter": 45,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 128.34723610551148
          },
          {
            "resource": {
              "name": "Carbon composite",
              "image": "images/resources/carbon-composite.png",
              "db_letter": 76,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 68.45185925627278
          }
        ]
      },
      {
        "name": "Electronics factory",
        "image": "images/landscape/efactory4-lvl1.png",
        "cost": 82800,
        "costUnits": 24.0,
        "steel": 100,
        "wages": 379.50000000000006,
        "secondsToBuild": 18000,
        "category": "production",
        "kind": "L",
        "production": [
          {
            "resource": {
              "name": "Processors",
              "image": "images/resources/processors.png",
              "db_letter": 20,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 9.183815625368613
          },
          {
            "resource": {
              "name": "Electronic components",
              "image": "images/resources/electronic-components.png",
              "db_letter": 21,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 41.32717031415876
          },
          {
            "resource": {
              "name": "Batteries",
              "image": "images/resources/batteries.png",
              "db_letter": 22,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 25.255492969763683
          },
          {
            "resource": {
              "name": "Displays",
              "image": "images/resources/displays.png",
              "db_letter": 23,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 32.14335468879014
          },
          {
            "resource": {
              "name": "Smart phones",
              "image": "images/resources/smart-phones.png",
              "db_letter": 24,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 11.479769531710765
          },
          {
            "resource": {
              "name": "Tablets",
              "image": "images/resources/tablets.png",
              "db_letter": 25,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 11.479769531710765
          },
          {
            "resource": {
              "name": "Laptops",
              "image": "images/resources/laptops.png",
              "db_letter": 26,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 9.183815625368613
          },
          {
            "resource": {
              "name": "Monitors",
              "image": "images/resources/monitors.png",
              "db_letter": 27,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 18.367631250737226
          },
          {
            "resource": {
              "name": "Televisions",
              "image": "images/resources/televisions.png",
              "db_letter": 28,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 16.07167734439507
          },
          {
            "resource": {
              "name": "On-board computer",
              "image": "images/resources/on-board-computer.png",
              "db_letter": 47,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 13.775723438052918
          },
          {
            "resource": {
              "name": "High grade e-comps",
              "image": "images/resources/high-grade-e-components.png",
              "db_letter": 79,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 1.8367631250737224
          }
        ]
      },
      {
        "name": "Fashion factory",
        "image": "images/landscape/clothsfactory-lvl1.png",
        "cost": 13800,
        "costUnits": 4.0,
        "steel": 100,
        "wages": 138.0,
        "secondsToBuild": 7200,
        "category": "production",
        "kind": "T",
        "production": [
          {
            "resource": {
              "name": "Fabric",
              "image": "images/resources/fabric.png",
              "db_letter": 41,
              "transportation": 0.5,
              "retailable": false,
              "research": false
            },
            "anHour": 241.12286782859513
          },
          {
            "resource": {
              "name": "Underwear",
              "image": "images/resources/underwear.png",
              "db_letter": 60,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 165.77197163215916
          },
          {
            "resource": {
              "name": "Gloves",
              "image": "images/resources/gloves.png",
              "db_letter": 61,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 143.16670277322837
          },
          {
            "resource": {
              "name": "Dress",
              "image": "images/resources/dress.png",
              "db_letter": 62,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 150.70179239287197
          },
          {
            "resource": {
              "name": "Stiletto Heel",
              "image": "images/resources/simmi-shoes.png",
              "db_letter": 63,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 97.95616505536677
          },
          {
            "resource": {
              "name": "Handbags",
              "image": "images/resources/handbags.png",
              "db_letter": 64,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 67.81580657679238
          },
          {
            "resource": {
              "name": "Sneakers",
              "image": "images/resources/sneakers.png",
              "db_letter": 65,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 173.30706125180276
          },
          {
            "resource": {
              "name": "Luxury watch",
              "image": "images/resources/gold-watch.png",
              "db_letter": 70,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 18.837724049108996
          },
          {
            "resource": {
              "name": "Necklace",
              "image": "images/resources/necklace.png",
              "db_letter": 71,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 41.44299290803979
          }
        ]
      },
      {
        "name": "Fashion store",
        "image": "images/landscape/fashion-lvl1.png",
        "cost": 17250,
        "costUnits": 5.0,
        "steel": 100,
        "wages": 310.5,
        "secondsToBuild": 10800,
        "category": "sales",
        "kind": "H",
        "retail": [
          {
            "resource": {
              "name": "Underwear",
              "image": "images/resources/underwear.png",
              "db_letter": 60,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 21.9975007301112,
            "saturation": 0.390073756172024,
            "retailModeling": "(Math.pow(price*2.740636 + (-24.330388 + (saturation - 0.5)/0.081393), 2.000000)*0.054546 + 82.374846)*amount"
          },
          {
            "resource": {
              "name": "Gloves",
              "image": "images/resources/gloves.png",
              "db_letter": 61,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 35.0179037540562,
            "saturation": 0.47598449600935,
            "retailModeling": "(Math.pow(price*2.953775 + (-45.074959 + (saturation - 0.5)/0.052738), 2.000000)*0.032161 + 112.488821)*amount"
          },
          {
            "resource": {
              "name": "Dress",
              "image": "images/resources/dress.png",
              "db_letter": 62,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 28.1497206941079,
            "saturation": 0.239604531117927,
            "retailModeling": "(Math.pow(price*1.553962 + (-30.057010 + (saturation - 0.5)/0.236404), 2.000000)*0.247647 + 49.940964)*amount"
          },
          {
            "resource": {
              "name": "Stiletto Heel",
              "image": "images/resources/simmi-shoes.png",
              "db_letter": 63,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 35.6665891309327,
            "saturation": 0.238436455382611,
            "retailModeling": "(Math.pow(price*3.400336 + (-71.173102 + (saturation - 0.5)/0.068636), 2.000000)*0.030531 + 75.686571)*amount"
          },
          {
            "resource": {
              "name": "Handbags",
              "image": "images/resources/handbags.png",
              "db_letter": 64,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 48.3304280241329,
            "saturation": 0.597051920726926,
            "retailModeling": "(Math.pow(price*2.108695 + (-61.187955 + (saturation - 0.5)/0.073861), 2.000000)*0.059377 + 112.584167)*amount"
          },
          {
            "resource": {
              "name": "Sneakers",
              "image": "images/resources/sneakers.png",
              "db_letter": 65,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 30.4846836503157,
            "saturation": 0.193021890131788,
            "retailModeling": "(Math.pow(price*1.015559 + (-14.939446 + (saturation - 0.5)/0.242390), 2.000000)*0.361012 + 69.774240)*amount"
          },
          {
            "resource": {
              "name": "Luxury watch",
              "image": "images/resources/gold-watch.png",
              "db_letter": 70,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 927.721476535619,
            "saturation": 0.808594851842564,
            "retailModeling": "(Math.pow(price*0.966873 + (-735.657764 + (saturation - 0.5)/0.021390), 2.000000)*0.032963 + 782.692494)*amount"
          },
          {
            "resource": {
              "name": "Necklace",
              "image": "images/resources/necklace.png",
              "db_letter": 71,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 1727.02269271231,
            "saturation": 2.04764350069948,
            "retailModeling": "(Math.pow(price*1.459917 + (-2234.725638 + (saturation - 0.5)/0.008805), 2.000000)*0.008422 + 1192.797672)*amount"
          }
        ]
      },
      {
        "name": "Car factory",
        "image": "images/landscape/carfactory-lvl1.png",
        "cost": 93150,
        "costUnits": 27.0,
        "steel": 100,
        "wages": 448.5,
        "secondsToBuild": 21600,
        "category": "production",
        "kind": "1",
        "production": [
          {
            "resource": {
              "name": "Luxury car interior",
              "image": "images/resources/luxury-car-interior.png",
              "db_letter": 49,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 19.930003543310857
          },
          {
            "resource": {
              "name": "Basic interior",
              "image": "images/resources/car-interior.png",
              "db_letter": 50,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 31.88800566929737
          },
          {
            "resource": {
              "name": "Car body",
              "image": "images/resources/car-body.png",
              "db_letter": 51,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 23.91600425197303
          },
          {
            "resource": {
              "name": "Economy e-car",
              "image": "images/resources/economy-e-car.png",
              "db_letter": 53,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "anHour": 19.930003543310857
          },
          {
            "resource": {
              "name": "Luxury e-car",
              "image": "images/resources/luxury-e-car.png",
              "db_letter": 54,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "anHour": 3.9860007086621714
          },
          {
            "resource": {
              "name": "Economy car",
              "image": "images/resources/economy-car.png",
              "db_letter": 55,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "anHour": 13.9510024803176
          },
          {
            "resource": {
              "name": "Luxury car",
              "image": "images/resources/luxury-car.png",
              "db_letter": 56,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "anHour": 1.9930003543310857
          },
          {
            "resource": {
              "name": "Truck",
              "image": "images/resources/truck.png",
              "db_letter": 57,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "anHour": 4.783200850394605
          },
          {
            "resource": {
              "name": "Bulldozer",
              "image": "images/resources/bulldozer.png",
              "db_letter": 112,
              "transportation": 5,
              "retailable": false,
              "research": false
            },
            "anHour": 5.58040099212704
          }
        ]
      },
      {
        "name": "Car dealership",
        "image": "images/landscape/car-dealership-lvl1.png",
        "cost": 20700,
        "costUnits": 6.0,
        "steel": 100,
        "wages": 379.50000000000006,
        "secondsToBuild": 10800,
        "category": "sales",
        "kind": "2",
        "retail": [
          {
            "resource": {
              "name": "Economy e-car",
              "image": "images/resources/economy-e-car.png",
              "db_letter": 53,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "averagePrice": 3615.16866510359,
            "saturation": 1.26277339347659,
            "retailModeling": "(Math.pow(price*0.248178 + (-833.752402 + (saturation - 0.5)/0.036845), 2.000000)*0.141726 + 1194.051161)*amount"
          },
          {
            "resource": {
              "name": "Luxury e-car",
              "image": "images/resources/luxury-e-car.png",
              "db_letter": 54,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "averagePrice": 7700.58221172116,
            "saturation": 0.808520807482937,
            "retailModeling": "(Math.pow(price*0.183491 + (-1176.722444 + (saturation - 0.5)/0.014132), 2.000000)*0.082514 + 4725.805302)*amount"
          },
          {
            "resource": {
              "name": "Economy car",
              "image": "images/resources/economy-car.png",
              "db_letter": 55,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "averagePrice": 2520.73467270382,
            "saturation": 1.08096192449871,
            "retailModeling": "(Math.pow(price*0.238168 + (-550.223268 + (saturation - 0.5)/0.049419), 2.000000)*0.278207 + 1138.815876)*amount"
          },
          {
            "resource": {
              "name": "Luxury car",
              "image": "images/resources/luxury-car.png",
              "db_letter": 56,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "averagePrice": 5641.48656765949,
            "saturation": 0.798960989802965,
            "retailModeling": "(Math.pow(price*0.143196 + (-640.314337 + (saturation - 0.5)/0.020614), 2.000000)*0.173034 + 4447.992542)*amount"
          },
          {
            "resource": {
              "name": "Truck",
              "image": "images/resources/truck.png",
              "db_letter": 57,
              "transportation": 5,
              "retailable": true,
              "research": false
            },
            "averagePrice": 6348.72748870457,
            "saturation": 0.849281201918548,
            "retailModeling": "(Math.pow(price*0.301880 + (-1729.839177 + (saturation - 0.5)/0.017865), 2.000000)*0.068383 + 2352.484600)*amount"
          }
        ]
      },
      {
        "name": "Plant research center",
        "image": "images/landscape/plantresearch.png",
        "cost": 103500,
        "costUnits": 30.0,
        "steel": 100,
        "wages": 448.5,
        "secondsToBuild": 18000,
        "category": "research",
        "kind": "p",
        "production": [
          {
            "resource": {
              "name": "Plant research",
              "image": "images/resources/plant-research.png",
              "db_letter": 29,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 4.783200850394605
          }
        ]
      },
      {
        "name": "Physics laboratory",
        "image": "images/landscape/physics-lab-lvl1.png",
        "cost": 165600,
        "costUnits": 48.0,
        "steel": 100,
        "wages": 586.5,
        "secondsToBuild": 25200,
        "category": "research",
        "kind": "h",
        "production": [
          {
            "resource": {
              "name": "Energy research",
              "image": "images/resources/energy-research.png",
              "db_letter": 30,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 3.3038359820105594
          },
          {
            "resource": {
              "name": "Mining research",
              "image": "images/resources/mining-research.png",
              "db_letter": 31,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 3.0034872563732358
          },
          {
            "resource": {
              "name": "Electronics research",
              "image": "images/resources/electronics-research.png",
              "db_letter": 32,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 2.4027898050985885
          }
        ]
      },
      {
        "name": "Breeding laboratory",
        "image": "images/landscape/breeding-research-lvl1.png",
        "cost": 96600,
        "costUnits": 28.0,
        "steel": 100,
        "wages": 414.0,
        "secondsToBuild": 18000,
        "category": "research",
        "kind": "b",
        "production": [
          {
            "resource": {
              "name": "Breeding research",
              "image": "images/resources/breeding-research.png",
              "db_letter": 33,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 3.850417083165344
          }
        ]
      },
      {
        "name": "Chemistry laboratory",
        "image": "images/landscape/chemistry-research-lvl1.png",
        "cost": 96600,
        "costUnits": 28.0,
        "steel": 100,
        "wages": 414.0,
        "secondsToBuild": 18000,
        "category": "research",
        "kind": "c",
        "production": [
          {
            "resource": {
              "name": "Chemistry research",
              "image": "images/resources/chemistry-research.png",
              "db_letter": 34,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 4.706065323868754
          },
          {
            "resource": {
              "name": "Materials research",
              "image": "images/resources/materials-research.png",
              "db_letter": 113,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 3.4225929628136393
          }
        ]
      },
      {
        "name": "Software R&D",
        "image": "images/landscape/swresearch.png",
        "cost": 65550,
        "costUnits": 19.0,
        "steel": 100,
        "wages": 586.5,
        "secondsToBuild": 10800,
        "category": "research",
        "kind": "s",
        "production": [
          {
            "resource": {
              "name": "Software",
              "image": "images/resources/software.png",
              "db_letter": 35,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 5.7066257871091475
          }
        ]
      },
      {
        "name": "Automotive R&D",
        "image": "images/landscape/race-track-lvl1.png",
        "cost": 138000,
        "costUnits": 40.0,
        "steel": 100,
        "wages": 552.0,
        "secondsToBuild": 21600,
        "category": "research",
        "kind": "a",
        "production": [
          {
            "resource": {
              "name": "Automotive research",
              "image": "images/resources/automotive-research.png",
              "db_letter": 58,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 4.19080101478387
          }
        ]
      },
      {
        "name": "Fashion & Design",
        "image": "images/landscape/fashion-research-lvl1.png",
        "cost": 72450,
        "costUnits": 21.0,
        "steel": 100,
        "wages": 448.5,
        "secondsToBuild": 7200,
        "category": "research",
        "kind": "f",
        "production": [
          {
            "resource": {
              "name": "Fashion research",
              "image": "images/resources/fashion-research.png",
              "db_letter": 59,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 6.776201204725691
          }
        ]
      },
      {
        "name": "Launch pad",
        "image": "images/landscape/launchpad-lvl1.png",
        "cost": 124200,
        "costUnits": 36.0,
        "steel": 100,
        "wages": 517.5,
        "secondsToBuild": 32400,
        "category": "research",
        "kind": "l",
        "production": [
          {
            "resource": {
              "name": "Aerospace research",
              "image": "images/resources/aero-research.png",
              "db_letter": 100,
              "transportation": 0,
              "retailable": false,
              "research": true
            },
            "anHour": 0.34600436893717856
          }
        ]
      },
      {
        "name": "Castle",
        "image": "images/landscape/recreational/castle-lvl1.png",
        "cost": 138000,
        "costUnits": 40.0,
        "steel": 100,
        "wages": 0,
        "secondsToBuild": 43200,
        "category": "recreation",
        "kind": "3"
      },
      {
        "name": "Park",
        "image": "images/landscape/recreational/park-lvl1.png",
        "cost": 138000,
        "costUnits": 40.0,
        "steel": 100,
        "wages": 0,
        "secondsToBuild": 43200,
        "category": "recreation",
        "kind": "4"
      },
      {
        "name": "Lake",
        "image": "images/landscape/recreational/lake-lvl1.png",
        "cost": 138000,
        "costUnits": 40.0,
        "steel": 100,
        "wages": 0,
        "secondsToBuild": 43200,
        "category": "recreation",
        "kind": "5"
      },
      {
        "name": "Propulsion factory",
        "image": "images/landscape/propulsion-2-lvl1.png",
        "cost": 103500,
        "costUnits": 30.0,
        "steel": 100,
        "wages": 621.0,
        "secondsToBuild": 25200,
        "category": "production",
        "kind": "D",
        "production": [
          {
            "resource": {
              "name": "Electric motor",
              "image": "images/resources/electric-motor.png",
              "db_letter": 48,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 30.781557044450057
          },
          {
            "resource": {
              "name": "Combustion engine",
              "image": "images/resources/combustion-engine.png",
              "db_letter": 52,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 5.596646735354556
          },
          {
            "resource": {
              "name": "Solid fuel booster",
              "image": "images/resources/solid-rocket.png",
              "db_letter": 85,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 0.2798323367677278
          },
          {
            "resource": {
              "name": "Rocket engine",
              "image": "images/resources/rocket-engine.png",
              "db_letter": 86,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 0.2798323367677278
          },
          {
            "resource": {
              "name": "Ion drive",
              "image": "images/resources/ion-drive.png",
              "db_letter": 88,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 0.5596646735354556
          },
          {
            "resource": {
              "name": "Jet engine",
              "image": "images/resources/jet-engine.png",
              "db_letter": 89,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 0.8394970103031834
          }
        ]
      },
      {
        "name": "Aerospace factory",
        "image": "images/landscape/aerospace-2-lvl1.png",
        "cost": 106950,
        "costUnits": 31.0,
        "steel": 100,
        "wages": 586.5,
        "secondsToBuild": 21600,
        "category": "production",
        "kind": "7",
        "production": [
          {
            "resource": {
              "name": "Fuselage",
              "image": "images/resources/fuselage.png",
              "db_letter": 77,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 3.3038359820105594
          },
          {
            "resource": {
              "name": "Wing",
              "image": "images/resources/wing.png",
              "db_letter": 78,
              "transportation": 2,
              "retailable": false,
              "research": false
            },
            "anHour": 8.109415592207736
          },
          {
            "resource": {
              "name": "Propellant tank",
              "image": "images/resources/fuel-tank.png",
              "db_letter": 84,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 4.505230884559854
          },
          {
            "resource": {
              "name": "Heat shield",
              "image": "images/resources/heat-shield.png",
              "db_letter": 87,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 12.013949025492943
          },
          {
            "resource": {
              "name": "Sub-orbital 2nd stage",
              "image": "images/resources/sub-orbital-second-stage.png",
              "db_letter": 90,
              "transportation": 20,
              "retailable": false,
              "research": false
            },
            "anHour": 3.0034872563732358
          },
          {
            "resource": {
              "name": "Orbital booster",
              "image": "images/resources/orbital-booster.png",
              "db_letter": 92,
              "transportation": 100,
              "retailable": false,
              "research": false
            },
            "anHour": 1.5017436281866179
          },
          {
            "resource": {
              "name": "Starship",
              "image": "images/resources/starship.png",
              "db_letter": 93,
              "transportation": 100,
              "retailable": false,
              "research": false
            },
            "anHour": 0.30034872563732357
          }
        ]
      },
      {
        "name": "Aerospace electronics",
        "image": "images/landscape/aero-electronics-2-lvl1.png",
        "cost": 141450,
        "costUnits": 41.0,
        "steel": 100,
        "wages": 724.5,
        "secondsToBuild": 21600,
        "category": "production",
        "kind": "8",
        "production": [
          {
            "resource": {
              "name": "Flight computer",
              "image": "images/resources/flight-computer.png",
              "db_letter": 80,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 2.2631545648229796
          },
          {
            "resource": {
              "name": "Cockpit",
              "image": "images/resources/cockpit.png",
              "db_letter": 81,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 2.2631545648229796
          },
          {
            "resource": {
              "name": "Attitude control",
              "image": "images/resources/attitude-control.png",
              "db_letter": 82,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 2.715785477787575
          },
          {
            "resource": {
              "name": "Quadcopter",
              "image": "images/resources/quadcopter.png",
              "db_letter": 98,
              "transportation": 2,
              "retailable": true,
              "research": false
            },
            "anHour": 12.447350106526388
          },
          {
            "resource": {
              "name": "Satellite",
              "image": "images/resources/satellite.png",
              "db_letter": 99,
              "transportation": 10,
              "retailable": true,
              "research": false
            },
            "anHour": 0.11315772824114897
          }
        ]
      },
      {
        "name": "Vertical integration facility",
        "image": "images/landscape/vertical-integration-lvl1.png",
        "cost": 113850,
        "costUnits": 33.0,
        "steel": 100,
        "wages": 759.0000000000001,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "9",
        "production": [
          {
            "resource": {
              "name": "Sub-orbital rocket",
              "image": "images/resources/sub-orbital-rocket2.png",
              "db_letter": 91,
              "transportation": 20,
              "retailable": true,
              "research": false
            },
            "anHour": 0.6325685208057351
          },
          {
            "resource": {
              "name": "BFR",
              "image": "images/resources/BFR.png",
              "db_letter": 94,
              "transportation": 2000,
              "retailable": true,
              "research": false
            },
            "anHour": 0.2108561736019117
          }
        ]
      },
      {
        "name": "Horizontal integration facility",
        "image": "images/landscape/horizontal-integration-lvl1.png",
        "cost": 100050,
        "costUnits": 29.0,
        "steel": 100,
        "wages": 759.0000000000001,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "0",
        "production": [
          {
            "resource": {
              "name": "Jumbo jet",
              "image": "images/resources/jumbojet2.png",
              "db_letter": 95,
              "transportation": 2000,
              "retailable": true,
              "research": false
            },
            "anHour": 0.06325685208057351
          },
          {
            "resource": {
              "name": "Luxury jet",
              "image": "images/resources/private-jet.png",
              "db_letter": 96,
              "transportation": 1000,
              "retailable": true,
              "research": false
            },
            "anHour": 0.16868493888152936
          },
          {
            "resource": {
              "name": "Single engine plane",
              "image": "images/resources/single-engine.png",
              "db_letter": 97,
              "transportation": 100,
              "retailable": true,
              "research": false
            },
            "anHour": 1.475993215213382
          }
        ]
      },
      {
        "name": "Sales offices",
        "image": "images/landscape/sales-offices-2-lvl1.png",
        "cost": 62100,
        "costUnits": 18.0,
        "steel": 100,
        "wages": 586.5,
        "secondsToBuild": 7200,
        "category": "sales",
        "kind": "B",
        "retail": [
          {
            "resource": {
              "name": "Sub-orbital rocket",
              "image": "images/resources/sub-orbital-rocket2.png",
              "db_letter": 91,
              "transportation": 20,
              "retailable": true,
              "research": false
            },
            "averagePrice": 132883.826074866,
            "saturation": 3.67401387815666,
            "retailModeling": null
          },
          {
            "resource": {
              "name": "BFR",
              "image": "images/resources/BFR.png",
              "db_letter": 94,
              "transportation": 2000,
              "retailable": true,
              "research": false
            },
            "averagePrice": 763467.244676295,
            "saturation": 24.690986648025,
            "retailModeling": null
          },
          {
            "resource": {
              "name": "Jumbo jet",
              "image": "images/resources/jumbojet2.png",
              "db_letter": 95,
              "transportation": 2000,
              "retailable": true,
              "research": false
            },
            "averagePrice": 233241.796693534,
            "saturation": 8.12483429440278,
            "retailModeling": null
          },
          {
            "resource": {
              "name": "Luxury jet",
              "image": "images/resources/private-jet.png",
              "db_letter": 96,
              "transportation": 1000,
              "retailable": true,
              "research": false
            },
            "averagePrice": 94228.2034806076,
            "saturation": 2.80092305013917,
            "retailModeling": null
          },
          {
            "resource": {
              "name": "Single engine plane",
              "image": "images/resources/single-engine.png",
              "db_letter": 97,
              "transportation": 100,
              "retailable": true,
              "research": false
            },
            "averagePrice": 47525.2249837142,
            "saturation": 2.21251039769106,
            "retailModeling": null
          },
          {
            "resource": {
              "name": "Satellite",
              "image": "images/resources/satellite.png",
              "db_letter": 99,
              "transportation": 10,
              "retailable": true,
              "research": false
            },
            "averagePrice": 67515.9925006379,
            "saturation": 3.91300208720136,
            "retailModeling": null
          }
        ]
      },
      {
        "name": "Quarry",
        "image": "images/landscape/quarry-lvl1.png",
        "cost": 24150,
        "costUnits": 7.0,
        "steel": 100,
        "wages": 276.0,
        "secondsToBuild": 10800,
        "category": "production",
        "kind": "Q",
        "production": [
          {
            "resource": {
              "name": "Sand",
              "image": "images/resources/sand.png",
              "db_letter": 44,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 1419.4393894015175
          },
          {
            "resource": {
              "name": "Clay",
              "image": "images/resources/clay.png",
              "db_letter": 104,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 1078.7739359451534
          },
          {
            "resource": {
              "name": "Limestone",
              "image": "images/resources/limestone.png",
              "db_letter": 105,
              "transportation": 1,
              "retailable": false,
              "research": false
            },
            "anHour": 794.8860580648499
          }
        ]
      },
      {
        "name": "Concrete plant",
        "image": "images/landscape/concrete-plant-lvl1.png",
        "cost": 58650,
        "costUnits": 17.0,
        "steel": 100,
        "wages": 379.50000000000006,
        "secondsToBuild": 18000,
        "category": "production",
        "kind": "o",
        "production": [
          {
            "resource": {
              "name": "Reinforced concrete",
              "image": "images/resources/reinforced-concrete.png",
              "db_letter": 101,
              "transportation": 10,
              "retailable": false,
              "research": false
            },
            "anHour": 188.26822032005654
          },
          {
            "resource": {
              "name": "Bricks",
              "image": "images/resources/bricks.png",
              "db_letter": 102,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 367.3526250147445
          },
          {
            "resource": {
              "name": "Cement",
              "image": "images/resources/cement.png",
              "db_letter": 103,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 298.4740078244799
          }
        ]
      },
      {
        "name": "Construction factory",
        "image": "images/landscape/construction-factory-lvl1.png",
        "cost": 72450,
        "costUnits": 21.0,
        "steel": 100,
        "wages": 482.99999999999994,
        "secondsToBuild": 21600,
        "category": "production",
        "kind": "x",
        "production": [
          {
            "resource": {
              "name": "Steel beams",
              "image": "images/resources/steel-beams.png",
              "db_letter": 107,
              "transportation": 5,
              "retailable": false,
              "research": false
            },
            "anHour": 129.98029593885207
          },
          {
            "resource": {
              "name": "Planks",
              "image": "images/resources/planks.png",
              "db_letter": 108,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 115.12540497441184
          },
          {
            "resource": {
              "name": "Windows",
              "image": "images/resources/windows.png",
              "db_letter": 109,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 16.711752334995268
          },
          {
            "resource": {
              "name": "Tools",
              "image": "images/resources/tools.png",
              "db_letter": 110,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "anHour": 25.996059187770413
          }
        ]
      },
      {
        "name": "General contractor",
        "image": "images/landscape/general-contractor-lvl1.png",
        "cost": 48300,
        "costUnits": 14.0,
        "steel": 100,
        "wages": 345.0,
        "secondsToBuild": 7200,
        "category": "production",
        "kind": "g",
        "production": [
          {
            "resource": {
              "name": "Construction units",
              "image": "images/resources/construction-units.png",
              "db_letter": 111,
              "transportation": 0,
              "retailable": false,
              "research": false
            },
            "anHour": 0.9857142857142858
          }
        ]
      },
      {
        "name": "Hardware store",
        "image": "images/landscape/hardware-store-lvl1.png",
        "cost": 13800,
        "costUnits": 4.0,
        "steel": 100,
        "wages": 172.5,
        "secondsToBuild": 14400,
        "category": "sales",
        "kind": "d",
        "retail": [
          {
            "resource": {
              "name": "Bricks",
              "image": "images/resources/bricks.png",
              "db_letter": 102,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 6.18409912111907,
            "saturation": 0.1,
            "retailModeling": "(Math.pow(price*5.014953 + (-15.009234 + (saturation - 0.5)/0.160440), 2.000000)*0.133920 + 27.671161)*amount"
          },
          {
            "resource": {
              "name": "Cement",
              "image": "images/resources/cement.png",
              "db_letter": 103,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 10.8896704409407,
            "saturation": 0.1,
            "retailModeling": "(Math.pow(price*3.027259 + (-20.281344 + (saturation - 0.5)/0.218227), 2.000000)*0.292029 + 36.314590)*amount"
          },
          {
            "resource": {
              "name": "Planks",
              "image": "images/resources/planks.png",
              "db_letter": 108,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 11.9145082415394,
            "saturation": 0.17159601786773,
            "retailModeling": "(Math.pow(price*0.262222 + (-2.481848 + (saturation - 0.5)/4.034384), 2.000000)*53.143631 + 19.472041)*amount"
          },
          {
            "resource": {
              "name": "Windows",
              "image": "images/resources/windows.png",
              "db_letter": 109,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 112.705268914616,
            "saturation": 0.339678506768883,
            "retailModeling": "(Math.pow(price*1.447823 + (-145.601169 + (saturation - 0.5)/0.151118), 2.000000)*0.301670 + 79.663662)*amount"
          },
          {
            "resource": {
              "name": "Tools",
              "image": "images/resources/tools.png",
              "db_letter": 110,
              "transportation": 1,
              "retailable": true,
              "research": false
            },
            "averagePrice": 201.405775405109,
            "saturation": 0.110600968348944,
            "retailModeling": "(Math.pow(price*1.186214 + (-210.612732 + (saturation - 0.5)/0.190912), 2.000000)*0.307984 + 49.825523)*amount"
          }
        ]
      }
    ]
  }
  data_ressource_list(){
    return [
      {
        "name": "Énergie",
        "image": "images/resources/power.png",
        "db_letter": 1,
        "transportation": 0,
        "retailable": false,
        "research": false
      },
      {
        "name": "Eau",
        "image": "images/resources/water.png",
        "db_letter": 2,
        "transportation": 0,
        "retailable": false,
        "research": false
      },
      {
        "name": "Semences",
        "image": "images/resources/seeds.png",
        "db_letter": 66,
        "transportation": 0.1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Pommes",
        "image": "images/resources/apples.png",
        "db_letter": 3,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Oranges",
        "image": "images/resources/oranges.png",
        "db_letter": 4,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Raisins",
        "image": "images/resources/grapes.png",
        "db_letter": 5,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Céréales",
        "image": "images/resources/grain.png",
        "db_letter": 6,
        "transportation": 0.1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Canne à sucre",
        "image": "images/resources/sugarcane.png",
        "db_letter": 72,
        "transportation": 0.1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Steak",
        "image": "images/resources/steak.png",
        "db_letter": 7,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Saucisses",
        "image": "images/resources/sausages.png",
        "db_letter": 8,
        "transportation": 0.1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Œufs",
        "image": "images/resources/eggs.png",
        "db_letter": 9,
        "transportation": 0.1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Éthanol",
        "image": "images/resources/ethanol.png",
        "db_letter": 73,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Pétrole brut",
        "image": "images/resources/crude-oil.png",
        "db_letter": 10,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Méthane",
        "image": "images/resources/methane.png",
        "db_letter": 74,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Essence",
        "image": "images/resources/petrol.png",
        "db_letter": 11,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Diesel",
        "image": "images/resources/diesel.png",
        "db_letter": 12,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Transport",
        "image": "images/resources/transport.png",
        "db_letter": 13,
        "transportation": 0,
        "retailable": false,
        "research": false
      },
      {
        "name": "Minéraux",
        "image": "images/resources/minerals.png",
        "db_letter": 14,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Bauxite",
        "image": "images/resources/bauxite.png",
        "db_letter": 15,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Minerai d'or",
        "image": "images/resources/gold-ore.png",
        "db_letter": 68,
        "transportation": 10,
        "retailable": false,
        "research": false
      },
      {
        "name": "Silicium",
        "image": "images/resources/silicon.png",
        "db_letter": 16,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Produits chimiques",
        "image": "images/resources/chemicals.png",
        "db_letter": 17,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Aluminium",
        "image": "images/resources/aluminium.png",
        "db_letter": 18,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Plastique",
        "image": "images/resources/plastic.png",
        "db_letter": 19,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Lingots d'or",
        "image": "images/resources/golden-bars.png",
        "db_letter": 69,
        "transportation": 1000,
        "retailable": false,
        "research": false
      },
      {
        "name": "Processeurs",
        "image": "images/resources/processors.png",
        "db_letter": 20,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Composants électroniques",
        "image": "images/resources/electronic-components.png",
        "db_letter": 21,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Batteries",
        "image": "images/resources/batteries.png",
        "db_letter": 22,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Écrans",
        "image": "images/resources/displays.png",
        "db_letter": 23,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Smartphones",
        "image": "images/resources/smart-phones.png",
        "db_letter": 24,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Tablettes",
        "image": "images/resources/tablets.png",
        "db_letter": 25,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Ordinateurs portables",
        "image": "images/resources/laptops.png",
        "db_letter": 26,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Moniteurs",
        "image": "images/resources/monitors.png",
        "db_letter": 27,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Téléviseurs",
        "image": "images/resources/televisions.png",
        "db_letter": 28,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Coton",
        "image": "images/resources/cotton.png",
        "db_letter": 40,
        "transportation": 0.5,
        "retailable": false,
        "research": false
      },
      {
        "name": "Tissu",
        "image": "images/resources/fabric.png",
        "db_letter": 41,
        "transportation": 0.5,
        "retailable": false,
        "research": false
      },
      {
        "name": "Minerai de fer",
        "image": "images/resources/iron-ore.png",
        "db_letter": 42,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Acier",
        "image": "images/resources/steel.png",
        "db_letter": 43,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Sable",
        "image": "images/resources/sand.png",
        "db_letter": 44,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Verre",
        "image": "images/resources/glass.png",
        "db_letter": 45,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Cuir",
        "image": "images/resources/leather.png",
        "db_letter": 46,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Ordinateur de bord",
        "image": "images/resources/on-board-computer.png",
        "db_letter": 47,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Moteur électrique",
        "image": "images/resources/electric-motor.png",
        "db_letter": 48,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Intérieur de luxe",
        "image": "images/resources/luxury-car-interior.png",
        "db_letter": 49,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Intérieur basique",
        "image": "images/resources/car-interior.png",
        "db_letter": 50,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Carrosserie de voiture",
        "image": "images/resources/car-body.png",
        "db_letter": 51,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Moteur à combustion",
        "image": "images/resources/combustion-engine.png",
        "db_letter": 52,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Voiture électrique basique",
        "image": "images/resources/economy-e-car.png",
        "db_letter": 53,
        "transportation": 5,
        "retailable": true,
        "research": false
      },
      {
        "name": "Voiture électrique de luxe",
        "image": "images/resources/luxury-e-car.png",
        "db_letter": 54,
        "transportation": 5,
        "retailable": true,
        "research": false
      },
      {
        "name": "Voiture basique",
        "image": "images/resources/economy-car.png",
        "db_letter": 55,
        "transportation": 5,
        "retailable": true,
        "research": false
      },
      {
        "name": "Voiture de luxe",
        "image": "images/resources/luxury-car.png",
        "db_letter": 56,
        "transportation": 5,
        "retailable": true,
        "research": false
      },
      {
        "name": "Camion",
        "image": "images/resources/truck.png",
        "db_letter": 57,
        "transportation": 5,
        "retailable": true,
        "research": false
      },
      {
        "name": "Bulldozer",
        "image": "images/resources/bulldozer.png",
        "db_letter": 112,
        "transportation": 5,
        "retailable": false,
        "research": false
      },
      {
        "name": "Sous-vêtements",
        "image": "images/resources/underwear.png",
        "db_letter": 60,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Gants",
        "image": "images/resources/gloves.png",
        "db_letter": 61,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Robes",
        "image": "images/resources/dress.png",
        "db_letter": 62,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Talons aiguilles",
        "image": "images/resources/simmi-shoes.png",
        "db_letter": 63,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Sacs à main",
        "image": "images/resources/handbags.png",
        "db_letter": 64,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Chaussures de sport",
        "image": "images/resources/sneakers.png",
        "db_letter": 65,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Montre de luxe",
        "image": "images/resources/gold-watch.png",
        "db_letter": 70,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Collier",
        "image": "images/resources/necklace.png",
        "db_letter": 71,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Fibres de carbone",
        "image": "images/resources/carbon-fiber.png",
        "db_letter": 75,
        "transportation": 0.1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Composite de carbone",
        "image": "images/resources/carbon-composite.png",
        "db_letter": 76,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Fuselage",
        "image": "images/resources/fuselage.png",
        "db_letter": 77,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Aile",
        "image": "images/resources/wing.png",
        "db_letter": 78,
        "transportation": 2,
        "retailable": false,
        "research": false
      },
      {
        "name": "Composants de pointe",
        "image": "images/resources/high-grade-e-components.png",
        "db_letter": 79,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Ordinateur de vol",
        "image": "images/resources/flight-computer.png",
        "db_letter": 80,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Cockpit",
        "image": "images/resources/cockpit.png",
        "db_letter": 81,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Contrôle d'attitude",
        "image": "images/resources/attitude-control.png",
        "db_letter": 82,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Carburant pour fusées",
        "image": "images/resources/rocket-fuel.png",
        "db_letter": 83,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Réservoir de carburant",
        "image": "images/resources/fuel-tank.png",
        "db_letter": 84,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Propulseur à combustible solide",
        "image": "images/resources/solid-rocket.png",
        "db_letter": 85,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Moteur de fusée",
        "image": "images/resources/rocket-engine.png",
        "db_letter": 86,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Bouclier thermique",
        "image": "images/resources/heat-shield.png",
        "db_letter": 87,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Moteur ionique",
        "image": "images/resources/ion-drive.png",
        "db_letter": 88,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Moteur à réaction",
        "image": "images/resources/jet-engine.png",
        "db_letter": 89,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "2è étage suborbital",
        "image": "images/resources/sub-orbital-second-stage.png",
        "db_letter": 90,
        "transportation": 20,
        "retailable": false,
        "research": false
      },
      {
        "name": "Fusée suborbitale",
        "image": "images/resources/sub-orbital-rocket2.png",
        "db_letter": 91,
        "transportation": 20,
        "retailable": true,
        "research": false
      },
      {
        "name": "Propulseur orbital",
        "image": "images/resources/orbital-booster.png",
        "db_letter": 92,
        "transportation": 100,
        "retailable": false,
        "research": false
      },
      {
        "name": "Navette spatiale",
        "image": "images/resources/starship.png",
        "db_letter": 93,
        "transportation": 100,
        "retailable": false,
        "research": false
      },
      {
        "name": "BFR",
        "image": "images/resources/BFR.png",
        "db_letter": 94,
        "transportation": 2000,
        "retailable": true,
        "research": false
      },
      {
        "name": "Avion de ligne",
        "image": "images/resources/jumbojet2.png",
        "db_letter": 95,
        "transportation": 2000,
        "retailable": true,
        "research": false
      },
      {
        "name": "Jet de luxe",
        "image": "images/resources/private-jet.png",
        "db_letter": 96,
        "transportation": 1000,
        "retailable": true,
        "research": false
      },
      {
        "name": "Avion de tourisme",
        "image": "images/resources/single-engine.png",
        "db_letter": 97,
        "transportation": 100,
        "retailable": true,
        "research": false
      },
      {
        "name": "Quadcopter",
        "image": "images/resources/quadcopter.png",
        "db_letter": 98,
        "transportation": 2,
        "retailable": true,
        "research": false
      },
      {
        "name": "Satellite",
        "image": "images/resources/satellite.png",
        "db_letter": 99,
        "transportation": 10,
        "retailable": true,
        "research": false
      },
      {
        "name": "Béton armé",
        "image": "images/resources/reinforced-concrete.png",
        "db_letter": 101,
        "transportation": 10,
        "retailable": false,
        "research": false
      },
      {
        "name": "Briques",
        "image": "images/resources/bricks.png",
        "db_letter": 102,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Ciment",
        "image": "images/resources/cement.png",
        "db_letter": 103,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Argile",
        "image": "images/resources/clay.png",
        "db_letter": 104,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Calcaire",
        "image": "images/resources/limestone.png",
        "db_letter": 105,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Bois",
        "image": "images/resources/wood.png",
        "db_letter": 106,
        "transportation": 1,
        "retailable": false,
        "research": false
      },
      {
        "name": "Poutres en acier",
        "image": "images/resources/steel-beams.png",
        "db_letter": 107,
        "transportation": 5,
        "retailable": false,
        "research": false
      },
      {
        "name": "Planches",
        "image": "images/resources/planks.png",
        "db_letter": 108,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Fenêtres",
        "image": "images/resources/windows.png",
        "db_letter": 109,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Outils",
        "image": "images/resources/tools.png",
        "db_letter": 110,
        "transportation": 1,
        "retailable": true,
        "research": false
      },
      {
        "name": "Unités de construction",
        "image": "images/resources/construction-units.png",
        "db_letter": 111,
        "transportation": 0,
        "retailable": false,
        "research": false
      },
      {
        "name": "Recherche végétale",
        "image": "images/resources/plant-research.png",
        "db_letter": 29,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche énergétique",
        "image": "images/resources/energy-research.png",
        "db_letter": 30,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche minière",
        "image": "images/resources/mining-research.png",
        "db_letter": 31,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche électronique",
        "image": "images/resources/electronics-research.png",
        "db_letter": 32,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche en élevage",
        "image": "images/resources/breeding-research.png",
        "db_letter": 33,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche en chimie",
        "image": "images/resources/chemistry-research.png",
        "db_letter": 34,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Logiciel",
        "image": "images/resources/software.png",
        "db_letter": 35,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche automobile",
        "image": "images/resources/automotive-research.png",
        "db_letter": 58,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche sur la mode",
        "image": "images/resources/fashion-research.png",
        "db_letter": 59,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche aérospatiale",
        "image": "images/resources/aero-research.png",
        "db_letter": 100,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Recherche des matériaux",
        "image": "images/resources/materials-research.png",
        "db_letter": 113,
        "transportation": 0,
        "retailable": false,
        "research": true
      },
      {
        "name": "Christmas Crackers",
        "image": "images/resources/xmas-crackers.png",
        "db_letter": 67,
        "transportation": 0.5,
        "retailable": true,
        "research": false,
        "season": [
          12
        ]
      }
    ]
  }
  
  
  ////*****PRIX ICI  */
  
  
  price(){
    
    return [
      {
        "kind": 111,
        "image": "images/resources/construction-units.png",
        "price": 2970.0,
        "is_up": false,
        "url": "/market/resource/111"
      },
      {
        "kind": 1,
        "image": "images/resources/power.png",
        "price": 0.265,
        "is_up": false,
        "url": "/market/resource/1"
      },
      {
        "kind": 32,
        "image": "images/resources/electronics-research.png",
        "price": 354.0,
        "is_up": false,
        "url": "/market/resource/32"
      },
      {
        "kind": 106,
        "image": "images/resources/wood.png",
        "price": 3.3,
        "is_up": false,
        "url": "/market/resource/106"
      },
      {
        "kind": 29,
        "image": "images/resources/plant-research.png",
        "price": 204.0,
        "is_up": false,
        "url": "/market/resource/29"
      },
      {
        "kind": 26,
        "image": "images/resources/laptops.png",
        "price": 1200.0,
        "is_up": false,
        "url": "/market/resource/26"
      },
      {
        "kind": 18,
        "image": "images/resources/aluminium.png",
        "price": 20.0,
        "is_up": false,
        "url": "/market/resource/18"
      },
      {
        "kind": 110,
        "image": "images/resources/tools.png",
        "price": 216.0,
        "is_up": false,
        "url": "/market/resource/110"
      },
      {
        "kind": 101,
        "image": "images/resources/reinforced-concrete.png",
        "price": 232.0,
        "is_up": false,
        "url": "/market/resource/101"
      },
      {
        "kind": 19,
        "image": "images/resources/plastic.png",
        "price": 12.9,
        "is_up": true,
        "url": "/market/resource/19"
      },
      {
        "kind": 72,
        "image": "images/resources/sugarcane.png",
        "price": 1.42,
        "is_up": true,
        "url": "/market/resource/72"
      },
      {
        "kind": 105,
        "image": "images/resources/limestone.png",
        "price": 1.8,
        "is_up": true,
        "url": "/market/resource/105"
      },
      {
        "kind": 52,
        "image": "images/resources/combustion-engine.png",
        "price": 630.0,
        "is_up": false,
        "url": "/market/resource/52"
      },
      {
        "kind": 107,
        "image": "images/resources/steel-beams.png",
        "price": 22.25,
        "is_up": false,
        "url": "/market/resource/107"
      },
      {
        "kind": 69,
        "image": "images/resources/golden-bars.png",
        "price": 6250.0,
        "is_up": false,
        "url": "/market/resource/69"
      },
      {
        "kind": 73,
        "image": "images/resources/ethanol.png",
        "price": 22.5,
        "is_up": true,
        "url": "/market/resource/73"
      },
      {
        "kind": 16,
        "image": "images/resources/silicon.png",
        "price": 8.3,
        "is_up": true,
        "url": "/market/resource/16"
      },
      {
        "kind": 7,
        "image": "images/resources/steak.png",
        "price": 11.4,
        "is_up": false,
        "url": "/market/resource/7"
      },
      {
        "kind": 12,
        "image": "images/resources/diesel.png",
        "price": 41.0,
        "is_up": true,
        "url": "/market/resource/12"
      },
      {
        "kind": 2,
        "image": "images/resources/water.png",
        "price": 0.325,
        "is_up": false,
        "url": "/market/resource/2"
      },
      {
        "kind": 40,
        "image": "images/resources/cotton.png",
        "price": 1.16,
        "is_up": true,
        "url": "/market/resource/40"
      },
      {
        "kind": 15,
        "image": "images/resources/bauxite.png",
        "price": 10.5,
        "is_up": false,
        "url": "/market/resource/15"
      },
      {
        "kind": 13,
        "image": "images/resources/transport.png",
        "price": 0.39,
        "is_up": false,
        "url": "/market/resource/13"
      },
      {
        "kind": 10,
        "image": "images/resources/crude-oil.png",
        "price": 33.5,
        "is_up": true,
        "url": "/market/resource/10"
      },
      {
        "kind": 75,
        "image": "images/resources/carbon-fiber.png",
        "price": 7.7,
        "is_up": true,
        "url": "/market/resource/75"
      },
      {
        "kind": 17,
        "image": "images/resources/chemicals.png",
        "price": 15.4,
        "is_up": false,
        "url": "/market/resource/17"
      },
      {
        "kind": 4,
        "image": "images/resources/oranges.png",
        "price": 1.97,
        "is_up": false,
        "url": "/market/resource/4"
      },
      {
        "kind": 45,
        "image": "images/resources/glass.png",
        "price": 13.7,
        "is_up": false,
        "url": "/market/resource/45"
      },
      {
        "kind": 14,
        "image": "images/resources/minerals.png",
        "price": 12.2,
        "is_up": false,
        "url": "/market/resource/14"
      },
      {
        "kind": 108,
        "image": "images/resources/planks.png",
        "price": 10.4,
        "is_up": true,
        "url": "/market/resource/108"
      },
      {
        "kind": 43,
        "image": "images/resources/steel.png",
        "price": 12.0,
        "is_up": false,
        "url": "/market/resource/43"
      },
      {
        "kind": 60,
        "image": "images/resources/underwear.png",
        "price": 4.35,
        "is_up": true,
        "url": "/market/resource/60"
      },
      {
        "kind": 9,
        "image": "images/resources/eggs.png",
        "price": 1.17,
        "is_up": true,
        "url": "/market/resource/9"
      },
      {
        "kind": 35,
        "image": "images/resources/software.png",
        "price": 206.0,
        "is_up": false,
        "url": "/market/resource/35"
      },
      {
        "kind": 68,
        "image": "images/resources/gold-ore.png",
        "price": 30.0,
        "is_up": false,
        "url": "/market/resource/68"
      },
      {
        "kind": 74,
        "image": "images/resources/methane.png",
        "price": 19.4,
        "is_up": false,
        "url": "/market/resource/74"
      },
      {
        "kind": 109,
        "image": "images/resources/windows.png",
        "price": 126.0,
        "is_up": true,
        "url": "/market/resource/109"
      },
      {
        "kind": 3,
        "image": "images/resources/apples.png",
        "price": 2.0,
        "is_up": false,
        "url": "/market/resource/3"
      },
      {
        "kind": 21,
        "image": "images/resources/electronic-components.png",
        "price": 63.0,
        "is_up": false,
        "url": "/market/resource/21"
      },
      {
        "kind": 48,
        "image": "images/resources/electric-motor.png",
        "price": 238.0,
        "is_up": true,
        "url": "/market/resource/48"
      },
      {
        "kind": 5,
        "image": "images/resources/grapes.png",
        "price": 2.3,
        "is_up": true,
        "url": "/market/resource/5"
      },
      {
        "kind": 44,
        "image": "images/resources/sand.png",
        "price": 1.3,
        "is_up": false,
        "url": "/market/resource/44"
      },
      {
        "kind": 76,
        "image": "images/resources/carbon-composite.png",
        "price": 70.0,
        "is_up": false,
        "url": "/market/resource/76"
      },
      {
        "kind": 31,
        "image": "images/resources/mining-research.png",
        "price": 390.0,
        "is_up": true,
        "url": "/market/resource/31"
      },
      {
        "kind": 77,
        "image": "images/resources/fuselage.png",
        "price": 3200.0,
        "is_up": false,
        "url": "/market/resource/77"
      },
      {
        "kind": 46,
        "image": "images/resources/leather.png",
        "price": 13.0,
        "is_up": false,
        "url": "/market/resource/46"
      },
      {
        "kind": 66,
        "image": "images/resources/seeds.png",
        "price": 0.2,
        "is_up": true,
        "url": "/market/resource/66"
      },
      {
        "kind": 83,
        "image": "images/resources/rocket-fuel.png",
        "price": 32.75,
        "is_up": false,
        "url": "/market/resource/83"
      },
      {
        "kind": 6,
        "image": "images/resources/grain.png",
        "price": 0.56,
        "is_up": true,
        "url": "/market/resource/6"
      },
      {
        "kind": 63,
        "image": "images/resources/simmi-shoes.png",
        "price": 19.0,
        "is_up": false,
        "url": "/market/resource/63"
      },
      {
        "kind": 34,
        "image": "images/resources/chemistry-research.png",
        "price": 210.0,
        "is_up": true,
        "url": "/market/resource/34"
      },
      {
        "kind": 54,
        "image": "images/resources/luxury-e-car.png",
        "price": 6900.0,
        "is_up": true,
        "url": "/market/resource/54"
      },
      {
        "kind": 100,
        "image": "images/resources/aero-research.png",
        "price": 350.0,
        "is_up": false,
        "url": "/market/resource/100"
      },
      {
        "kind": 79,
        "image": "images/resources/high-grade-e-components.png",
        "price": 940.0,
        "is_up": true,
        "url": "/market/resource/79"
      },
      {
        "kind": 41,
        "image": "images/resources/fabric.png",
        "price": 3.85,
        "is_up": true,
        "url": "/market/resource/41"
      },
      {
        "kind": 103,
        "image": "images/resources/cement.png",
        "price": 7.7,
        "is_up": false,
        "url": "/market/resource/103"
      },
      {
        "kind": 102,
        "image": "images/resources/bricks.png",
        "price": 2.8,
        "is_up": true,
        "url": "/market/resource/102"
      },
      {
        "kind": 89,
        "image": "images/resources/jet-engine.png",
        "price": 5300.0,
        "is_up": true,
        "url": "/market/resource/89"
      },
      {
        "kind": 78,
        "image": "images/resources/wing.png",
        "price": 2430.0,
        "is_up": true,
        "url": "/market/resource/78"
      },
      {
        "kind": 8,
        "image": "images/resources/sausages.png",
        "price": 3.55,
        "is_up": true,
        "url": "/market/resource/8"
      },
      {
        "kind": 22,
        "image": "images/resources/batteries.png",
        "price": 94.0,
        "is_up": true,
        "url": "/market/resource/22"
      },
      {
        "kind": 42,
        "image": "images/resources/iron-ore.png",
        "price": 5.6,
        "is_up": true,
        "url": "/market/resource/42"
      },
      {
        "kind": 59,
        "image": "images/resources/fashion-research.png",
        "price": 120.0,
        "is_up": true,
        "url": "/market/resource/59"
      },
      {
        "kind": 56,
        "image": "images/resources/luxury-car.png",
        "price": 4350.0,
        "is_up": false,
        "url": "/market/resource/56"
      },
      {
        "kind": 55,
        "image": "images/resources/economy-car.png",
        "price": 2200.0,
        "is_up": false,
        "url": "/market/resource/55"
      },
      {
        "kind": 30,
        "image": "images/resources/energy-research.png",
        "price": 338.0,
        "is_up": false,
        "url": "/market/resource/30"
      },
      {
        "kind": 113,
        "image": "images/resources/materials-research.png",
        "price": 252.0,
        "is_up": false,
        "url": "/market/resource/113"
      },
      {
        "kind": 23,
        "image": "images/resources/displays.png",
        "price": 122.0,
        "is_up": false,
        "url": "/market/resource/23"
      },
      {
        "kind": 81,
        "image": "images/resources/cockpit.png",
        "price": 5800.0,
        "is_up": true,
        "url": "/market/resource/81"
      },
      {
        "kind": 104,
        "image": "images/resources/clay.png",
        "price": 0.93,
        "is_up": true,
        "url": "/market/resource/104"
      },
      {
        "kind": 86,
        "image": "images/resources/rocket-engine.png",
        "price": 12700.0,
        "is_up": false,
        "url": "/market/resource/86"
      },
      {
        "kind": 112,
        "image": "images/resources/bulldozer.png",
        "price": 2360.0,
        "is_up": true,
        "url": "/market/resource/112"
      },
      {
        "kind": 28,
        "image": "images/resources/televisions.png",
        "price": 910.0,
        "is_up": false,
        "url": "/market/resource/28"
      },
      {
        "kind": 27,
        "image": "images/resources/monitors.png",
        "price": 570.0,
        "is_up": false,
        "url": "/market/resource/27"
      },
      {
        "kind": 70,
        "image": "images/resources/gold-watch.png",
        "price": 740.0,
        "is_up": false,
        "url": "/market/resource/70"
      },
      {
        "kind": 11,
        "image": "images/resources/petrol.png",
        "price": 41.5,
        "is_up": true,
        "url": "/market/resource/11"
      },
      {
        "kind": 47,
        "image": "images/resources/on-board-computer.png",
        "price": 474.0,
        "is_up": false,
        "url": "/market/resource/47"
      },
      {
        "kind": 84,
        "image": "images/resources/fuel-tank.png",
        "price": 9375.0,
        "is_up": false,
        "url": "/market/resource/84"
      },
      {
        "kind": 51,
        "image": "images/resources/car-body.png",
        "price": 800.0,
        "is_up": false,
        "url": "/market/resource/51"
      },
      {
        "kind": 20,
        "image": "images/resources/processors.png",
        "price": 118.0,
        "is_up": false,
        "url": "/market/resource/20"
      },
      {
        "kind": 58,
        "image": "images/resources/automotive-research.png",
        "price": 268.0,
        "is_up": true,
        "url": "/market/resource/58"
      },
      {
        "kind": 61,
        "image": "images/resources/gloves.png",
        "price": 10.1,
        "is_up": false,
        "url": "/market/resource/61"
      },
      {
        "kind": 25,
        "image": "images/resources/tablets.png",
        "price": 725.0,
        "is_up": false,
        "url": "/market/resource/25"
      },
      {
        "kind": 64,
        "image": "images/resources/handbags.png",
        "price": 24.0,
        "is_up": false,
        "url": "/market/resource/64"
      },
      {
        "kind": 49,
        "image": "images/resources/luxury-car-interior.png",
        "price": 910.0,
        "is_up": false,
        "url": "/market/resource/49"
      },
      {
        "kind": 88,
        "image": "images/resources/ion-drive.png",
        "price": 12900.0,
        "is_up": true,
        "url": "/market/resource/88"
      },
      {
        "kind": 62,
        "image": "images/resources/dress.png",
        "price": 18.1,
        "is_up": true,
        "url": "/market/resource/62"
      },
      {
        "kind": 53,
        "image": "images/resources/economy-e-car.png",
        "price": 3480.0,
        "is_up": true,
        "url": "/market/resource/53"
      },
      {
        "kind": 33,
        "image": "images/resources/breeding-research.png",
        "price": 208.0,
        "is_up": false,
        "url": "/market/resource/33"
      },
      {
        "kind": 50,
        "image": "images/resources/car-interior.png",
        "price": 328.0,
        "is_up": true,
        "url": "/market/resource/50"
      },
      {
        "kind": 65,
        "image": "images/resources/sneakers.png",
        "price": 14.2,
        "is_up": true,
        "url": "/market/resource/65"
      },
      {
        "kind": 82,
        "image": "images/resources/attitude-control.png",
        "price": 1550.0,
        "is_up": false,
        "url": "/market/resource/82"
      },
      {
        "kind": 24,
        "image": "images/resources/smart-phones.png",
        "price": 625.0,
        "is_up": true,
        "url": "/market/resource/24"
      },
      {
        "kind": 71,
        "image": "images/resources/necklace.png",
        "price": 1520.0,
        "is_up": true,
        "url": "/market/resource/71"
      },
      {
        "kind": 80,
        "image": "images/resources/flight-computer.png",
        "price": 5200.0,
        "is_up": false,
        "url": "/market/resource/80"
      },
      {
        "kind": 98,
        "image": "images/resources/quadcopter.png",
        "price": 890.0,
        "is_up": true,
        "url": "/market/resource/98"
      },
      {
        "kind": 57,
        "image": "images/resources/truck.png",
        "price": 5750.0,
        "is_up": true,
        "url": "/market/resource/57"
      },
      {
        "kind": 85,
        "image": "images/resources/solid-rocket.png",
        "price": 7800.0,
        "is_up": true,
        "url": "/market/resource/85"
      },
      {
        "kind": 87,
        "image": "images/resources/heat-shield.png",
        "price": 396.0,
        "is_up": true,
        "url": "/market/resource/87"
      },
      {
        "kind": 67,
        "image": "images/resources/xmas-crackers.png",
        "price": 16.0,
        "is_up": true,
        "url": "/market/resource/67"
      }
    ]
  }
  
}
