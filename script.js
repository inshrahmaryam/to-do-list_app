const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') { // Use trim to avoid whitespace-only input
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
        li.appendChild(span);

        inputBox.value = ''; // Clear the input box after adding the task
        saveData(); // Save the data after adding a task
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the data after toggling the task
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the data after removing a task
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Fixed typo here
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ''; // Fixed typo here and added fallback
}

showTask();

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (like form submission)
        addTask(); // Fixed function name
    }
});
