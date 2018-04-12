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

function iteration4(){

    var num10 = document.getElementById("num10").value.replace();
    var count = 0;

    while (num10 != 1 ) {

        if (num10 % 3 == 0) {

            num10=num10 / 3;

            count++
            console.log(num10);
        }

        else if (num10 % 3 != 0) {

            if ((num10 - 1) % 3 == 0) {

                num10= +num10-1;
                count++;
                console.log(num10);
            }

            else if ((num10 + 1) % 3 == 0) {

                num10= +num10+1;
                count++;
                console.log(num10);
            }

        }

    }
    console.log("Number of iterations: " + count);
}

function triples(){

    var triple = document.getElementById("triple").value.replace();
    var countit = 0;

    if(triple.length >=3) {


        for (i = 0; i < triple.length - 2; i++) {


            if (triple.charAt(i) === triple.charAt((i + 1)) && triple.charAt((i)) === triple.charAt((i + 2))) {

                countit++;
            }
        }
    }
    console.log(+countit);
}


function paragraph() {

    deleteparagraph();

    var p = document.createElement("P");
    p.setAttribute("id", "para1");
    document.getElementsByTagName('body')[0].appendChild(p);
}

function deleteparagraph(){

    if (document.getElementById('para1') != null) {
        document.getElementById("para1").remove();
    }
}

function paragraph2() {

    var text = document.getElementById("para").value;
    var t = document.createTextNode(text);
    var a = document.createTextNode(text);

    if (document.getElementById("para1") !=null){
    

    }
}

function paragraph3(){

    document.getElementById("para1").remove();

}


