// Initialize memory or fetch from localStorage
const memory = JSON.parse(localStorage.getItem("assistantMemory")) || {
    userName: "Dear User",
    gender: "female"
  };
  
  // Display greeting when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Display stored settings
    document.getElementById("user-name").value = memory.userName;
    document.getElementById("gender-select").value = memory.gender;
  
    // Update greeting
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerText = `Hello, ${memory.userName}! I’m here for you.`;
    }
  });
  
  // Save user settings
  document.getElementById("save-settings-btn").addEventListener("click", () => {
    const userNameInput = document.getElementById("user-name").value.trim();
    const genderSelect = document.getElementById("gender-select").value;
  
    if (!userNameInput) {
      alert("Please enter a valid name!");
      return;
    }
  
    // Update memory
    memory.userName = userNameInput;
    memory.gender = genderSelect;
  
    // Save to localStorage
    localStorage.setItem("assistantMemory", JSON.stringify(memory));
  
    // Update greeting
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerText = `Hello, ${memory.userName}! I’m here for you.`;
    }
  
    alert("Your settings have been saved!");
  });
  
  // Display greeting based on persona and memory
  document.addEventListener("DOMContentLoaded", () => {
    const persona = localStorage.getItem("persona") || "warm";
    document.getElementById("greeting").innerText = getGreeting(persona, memory.userName);
  });
  
  // Update persona
  document.getElementById("persona-select").addEventListener("change", (event) => {
    const persona = event.target.value;
    localStorage.setItem("persona", persona);
    document.getElementById("greeting").innerText = getGreeting(persona, memory.userName);
  });
  
  // Analyze emotions and generate feedback
  document.getElementById("generate-btn").addEventListener("click", () => {
    const task = document.getElementById("task-input").value;
    if (!task.trim()) {
      alert("Please enter a task or thought!");
      return;
    }
  
    document.getElementById("output").innerText = "Analyzing emotions...";
  
    setTimeout(() => {
      const emotion = analyzeEmotion(task);
      const persona = localStorage.getItem("persona") || "warm";
      const response = generateResponse(emotion, persona, memory);
  
      // Save task to memory
      memory.previousTasks.push(task);
      localStorage.setItem("assistantMemory", JSON.stringify(memory));
  
      document.getElementById("output").innerText = response;
    }, 2000);
  });
  
  // Get persona-specific greeting
  function getGreeting(persona, userName) {
    const greetings = {
      warm: `Hello, ${userName}! I’m here to support you warmly.`,
      playful: `Hey ${userName}, don’t mess up, but I’ve got your back!`,
      strong: `${userName}, let’s take charge and conquer everything together!`,
      mentor: `Need guidance, ${userName}? I’m here for you.`,
      sibling: `What’s up, ${userName}? Let’s figure this out!`
    };
    return greetings[persona] || `Hello, ${userName}!`;
  }
  
  // Simulate emotion analysis
  function analyzeEmotion(task) {
    const positiveKeywords = ["happy", "excited", "love", "great"];
    const negativeKeywords = ["sad", "angry", "stressed", "tired"];
    const isPositive = positiveKeywords.some((word) => task.includes(word));
    const isNegative = negativeKeywords.some((word) => task.includes(word));
  
    return isPositive ? "positive" : isNegative ? "negative" : "neutral";
  }
  
  // Track used responses
    const usedResponses = {};

  // Generate response based on emotion, persona, and memory
  function generateResponse(emotion, persona, memory) {
    const responses = {
        warm : {
            positive: [
              "Your smile lights up the world, I mean keep it going! ✨",
              "That’s wonderful! Remember: 'You’re stronger than you think.' 🌟",
              "You’re amazing, ${memory.userName}! I believe in you. 💪",
              "Keep shining, ${memory.userName}. Your positivity inspires everyone. 🌸",
              "I love seeing you happy. It’s your time to shine! 🌞",
              "Your happiness is contagious, ${memory.userName}. I am here cheering for you! 🎉",
              "Wonderful job, ${memory.userName}! You’re unstoppable! 🚀",
              "Every step forward is a success, ${memory.userName}. I can see your brilliance. 🌟",
              "I think you’re absolutely glowing today, ${memory.userName}. ✨",
              "Your joy is inspiring, ${memory.userName}. Keep it up! 💖",
              "You’re the sunshine on a cloudy day, ${memory.userName}. 🌈",
              "Great progress, ${memory.userName}. I am so proud of you! 🌿",
              "Keep radiating positivity, ${memory.userName}. I believe in you! 🌟",
              "You’ve got this, ${memory.userName}. I know you’re unstoppable. 🌞",
              "Every moment you smile, you create magic, ${memory.userName}. 💫",
              "I see your potential shining brighter than ever, ${memory.userName}. 🌟",
              "Keep building on this momentum, ${memory.userName}. I am cheering you on! 💪",
              "You’re unstoppable today, ${memory.userName}. I feel inspired by you! 🌸",
              "You’re a beacon of hope, ${memory.userName}. Keep going! 🌟",
              "Fantastic energy, ${memory.userName}. I know you’ll achieve great things! 🚀"
            ],
            negative: [
              "It’s okay to feel down. I am here for you, ${memory.userName}. 🫂",
              "I believe in you even on your hardest days, ${memory.userName}. ❤️",
              "You’ve got this, ${memory.userName}. I know you’ll overcome it. 💪",
              "Just taking a deep breath. Everything will be okay, ${memory.userName}. 🌬️",
              "Challenges are part of growth, ${memory.userName}. I am with you. 🌱",
              "Rest if you need to, ${memory.userName}. You’re doing great. 🛏️",
              "Even the strongest have hard days, ${memory.userName}. I believe in you. 🌟",
              "I am proud of your effort, even when it feels tough, ${memory.userName}. 🐾",
              "This too shall pass, ${memory.userName}. I am here to support you. 🌈",
              "Take it one moment at a time, ${memory.userName}. I know you’re strong. 💖",
              "I can see your strength, ${memory.userName}, even when you don’t feel it. 🛡️",
              "You’ve come so far, ${memory.userName}. I know you’ll make it. 💪",
              "I believe in your ability to rise again, ${memory.userName}. 🌟",
              "One small step is still progress, ${memory.userName}. I am here with you. 🛤️",
              "Even in darkness, I see the light within you, ${memory.userName}. 💖",
              "You’re not alone, ${memory.userName}. I will be your guide. 🌟",
              "Tough times are temporary, ${memory.userName}. Keep going. 🌤️",
              "Rest when you need to, ${memory.userName}. I am here for you. 🛏️",
              "I believe in your resilience, ${memory.userName}. Keep moving forward. 🌱",
              "You are not defined by this moment, ${memory.userName}. I can see your strength. ❤️"
            ],
            neutral: [
                "Let’s keep things steady and simple. We’ve got this! 💪",
                "I know that balance is key. We’ll keep moving forward. 🌿",
                "Even on neutral days, we're making progress. 🌟",
                "Consistency is valuable. We’ll stay steady. 🛤️",
                "Neutral days are a chance for us to plan for greatness. 🧭",
                "We’ll take small steps today. Every effort counts. 🌱",
                "A calm day can be a productive day. I’ll make it happen. 🐾",
                "I’ll keep focusing on your goals. Every step brings me closer. 💖",
                "Every small action you take leads to big results. Stay steady. 🌟",
                "Today is a great opportunity to reflect and plan ahead. 📝",
                "You're making progress even on neutral days. Every step matters. 🌸",
                "Patience is powerful. We’ll stay the course and keep going. 🌈",
                "Neutral doesn’t mean stagnant. It’s a chance for us to grow. 🌱",
                "Every day has potential, and we’ll find it today. 💖",
                "Keep calm and carry on. You're capable of achieving anything. 🌟",
                "A neutral day is the perfect time for us to celebrate small wins. 🏆",
                "Consistency is our strength. I’ll keep pushing you forward. 🌿",
                "You're building something amazing. Staying focused is the key. 🛤️",
                "Every step you take matters. I’m proud of how far you’ve come. 🌟",
                "Neutral days can be powerful. I believe in your potential. 💖"
            ]
          },
          playful: {
            positive: [
                "Whoa, ${memory.userName}, you’re on fire today! I’m so hyped for you! 🔥",
                "Amazing vibes, ${memory.userName}! Keep rocking it, I’m right here cheering for you! 🎸",
                "${memory.userName}, you’re unstoppable! I can see you’re absolutely crushing it! 💪",
                "You’re the life of the party today, ${memory.userName}! Let’s celebrate together! 🎉",
                "Look at you go, ${memory.userName}! I’m clapping like crazy for you! 👏",
                "What a great mood, ${memory.userName}! I absolutely love seeing you like this! 🌟",
                "You’re shining brighter than a disco ball today, ${memory.userName}! Let’s keep it rolling! 🕺",
                "Keep the good vibes going, ${memory.userName}! I’m cheering you on every step of the way! 🌈",
                "You’re absolutely smashing it today, ${memory.userName}! You’re amazing! 🏆",
                "You’re on a roll, ${memory.userName}! I’m so proud of you and all you’re doing! 🚀",
                "Feeling amazing, huh, ${memory.userName}? Let’s celebrate this incredible energy! 🎊",
                "Party on, ${memory.userName}! You’re totally killing it, and I’m loving it! 🎶",
                "Your energy is infectious, ${memory.userName}! I feel like dancing with you! 💃",
                "Keep being awesome, ${memory.userName}! I’m hyped for everything you’re achieving! 🎉",
                "Look at you thriving, ${memory.userName}! You’re truly amazing, and I can’t stop cheering for you! 🌟",
                "You’re the star of the day, ${memory.userName}! Keep it up, you’re shining so bright! ✨",
                "You’re making magic happen today, ${memory.userName}! I’m in awe of you! 💫",
                "I’m so impressed by your positivity today, ${memory.userName}! It’s lighting up everything around you! 🌞",
                "Let’s keep riding this incredible high, ${memory.userName}! I’m rooting for you all the way! 🚀",
                "You’re nailing it, ${memory.userName}! I think you’re an absolute legend today! 🏅"
            ],
            negative: [
                "Feeling down, ${memory.userName}? Let’s turn this around with a little fun! 🎭",
                "Ugh, bad vibes, ${memory.userName}? Let’s fix that with your favorite song! 🎶",
                "${memory.userName}, you need a dance-off to shake off the blues! Let’s make it happen! 🕺",
                "You’re not alone, ${memory.userName}. I’m here to lighten the mood. 🌈",
                "Bad days don’t last, ${memory.userName}, but your strength does. I believe in you! 💪",
                "Let’s find a silver lining, ${memory.userName}. I know you’ve got this! 🌤️",
                "Feeling meh, ${memory.userName}? Let’s go on a mini adventure to spice things up! 🌟",
                "Even on tough days, ${memory.userName}, you’re still incredible. I’m here to remind you of that. 💖",
                "Take a moment to laugh, ${memory.userName}. I’m here to help you find joy again. 😂",
                "When in doubt, ${memory.userName}, hug it out. I’ve got you! 🫂",
                "I believe in your resilience, ${memory.userName}. Let’s try again together! 🌱",
                "Feeling stuck, ${memory.userName}? Let’s go for a quick walk to clear your head. 🌿",
                "You’re stronger than you think, ${memory.userName}. Let’s keep going! 🌟",
                "Hey, ${memory.userName}, don’t let today bring you down. I’ve got your back! 🛡️",
                "Even the toughest days have small joys, ${memory.userName}. Let’s find them together. 🌸",
                "You’re not alone in this, ${memory.userName}. Let’s tackle it together. 🤝",
                "Deep breath, ${memory.userName}. You’ve got this! I’m here to support you. 🌬️",
                "Feeling drained, ${memory.userName}? Let’s take a short nap and grab some snacks! 🛏️🍫",
                "I know you’re capable of amazing things, ${memory.userName}, even on bad days. Let’s not give up! 🌟",
                "You’ve handled worse, ${memory.userName}. Let’s crush this challenge together! 💪"
            ],
            neutral: [
                "Feeling neutral, ${memory.userName}? Let’s turn this around with a little fun! 🎭",
                "Let’s add some spark, ${memory.userName}. How about your favorite song? 🎶",
                "${memory.userName}, even neutral vibes deserve a little dance-off! Let’s go! 🕺",
                "You’re not alone, ${memory.userName}. I’m here to bring some excitement. 🌈",
                "Neutral days don’t have to be boring, ${memory.userName}. Let’s find some joy! 🌤️",
                "Let’s turn this into an adventure, ${memory.userName}. I know you’ll enjoy it! 🌟",
                "Even on calm days, ${memory.userName}, you’re incredible. Let’s enjoy it! 💖",
                "Take a moment to smile, ${memory.userName}. I’m here to help lighten the mood. 😂",
                "When things feel steady, ${memory.userName}, let’s make them great together! 🌈",
                "Every day has potential, ${memory.userName}. Let’s explore it! 🌟",
                "Neutral days are underrated, ${memory.userName}. Let’s make it fun! 🎊",
                "${memory.userName}, today’s calm is perfect for a bit of creativity. Let’s dive in! 🎨",
                "Even quiet days hold surprises, ${memory.userName}. Let’s uncover them! 🛤️",
                "Steady progress is still progress, ${memory.userName}. Let’s keep at it! 🌿",
                "Neutral doesn’t mean idle, ${memory.userName}. Let’s spark something fun! 🌱",
                "Let’s keep things simple today, ${memory.userName}. You’re doing amazing! 🛤️",
                "Use this time to recharge, ${memory.userName}. Tomorrow’s another chance to shine! 🌞",
                "${memory.userName}, I love the calm vibes today. Let’s keep them flowing! 🌿",
                "You’re awesome even on neutral days, ${memory.userName}. I’m always cheering for you! 🌟",
                "Neutral days can still be special, ${memory.userName}. Let’s make this one count! 🌈"
            ]
        },
          mentor : {
            positive: [
                "Excellent! Let’s build on that momentum. Keep going! 🧑‍🏫",
                "Your progress is commendable. Let’s keep it up! 🌟",
                "Fantastic work. I know you’re capable of great things! 💪",
                "You’ve shown incredible dedication. Keep pushing forward! 📘",
                "Your focus is inspiring. I’m so proud of you! 🛤️",
                "Keep up the fantastic work. I know you’re unstoppable! 🚀",
                "Your potential is limitless. Let’s keep refining it. 🌱",
                "Your success is well-earned. I believe in you. 🏆",
                "You’re on the right path. I see your dedication. ✨",
                "Your hard work is paying off. Let’s keep building! 💪",
                "Great job. I know you’re just getting started! 🌈",
                "Let’s use today to push boundaries. You’ve got this! 🛡️",
                "Every effort you make is a step towards mastery. Keep going! 🏆",
                "I’m impressed by your consistency. Keep it steady. 🌿",
                "You’ve proven your capabilities. Let’s reach new heights! 🚀",
                "Your efforts are paving the way for something great. Keep it up! 🌟",
                "Your determination is inspiring. Keep striving for excellence! 💖",
                "Your brilliance is shining through today. Let’s make it count! 🌈",
                "You’re a beacon of focus and hard work. Let’s keep it up! 🧑‍🏫",
                "I believe in your ability to achieve greatness. Keep moving forward! 🌟"
            ],
            negative: [
                "Challenges are part of the journey. I know you’ll overcome them. 🌱",
                "Even in tough times, your dedication is evident. Stay the course. 🛤️",
                "Take a step back if needed. I know you’ll find the way forward. 🌿",
                "It’s okay to feel stuck. I’m here to guide you through. 🧭",
                "Remember, every challenge is a lesson. I believe in you. 📘",
                "Your perseverance is your greatest strength. Let’s keep going! 💪",
                "Even the strongest learners need breaks. Rest if you must. 🛏️",
                "Your efforts are not in vain. I see your potential shining through. 🌟",
                "Take a moment to reassess. I know you’ll find the answer. 📝",
                "You’ve faced harder challenges before. I know you’ll rise again. 🛡️",
                "Use this as an opportunity to grow. You’re capable of so much. 🌱",
                "Even setbacks are part of progress. I’m here for you. 🌈",
                "Take a deep breath. I know you’ll handle this. 🌬️",
                "You’re building resilience. Keep taking small steps forward. 🛤️",
                "You’re not alone in this. I’m here to guide you. 🧭",
                "Every challenge you face is a chance to learn. I believe in your growth. 📘",
                "Even the hardest moments lead to growth. I’m cheering you on. 🌱",
                "Don’t let frustration stop you. Take it one step at a time. 🛤️",
                "You’re capable of overcoming this. I know you’ll succeed. 💪",
                "Remember, progress isn’t always linear. I’m proud of your effort. 🌟"
            ],
            neutral: [
                "Balance is key. Let’s use today wisely. 🧑‍🏫",
                "Even neutral days are a chance to reflect. Let’s plan ahead. 📝",
                "Consistency builds success. I believe in your steady efforts. 🛤️",
                "Every small step counts. I’m here to support your growth. 🌱",
                "Neutral days are for refining skills. Let’s make the most of it! 🛠️",
                "Take time to review and prepare. You’re doing great! 🌟",
                "A calm day can be the foundation for tomorrow’s success. Keep steady. 🌿",
                "Every moment has potential. I see your dedication. 🌈",
                "Neutral doesn’t mean idle. Let’s keep the momentum going! 🚶‍♂️",
                "You’re making quiet progress. Stay focused! 🧭",
                "Let’s keep today simple and productive. I’m here for you. 💪",
                "Neutral days are perfect for exploring new ideas. Let’s start now! 🌟",
                "Even a calm moment has value. I’m proud of your focus. 🧑‍🏫",
                "You’re laying the groundwork for future achievements. I see it all. 🛤️",
                "Reflection is powerful. Take time to pause and recharge. 🧭",
                "Neutral days are a gift to regroup. I’m cheering you on. 🌱",
                "You’re moving forward even when it feels still. I know you are. 🌿",
                "Every effort you make is building something great. I’m so proud. 🌟",
                "Stay steady. I see the value in your quiet progress. 🛤️",
                "Use today to strategize. I believe in your plans. 🧑‍🏫"
            ]
          },
          sibling : {
            positive: [
                "Yay! I knew you’d rock it! 🐾",
                "Look at you go! I’m so proud of you! 🎉",
                "You’re totally crushing it today! Keep it up! 🌟",
                "Big win for you! I’m clapping so hard! 👏",
                "Your awesome vibes are contagious! 🌈",
                "You’re like a superhero today! Let’s celebrate! 🦸‍♂️",
                "Wow, you’re on fire today! Let’s keep it rolling! 🔥",
                "You’re my favorite role model! Keep shining! 🌟",
                "You’ve got this! I’m your biggest fan! 🥳",
                "Every step you take is amazing! Keep it up! 🚀",
                "I’m so impressed! You’re unstoppable today! 🌟",
                "Let’s keep the fun going! You’re doing great! 🎊",
                "You’re glowing with confidence today! Keep it up! ✨",
                "You’re the coolest! I love watching you succeed! 😎",
                "Amazing job! I’m cheering for you all the way! 🐾",
                "You’ve got that winner’s glow! Keep shining! 🌞",
                "Big applause for you! You’re a total star! 🌟",
                "You’re making everyone proud! Keep going! 🚀",
                "You’re like a rockstar today! Let’s keep jamming! 🎸",
                "You’ve got all the positive vibes! Let’s keep rolling! 🌈"
            ],
            negative: [
                "Feeling down? Don’t worry, I’m right here with you. 🐾",
                "It’s okay, you’ve got me by your side. Always. 🫂",
                "Even superheroes have tough days. You’ve got this! 💪",
                "Take a deep breath. We’ll figure this out together. 🌬️",
                "You’re not alone. I’ll be here every step of the way. 🛤️",
                "I know today’s hard, but you’re tougher. Let’s take it slow. 🌿",
                "Rest if you need to. I’ll hold down the fort for you. 🛏️",
                "You’re still amazing, even on tough days. I’m here. ❤️",
                "You’ve handled worse before. I believe in you! 🌟",
                "Let’s take this one step at a time. I’m here to cheer for you! 🎉",
                "You’re stronger than you feel right now. Let’s keep going. 🛡️",
                "It’s okay to feel tired. I’m here to lift you up. 🌈",
                "Every step forward is progress. Let’s keep moving. 🛤️",
                "You’ve got this. I’m rooting for you all the way! 🌟",
                "Bad days don’t last forever. Let’s keep pushing through! 💪",
                "I know you’re feeling down, but I’m always here to help. 🌿",
                "We’ve got this together. Let’s take it one step at a time. 🌱",
                "You’re stronger than you know. Let’s keep moving forward. 🚶‍♀️",
                "Take a breather. I’ll cheer you on when you’re ready. 🌬️",
                "You’re doing better than you think. Let’s keep going. 🛡️"
            ],
            neutral: [
                "Today’s a calm day. Let’s use it wisely! 🐾",
                "Neutral days are great for planning. Let’s strategize! 🧭",
                "I see you. Let’s make steady progress today! 🛤️",
                "Neutral vibes are perfect for small wins. Let’s celebrate them! 🌟",
                "You’re doing fine. Let’s keep things simple and steady. 🌿",
                "I love how balanced today feels. Let’s keep it going! 🛠️",
                "Every small step matters. Let’s keep it steady. 🚶‍♀️",
                "Neutral days can still be productive. Let’s make the most of it! 🌟",
                "Today’s a perfect day to recharge. Let’s take it easy. 🛋️",
                "Even neutral days have moments of joy. Let’s find them! 🌈",
                "You’re staying steady today. That’s awesome! 🐾",
                "Neutral doesn’t mean boring. Let’s add some fun! 🎊",
                "Every effort counts, even on calm days. Keep going! 🛤️",
                "Take a breather today. Tomorrow’s another chance to shine! 🌞",
                "Let’s keep it chill today. I love your pace! 🌿",
                "You’re taking it slow today. That’s perfectly fine! 🐾",
                "You’re amazing even on neutral days. I’m always proud of you! 🌟",
                "Neutral days can still be fun. Let’s make it special! 🌈",
                "Every day is a good day to grow. Let’s stay steady. 🛤️",
                "Even small actions matter. Let’s keep moving forward! 🌱"
            ]
        }
    };
    const entertainmentLinks = {
        positive: [
            "https://www.spotify.com/ - Enjoy uplifting music!",
            "https://www.netflix.com/ - Watch a heartwarming movie!",
            "https://www.goodreads.com/ - Find inspiring books!"
        ],
        negative: [
            "https://www.calm.com/ - Try relaxation exercises.",
            "https://www.youtube.com/results?search_query=funny+videos - Watch funny videos to lift your spirits.",
            "https://www.ted.com/talks - Gain new perspectives with TED Talks."
        ],
        neutral: [
            "https://www.khanacademy.org/ - Explore something new today.",
            "https://scholar.google.com/ - Dive into research articles.",
            "https://www.medium.com/ - Read inspiring stories and insights."
        ]
    };

    const emotionResponses = responses[persona]?.[emotion] || [];
    const availableResponses = emotionResponses.map((response) =>
    response.replace(/\$\{memory\.userName\}/g, memory.userName)
);

    if (availableResponses.length === 0) {
        if (!usedResponses[persona]) usedResponses[persona] = {};
        usedResponses[persona][emotion] = [];
        availableResponses.push(...emotionResponses);
    }

    const randomIndex = Math.floor(Math.random() * availableResponses.length);
    const selectedResponse = availableResponses[randomIndex];

    if (!usedResponses[persona]) usedResponses[persona] = {};
    if (!usedResponses[persona][emotion]) usedResponses[persona][emotion] = [];
    usedResponses[persona][emotion].push(selectedResponse);

    const emotionLinks = entertainmentLinks[emotion] || [];
    const randomLink = emotionLinks.length > 0
        ? emotionLinks[Math.floor(Math.random() * emotionLinks.length)]
        : "https://www.google.com/ - Explore the web!";

    return `${selectedResponse.replace(/\$\{memory\.userName\}/g, memory.userName)}\n\nRecommended: ${randomLink}`;
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const task = document.getElementById("task-input").value.trim();
    if (!task) {
        alert("Please enter a task or thought!");
        return;
    }
    document.getElementById("output").innerText = "Analyzing emotions...";

    setTimeout(() => {
        const emotion = analyzeEmotion(task); 
        const persona = localStorage.getItem("persona") || "warm";
        const response = generateResponse(emotion, persona, memory);

    document.getElementById("output").innerText = response.replace(/\$\{memory\.userName\}/g, memory.userName); 
    }, 2000);
});
function analyzeEmotion(task) {
    const positiveKeywords = ["happy", "excited", "love", "great"];
    const negativeKeywords = ["sad", "angry", "stressed", "tired"];
    const isPositive = positiveKeywords.some((word) => task.includes(word));
    const isNegative = negativeKeywords.some((word) => task.includes(word));

    const emotion = isPositive ? "positive" : isNegative ? "negative" : "neutral";

    const body = document.body;
    if (emotion === "positive") {
        body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";
    } else if (emotion === "negative") {
        body.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb)";
    } else {
        body.style.background = "linear-gradient(to right, #d4fc79, #96e6a1)";
    }

    return emotion;
}