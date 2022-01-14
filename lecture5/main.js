document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () => {

        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=d936264abd15da43ea6513cae1edd5f4')
    
        //convert the response to JSON data
        .then(response => response.json())
        .then(data => {
            //const convert_from = document.querySelector('#value_from').value;
            //const currency_from = data.symbols
            const symbols = document.querySelector('.symbols');
            var opt = document.createElement('option');
            opt.appendChild(document.createTextNode('NGN'));
            opt.value = 'option value'
            symbols.appendChild(opt);
            //document.querySelector('select').innerHTML = data.rates;
        });
    
    
        return false;
    
    }

});