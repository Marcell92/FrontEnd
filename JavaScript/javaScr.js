// function squarefunction (num){
//
//     return num * num;
// }
//
// function sumthem (num1, num2, num3){
//
//     return num1 + num2 + num3;
// }
//
// function sumthem1 (num4, num5, num6){
//
//     result=num4+num5+num6;
//     return result;
// }
//
// window.alert (sumthem1(5, 8, 9));
//
// function squarefunction1 (num7){
//
//     return num7 * num7;
// }
//
// window.alert (squarefunction1(5));

// var name="Marcell";
// var number="8"
// window.alert(name)
// console.log(number)
// document.writeln(name)



function clicking () {

    document.getElementById("test").innerHTML = "Why did you click on me?";

}

function showage(){

    window.alert(person.age);
    console.log(person.age);
}

function increaseage(){

    document.getElementById("object").innerHTML = "Person name: " + person.name + " Person age: " + (person.age = +person.age + 1) + " Person occupation: " + person.occupation;
    document.getElementById("age").value = +person.age;
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

var person = {};

function formdata() {var name = document.getElementById("name").value.replace();
                     var age = document.getElementById("age").value.replace();
                     var occupation = document.getElementById("occupation").value.replace();

                    if(person != null){
                            if ((name != null) && (name != "")) {
                                person.name = name;
                            }

                            if ((age != null) && (age != "")){
                                person.age = age;
                            }

                            if ((occupation != null) && (occupation != "")){
                                person.occupation = occupation;
                            }
                                }
                    else {
                         person = {
                             name: name,
                             occupation: occupation,
                             age: age,
                         }
                    }
    showdata();
}

function showdata(){

    document.getElementById("object").innerHTML = "Person name: " + person.name + " Person age: " + person.age + " Person occupation: " + person.occupation;

}

function thesum(){

    var num1 = document.getElementById("num1").value.replace();
    var num2 = document.getElementById("num2").value.replace();
    var num3 = document.getElementById("num3").value.replace();

    var result = +num1 + +num2 + +num3;

    document.getElementById("sum").innerHTML = "The sum of the three numbers is equal to: " + result;
}

function square(){

    var num4 = document.getElementById("num4").value.replace();
    var result1 = +num4 * +num4;
    document.getElementById("square").innerHTML = "The square of the number is equal to: " + result1;
}


// function showit (){
//     window.alert(newperson.name)
//     window.alert(newperson.age)
//     window.alert(newperson.occupation)
// }

function toUppercase() {
    var text1 = "He said \"My name is Elliott!\"";
    var text2 = text1.toUpperCase();
    document.getElementById("upper").innerHTML = text2;
}

    var string1 = "hellom";
    var number1 = 8;
    document.getElementById('con').innerText = string1 + number1;


    var garage = ["BMW", "Ford", "KIA", "Mercedes"];
    document.getElementById("a").innerHTML = garage
    garage.push("Audi");
    document.getElementById("b").innerHTML = garage
    garage.pop("Audi");
    document.getElementById("c").innerHTML = garage

function checkage(){

    if (person.age >= 20 && person.age <= 40){
        document.getElementById("agecheck").innerHTML = "The person is between 20 and 40 years old"
    }
    else
        document.getElementById("agecheck").innerHTML = "The person is not between 20 and 40 years old"
}

function iterate1(){
        for (var i = 0; i < 11; i++) {

        console.log(i);
    }
}

function iterate2(){
    for (var i = 0; i < 11; i++) {

        if (i % 2 == 0){

            console.log(i);
        }
    }
}
iterate1();
iterate2();

function iterate3() {

    for (var i = 1; i <= 30; i++) {

        if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz");
        }

        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }


        else if (i % 3 != 0 && i % 5 != 0) {
            console.log(i);
        }

        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
    }
}

iterate3();



