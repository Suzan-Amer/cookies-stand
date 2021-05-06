'use strict';

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', 
// '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const seattle = {
//     locationName: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     custHour: [],
//     cookieHour: [],
//     total: 0,

//     calcCustHour: function() {
//         for (let i = 0; i < hours.length; i++) { 
//             this.custHour.push(random(this.minCust, this.maxCust));
//         }
//     },
//     calcCookieHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
//             this.total += this.cookieHour[i];
//         }

//     },
//     renderFunction: function() {
        
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
       
//         shopName.textContent = this.locationName;

    
//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

      
//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
          
//             listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

//         }
       
//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }

// console.log(seattle);
// seattle.calcCustHour();
// seattle.calcCookieHour();
// seattle.renderFunction();



// const Tokyo= {
//     locationName: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,
//     custHour: [],
//     cookieHour: [],
//     total: 0,

//     calcCustHour: function() {
//         for (let i = 0; i < hours.length; i++) {

//          this.custHour.push(random(this.minCust, this.maxCust));
//         }
//     },
//     calcCookieHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
//             this.total += this.cookieHour[i];
//         }

//     },
//     renderFunction: function() {
        
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
       
//         shopName.textContent = this.locationName;

    
//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

      
//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
          
//             listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

//         }
       
//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }

// console.log(Tokyo);
// Tokyo.calcCustHour();
// Tokyo.calcCookieHour();
// Tokyo.renderFunction();



// const Dubai = {
//     locationName: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
//     custHour: [],
//     cookieHour: [],
//     total: 0,

//     calcCustHour: function() {
//         for (let i = 0; i < hours.length; i++) {

           
//             this.custHour.push(random(this.minCust, this.maxCust));
//         }
//     },
//     calcCookieHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
//             this.total += this.cookieHour[i];
//         }

//     },
//     renderFunction: function() {
        
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
       
//         shopName.textContent = this.locationName;

    
//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

      
//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
          
//             listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

//         }
       
//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }

// console.log(Dubai);
// Dubai.calcCustHour();
// Dubai.calcCookieHour();
// Dubai.renderFunction();





// const Paris = {
//     locationName: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3,
//     custHour: [],
//     cookieHour: [],
//     total: 0,

//     calcCustHour: function() {
//         for (let i = 0; i < hours.length; i++) {

           
//             this.custHour.push(random(this.minCust, this.maxCust));
//         }
//     },
//     calcCookieHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
//             this.total += this.cookieHour[i];
//         }

//     },
//     renderFunction: function() {
        
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
       
//         shopName.textContent = this.locationName;

    
//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

      
//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
          
//             listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

//         }
       
//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }

// console.log(Paris);
// Paris.calcCustHour();
// Paris.calcCookieHour();

// Paris.renderFunction();





// const Lima = {
//     locationName: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,
//     custHour: [],
//     cookieHour: [],
//     total: 0,

//     calcCustHour: function() {
//         for (let i = 0; i < hours.length; i++) {

           
//             this.custHour.push(random(this.minCust, this.maxCust));
//         }
//     },
//     calcCookieHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cookieHour.push(Math.floor(this.custHour[i] * this.avgCookies));
           
//             this.total += this.cookieHour[i];
//         }

//     },
//     renderFunction: function() {
        
//         let theParent = document.getElementById('parent');
//         console.log(theParent);
//         let shopName = document.createElement('h2');

//         theParent.appendChild(shopName);
       
//         shopName.textContent = this.locationName;

    
//         let unorderedList = document.createElement('ul');
//         theParent.appendChild(unorderedList);

      
//         for (let i = 0; i < hours.length; i++) {
//             let listItem = document.createElement('li');
//             unorderedList.appendChild(listItem);
          
//             listItem.textContent = `${hours[i]}: ${this.cookieHour[i]} cookies.`

//         }
       
//         let totalItem = document.createElement('li');
//         unorderedList.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }
// }

// console.log(Lima);
// Lima.calcCustHour();
// Lima.calcCookieHour();
// Lima.renderFunction();

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', 
'12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNum(min,max ){
  return Math.floor(Math.random()*(max,min+1)+min);
}


let locationarr = [];
function location(loc, min, max, avgcookie) {
  this.loc = loc;
  this.min = min;
  this.max = max;
  this.avgcookie = avgcookie;
  this.custHour= [];
 this.cookieHour= [];
 this.total=0;
 locationarr.push(this);
}



location.prototype.calccookieHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookieHour.push(Math.floor(this.custHour[i] * this.avgcookie));
    this.total += this.cookieHour[i];
  }
}


location.prototype.calccustHour= function () {
    for (let i = 0; i < hours.length; i++) {
      this.custHour.push(random(this.minCust, this.maxCust));
    }
  }



let Seattle = new location('seattle', 23, 65,3.6);
let tokyo = new location('tokyo', 23,24,1.2);
let Dubai = new location('Dubai', 11, 38, 3.7);
let Paris = new location('Paris', 20, 38, 2.3);
let Lima = new location('Lima', 2, 16, 4.6);



let theparent = document.getElementById('parent');
let table = document.createElement('table');
theparent.appendChild(table);




function makeheder() {
  let clon = document.createElement('hr');
  table.appendChild(clon);

  let thead = document.createElement('th');
  clon.appendChild(thead);
  thhead.textContent = 'shop name';

  for (let i = 0 ; i < hours.length; i++){
    let thclon = document.createElement('hr');
    clon.appendChild(thclon);
    thclon.textContent=hours[i];
  }
  let thlast=document.createElement('th');
  clon.appendChild(thlast);
  thlast.textContent='Daily total ';
}



makeheder();

Location.prototype.render=function () {
  let datarow=createElement('tr');
  table.appendChild(datarow);

  let namedata=createElement('td');
  datarow.appendChild(namedata);
  namedata.textContent=this.loc;

  for (let i = 0 ; i < hours.length ; i++){
    let tdelement=createElement('td');
    datarow.appendChild(tdelement);
    tdelement.textContent=this.cookieHour[i];
  }
  let totaldata =createElement('td');
  datarow.appendChild(totaldata);
  totaldata.textContent=this.total;
}



function makefooter() {

  let footertable=createElement('tr');
 table.appendChild(footertable);

 let footerth=createElement('th');
 footertable.appendChild(footerth);
 footerth.textContent='total';

 for (let i = 0 ; i < hours.length ; i++){
   let totalHour=0;

   for(let j = 0 ; j < locationarr.length ; j++){
totalHour+=locationarr[j].cookieHour[i];
   }

   
   let footertotal=createElement('th');
   footertable.appendChild(footertotal);
   footertotal.textContent=totalHour;
 }
}

makefooter();
for (let i = 0 ; i < locationarr.length ; i++){
  locationarr[i].calccustHour();
  locationarr[i].cookieHour();
  locationarr[i].render();
  }


  let cookieForm = document.getElementById('cookieForm');
cookieForm.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let name = event.target.nameField.value;
    console.log(name);

    
    let cookieForm = new cookSal( min, max, shop ,avgCookie);

    cookieForm.getcustHour();
  cookieForm.getcookieHour();
cookieForm.render();
}

