//Javascript file for colors.html

//document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('select').onchange = function() {
        document.querySelector('body').style.backgroundColor = this.value;
    }
    /*
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
            document.querySelector('body').style.backgroundColor = button.dataset.color;
        }
    
    });
    */
    /*
    //get button whose id equals to red and change it's color to red
    document.querySelector('#red').onclick = function() {
        document.querySelector('body').style.backgroundColor = 'red';
    }
    
    //get button whose id equals to blue and change it's color to blue
    document.querySelector('#blue').onclick = function() {
        document.querySelector('body').style.backgroundColor = 'blue';
    }
        
    //get button whose id equals to red and change it's color to red
    document.querySelector('#green').onclick = function() {
        document.querySelector('body').style.backgroundColor = 'green';                    
    }
    */
});