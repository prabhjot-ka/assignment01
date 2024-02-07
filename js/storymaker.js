// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
// Buttons to trigger word selection
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Display areas for selected words
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Buttons to trigger story-related actions
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// Display area for the generated story
const storyParagraph = document.getElementById("story");

// Display area for student ID
const studentIdParagraph = document.getElementById("studentId");

// Arrays containing word options
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimmy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Counters for cycling through word options
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions */
// Function to update student ID display
function updateStudentId() {
    const studentId = "Prabhjot Kaur/200554143"; // Replace with your actual student ID
    studentIdParagraph.textContent = "Student NAME/Student ID: " + studentId;
}

// Event handlers for word selection buttons
function noun1_on_click() {
    choosenNoun1.textContent = nouns1[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbs[countVerb];
    countVerb = (countVerb + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[countAdjective];
    countAdjective = (countAdjective + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[countNoun2];
    countNoun2 = (countNoun2 + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[countSetting];
    countSetting = (countSetting + 1) % settings.length;
}

// Function to concatenate selected words into a story
function concatenateStory() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    storyParagraph.textContent = story;
}

// Event handlers for action buttons
function random_on_click() {
    // Randomly select words and update the story
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    concatenateStory();
}

function playback_on_click() {
    // Update the story based on the selected words
    concatenateStory();
}



/* Event Listeners */
// Attach event listeners to buttons
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

randomButton.addEventListener("click", random_on_click);
playbackButton.addEventListener("click", playback_on_click);

// Execute updateStudentId function when the window is loaded
window.addEventListener("load", updateStudentId);
