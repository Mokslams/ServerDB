const deleteBtn = document.querySelectorAll('button[data-action="delete"]');

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", () => {
    const taskId = deleteBtn[i].dataset.taskid;
    deleteTodo(taskId);
  });
}
const deleteTodo = (taskId) => {
  console.log(taskId);

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      // Typical action to be performed when the document is ready:
      location.reload();
    }
  };
  xhttp.open("DELETE", "/api/task/", true);
  xhttp.send(JSON.stringify(taskId));
};

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const updateBtn = document.querySelectorAll('button[data-action="update"]');

for (let i = 0; i < updateBtn.length; i++) {
  updateBtn[i].addEventListener("click", () => {
    const taskId = updateBtn[i].dataset.taskid;
    getTodo(taskId);
    modal.style.display = "block";
  });
}
const getTodo = (taskId) => {
  console.log(taskId);

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
     const responseData = JSON.parse(xhttp.responseText);
      updateForm(responseData);

      // Typical action to be performed when the document is ready:
      // location.reload();
    }
  };
  xhttp.open("GET", "/api/task?Id="+taskId, true);
  xhttp.send(JSON.stringify(taskId));
};
 const updateForm = (responseData) => {
   const formText = document.querySelector('#text');
   formText.value = responseData.text;
   
 }

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};