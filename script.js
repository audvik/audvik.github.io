const flashcards = [
    { word: "Abate", meaning: "Become less intense or widespread." },
    { word: "Benevolent", meaning: "Well meaning and kindly." },
    { word: "Cacophony", meaning: "A harsh, discordant mixture of sounds." },
    { word: "Debilitate", meaning: "Make (someone) very weak and infirm." },
    { word: "Ebullient", meaning: "Cheerful and full of energy." }
];

let currentCardIndex = 0;
let hiINVoice = null;

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }
    
    const voices = speechSynthesis.getVoices();
    hiINVoice = voices.find(voice => voice.lang === 'hi-IN');
}

populateVoiceList();

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function showCard(index) {
    const card = flashcards[index];
    document.getElementById('word').innerText = card.word;
    document.getElementById('meaning').innerText = card.meaning;
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard(currentCardIndex);
}

function speakWord() {
    const word = flashcards[currentCardIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    if (hiINVoice) {
        utterance.voice = hiINVoice;
    }
    speechSynthesis.speak(utterance);

    utterance.onend = () => {
        spellWord(word);
    };
}

function spellWord(word) {
    const letters = word.split('');
    letters.forEach((letter, index) => {
        const letterUtterance = new SpeechSynthesisUtterance(letter);
        if (hiINVoice) {
            letterUtterance.voice = hiINVoice;
        }
        letterUtterance.rate = 1.2;
        speechSynthesis.speak(letterUtterance);
    });
}

// Show the first card on initial load
document.addEventListener('DOMContentLoaded', () => {
    showCard(currentCardIndex);
});
