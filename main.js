document.addEventListener('DOMContentLoaded', () => {

    let currencyOne = document.getElementById("first_currency").value;
    let currencyTwo = document.getElementById("second_currency").value;

    //fetch data from URL below
    fetch(`https://v6.exchangerate-api.com/v6/bc45cb60cdbca5238f560086/latest/${currencyOne}`)
    
    //convert to JSON
    .then(response => response.json())

    .then(data => {
        console.log(data)
        //document.querySelector('#convert_from').innerHTML = data.conversion_rates[currencyOne];
    });

    return false;

});