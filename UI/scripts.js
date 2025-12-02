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
            myth: "Cats always land on their feet.",
            truth: "Cats are extremely agile and have a very flexible spine that allows them to twist in mid-air and land on their feet, most of the time. Cats aren't foolproof and can still injure themselves in falls, often with chin and teeth injuries."
        },
        {
            myth: "Cats can't be trained.",
            truth: "While it's certainly easier to train a dog than it is to train a cat, that doesn't mean training a cat is impossible. You can train them to stay off certain things, perform basic tricks, and other basic tasks. You'll find more success with positive reinforcement, and treats are pretty much always a must during training sessions."
        },
        {
            myth: "Cats are low-maintenance pets.",
            truth: "Cats that are housed exclusively indoors need a lot of enrichment in order to stay happy and healthy. Sunny windows, interactive toys, quality food, and clean litter boxes will keep your cat happy."
        },
        {
            myth: "Declawing a cat isn't harmful.",
            truth: "You should never declaw your cat, as it leads to long-term pain that your cat will have to deal with for the rest of their life, as well as potentially long-term behavioral issues. Declawing is a surgical procedure that would be equivalent of amputating your fingers at the knuckles closest to the fingertips."
        },
        {
            myth: "Cats are aloof and independent.",
            truth: "Research contradicts the stereotype of the emotionally detached cat. Studies show that cats form genuine attachments to their humans similar to those between children and parents. Many cats experience separation anxiety when their favorite people leave. They often express affection through subtle behaviors like slow blinking, bringing 'gifts,' and following their humans from room to room. These social creatures simply communicate differently than dogs do."
        },
        {
            myth: "Cats can roam outdoors safely.",
            truth: "Outdoor cats face cars, predators, parasites, and shorter lifespans. Indoor cats live longer and healthier lives."
        },
        {
            myth: "One litter box is enough for any number of cats.",
            truth: "The rule is: one box per cat + one extra."
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
