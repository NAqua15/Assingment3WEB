
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        ${taskInput.value}
        <span>
            <i class="fas fa-check text-success cursor-pointer" onclick="markComplete(this)"></i>
            <i class="fas fa-trash text-danger ml-2 cursor-pointer" onclick="deleteTask(this)"></i>
        </span>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
});

function markComplete(icon) {
    icon.parentElement.parentElement.classList.toggle('completed-task');
}

function deleteTask(icon) {
    icon.parentElement.parentElement.remove();
}
document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    let isValid = true;

    for (let input of form.elements) {
        if (!input.checkValidity()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
let countdown;
const timerDisplay = document.getElementById('timerDisplay');

document.getElementById('startTimerBtn').addEventListener('click', function() {
    clearInterval(countdown);
    const seconds = parseInt(document.getElementById('timerInput').value, 10);
    if (isNaN(seconds) || seconds <= 0) {
        alert('Please enter a valid duration in seconds.');
        return;
    }
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((timerDisplay.dataset.time - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            alert('Timer finished!');
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
    const then = Date.now() + seconds * 1000;
    timerDisplay.dataset.time = then;
});

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    timerDisplay.textContent = display;
}
document.getElementById('feedbackBtn').addEventListener('click', function() {
    alert('Thank you for your feedback!');
});
