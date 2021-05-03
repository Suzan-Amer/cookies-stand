'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', 
'12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    locationName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    custHour: [],
    cookieHour: [],
    total: 0,

    calcCustHour: function() {
        for (let i = 0; i < hours.length; i++) { 
            this.custHour.push(random(this.minCust, this.maxCust));
        }
    },
    calcCookieHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
            this.total += this.cookieHour[i];
        }

    },
    renderFunction: function() {
        
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
       
        shopName.textContent = this.locationName;

    
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

      
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
          
            listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

        }
       
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(seattle);
seattle.calcCustHour();
seattle.calcCookieHour();
seattle.renderFunction();



const Tokyo= {
    locationName: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    custHour: [],
    cookieHour: [],
    total: 0,

    calcCustHour: function() {
        for (let i = 0; i < hours.length; i++) {

         this.custHour.push(random(this.minCust, this.maxCust));
        }
    },
    calcCookieHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
            this.total += this.cookieHour[i];
        }

    },
    renderFunction: function() {
        
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
       
        shopName.textContent = this.locationName;

    
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

      
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
          
            listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

        }
       
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(Tokyo);
Tokyo.calcCustHour();
Tokyo.calcCookieHour();
Tokyo.renderFunction();



const Dubai = {
    locationName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    custHour: [],
    cookieHour: [],
    total: 0,

    calcCustHour: function() {
        for (let i = 0; i < hours.length; i++) {

           
            this.custHour.push(random(this.minCust, this.maxCust));
        }
    },
    calcCookieHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
            this.total += this.cookieHour[i];
        }

    },
    renderFunction: function() {
        
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
       
        shopName.textContent = this.locationName;

    
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

      
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
          
            listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

        }
       
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(Dubai);
Dubai.calcCustHour();
Dubai.calcCookieHour();
Dubai.renderFunction();





const Paris = {
    locationName: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    custHour: [],
    cookieHour: [],
    total: 0,

    calcCustHour: function() {
        for (let i = 0; i < hours.length; i++) {

           
            this.custHour.push(random(this.minCust, this.maxCust));
        }
    },
    calcCookieHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
            this.total += this.cookieHour[i];
        }

    },
    renderFunction: function() {
        
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
       
        shopName.textContent = this.locationName;

    
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

      
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
          
            listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

        }
       
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(Paris);
Paris.calcCustHour();
Paris.calcCookieHour();
Paris.renderFunction();





const Lima = {
    locationName: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    custHour: [],
    cookieHour: [],
    total: 0,

    calcCustHour: function() {
        for (let i = 0; i < hours.length; i++) {

           
            this.custHour.push(random(this.minCust, this.maxCust));
        }
    },
    calcCookieHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
            this.total += this.cookieHour[i];
        }

    },
    renderFunction: function() {
        
        let theParent = document.getElementById('parent');
        console.log(theParent);
        let shopName = document.createElement('h2');

        theParent.appendChild(shopName);
       
        shopName.textContent = this.locationName;

    
        let unorderedList = document.createElement('ul');
        theParent.appendChild(unorderedList);

      
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedList.appendChild(listItem);
          
            listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

        }
       
        let totalItem = document.createElement('li');
        unorderedList.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }
}

console.log(Lima);
Lima.calcCustHour();
Lima.calcCookieHour();
Lima.renderFunction();