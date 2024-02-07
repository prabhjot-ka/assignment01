// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const noun1Display = document.getElementById('choosenNoun1');
const verbDisplay = document.getElementById('choosenVerb');
const adjectiveDisplay = document.getElementById('choosenAdjective');
const noun2Display = document.getElementById('choosenNoun2');
const settingDisplay = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnot like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.innerText = nouns1[noun1Count];
    noun1Count++;
    if (noun1Count >= nouns1.length) {
        noun1Count = 0;
    }
}

function verb_on_click() {
    verbDisplay.innerText = verbs[verbCount];
    verbCount++;
    if (verbCount >= verbs.length) {
        verbCount = 0;
    }
}

function adjective_on_click() {
    adjectiveDisplay.innerText = adjectives[adjectiveCount];
    adjectiveCount++;
    if (adjectiveCount >= adjectives.length) {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    noun2Display.innerText = nouns2[noun2Count];
    noun2Count++;
    if (noun2Count >= nouns2.length) {
        noun2Count = 0;
    }
}

function setting_on_click() {
    settingDisplay.innerText = settings[settingCount];        
    settingCount++;
    if (settingCount >= settings.length) {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    const story = ${noun1Display.innerText} ${verbDisplay.innerText} ${adjectiveDisplay.innerText} ${noun2Display.innerText} in ${settingDisplay.innerText}.;
    storyDisplay.innerText = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = ${nouns1[Math.floor(Math.random() * nouns1.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns2[Math.floor(Math.random() * nouns2.length)]} in ${settings[Math.floor(Math.random() * settings.length)]}.;
    storyDisplay.innerText = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);