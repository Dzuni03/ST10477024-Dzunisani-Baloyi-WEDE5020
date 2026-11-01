function toggleAccordion(sectionId) {
    const content = document.getElementById(sectionId);
    const button = document.querySelector(
        '[aria-controls="' + sectionId + '"]'
    );

    if (!content) return;

    const isOpen = !content.hidden;

    content.hidden = isOpen;
}




const donationForm = document.querySelector("#donationForm");
const amountSelect = document.querySelector("#amount");
const otherAmountInput = document.querySelector("#otherAmount");
const donationMessage = document.querySelector("#donationMessage");

if (donationForm && amountSelect && otherAmountInput && donationMessage) {

    donationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let donationAmount;

        if (amountSelect.value === "other") {
            donationAmount = Number(otherAmountInput.value);
        } else {
            donationAmount = Number(amountSelect.value);
        }

        if (!Number.isFinite(donationAmount) || donationAmount <= 0) {
            donationMessage.textContent =
                "Please enter a valid donation amount.";
            return;
        }

        donationMessage.textContent =
            "Thank you for supporting SHOUT SA! " +
            "Your donation details are ready, but payment has not been processed.";

    });

}




const donate = document.querySelector(".donate");

if (donate) {

    donate.addEventListener("click", function () {

        donate.classList.add("donate-clicked");

        setTimeout(function () {
            donate.classList.remove("donate-clicked");
        }, 300);

    });

}




document.addEventListener("DOMContentLoaded", function () {

    const donateLink = document.querySelector(".donate");
    const donateMessage = document.querySelector("#donate-message");

    if (donateLink && donateMessage) {

        donateLink.addEventListener("click", function (event) {

            event.preventDefault();

            donateMessage.textContent =
                "Thank you for supporting SHOUT SA!";

            donateMessage.classList.add("show-message");

            setTimeout(function () {
                window.location.href = donateLink.href;
            }, 3000);

        });

    }

});



const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector("#gallery-lightbox");
const enlargedImage = document.querySelector("#lightbox-image");
const caption = document.querySelector("#lightbox-caption");
const closeButton = document.querySelector("#close-lightbox");

if (lightbox && enlargedImage && caption && closeButton) {


    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt;
            caption.textContent = image.alt;

            lightbox.hidden = false;
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.hidden = true;
    });


    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.hidden = true;
        }
    });

}



const literacyProjects = [
    {
        title: "School Library Support",
        description: "Helping schools provide books and reading spaces for learners."
    },
    {
        title: "Book Donation Drive",
        description: "Collecting books to encourage children to read and learn."
    },
    {
        title: "Literacy Development",
        description: "Supporting children's reading skills through access to books."
    }
];


const projectsContainer = document.querySelector("#projects-container");
const searchInput = document.querySelector("#project-search");
const sortSelect = document.querySelector("#project-sort");
const noProjectsMessage = document.querySelector("#no-projects-message");
const toggleProjectsButton = document.querySelector("#toggle-projects-btn");


if (projectsContainer && toggleProjectsButton) {

    toggleProjectsButton.addEventListener("click", function () {

        const isHidden = projectsContainer.hidden;

        if (isHidden) {
            projectsContainer.hidden = false;
            toggleProjectsButton.textContent = "Hide Literacy Projects";
            displayProjects();
        } else {
            projectsContainer.hidden = true;
            toggleProjectsButton.textContent = "Show Literacy Projects";
        }

    });
}


