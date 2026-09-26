const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const details = document.getElementById("details");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const registrationData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        college: document.getElementById("college").value,
        event: document.getElementById("event").value
    };

    try {

        const response = await fetch("/register", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(registrationData)
        });

        const result = await response.json();

        if (result.success) {

            message.textContent = result.message;
            message.className = "success";

            details.style.display = "block";

            details.innerHTML = `
                <h3>Registration Details</h3>

                <p><strong>Name:</strong> ${result.data.name}</p>

                <p><strong>Email:</strong> ${result.data.email}</p>

                <p><strong>Phone:</strong> ${result.data.phone}</p>

                <p><strong>College:</strong> ${result.data.college}</p>

                <p><strong>Event:</strong> ${result.data.event}</p>
            `;

            form.reset();

        } else {

            message.textContent = result.message;
            message.className = "error";

        }

    } catch (error) {

        console.error(error);

        message.textContent = "Server error. Please try again.";
        message.className = "error";

    }

});