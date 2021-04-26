'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

Shop.allShops = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function Shop(shopName, minHourlyCustomers, maxHourlyCustomers, avgCookies){
    this.shopName = shopName,
    this.minHourlyCustomers = minHourlyCustomers,
    this.maxHourlyCustomers = maxHourlyCustomers,
    this.avgCookies = avgCookies,
    this.cookiesEachHour = [],
    this.customersPerHour = [],

    Shop.allShops.push(this)
}

let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);


Shop.prototype.randomCustomersPerHour = function (minHourlyCustomers, maxHourlyCustomers){
     this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers));
}

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Shop.prototype.cookiesPerHour = function (){
    for (let i = 0; i < hours.length; i++) {

        
        this.cookiesEachHour.push(Math.floor(this.randomCustomersPerHour[i] * this.avgCookies));
        

    }
}

let listDiv = document.getElementById('listDiv');
let table = document.createElement('table');
listDiv.appendChild(table)

function makingHeader(){
    let firstRow = document.createElement('tr');
    let firstTh = document.createElement('th');
    table.appendChild(firstRow)
    firstRow.appendChild(firstTh)
    firstTh.textContent = 'name'

    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        firstRow.appendChild(tdElement)
        tdElement.textContent = `${hours[i]}`
        
    }

    let totalsTd = document.createElement('td');
    firstRow.appendChild(totalsTd);
    totalsTd.textContent = `Daily Location Total`
}

makingHeader();

Shop.prototype.render = function(){
    
        let shopRow = document.createElement('tr');
        table.appendChild(shopRow);
        shopRow.textContent = this.shopName;

        for (let i = 0; i < hours.length; i++) {
            let cookiesTd = document.createElement('td');
            shopRow.appendChild(cookiesTd);
            cookiesTd.textContent = this.cookiesEachHour[i];

            
            
        }
}



Seattle.randomCustomersPerHour();
Seattle.cookiesPerHour();
Seattle.render();

Tokyo.randomCustomersPerHour();
Tokyo.cookiesPerHour();
Tokyo.render();

Dubai.randomCustomersPerHour();
Dubai.cookiesPerHour();
Dubai.render();

Paris.randomCustomersPerHour();
Paris.cookiesPerHour();
Paris.render();

Lima.randomCustomersPerHour();
Lima.cookiesPerHour();
Lima.render();






// function list (){
//     let listDiv = document.getElementById('listDiv');
//     let shopList = document.createElement('ul');
//     listDiv.appendChild(shopList);


//     for (let i = 0; i < hours.length; i++) {
//         let showList = document.createElement('li');
//         shopList.appendChild(showList)
//         showList.textContent = `${hours[i]}: ${Seattle.cookiesPerHour()} cookies`

        
//     }
// }

// list();