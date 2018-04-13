// var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
//
// var request = new XMLHttpRequest();
//
// request.open('GET' , requestURL);
//
// request.responseType = 'json';
//
// request.send();
//
//
// request.onload = function(){
//
//     var superHeroes = request.response;
//
//     console.log ("Our hero squad is named: " + superHeroes.squadName);
//
//     console.log ("One of our members is the " + superHeroes.members[0].name);
//
//     console.log ("The superpowers of " + superHeroes.members[1].name + " are " + superHeroes.members[1].powers [1] + ", "
//     + superHeroes.members[1].powers [0] + " and " + superHeroes.members[1].powers [2]);
// }

var requestURL1 = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';

var request1 = new XMLHttpRequest();

request1.open('GET' , requestURL1);

request1.responseType = 'json';

request1.send();

request1.onload = function alma() {

    var kings = request1.response;
    var search = document.getElementById("king").value;

    for (nm in object) {

        if (search = object.nm) {

            console.log(object.nm + object.city + object.hse + object.yrs);
        }
    }
}


