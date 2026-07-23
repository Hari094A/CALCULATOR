function Solve(value){

    document.getElementById("ans").value += value;

}


function Result(){

    let x = document.getElementById("ans").value;

    try{

        document.getElementById("ans").value = eval(x);

    }

    catch{

        document.getElementById("ans").value = "Error";

    }

}


function Clear(){

    document.getElementById("ans").value = "";

}


function Back(){

    let value = document.getElementById("ans").value;

    document.getElementById("ans").value = value.slice(0,-1);

}
