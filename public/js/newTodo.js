const textArea = document.querySelector("#text");
const submitButton = document.querySelector('form button[type="submit"]');
const taskStatusDOM = document.querySelector('#status');

const isEmpty = (value) => {
  return !value;
};
const sendTodoText = (value) => {
    console.log(value);
    
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      // Typical action to be performed when the document is ready:
      console.log(xhttp.responseText);
    }
  };
  xhttp.open("POST", "/api/task/", true);
  xhttp.send(JSON.stringify(value));
  
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const todoText = textArea.value;
  if (!isEmpty(todoText)) {
    sendTodoText({
        textAreavalue: textArea.value,
        taskStatus: taskStatusDOM.value
    });
    
    
  }
});