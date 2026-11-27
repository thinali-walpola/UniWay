
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION MENU
    const menuButton = document.querySelector(".menu-icon");
    const navLinks = document.getElementById("myTopnav");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("responsive");

            menuButton.setAttribute("aria-expanded", isOpen);
        });
    }


    // CATEGORY DROPDOWN
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdown = document.getElementById("myDropdown");

    if (dropdownButton && dropdown) {

        dropdownButton.addEventListener("click", function (event) {
            event.stopPropagation();

            const isOpen = dropdown.classList.toggle("show");

            dropdownButton.setAttribute("aria-expanded", isOpen);
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {

            if (!event.target.closest(".dropdown")) {
                dropdown.classList.remove("show");

                dropdownButton.setAttribute("aria-expanded", "false");
            }
        });

        // Close after selecting a category
        dropdown.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function (event) {
                event.preventDefault();

                const category = link.dataset.category;

                dropdownButton.innerHTML =
                    category + ' <i class="fa-solid fa-chevron-down"></i>';

                dropdown.classList.remove("show");

                dropdownButton.setAttribute("aria-expanded", "false");
            });
        });

    }


    // SEARCH INPUT
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function performSearch() {
        const query = searchInput.value.trim();

        if (query === "") {
            searchInput.focus();
            return;
        }

        // Replace this with your actual programme-search functionality.
        console.log("Search query:", query);
    }

    if (searchInput && searchButton) {

        searchButton.addEventListener("click", performSearch);

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    }

});

// SEARCH
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
    const event = document.getElementById("searchEvent").value.trim();
    const location = document.getElementById("searchLocation").value.trim();
    const type = document.getElementById("searchType").value.trim();

    console.log("Event:", event);
    console.log("Location:", location);
    console.log("Event type:", type);

    alert(
        "Search details:\n" +
        "Event: " + (event || "Any") + "\n" +
        "Location: " + (location || "Any") + "\n" +
        "Event type: " + (type || "Any")
    );
});


// =================================
// UNIWAY EXPLORE INTERACTION
// =================================


    // Get the HTML elements

    const homeArea = document.getElementById("homeArea");

    const selectionArea = document.getElementById("selectionArea");

    const resultsArea = document.getElementById("resultsArea");

    const exploreToggle = document.getElementById("exploreToggle");

    const proceedButton = document.getElementById("proceedButton");

    const selectionBack = document.getElementById("selectionBack");

    const resultsBack = document.getElementById("resultsBack");

    const resultsGrid = document.getElementById("resultsGrid");


    // Information for each category

    const categoryInformation = {

        boarding: {
            icon: "🏠",
            title: "Boarding & Accommodation",
            description: "Find a comfortable place to stay during your university life.",
            details: [
                "Student boarding places",
                "Shared rooms and private rooms",
                "Monthly rental information",
                "Accommodation facilities"
            ]
        },

        food: {
            icon: "🍔",
            title: "Food & Restaurants",
            description: "Discover places where you can enjoy affordable food near your university.",
            details: [
                "Restaurants and cafes",
                "Affordable student meals",
                "Food shops and bakeries",
                "Nearby takeaway options"
            ]
        },

        transport: {
            icon: "🚌",
            title: "Transport & Routes",
            description: "Find useful transport options for travelling to and from your university.",
            details: [
                "Public bus information",
                "Train services",
                "Nearby bus stops",
                "Transport options for students"
            ]
        },

        shops: {
            icon: "🛍️",
            title: "Shops & Essentials",
            description: "Find everyday items and useful services around your university.",
            details: [
                "Stationery shops",
                "Supermarkets and grocery shops",
                "Printing and photocopy services",
                "Pharmacies and other essentials"
            ]
        },

        navigation: {
            icon: "📍",
            title: "Maps & Navigation",
            description: "Explore important locations and useful places around your campus.",
            details: [
                "Important campus locations",
                "University buildings",
                "Nearby public facilities",
                "Important places around campus"
            ]
        },

        university: {
            icon: "🎓",
            title: "University Life",
            description: "Learn about facilities and services that make university life easier.",
            details: [
                "University libraries",
                "Student support services",
                "Sports and recreational facilities",
                "Student clubs and activities"
            ]
        }

    };


    // STEP 1: Open category selection

    exploreToggle.addEventListener("click", function () {

        homeArea.style.display = "none";

        selectionArea.style.display = "block";

    });


    // STEP 2: Return to the first screen

    selectionBack.addEventListener("click", function () {

        selectionArea.style.display = "none";

        homeArea.style.display = "block";

    });


    // STEP 3: Get selected categories

    proceedButton.addEventListener("click", function () {

        // Get all checked checkboxes

        const selectedCheckboxes = document.querySelectorAll(
            '.category-card input:checked'
        );

        // Check whether the user selected anything

        if (selectedCheckboxes.length === 0) {

            alert("Please select at least one category.");

            return;

        }


        // Clear previous results

        resultsGrid.innerHTML = "";


        // Create a result card for each selected category

        selectedCheckboxes.forEach(function (checkbox) {

            const category = checkbox.value;

            const information = categoryInformation[category];


            // Create the result card

            const card = document.createElement("div");

            card.className = "result-card";


            // Create the list items

            let detailsList = "";

            information.details.forEach(function (detail) {

                detailsList += `<li>${detail}</li>`;

            });


            // Add the information to the card

            card.innerHTML = `

                <div class="result-icon">
                    ${information.icon}
                </div>

                <h3>${information.title}</h3>

                <p>${information.description}</p>

                <ul>
                    ${detailsList}
                </ul>

            `;


            // Add the card to the results section

            resultsGrid.appendChild(card);

        });


        // Hide selection and show results

        selectionArea.style.display = "none";

        resultsArea.style.display = "block";

    });


    // STEP 4: Go back and change selected categories

    resultsBack.addEventListener("click", function () {

        resultsArea.style.display = "none";

        selectionArea.style.display = "block";

    });



