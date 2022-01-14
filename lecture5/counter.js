//let counter = 0;

if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
function count() {
    const heading = document.querySelector('h1');
    let counter = localStorage.getItem('counter');
    counter++;
    heading.innerHTML = counter;
    localStorage.setItem('counter', counter);
    /*
    //stop the count at 20
    if (counter % 20 === 0){
        alert(`The counter has reached ${counter}.`);

    }
    */
}
//adding an event listener to the entire web document
document.addEventListener('DOMContentLoaded', function(){
    //setting the value of the button when clicked to the count function above.
    //set h1 to the value in local storage
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    //document.querySelector('button').addEventListener('click', count);

    //set the interval for count to 1 second (1000 millisecond)
    //setInterval(count, 1000)
});
