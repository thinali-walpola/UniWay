
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
