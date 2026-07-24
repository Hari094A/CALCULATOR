function Solve(val) {
    document.getElementById("ans").value += val;
}

function Result() {
    var x = document.getElementById("ans").value;
    var y = eval(x);
    document.getElementById("ans").value = y;
}

function Clear() {
    document.getElementById("ans").value = "";
}

function Back() {
    var x = document.getElementById("ans").value;
    document.getElementById("ans").value = x.slice(0, -1);
}
