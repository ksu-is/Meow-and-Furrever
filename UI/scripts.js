// script.js
// Front-end behavior for Meow and Furrever

// --------- Cat profile logic ----------
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("cat-name-input");
    const ageInput = document.getElementById("cat-age-input");
    const breedInput = document.getElementById("cat-breed-input");
    const patternInput = document.getElementById("cat-pattern-input");
    const livingInput = document.getElementById("cat-living-input");

    const displayName = document.getElementById("display-name");
    const displayAge = document.getElementById("display-age");
    const displayBreed = document.getElementById("display-breed");
    const displayPattern = document.getElementById("display-pattern");
    const displayLiving = document.getElementById("display-living");

    const updateBtn = document.getElementById("update-profile-btn");

    if (updateBtn) {
        updateBtn.addEventListener("click", () => {
            const name = nameInput.value.trim() || "Luna";
            const age = ageInput.value.trim();
            const breed = breedInput.value.trim() || "Domestic Shorthair";
            const pattern = patternInput.value.trim() || "Tuxedo";
            const living = livingInput.value.trim() || "Indoor";

            displayName.textContent = name;
            displayAge.textContent = age ? `${age} years` : "3 years";
            displayBreed.textContent = breed;
            displayPattern.textContent = pattern;
            displayLiving.textContent = living;
        });
    }

    // --------- Myth cycling logic ----------
    const myths = [
        {
            myth: "Indoor cats do not need yearly vet checkups.",
            truth: "Cats hide pain extremely well. Regular exams help catch problems before they become serious."
        },
        {
            myth: "Cats are low-maintenance and do not need much interaction.",
            truth: "Cats need play, mental stimulation, and routine to stay healthy and reduce stress-related behavior."
        },
        {
            myth: "Dry food cleans a cat's teeth.",
            truth: "Dry kibble does not replace real dental care. Vets recommend dental checkups and proper dental routines."
        }
    ];

    let currentMythIndex = 0;

    const mythTextEl = document.getElementById("myth-text");
    const truthTextEl = document.getElementById("truth-text");
    const mythIndexLabel = document.getElementById("myth-index-label");

    const prevMythBtn = document.getElementById("prev-myth-btn");
    const nextMythBtn = document.getElementById("next-myth-btn");

    function renderMyth(index) {
        const item = myths[index];
        if (!item) return;

        mythTextEl.textContent = item.myth;
        truthTextEl.textContent = item.truth;
        mythIndexLabel.textContent = `Myth ${index + 1} of ${myths.length}`;
    }

    if (mythTextEl && truthTextEl && mythIndexLabel) {
        renderMyth(currentMythIndex);
    }

    if (nextMythBtn) {
        nextMythBtn.addEventListener("click", () => {
            currentMythIndex = (currentMythIndex + 1) % myths.length;
            renderMyth(currentMythIndex);
        });
    }

    if (prevMythBtn) {
        prevMythBtn.addEventListener("click", () => {
            currentMythIndex = (currentMythIndex - 1 + myths.length) % myths.length;
            renderMyth(currentMythIndex);
        });
    }
});
