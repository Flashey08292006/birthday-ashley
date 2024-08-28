const words = [
    "My love for you grows stronger with every challenge you overcome.",
    "I am here for you, always, through every high and low.",
    "You are my everything, and I am grateful to be by your side every day.",
    "Your strength and resilience only make my love for you deeper.",
    "No matter what you face, know that my love and support are unwavering.",
    "I am honored to be a part of your life and to support you through every struggle.",
    "You are my heart and soul, and I am here for you, always and forever.",
    "Your courage makes me love you even more, and I am so proud to be with you.",
    "I am here, right by your side, through every battle and every triumph.",
    "My love for you is constant and unconditional, no matter what life throws our way.",
    "You are never alone; my love and support are always with you.",
    "Every moment with you is a gift, and I am thankful for every day we share.",
    "I love you more than words can say, and I am always here to lift you up.",
    "Being present in your life and witnessing your strength makes me love you even more.",
    "You are my greatest treasure, and I am here to support and cherish you through everything.",
    "My heart beats for you, and I am committed to being by your side through every moment.",
    "You are the love of my life, and I will always stand with you, no matter what.",
    "Your struggles do not diminish my love for you; they only make it stronger.",
    "I am so proud of you, and my love for you is a constant source of strength and comfort.",
    "Being with you through everything makes me realize how deeply I love and cherish you."
];

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById("wordDisplay").innerText = randomWord;
}
