/**
 * ===================================================================
 * A Little Christmas Story ❤️ - Configuration File
 * ===================================================================
 * All text, headings, details and options are centralized here!
 */

const CONFIG = {
  recipientName: "Mehak",
  
  // Audio Settings (Web Audio API procedural music box - no external files needed)
  enableMusicBox: true,

  // Proposed Date / Movie details (editable by user)
  proposedDate: "December 20, 2026 (or a nearby day)",
  proposedMovie: "We can pick one together!",
  proposedPlace: "Cinema / OTT (whatever you prefer!)",

  // PAGE 1 — Before you begin...
  page1: {
    heading: "Before you begin... ❤️",
    paragraphs: [
      "Okay, so I've thought about this quite a lot. And knowing how smart you are, I'm guessing you probably already have an idea of what this is about. 😂",
      "Honestly, I wasn't even sure if I should do this.",
      "But I'd rather say something I've been wanting to say than look back someday and wonder what would have happened if I had.",
      "Whatever your answer is, I'll respect it. It might make things a little different initially, but I genuinely value you and the friendship we share.",
      "I just didn't want to leave something important unsaid and regret not trying.",
      "So... here goes nothing. 🥹"
    ],
    buttonText: "Okay, tell me... →"
  },

  // PAGE 2 — The confession
  page2: {
    heading: "Hey Mehak, ❤️",
    paragraphs: [
      "I wanted to tell you something that I've been meaning to say for a little while.",
      "I really like you.",
      "I know we usually meet at work or hang out with everyone, but I'd genuinely like to get to know you better, beyond all of that.",
      "I don't know where this could lead, and I don't want to make things awkward or put any pressure on you.",
      "I just thought it would be nice to be honest about how I feel. ❤️"
    ],
    highlightSentence: "I really like you.",
    buttonText: "There's a little more... →"
  },

  // PAGE 3 — Just a little context...
  page3: {
    heading: "Just a little context... ❤️",
    intro: "You already know I'm an introvert, but there's something else I wanted to tell you.",
    paragraphs: [
      "I often find it difficult to message first, or even send a random reel, even when I genuinely want to. 😅",
      "I end up overthinking things like whether I'm disturbing you, whether it's the right time, or whether my message would just feel random.",
      "And by the time I've thought about it a hundred times, I've usually decided not to send it at all. 😂",
      "But the truth is, I do want to talk to you more, get to know you better, and spend some time together beyond our usual workdays and group hangouts.",
      "And that's actually why I wanted to ask you something... ❤️"
    ],
    thoughtBubblePrompt: "Send random reel / message?",
    thoughtBubbleSub: "overthinking... 😂",
    buttonText: "Now, the real question... →"
  },

  // PAGE 4 — The invitation
  page4: {
    heading: "One little question...",
    lead: "If you're a little curious too, and would like to give this a shot...",
    context: "Maybe we could start by getting to know each other a little better, beyond our usual workdays and group hangouts.",
    theBigQuestion: "So... would you like to go on a Christmas movie date with me? 🎄❤️",
    details: "We could start with a movie, some popcorn, and see where things go.",
    noPressure: "No expectations, no pressure. Just two people getting to know each other.",
    yesButtonText: "I'd love to! ❤️",
    friendshipButtonText: "I'd rather keep it as a friendship 🤍"
  },

  // PAGE 5A — If she says YES
  page5A: {
    heading: "WAIT... REALLY?! 🥹❤️",
    subheading: "Okay, I wasn't expecting to be this happy, but here we are. 😂",
    magicLine: "Looks like Christmas just got a little more magical!",
    planIntro: "Now, let's plan our little movie date together.",
    planDetails: {
      dateLabel: "Date:",
      dateValue: "December 20, 2026 (or any day that suits you!)",
      movieLabel: "Movie:",
      movieValue: "We can pick one together! 🍿",
      placeLabel: "Cinema / Place:",
      placeValue: "Cinema or comfy watch party (whatever you prefer!)"
    },
    // Optional movie picker / ideas
    movieSuggestions: [
      "Harry Potter & the Philosopher's Stone ⚡",
      "The Holiday ❄️",
      "Home Alone 🎄",
      "Klaus 🎁",
      "Your favorite movie!"
    ],
    buttonText: "Sounds perfect! Let's do it ♡",
    notePlaceholder: "Leave a quick note on which movie or day you prefer (optional)..."
  },

  // PAGE 5B — If she chooses FRIENDSHIP
  page5B: {
    heading: "That's completely okay. ❤️",
    paragraphs: [
      "Thank you for being honest with me.",
      "I genuinely appreciate you taking the time to read all of this and share how you feel.",
      "I value the friendship we have, and I hope we can continue sharing our usual conversations, jokes and random moments.",
      "And don't worry, you don't have to feel awkward about any of this.",
      "I'm glad I got to be honest with you."
    ],
    buttonText: "Back to our usual chaos →"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
