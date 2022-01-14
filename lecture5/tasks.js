//this file contains the Javascript code for tasks.html

document.addEventListener('DOMContentLoaded', function() {

    //disable the submit button by default when the page is loaded.
    document.querySelector('#submit').disabled = true;

    //set the submit button to true when the user enters a task into the task field.
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
        
    }
    document.querySelector('form').onsubmit = () => {
        const task_item = document.querySelector('#task').value;
        console.log(task_item);
        
        const li = document.createElement('li')
        li.innerHTML = task_item;

        document.querySelector('#task_list').append(li);
        document.querySelector('#task').value = '';

        //disable the submit button after submitting the task
        document.querySelector('#submit').disabled = true;
        
        //stop form from submitting
        return false;

    }

});