const form = document.getElementById("registerForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const studentId = document.getElementById("studentId").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;
        const club = document.getElementById("club").value;

        if (
            name === "" ||
            studentId === "" ||
            email === "" ||
            department === "" ||
            club === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }

        if (studentId.length !== 9) {

            alert("Student ID must be 9 digits.");

            return;
        }

        alert("Registration completed successfully!");

        form.reset();

    });

}

const searchInput = document.getElementById("studentSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        const searchValue = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll("#studentTable tr");

        rows.forEach(function(row) {

            const rowText = row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}