/*==============================================
            UNIWAY EVENT
===============================================*/

// Get HTML elements

const modal = document.getElementById("eventModal");

const registerButton = document.getElementById("registerButton");
const detailsButton = document.getElementById("detailsButton");
const closeModalButton = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalDescription = document.getElementById("modalDescription");

const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

const calendarButton = document.getElementById("calendarButton");
const calendarNote = document.getElementById("calendarNote");


// Open modal

function openModal(mode) {

    formMessage.textContent = "";

    if (mode === "register") {

        modalEyebrow.textContent = "UNIWAY EVENTS";

        modalTitle.textContent =
            "Register for Freshers' Welcome";

        modalDescription.textContent =
            "Join the welcome celebration on January 8, 2025 at the Auditorium.";

        registrationForm.style.display = "flex";

    } else {

        modalEyebrow.textContent = "EVENT DETAILS";

        modalTitle.textContent =
            "Freshers' Welcome 2025";

        modalDescription.textContent =
            "The event includes a welcome ceremony, student talent show, DJ night, gaming zone, performances and interactive activities. Date: January 8, 2025. Venue: Auditorium. Expected attendance: 3,000+ students.";

        registrationForm.style.display = "none";

    }

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


// Close modal

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Register button

registerButton.addEventListener("click", function () {

    openModal("register");

});


// View details button

detailsButton.addEventListener("click", function () {

    openModal("details");

});


// Close button

closeModalButton.addEventListener("click", function () {

    closeModal();

});


// Close when clicking outside the popup

modal.addEventListener("click", function (event) {

    if (event.target.hasAttribute("data-close-modal")) {

        closeModal();

    }

});


// Close using Escape key

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        modal.classList.contains("open")
    ) {

        closeModal();

    }

});


// Registration form

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentEmail =
        document.getElementById("studentEmail").value.trim();


    if (!studentName || !studentEmail) {

        formMessage.textContent =
            "Please fill in both fields.";

        return;

    }


    formMessage.textContent =
        `Thank you, ${studentName}! Your demo registration has been received.`;

    registrationForm.reset();

});


// Calendar button

calendarButton.addEventListener("click", function () {

    const isExpanded =
        calendarButton.getAttribute("aria-expanded") === "true";


    calendarButton.setAttribute(
        "aria-expanded",
        String(!isExpanded)
    );


    if (isExpanded) {

        calendarButton.textContent = "View Full Calendar";

        calendarNote.hidden = true;

    } else {

        calendarButton.textContent = "Calendar Displayed";

        calendarNote.hidden = false;

        document.getElementById("upcomingGrid").scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

});
