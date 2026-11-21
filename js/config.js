/**
 * ===================================================================
 * A Little Christmas Surprise 🎄✨ - Configuration File
 * ===================================================================
 * You can edit ANY text, names, dates, and settings in this file!
 * Everything updates automatically on the website.
 */

const CONFIG = {
  // Recipient and Sender Details
  recipientName: "Mehak",
  
  // Audio Settings (Web Audio API procedural music box - no external audio files needed!)
  enableMusicBox: true,

  // Form Service Configuration
  // To receive Mehak's message directly to your email for free:
  // 1. Go to https://formspree.io and create a free account
  // 2. Create a form and paste your Formspree endpoint URL below (e.g., "https://formspree.io/f/mqkvzqwa")
  // Or use Web3Forms (https://web3forms.com) with your access key.
  // If left as an empty string, messages will be safely stored in the browser's localStorage as a fallback.
  formEndpoint: "", 

  // Proposed Date Details
  proposedDate: "December 20, 2026",
  proposedTime: "Evening",

  // =================================================================
  // SCREEN CONTENT
  // =================================================================

  // Screen 1: Welcome
  screen1: {
    tagline: "A little something for you...",
    heading: "Hey Mehak!",
    message: "I made a little something for you. It's a mix of books, magic, Christmas and a few honest thoughts I've been meaning to share.",
    buttonText: "Let's Begin ✨",
  },

  // Screen 2: What I Notice
  screen2: {
    title: "A Few Things About You...",
    items: [
      {
        icon: "book",
        text: "Your love for Harry Potter ✨",
        highlight: "Harry Potter"
      },
      {
        icon: "music",
        text: "The way you get excited about the little things ♡",
        highlight: "excited about the little things"
      },
      {
        icon: "chat",
        text: "Our conversations (which always feel easy)",
        highlight: "always feel easy"
      },
      {
        icon: "star",
        text: "And just... the way you are. ♡",
        highlight: "the way you are"
      }
    ]
  },

  // Screen 3: My Feelings
  screen3: {
    intro: "So, here's the honest part... ✨",
    confessionBadge: "I like you, Mehak. ♡",
    body: "I've really enjoyed getting to know you, and over time, you've become someone I genuinely like and care about."
  },

  // Screen 4: What I Want
  screen4: {
    title: "And because I like you...",
    subtitle: "I'd really like to know you better —",
    description: "Your thoughts, your interests, your stories, and just more of you. ♡"
  },

  // Screen 5: The Invitation
  screen5: {
    title: "A Small Christmas Wish 🎄",
    question: "Would you like to go on a Christmas movie date with me? 🎬",
    details: "Just the two of us, a good movie, some food, and hopefully a few long and easy conversations.",
    noPressureText: "No pressure, no expectations — I'd simply love the chance to know you better. ♡",
    dateBadge: "Proposed: December 20, 2026",
    nextButtonText: "One last little thing →"
  },

  // Screen 6: Her Reply
  screen6: {
    title: "Your Turn ♡",
    subtitle: "You don't have to give me an answer right now.",
    explanation: "But if you'd like, you can leave me a little note — anything you feel like saying. ♡",
    // Quick response chips she can tap to easily express her feelings
    quickChips: [
      "I'd love to! 🎬🍿",
      "Sounds lovely, let's pick a movie! 🎄",
      "I'd rather stay friends 🤍",
      "Let me think about it ✨"
    ],
    placeholder: "Write a message... (completely optional)",
    sendButtonText: "Send Note 🕊️",
    
    // Responses shown after she submits
    successMessage: {
      title: "Sent with a sprinkle of magic! ✨",
      text: "Thank you for reading this, Mehak. Whatever you choose, having you in my life is something I truly treasure. Have a wonderful Christmas! 🎄❤️"
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
