function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal > 0){
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        // interest += principal
        var year = new Date().getFullYear()+parseInt(years);
        var output = "If you deposit <span class=\"highlight\">"+ principal + "</span>,<br>"
        output += "at an interest rate of <span class=\"highlight\">" + rate + "%</span>.<br>"
        output += "You will receive an interest of <span class=\"highlight\">" + interest + "</span>,<br>"
        output += "in the year <span class=\"highlight\">" + year + "</span>.<br>"
        document.getElementById("result").innerHTML=output
    }
    else{
        window.alert('Enter a positive number')
        var principal_element = document.getElementById("principal")
        principal_element.focus()
        principal_element.value = ''
    }
    
    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    rateval += '%'
    document.getElementById("rate_val").innerText=rateval;
}