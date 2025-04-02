/**
 * Dark Mode: Change the theme to dark mode whenever the button "Dark Mode" is clicked
 */
let themeButton = document.getElementById("theme-button");

const updateThemeButton = () => {
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "Light Mode"
                                                                            : "Dark Mode";
}

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    updateThemeButton();
}

updateThemeButton();
themeButton.addEventListener('click', toggleDarkMode);

/**
 * Form Handling: The user is added to the list when they submit the RSVP
 */
let rsvpSubmitButton = document.getElementById('rsvp-submit');
let count = 3;
const addParticipant = (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let state = document.getElementById('state').value;
    let email = document.getElementById('email').value;
    let participant = document.createElement('p');

    participant.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;
    let participantsList = document.querySelector('.rsvp-participants');
    participantsList.appendChild(participant);

    let oldCount = document.getElementById('rsvp-count');
    if (oldCount) {
        oldCount.remove();
    }
    count++;
    let newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = `⭐ ${count} people have RSVP'd to this event!.`;
    participantsList.appendChild(newCount);

    document.getElementById('rsvp-form'),reset();
}
rsvpSubmitButton.addEventListener('click', addParticipant);

