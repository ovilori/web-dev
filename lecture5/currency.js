//Javascript file for currency.html

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () => {

        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=d936264abd15da43ea6513cae1edd5f4')

        .then(response => response.json())
        .then (data => {
            
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            //const rate = data.rates.NGN;

            if(rate !== undefined) {
                document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
            }

            else {
                document.querySelector('#result').innerHTML = 'Invalid currency.';
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
    }
    
});
    /*
    document.querySelector('form').onsubmit = () => {
        //fetching additional information from the URL below
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=d936264abd15da43ea6513cae1edd5f4')

        //convert the response to JSON data
        .then(response => response.json())

        //.then(response => {
         //   return response.json()
        //})
        
    //perform additional operation with the data
        .then(data => (
            console.log(data)
        ));
        return false;
    }
    */
