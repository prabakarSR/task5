//Get all the countries from Asia continent /region using Filter function
const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
    const obj = JSON.parse(this.response);
    obj.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(obj);
};

//Get all the countries with a population of less than 2 lakhs using Filter function
const req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v3.1/all");
req1.send();
req1.onload = function () {
    const obj1 = JSON.parse(this.response);
    const ans = obj1.filter((element)=>{
        return element.population<200000;
    })
    console.log(ans);
};

//Print the following details name, capital, flag, using forEach function
const reqq = new XMLHttpRequest();
reqq.open("GET", "https://restcountries.com/v3.1/all");
reqq.send();
reqq.onload = function () {
    const ans = JSON.parse(this.response);
    ans.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);

    });

};

//Print the total population of countries using reduce function
const req2 = new XMLHttpRequest();
req2.open("GET", "https://restcountries.com/v3.1/all");
req2.send();
req2.onload = function () {
    let ans = JSON.parse(this.response);
    let total = ans.reduce((acc, curr) => {
        return acc + curr.population;
    }, 0);

    console.log(total);
};

//Print the country that uses US dollars as currency.
const req3 = new XMLHttpRequest();
req3.open("GET", "https://restcountries.com/v3.1/all");
req3.send();
req3.onload = function () {
    let ans = JSON.parse(this.response);
    let currency = ans.filter((element) => {
        for (let key in element.currencies) {
            if (element.currencies[key].code === "USD") {
                return element;
            }
        }
    })
    console.log(currency);
};


