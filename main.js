//document.write(10 + 2);
//console.log(25+30);
//declare a variable with var, let or const
/*
var x = 1;
document.write(typeof(x));
*/
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