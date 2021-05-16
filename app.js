'use strict';



let timee = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let locationshop = [];
let totalloc = 0;

function Shopcookies(name, minCust, maxCust, AvgCookieSale,) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AvgCookieSale = AvgCookieSale;

    this.costom = [];
    this.avecookies = [];
    this.total = 0;

    locationshop.push(this);
}
function randum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
Shopcookies.prototype.cosTomperh = function () {
    for (let i = 0; i < timee.length; i++) {
        this.costom[i] = randum(this.minCust, this.maxCust);
    }
    console.log(this.costom);
}
Shopcookies.prototype.averagkoo = function () {
    for (let i = 0; i < this.costom.length; i++) {
        this.avecookies[i] = Math.floor(this.costom[i] * this.AvgCookieSale);
        this.total += this.avecookies[i];
    }
    console.log(this.total);
}


let Parent = document.getElementById('cookie');




let td = document.createElement('table');

Parent.appendChild(td);

function firstResult() {
    let tr = document.createElement('tr')
    td.appendChild(tr);

    let thr = document.createElement('th')
    tr.appendChild(thr);
    thr.textContent = 'Name/time';



    for (let i = 0; i < timee.length; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = timee[i];

    }
    let totalth = document.createElement('th');
    tr.appendChild(totalth);
    totalth.textContent = 'daily location total';


}
firstResult();


Shopcookies.prototype.tabledata = function () {
    let datar = document.createElement('tr')
    td.appendChild(datar);

    let indata = document.createElement('td');
    datar.appendChild(indata);
    indata.textContent = this.name;

    for (let i = 0; i < timee.length; i++) {
        let tddata = document.createElement('td');
        datar.appendChild(tddata);
        tddata.textContent = this.avecookies[i];
    }
    let totalfortime = document.createElement('td')
    datar.appendChild(totalfortime);
    totalfortime.textContent = this.total;



}
//-----------------------------------------------------------
function tabelfooter() {
    let tabelfooterr = document.createElement('tr');
    td.appendChild(tabelfooterr);

    let footertd = document.createElement('td');
    tabelfooterr.appendChild(footertd);
    footertd.textContent = 'Total';

    for (let i = 0; i < timee.length; i++) {
        let finaLtotel = 0;

        for (let s = 0; s < locationshop.length; s++) {
            finaLtotel += locationshop[s].avecookies[i];

        }

        let totalfooter = document.createElement('td');
        tabelfooterr.appendChild(totalfooter);
        totalfooter.textContent = finaLtotel;
        totalloc += finaLtotel;

    }
    let lastfooterr = document.createElement('td');
    tabelfooterr.appendChild(lastfooterr);
    lastfooterr.textContent = totalloc;

}
//------------------------------------------------------

Shopcookies.prototype.tabledata = function () {
    let datar = document.createElement('tr')
    td.appendChild(datar);

    let indata = document.createElement('td');
    datar.appendChild(indata);
    indata.textContent = this.name;

    for (let i = 0; i < timee.length; i++) {
        let tddata = document.createElement('td');
        datar.appendChild(tddata);
        tddata.textContent = this.avecookies[i];
    }
    let totalfortime = document.createElement('td')
    datar.appendChild(totalfortime);
    totalfortime.textContent = this.total;



}

function tabelfooter() {
    let tabelfooterr = document.createElement('tr');
    td.appendChild(tabelfooterr);

    let footertd = document.createElement('td');
    tabelfooterr.appendChild(footertd);
    footertd.textContent = 'Total';

    for (let i = 0; i < timee.length; i++) {
        let finaLtotel = 0;

        for (let s = 0; s < locationshop.length; s++) {
            finaLtotel += locationshop[s].avecookies[i];

        }

        let totalfooter = document.createElement('td');
        tabelfooterr.appendChild(totalfooter);
        totalfooter.textContent = finaLtotel;
        totalloc += finaLtotel;

    }
    let lastfooterr = document.createElement('td');
    tabelfooterr.appendChild(lastfooterr);
    lastfooterr.textContent = totalloc ;

}
let shop1 = new Shopcookies('Seattle', 23, 65, 6.3);
console.log(shop1);



let shop2 = new Shopcookies('Tokyo', 3, 24, 1.2);
let shop3 = new Shopcookies('Dubai', 11, 38, 3.7);


let shop4 = new Shopcookies('Paris', 20, 38, 2.3);
let shop5 = new Shopcookies('Lima', 2, 16, 4.6);



for (let i = 0; i < locationshop.length; i++) {
    locationshop[i].cosTomperh();
    locationshop[i].averagkoo();
    locationshop[i].tabledata();


}

let form = document.getElementById('SalmonCookiesform');
form.addEventListener('submit', formsup);
function formsup(event) {
    event.preventDefault();
    let name = event.target.nameco.value;
    console.log(name);
    let minVal = event.target.minn.value;
    console.log(minVal);
    let maxVal = event .target .maxn.value;
    let avgNum = event.target.avgh.value;
    console.log(avgNum);

    let newCuntri = new Shopcookies(name,minVal,maxVal,avgNum);
    td.removeChild(td.lastChild);
    locationshop.push(newCuntri);

    newCuntri.cosTomperh();
    newCuntri.averagkoo();
    newCuntri.tabledata();

    tabelfooter(); 
    form.reset();
}
tabelfooter();


