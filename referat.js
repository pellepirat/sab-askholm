import referater from './referater.js';

// Infobox toggle
const infoBoxButton = document.getElementById('info-box-toggle');
const infoBox = document.getElementById('info-box');
const referatButton = document.getElementById('referatButton');

function toggleInfoBox() {
    infoBox.classList.toggle('hidden'); 
}

infoBoxButton.addEventListener('click', toggleInfoBox);



// Update the info box with 'referat'

    // function to alter infobox
function updateInfoBox(referatId) {
    const infoBoxTitle = document.getElementById('info-box-title')
    const infoBoxTime = document.getElementById('time')
    const infoBoxAttendees = document.getElementById('participant')
    const infoBoxText = document.getElementById('info-box-text')
        
    const referat = referater.find(r => r.id === referatId);

    if (referat) {
    infoBoxTitle.textContent = referat.title;
    infoBoxTime.innerHTML = 'Tidspunkt: ' + referat.tid;
    infoBoxAttendees.textContent = 'Deltagere: ' + referat.attendees;
    infoBoxText.innerHTML = referat.text;
    } else {
        console.error('Referat not found', referatId);
    }
}
 
// Get all buttons with the referatButton class
const referatButtons = document.getElementsByClassName('referatButton');

// Add click event listeners to each button
for (let button of referatButtons) {
    button.addEventListener('click', function() {
        // Extract the referat ID from the button's ID
        const referatId = this.id;
        updateInfoBox(referatId);
    });
}

for (let button of referatButtons) {
    button.addEventListener('click', toggleInfoBox);
}