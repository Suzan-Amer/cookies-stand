# cookies-stand

## the idea for js code from baraa
## work in gruop whit wijdan
body{
    background-image: url(https://image.freepik.com/free-photo/biscuits-wheat-with-copy-space-background_23-2148432372.jpg);
    background-size: 100%;
}



const cookSh = ['6am', '7am', '8am', '9am', '10am', '11am', 
'12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function cookies (location ,min , max , avgCookie ,){


    this.location = location ;
    this.min = min ;
    this.max = max ;
    this.avgCookie = avgCookie ;
    this.randomh = [];
    this.Sales = 0 ;
    

    
}





let Seattle = new cookies  ('Seattle', 23 ,65,6.3);
let Tokyo = new cookies ('Tokyo', 3,24,1.2);
let Dubai = new cookies ('Dubai', 11 ,38,3.7);
let Paris = new cookies ('Paris', 30 ,38,2.3);
let Lima = new cookies ('Lima', 2 ,16,4.6);



let shops = [Seattle,Tokyo,Dubai,Paris,Lima];

Seattle.hourSales();
console.log (Seattle);

Tokyo.hourSales();
console.log(Tokyo);

Dubai.hourSales();
console.log(Dubai);

Paris.hourSales();
console.log(Paris);


Lima.hourSales();
console.log(Lima);
Lima.hourSales();

let theParent = document.getElementById('Cookie salmon');
Shops.prototype.render=function(){
let theTabel = document.createElement('table');
theParent.appendChild(theTabel);

let theHeader = document.createElement('tr');
theTabel.appendChild(theHeader);
let th=document.createElement('th');
theHeader.appendChild(th);
th.textContent = '.........';
theHeader.appendChild(th);
th.textContent ='sales location total';
}


Shops.prototype.hours =function(){
    for (let i=0;i<hours.length;i++){
           
     let cookiesNum= Math.floor(this.randomCust() *this.avgCooki);
    this.randomh.push(cookiesNum);
        this.Sales += cookiesNum ;

}}