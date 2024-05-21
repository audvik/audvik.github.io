const flashcards = [
  { "id": "1", "word": "Antique", "meaning": "Very old and often valuable." },
  { "id": "2", "word": "Anxiety", "meaning": "Worry or fear about something." },
  { "id": "3", "word": "Approve", "meaning": "Agree with or accept." },
  { "id": "4", "word": "Aquatic", "meaning": "Living or found in water." },
  { "id": "5", "word": "Argue", "meaning": "Disagree or fight with words." },
  { "id": "6", "word": "Athlete", "meaning": "A person who plays sports." },
  { "id": "7", "word": "Bacteria", "meaning": "Tiny living things that can cause disease." },
  { "id": "8", "word": "Balance", "meaning": "Staying steady and not falling." },
  { "id": "9", "word": "Barrier", "meaning": "Something that blocks the way." },
  { "id": "10", "word": "Barter", "meaning": "Exchange goods without using money." },
  { "id": "11", "word": "Battery", "meaning": "A device that stores and provides power." },
  { "id": "12", "word": "Binary", "meaning": "Involving two things." },
  { "id": "13", "word": "Borrow", "meaning": "Take and use something with permission." },
  { "id": "14", "word": "Breathe", "meaning": "Take air into the lungs and let it out." },
  { "id": "15", "word": "Cabinet", "meaning": "A piece of furniture with shelves or drawers." },
  { "id": "16", "word": "Calcium", "meaning": "A mineral found in bones and teeth." },
  { "id": "17", "word": "Capsules", "meaning": "Small containers with medicine inside." },
  { "id": "18", "word": "Capture", "meaning": "Catch and hold." },
  { "id": "19", "word": "Carbon", "meaning": "A chemical element found in all living things." },
  { "id": "20", "word": "Cardinal", "meaning": "Most important; chief." },
  { "id": "21", "word": "Career", "meaning": "A job or profession." },
  { "id": "22", "word": "Carrier", "meaning": "A person or thing that carries something." },
  { "id": "23", "word": "Cashier", "meaning": "A person who handles money in a store." },
  { "id": "24", "word": "Ceiling", "meaning": "The top inside surface of a room." },
  { "id": "25", "word": "Characteristic", "meaning": "A feature that helps to identify something." },
  { "id": "26", "word": "Chromatography", "meaning": "A method for separating mixtures." },
  { "id": "27", "word": "Circumstance", "meaning": "A condition or fact affecting a situation." },
  { "id": "28", "word": "Claim", "meaning": "Say something is true." },
  { "id": "29", "word": "Colleague", "meaning": "A person you work with." },
  { "id": "30", "word": "Column", "meaning": "A tall, vertical structure." },
  { "id": "31", "word": "Communicate", "meaning": "Share information." },
  { "id": "32", "word": "Competent", "meaning": "Able to do something well." },
  { "id": "33", "word": "Complementary", "meaning": "Completing or enhancing each other." },
  { "id": "34", "word": "Comprehension", "meaning": "Understanding something." },
  { "id": "35", "word": "Comprehensive", "meaning": "Including everything." },
  { "id": "36", "word": "Compression", "meaning": "Pressing something into a smaller space." },
  { "id": "37", "word": "Condensation", "meaning": "Water droplets forming from vapor." },
  { "id": "38", "word": "Conquered", "meaning": "Defeated and controlled." },
  { "id": "39", "word": "Consequence", "meaning": "A result of an action." },
  { "id": "40", "word": "Constant", "meaning": "Not changing." },
  { "id": "41", "word": "Constitution", "meaning": "A set of rules for a country." },
  { "id": "42", "word": "Construction", "meaning": "Building something." },
  { "id": "43", "word": "Content", "meaning": "The subjects or topics covered." },
  { "id": "44", "word": "Convert", "meaning": "Change into a different form." },
  { "id": "45", "word": "Creativity", "meaning": "Using imagination to make new things." },
  { "id": "46", "word": "Crucial", "meaning": "Very important." },
  { "id": "47", "word": "Crystal", "meaning": "A clear, transparent mineral." },
  { "id": "48", "word": "Culture", "meaning": "The beliefs and customs of a group of people." },
  { "id": "49", "word": "Decay", "meaning": "Breaking down or rotting." },
  { "id": "50", "word": "Default", "meaning": "The usual setting or condition." },
  { "id": "51", "word": "Demonstration", "meaning": "Showing how something works." },
  { "id": "52", "word": "Dengue", "meaning": "A disease caused by a virus spread by mosquitoes." },
  { "id": "53", "word": "Denied", "meaning": "Said no to." },
  { "id": "54", "word": "Density", "meaning": "How much mass is in a certain volume." },
  { "id": "55", "word": "Depart", "meaning": "Leave." },
  { "id": "56", "word": "Deputy", "meaning": "A person who assists a higher-ranking official." },
  { "id": "57", "word": "Description", "meaning": "Details about something." },
  { "id": "58", "word": "Designated", "meaning": "Chosen for a specific purpose." },
  { "id": "59", "word": "Desperate", "meaning": "Feeling a great need or desire." },
  { "id": "60", "word": "Dessert", "meaning": "Sweet food eaten after a meal." },
  { "id": "61", "word": "Destination", "meaning": "The place you are going to." },
  { "id": "62", "word": "Dialogue", "meaning": "Conversation between people." },
  { "id": "63", "word": "Diamond", "meaning": "A precious stone made of carbon." },
  { "id": "64", "word": "Dilemma", "meaning": "A difficult choice between options." },
  { "id": "65", "word": "Disappointed", "meaning": "Unhappy because something didn't happen." },
  { "id": "66", "word": "Empty", "meaning": "Having nothing inside." },
  { "id": "67", "word": "Enhance", "meaning": "Make better or improve." },
  { "id": "68", "word": "Escape", "meaning": "Get away from something." },
  { "id": "69", "word": "Extinct", "meaning": "No longer existing." },
  { "id": "70", "word": "Faculty", "meaning": "A group of teachers in a school." },
  { "id": "71", "word": "Failure", "meaning": "Lack of success." },
  { "id": "72", "word": "Feature", "meaning": "An important part of something." },
  { "id": "73", "word": "Field", "meaning": "An area of land." },
  { "id": "74", "word": "Flame", "meaning": "Burning gas that produces light and heat." },
  { "id": "75", "word": "Fluid", "meaning": "A substance that can flow." },
  { "id": "76", "word": "Force", "meaning": "Strength or power." },
  { "id": "77", "word": "Forty", "meaning": "The number 40." },
  { "id": "78", "word": "Fungi", "meaning": "A group of living organisms, like mushrooms." },
  { "id": "79", "word": "Fusion", "meaning": "Joining two things together." },
  { "id": "80", "word": "Gadget", "meaning": "A small, useful device." },
  { "id": "81", "word": "Galaxy", "meaning": "A large group of stars in space." },
  { "id": "82", "word": "Genetic", "meaning": "Related to genes or heredity." },
  { "id": "83", "word": "Gentle", "meaning": "Kind and soft." },
  { "id": "84", "word": "Genuine", "meaning": "Real and not fake." },
  { "id": "85", "word": "Grasp", "meaning": "Hold tightly." },
  { "id": "86", "word": "Gravity", "meaning": "The force that pulls objects towards the earth." },
  { "id": "87", "word": "Gurgle", "meaning": "A bubbling sound." },
  { "id": "88", "word": "Habitat", "meaning": "The natural home of an animal or plant." },
  { "id": "89", "word": "Helium", "meaning": "A light gas used in balloons." },
  { "id": "90", "word": "Humble", "meaning": "Modest and not proud." },
  { "id": "91", "word": "Hybrid", "meaning": "A mix of two different things." },
  { "id": "92", "word": "Hygiene", "meaning": "Practices for keeping clean and healthy." },
  { "id": "93", "word": "Hypnotise", "meaning": "Put into a trance-like state." },
  { "id": "94", "word": "Illegal", "meaning": "Not allowed by law." },
  { "id": "95", "word": "Infect", "meaning": "Spread disease to." },
  { "id": "96", "word": "Initial", "meaning": "First or beginning." },
  { "id": "97", "word": "Intense", "meaning": "Very strong or extreme." },
  { "id": "98", "word": "Justice", "meaning": "Fairness and lawfulness." },
  { "id": "99", "word": "Knock", "meaning": "Hit something to make a noise." },
  { "id": "100", "word": "Leisure", "meaning": "Free time for enjoyment." },
  { "id": "101", "word": "Liberal", "meaning": "Open to new ideas." },
  { "id": "102", "word": "License", "meaning": "A permit to do something." },
  { "id": "103", "word": "Lonely", "meaning": "Feeling alone and sad." },
  { "id": "104", "word": "Magnify", "meaning": "Make something look larger." },
  { "id": "105", "word": "Martial", "meaning": "Related to war or fighting." },
  { "id": "106", "word": "Martyr", "meaning": "A person who dies for their beliefs." },
  { "id": "107", "word": "Measles", "meaning": "A contagious disease with a red rash." },
  { "id": "108", "word": "Mirror", "meaning": "A surface that reflects images." },
  { "id": "109", "word": "Missile", "meaning": "A weapon designed to be sent to a target." },
  { "id": "110", "word": "Mystery", "meaning": "Something unknown or unexplained." },
  { "id": "111", "word": "Natural", "meaning": "Made by nature, not by humans." },
  { "id": "112", "word": "Nature", "meaning": "The physical world and living things." },
  { "id": "113", "word": "Occupation", "meaning": "A job or profession." },
  { "id": "114", "word": "Opaque", "meaning": "Not transparent; cannot see through." },
  { "id": "115", "word": "Opaque", "meaning": "Not transparent; cannot see through." },
  { "id": "116", "word": "Organ", "meaning": "A part of the body with a specific function." },
  { "id": "117", "word": "Organize", "meaning": "Arrange or put in order." },
  { "id": "118", "word": "Oxygen", "meaning": "A gas essential for breathing." },
  { "id": "119", "word": "Participant", "meaning": "Someone who takes part in something." },
  { "id": "120", "word": "Particle", "meaning": "A very small piece of something." },
  { "id": "121", "word": "Pedestrian", "meaning": "A person walking." },
  { "id": "122", "word": "Pensive", "meaning": "Deep in thought." },
  { "id": "123", "word": "Penumbra", "meaning": "A partial shadow." },
  { "id": "124", "word": "Phobia", "meaning": "An intense fear of something." },
  { "id": "125", "word": "Pleasant", "meaning": "Enjoyable and nice." },
  { "id": "126", "word": "Plenty", "meaning": "A large amount." },
  { "id": "127", "word": "Poison", "meaning": "A substance that can harm or kill." },
  { "id": "128", "word": "Polite", "meaning": "Showing good manners." },
  { "id": "129", "word": "Pollution", "meaning": "Harmful substances in the environment." },
  { "id": "130", "word": "Posture", "meaning": "The way you hold your body." },
  { "id": "131", "word": "Potential", "meaning": "Ability to develop or succeed." },
  { "id": "132", "word": "President", "meaning": "The leader of a country or organization." },
  { "id": "133", "word": "Pressure", "meaning": "The force applied to something." },
  { "id": "134", "word": "Prey", "meaning": "An animal hunted for food." },
  { "id": "135", "word": "Pride", "meaning": "A feeling of satisfaction and self-respect." },
  { "id": "136", "word": "Private", "meaning": "Not for public use." },
  { "id": "137", "word": "Probably", "meaning": "Likely to happen." },
  { "id": "138", "word": "Proceed", "meaning": "Go forward." },
  { "id": "139", "word": "Produce", "meaning": "Make or create something." },
  { "id": "140", "word": "Program", "meaning": "A planned series of events or activities." },
  { "id": "141", "word": "Property", "meaning": "Something owned." },
  { "id": "142", "word": "Protect", "meaning": "Keep safe from harm." },
  { "id": "143", "word": "Puncture", "meaning": "A small hole made by a sharp object." },
  { "id": "144", "word": "Quench", "meaning": "Satisfy thirst." },
  { "id": "145", "word": "Queue", "meaning": "A line of people waiting for something." },
  { "id": "146", "word": "Reciprocal", "meaning": "Given and received in return." },
  { "id": "147", "word": "Reflection", "meaning": "An image seen in a mirror." },
  { "id": "148", "word": "Relationship", "meaning": "A connection between people." },
  { "id": "149", "word": "Religious", "meaning": "Relating to belief in a god or gods." },
  { "id": "150", "word": "Renovate", "meaning": "Make something old look new again." },
  { "id": "151", "word": "Reproduction", "meaning": "Producing offspring or copies." },
  { "id": "152", "word": "Requirement", "meaning": "Something needed or necessary." },
  { "id": "153", "word": "Rubbish", "meaning": "Waste material; garbage." },
  { "id": "154", "word": "Scratch", "meaning": "A mark made by scraping." },
  { "id": "155", "word": "Scream", "meaning": "A loud, high-pitched cry." },
  { "id": "156", "word": "Seismograph", "meaning": "An instrument that measures earthquakes." },
  { "id": "157", "word": "Sense", "meaning": "A faculty by which the body perceives an external stimulus." },
  { "id": "158", "word": "Separate", "meaning": "Move apart." },
  { "id": "159", "word": "Serious", "meaning": "Not joking; important." },
  { "id": "160", "word": "Service", "meaning": "Work done to help others." },
  { "id": "161", "word": "Shower", "meaning": "A device that sprays water for washing." },
  { "id": "162", "word": "Situated", "meaning": "Located in a place." },
  { "id": "163", "word": "Sketch", "meaning": "A simple, quick drawing." },
  { "id": "164", "word": "Source", "meaning": "The origin of something." },
  { "id": "165", "word": "Speaker", "meaning": "A person who talks to an audience." },
  { "id": "166", "word": "Spectacle", "meaning": "An impressive show." },
  { "id": "167", "word": "Square", "meaning": "A shape with four equal sides." },
  { "id": "168", "word": "Stairs", "meaning": "A series of steps for going up or down." },
  { "id": "169", "word": "Status", "meaning": "A person's position or rank." },
  { "id": "170", "word": "Strange", "meaning": "Unusual or odd." },
  { "id": "171", "word": "Stream", "meaning": "A small, flowing body of water." },
  { "id": "172", "word": "Strength", "meaning": "The quality of being strong." },
  { "id": "173", "word": "Stress", "meaning": "A state of mental or emotional strain." },
  { "id": "174", "word": "Stretch", "meaning": "Extend or lengthen." },
  { "id": "175", "word": "Symbol", "meaning": "A mark or sign that represents something." },
  { "id": "176", "word": "Symptom", "meaning": "A sign of illness." },
  { "id": "177", "word": "Target", "meaning": "An aim or goal." },
  { "id": "178", "word": "Teacher", "meaning": "A person who educates students." },
  { "id": "179", "word": "Tease", "meaning": "Make fun of someone." },
  { "id": "180", "word": "Technique", "meaning": "A way of doing something." },
  { "id": "181", "word": "Technology", "meaning": "The use of science in industry." },
  { "id": "182", "word": "Telephone", "meaning": "A device for talking to someone far away." },
  { "id": "183", "word": "Temperature", "meaning": "How hot or cold something is." },
  { "id": "184", "word": "Theatre", "meaning": "A place for watching plays or movies." },
  { "id": "185", "word": "Therapy", "meaning": "Treatment for illness." },
  { "id": "186", "word": "Thermometer", "meaning": "A device that measures temperature." },
  { "id": "187", "word": "Thirsty", "meaning": "Needing or wanting a drink." },
  { "id": "188", "word": "Tissue", "meaning": "A group of cells in the body." },
  { "id": "189", "word": "Tongue", "meaning": "The muscle in the mouth used for tasting and speaking." },
  { "id": "190", "word": "Tourist", "meaning": "A person who travels for pleasure." },
  { "id": "191", "word": "Tradition", "meaning": "A long-established custom." },
  { "id": "192", "word": "Treatment", "meaning": "Medical care given to a patient." },
  { "id": "193", "word": "Trouble", "meaning": "Problems or difficulties." },
  { "id": "194", "word": "Tuition", "meaning": "Teaching or instruction, especially at a school." },
  { "id": "195", "word": "Underground", "meaning": "Beneath the surface of the earth." },
  { "id": "196", "word": "Understand", "meaning": "Know the meaning of something." },
  { "id": "197", "word": "Unique", "meaning": "One of a kind." },
  { "id": "198", "word": "Unknown", "meaning": "Not known or familiar." },
  { "id": "199", "word": "Vacuum", "meaning": "A space with no air or matter." },
  { "id": "200", "word": "Vampire", "meaning": "A mythical creature that drinks blood." },
  { "id": "201", "word": "Vanish", "meaning": "Disappear suddenly." },
  { "id": "202", "word": "Victory", "meaning": "Winning a contest or game." },
  { "id": "203", "word": "Vinegar", "meaning": "A sour liquid used in cooking." },
  { "id": "204", "word": "Virtue", "meaning": "Good moral quality." },
  { "id": "205", "word": "Volunteer", "meaning": "A person who offers to help without being paid." },
  { "id": "206", "word": "Wastage", "meaning": "Unnecessary use or loss of something." },
  { "id": "207", "word": "Weakness", "meaning": "Lack of strength." },
  { "id": "208", "word": "Weapon", "meaning": "An object used to cause harm." },
  { "id": "209", "word": "Weather", "meaning": "The state of the atmosphere." },
  { "id": "210", "word": "Wedge", "meaning": "A piece of material with a thick and thin end." },
  { "id": "211", "word": "Wrapper", "meaning": "A covering for something." },
  { "id": "212", "word": "Wrinkle", "meaning": "A small line or fold on a surface." },
  { "id": "213", "word": "Wrist", "meaning": "The joint between the hand and the arm." },
  { "id": "214", "word": "Xerox", "meaning": "To make a copy of a document." },
  { "id": "215", "word": "Yesterday", "meaning": "The day before today." },
  { "id": "216", "word": "Yoghurt", "meaning": "A thick, creamy food made from milk." },
  { "id": "217", "word": "Zebra", "meaning": "A wild African animal with black-and-white stripes." },
  { "id": "218", "word": "Zenith", "meaning": "The highest point." },
  { "id": "219", "word": "Zodiac", "meaning": "A circle of twelve divisions representing the paths of the planets." },
  { "id": "220", "word": "Zoology", "meaning": "The study of animals." }
];

let currentCardIndex = 0;
let voices = [];
const voiceSelect = document.getElementById('voiceSelect');

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }
    
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = index;
        voiceSelect.appendChild(option);
    });
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
    const selectedVoiceIndex = voiceSelect.value;
    if (selectedVoiceIndex !== '') {
        utterance.voice = voices[selectedVoiceIndex];
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
        const selectedVoiceIndex = voiceSelect.value;
        if (selectedVoiceIndex !== '') {
            letterUtterance.voice = voices[selectedVoiceIndex];
        }
        letterUtterance.rate = 1.2;
        speechSynthesis.speak(letterUtterance);
        utterance.onend = () => {
          speakAgain(word);
      };
    });
}

function speakAgain() {
    const word = flashcards[currentCardIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    const selectedVoiceIndex = voiceSelect.value;
    if (selectedVoiceIndex !== '') {
        utterance.voice = voices[selectedVoiceIndex];
    }
    speechSynthesis.speak(utterance);
}

// Show the first card on initial load
document.addEventListener('DOMContentLoaded', () => {
    showCard(currentCardIndex);
});
