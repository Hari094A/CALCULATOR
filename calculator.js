let answer = document.getElementById("ans");

function Solve(val)
{
    answer.value += val;
}

function Clear()
{
    answer.value = "";
}

function Back()
{
    answer.value = answer.value.slice(0,-1);
}

function Result()
{
    try
    {
        answer.value = eval(answer.value);
    }
    catch
    {
        answer.value = "Error";
    }
}
