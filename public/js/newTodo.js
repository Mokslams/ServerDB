const textarea = document.getElementById("text");
const submitButton = document.querySelector('form button[type="submit"]');


const isEmpty = (value) => {
    return !value;
};


const sendTodo = (value) => {



    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("POST", "/api", true);
    xhttp.send(JSON.stringify(value));

}

submitButton.addEventListener('click', e => {
    e.preventDefault();
    const todo = {
        text: textarea.value,
    }
    textarea.value;
    if (!isEmpty(todo.text)) {
        sendTodo(todo);
    }
    console.error("empty task!");

});

// textarea.addEventListener('keypress', e =>{
//    if (e.key === "Enter") {
//        console.log(textarea.value);
//    }
// });

