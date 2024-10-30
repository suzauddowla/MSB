//document.write(10 + 2);
//console.log(25+30);
//declare a variable with var, let or const
/*
var x = 1;
document.write(typeof(x));
*/

/*
    function ourFirstFunction(){
        return "I'm Asad from First Function";
    }
    document.write(ourFirstFunction());
    
    function ourSecondFunction(){
        var x = "I'm Suza from 2nd Function";
        document.write(x);
    }  
    ourSecondFunction()

    document.write("<br>");

    function ourThirdFunction(){
        var x = 2;
        var y = 3;
        document.write(x + y);
    }
    ourThirdFunction();

    document.write("<br>");

    function ourFourthFunction(){
        var x = 2;
        var y = 9;
        document.write(x+y);
    }
    ourFourthFunction();

    document.write("<br>");

    function ourFifthFunction(one, two){
        var x = one;
        var y = two;
        document.write(x+y);
    }
    
    var a = 10;
    var b = 20;

    ourFifthFunction(a,b);

    document.write("<br>");

    var personDetails = {
        name : "Zafir",
        age : "2",
        height : "2.9",
        weight : "13kg"
    }

    document.write(personDetails.name + " " + personDetails.age);

    document.write("<br>");

    var x = Boolean(10 != 10);
    document.write(x);

    document.write("<br>");

    function myFunction() {
        let age = 18;
        let voteable = (age < 18) ? "Too young":"Old enough";
        document.write(voteable + " to vote.");
      }
      myFunction();

      */

      /*
      function myFunction() {
        let age = document.getElementById("age").value;
        let voteable = (age < 18) ? "Too young":"Old enough";
        document.getElementById("demo1").innerHTML = voteable + " to vote.";
      }

        const time = new Date().getHours();
        let greeting;
        if (time < 10) {
            greeting = "Good morning";
        } else if (time < 20) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        document.getElementById("demo").innerHTML = greeting;


        document.write("<br>");
        var fruits = 2;

        switch(fruits) {
            case 1:
                text = "Orange is sour";
                document.write(text);
                break;
            
            case 2:
                text = "Apple is Tasty";
                document.write(text);
                break;
            
            case 3:
                text = "Papaya is Yellow";
                document.write(text);
                break;
            
            default:
                text = "Nothing Matched";
                document.write(text);
        }
        document.write("<br>");
        document.write("<br>");
        var cars = ["Volvo", "Toyota", "Tesla", "Proton", "Honda", "Nissan Sunny"];

        var text = "";
        var i = 0;

        for (i; i < cars.length; i++) {
            text += i + ". " + cars[i] + "<br>";
        }

        document.write(text);

        document.write("<br>");
        document.write("<br>");

        */
        /*
        const cars2 = ["Volvo", "Toyota", "Tesla", "Proton", "Honda", "Nissan Sunny"];

        for (let init = 0; init < cars2.length; init++) {
           document.write(init + " " + cars2[init] + "<br>");
        }
        document.write("I'm done");

        document.write("<br>")
        document.write("<br>")


        var person = {fname: "Aarav", age: 28, height: 5.2, weight: "70kg", profession: "Web Developer", experience: "5 Years"};

        var text = "";
        var num = 1;
        for (var x in person) {
            text += num + ". " + person[x] + "<br>";
            num++;
        }

        document.write(text);

        document.write("<br>")
        document.write("<br>")


        const cars = ["BMW", "Volvo", "Mini", "Tesla", "Nissan", "Toyota"];

        var text = "";
        var num = 1;
        for (var x of cars) {
            text += num + " " + x + "<br/>";
            num++;
        }

        document.write(text);

        document.write("<br>")
        document.write("<br>")

        var i = 0;
        var text = "";

        while (i <= 10) {
            text += "This is number " + i + "<br>";
            i++;
        }

        document.write(text);

        */

        document.write("<br>");

        var suza = document.getElementsByClassName('office');

        document.write(suza);

       
        var selected = document.querySelectorAll("p");
        console.log(selected);



       
