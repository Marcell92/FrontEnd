function squarefunction (num){

    return num * num;
}

function sumthem (num1, num2, num3){

    return num1 + num2 + num3;
}

function sumthem1 (num4, num5, num6){

    result=num4+num5+num6;
    return result;
}

window.alert (sumthem1(5, 8, 9));

function squarefunction1 (num7){

    return num7 * num7;
}

window.alert (squarefunction1(5));

var name="Marcell";
var number="8"
window.alert(name)
console.log(number)
document.writeln(name)

var person = {name: "Marcell", age: 25, occupation: "QAtrainee"};

function clicking () {

    document.getElementById("test").innerHTML = "Why did you click on me?";

}

function showage(){

    window.alert(person.age);
    console.log(person.age);
}

function increaseage(){

    window.alert(person.age = person.age +1);
}

function changecolor(){


}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color1 = '#';
    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }
    document.bgColor=color1;
}

function colors(col) { switch(col) { case 'red': document.bgColor="#FF0000"; break;
case 'green': document.bgColor="#00FF00"; break;
case 'blue': document.bgColor="#0000FF"; break;
case 'random': getRandomColor(); break; } }

var person = {uname1: document.getElementById("uname1").value},
             {age1: document.getElementById("age1").value},
             {occupation1: document.getElementById("occupation1").value}