function displayProjects() {

    if (!projectsContainer || !searchInput || !sortSelect || !noProjectsMessage) {
        return;
    }

    const searchText = searchInput.value.toLowerCase().trim();
    const sortOrder = sortSelect.value;

    let filteredProjects = literacyProjects.filter(function (project) {
        return (
            project.title.toLowerCase().includes(searchText) ||
            project.description.toLowerCase().includes(searchText)
        );
    });

    if (sortOrder === "az") {
        filteredProjects.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    } else if (sortOrder === "za") {
        filteredProjects.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    projectsContainer.replaceChildren();

    filteredProjects.forEach(function (project) {

        const card = document.createElement("article");
        card.classList.add("project-card");

        const heading = document.createElement("h3");
        heading.textContent = project.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = project.description;

        card.appendChild(heading);
        card.appendChild(paragraph);

        projectsContainer.appendChild(card);
    });

    noProjectsMessage.hidden = filteredProjects.length > 0;
}


if (projectsContainer && searchInput && sortSelect && noProjectsMessage) {
    searchInput.addEventListener("input", displayProjects);
    sortSelect.addEventListener("change", displayProjects);
}



const newsPosts = [
    {
        title: "Supporting School Libraries",
        content: "Access to books can help learners develop their reading skills and discover new ideas."
    },
    {
        title: "The Importance of Literacy",
        content: "Reading helps children improve their vocabulary, comprehension and communication skills."
    },
    {
        title: "Get Involved with SHOUT SA",
        content: "Community members can explore ways to support education and literacy initiatives."
    }
];

const newsContainer = document.querySelector("#news-container");
const loadNewsButton = document.querySelector("#load-news-btn");

let newsIndex = 0;


if (newsContainer && loadNewsButton) {

    loadNewsButton.addEventListener("click", function () {

        if (newsIndex < newsPosts.length) {

            const post = newsPosts[newsIndex];

            const article = document.createElement("article");
            article.classList.add("news-post");

            const heading = document.createElement("h3");
            heading.textContent = post.title;

            const paragraph = document.createElement("p");
            paragraph.textContent = post.content;

            article.appendChild(heading);
            article.appendChild(paragraph);

            newsContainer.appendChild(article);

            newsIndex++;

            if (newsIndex === newsPosts.length) {
                loadNewsButton.textContent = "All Updates Loaded";
                loadNewsButton.disabled = true;
            }
        }
    });
}


const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    const errorMessage = document.querySelector("#form-error");
    const statusMessage = document.querySelector("#form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        errorMessage.textContent = "";
        statusMessage.textContent = "";

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            errorMessage.textContent =
                "Please check your details and complete all required fields.";
            return;
        }

        statusMessage.textContent =
            "Your details are valid. The form is ready for submission.";


    });
}


const enquiryForm = document.querySelector("#enquiryForm");

if (enquiryForm) {
    const feedback = document.querySelector("#enquiry-feedback");
    const submitButton = enquiryForm.querySelector(
        'button[type="submit"]'
    );

    enquiryForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        feedback.textContent = "";
        feedback.style.color = "";


        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();

            feedback.textContent =
                "Please complete all required fields correctly.";
            feedback.style.color = "red";
            return;
        }

        const name = enquiryForm.elements["name"].value.trim();
        const message = enquiryForm.elements["message"].value.trim();

        if (name.length < 2) {
            feedback.textContent =
                "Please enter a name containing at least 2 characters.";
            feedback.style.color = "red";
            enquiryForm.elements["name"].focus();
            return;
        }

        if (message.length < 10) {
            feedback.textContent =
                "Your message must contain at least 10 characters.";
            feedback.style.color = "red";
            enquiryForm.elements["message"].focus();
            return;
        }


        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        feedback.textContent = "Sending your enquiry...";

        try {
            const response = await fetch(enquiryForm.action, {
                method: "POST",
                body: new FormData(enquiryForm),
                headers: {
                    "Accept": "application/json"
                }
            });


            if (!response.ok) {
                throw new Error("The server could not accept your enquiry.");
            }


            feedback.textContent =
                "Thank you! Your enquiry has been submitted successfully.";
            feedback.style.color = "green";

            enquiryForm.reset();

        } catch (error) {

            console.error("Enquiry submission error:", error);

            feedback.textContent =
                "Sorry, we could not submit your enquiry. Please try again or contact us directly.";
            feedback.style.color = "red";

        } finally {

            submitButton.disabled = false;
            submitButton.textContent = "Send Enquiry";
        }
    });
}