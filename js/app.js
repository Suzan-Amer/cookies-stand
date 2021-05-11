'use strict';



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', 
'12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min,max ){
  return Math.floor(Math.random()*(max,min+1)+min);
}


let locationarr = [];
function Location (loc, min, max, avgcookie) {
  this.loc = loc;
  this.min = min;
  this.max = max;
  this.avgcookie = avgcookie;
  this.custHour= [];
 this.cookieHour= [];
 this.total=0;
 locationarr.push(this);
 
}
console.log(locationarr);


Location.prototype.calccookieHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookieHour.push(Math.floor(this.custHour[i] * this.avgcookie));
    this.total += this.cookieHour[i];
  }
}


Location.prototype.calccustHour= function () {
    for (let i = 0; i < hours.length; i++) {
      this.custHour.push(random(this.min, this.max));
    
    }
  }



let Seattle = new Location('seattle', 23, 65,3.6);
console.log(Seattle.custHour);
let tokyo = new Location('tokyo', 23,24,1.2);
let Dubai = new Location('Dubai', 11, 38, 3.7);
let Paris = new Location('Paris', 20, 38, 2.3);
let Lima = new Location('Lima', 2, 16, 4.6);



let theparent = document.getElementById('parent');
console.log(theparent);
let table = document.createElement('table');
console.log(table);
theparent.appendChild(table);



function makeheder() {
  let clon = document.createElement('tr');
  table.appendChild(clon);

  let thead = document.createElement('th');
  clon.appendChild(thead);
  thead.textContent = 'shop name';

  for (let i = 0 ; i < hours.length; i++){
    let thclon = document.createElement('th');
    clon.appendChild(thclon);
    thclon.textContent=hours[i];
  }
  let thlast=document.createElement('th');
  clon.appendChild(thlast);
  thlast.textContent='Daily total ';
}



makeheder();

Location.prototype.render=function () {
  let datarow=document.createElement('tr');
  table.appendChild(datarow);

  let namedata=document.createElement('td');
  datarow.appendChild(namedata);
  namedata.textContent=this.loc;

  for (let i = 0 ; i < hours.length ; i++){
    let tdelement=document.createElement('td');
    datarow.appendChild(tdelement);
    tdelement.textContent=this.cookieHour[i];
  }
  let totaldata =document.createElement('td');
  datarow.appendChild(totaldata);
  totaldata.textContent=this.total;
}



function makefooter() {

  let footertable=document.createElement('tr');
 table.appendChild(footertable);

 let footerth=document.createElement('th');
 footertable.appendChild(footerth);
 footerth.textContent='total';


 let  totalTotal = 0 ;

 for (let i = 0 ; i < hours.length ; i++){
   let totalHour=0;

   for(let j = 0 ; j < locationarr.length ; j++){
totalHour+=locationarr[j].cookieHour[i];
   }

    totalTotal += totalHour

   
   let footertotal= document.createElement('th');
   footertable.appendChild(footertotal);
   footertotal.textContent=totalHour;
 }
 let totalTh = document.createElement('th');
 footertable.appendChild(totalTh);
 totalTh.textContent=totalTotal; 
}
 

for (let i = 0 ; i < locationarr.length ; i++){
  locationarr[i].calccustHour();
  locationarr[i].calccookieHour();
  console.log(locationarr[i].total);
  locationarr[i].render();
  }


  makefooter();

  let cookieForm = document.getElementById('cookieForm');
  cookieForm.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

  table.deleteRow(table.rows.length-1)  

  let shop=event.target.shop.value ;
  let min=event.target.min.value;
  let max=event.target.max.value;
  let avgCookie=event.target.avgcookie.value;
    
    let cookieShop = new cookSales( shop , min , max , avgCookie );
  cookieShop.render();
  
  location.calccustHour();
  location.calccookieHour();
  
    

document.getElementById('cookieform').reset();
console.log(cookieForm);
}

