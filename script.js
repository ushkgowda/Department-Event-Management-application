document.addEventListener('DOMContentLoaded', function() {
    const upcomingEvents = [
        { name: " AWS & DEVOPS workshop ", date: "11-07-2024" },
       
    ];

    const upcomingEventsList = document.getElementById('upcoming-events');
    
    upcomingEvents.forEach(event => {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        upcomingEventsList.appendChild(listItem);
    });

    const eventForm = document.getElementById('event-form');
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;
        
        console.log("New Event Registered:", { eventName, eventDate, eventDescription });
        
        const newEventItem = document.createElement('li');
        newEventItem.textContent = `${eventName} - ${eventDate}`;
        upcomingEventsList.appendChild(newEventItem);

        eventForm.reset();
    });
});
function register() {
    alert("Thank you for registering!");
    // You can add further functionality here, such as form submission or redirection.
}
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('view-all-btn');
    const gallery = document.getElementById('gallery');

    viewAllBtn.addEventListener('click', function() {
        gallery.style.display = 'grid';
        viewAllBtn.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('view-all-btn');
    const gallery = document.getElementById('gallery');

    viewAllBtn.addEventListener('click', function() {
        gallery.style.display = 'grid';
        viewAllBtn.style.display = 'none';
    });
});
function showRegistrationForm() {
    var registrationForm = document.getElementById("registration-form");
    registrationForm.style.display = "block";
}

function hideRegistrationForm() {
    var registrationForm = document.getElementById("registration-form");
    registrationForm.style.display = "none";
}