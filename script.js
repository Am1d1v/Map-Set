


/*

const flights = ['Australia', 'Spain', 'Canada', 'USA', 'Canada'];
//console.log(flights);

const setFlights = new Set(flights);

/*

//console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has("Australia"));
console.log(setFlights.has("Finland"));
setFlights.add('France');
console.log(setFlights);
setFlights.delete("France")
console.log(setFlights);

*/

/*

for (let flight of setFlights){
    console.log(flight)
}

*/

/*

console.log([...setFlights]);


const setObj = new Set([{a: 1, b: 2, b: 2}]);
console.log(setObj);

console.log(new Set("abcdef"));

*/

const weatherMap = new Map();

//weatherMap.set('London', '10');
//weatherMap.set('Sydney', '27');
weatherMap
        .set('London', '10')
        .set('Sydney', '27');
weatherMap.set('Paris', '15');

//console.log(weatherMap);
//console.log(weatherMap.get('London'));

//console.log(weatherMap.delete("London"));
weatherMap.delete("London");
//console.log(weatherMap);

//weatherMap.clear();
//console.log(weatherMap);

weatherMap
        .set(1, 10)
        .set(true, "yes")
        .set(true, "yes!")
        .set([1,2,3], "array")
        .set({objOne: 1}, {objTwo: 2});

/*


console.log(weatherMap);        
console.log(weatherMap.size);        

console.log(weatherMap.get([1,2,3]));

*/

for (let elements of weatherMap){
    console.log(elements);
}

//======== Fast Map Creating =======================================================================

const someMap = new Map([
    ['London', 10],
    ['Sydney', 30],
    ['Paris', 15]
]);

console.log(someMap);

const weatherObj = {
    London: 10,
    Paris: 18,
    Sydney: 33
};

//console.log(Object.entries(weatherObj));
const weatherNewMap = new Map (Object.entries(weatherObj));
console.log(weatherNewMap);


/*

const weather = new Map([
    ["Moscow", 10],
    ["Paris", 8]
]);

for (let [key, keyValue] of weather){
    //console.log(key);
    //console.log(keyValue);
    console.log(`Weather ${keyValue} in city ${key}`);
}

console.log([...weather]);

console.log([...weather.keys()]);
console.log([...weather.values()]);

*/

let weather = new Map([
    ["Moscow", 10],
    ["Paris", 8],
    ["London", 5]
]);

//weather = [...weather].map(el => el.reverse());
weather =  new Map ([...weather].map(el => el.reverse()));
console.log(weather);
//weather = new Map(weather);
//console.log(weather);