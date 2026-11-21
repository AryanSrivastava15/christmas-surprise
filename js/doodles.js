/**
 * A Little Christmas Story ❤️ - Doodles SVG Generator
 * Generates crisp, hand-drawn vector doodles with consistent anime-boy style:
 * - Dark slightly messy hair
 * - Cute blush marks and expressive eyes
 * - Cozy knit sweater and Gryffindor-style striped winter scarf (burgundy & gold)
 * - Hand-drawn ink notebook doodle aesthetics with subtle warmth
 */

const Doodles = {
  // Common definitions (gradients, filters for ink look)
  defs: `
    <defs>
      <linearGradient id="doodle-scarf" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#7a1526" />
        <stop offset="35%" stop-color="#7a1526" />
        <stop offset="35%" stop-color="#d4a843" />
        <stop offset="65%" stop-color="#d4a843" />
        <stop offset="65%" stop-color="#7a1526" />
        <stop offset="100%" stop-color="#7a1526" />
      </linearGradient>
      <linearGradient id="doodle-sweater" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4a3b32" />
        <stop offset="100%" stop-color="#2c221d" />
      </linearGradient>
      <filter id="ink-sketch" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  `,

  // 1. Page 1: Boy reading / holding an oversized magical book with Hogwarts crest
  boyReadingBook() {
    return `
    <svg viewBox="0 0 280 200" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy reading behind a book">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Stack of books beneath -->
        <path d="M 50 175 L 230 175 L 225 190 L 45 190 Z" fill="#2d4a3e" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 45 190 L 225 190" stroke="#f4ecd8" stroke-width="2" stroke-dasharray="3,3" />
        <path d="M 60 160 L 220 160 L 215 175 L 55 175 Z" fill="#842838" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Scarf behind / around neck -->
        <path d="M 110 110 Q 140 120 170 110 Q 165 130 140 132 Q 115 130 110 110 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 155 125 L 165 155 L 148 158 L 142 128 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />

        <!-- Face / Head -->
        <ellipse cx="140" cy="85" rx="36" ry="34" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Cute Ears -->
        <circle cx="102" cy="88" r="7" fill="#faeedd" stroke="#1d1612" stroke-width="2.2" />
        <circle cx="178" cy="88" r="7" fill="#faeedd" stroke="#1d1612" stroke-width="2.2" />

        <!-- Blush Marks -->
        <ellipse cx="118" cy="94" rx="7" ry="4" fill="#e88989" opacity="0.65" />
        <ellipse cx="162" cy="94" rx="7" ry="4" fill="#e88989" opacity="0.65" />

        <!-- Eyes: expressive, slightly shy look -->
        <ellipse cx="124" cy="84" rx="4" ry="5.5" fill="#1d1612" />
        <ellipse cx="156" cy="84" rx="4" ry="5.5" fill="#1d1612" />
        <circle cx="123" cy="82" r="1.5" fill="#ffffff" />
        <circle cx="155" cy="82" r="1.5" fill="#ffffff" />
        
        <!-- Eyebrows: soft, slightly nervous/earnest -->
        <path d="M 116 75 Q 124 73 131 76" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 149 76 Q 156 73 164 75" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />
        
        <!-- Gentle shy mouth -->
        <path d="M 136 96 Q 140 99 144 96" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Dark Messy Hair -->
        <path d="M 104 80 Q 98 52 125 45 Q 138 38 152 44 Q 178 46 176 75 Q 183 62 170 50 Q 155 35 130 38 Q 110 42 104 65 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <!-- Front hair tufts/bangs -->
        <path d="M 106 72 Q 116 70 120 78 Q 126 68 138 72 Q 146 66 156 74 Q 164 68 174 74 Q 168 84 165 80" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 130 40 Q 134 30 138 38" stroke="#201a18" stroke-width="2.5" fill="none" />

        <!-- Hands holding the big book -->
        <!-- Big Open Book in front -->
        <path d="M 68 115 Q 138 122 140 128 L 140 180 Q 138 174 65 168 Z" fill="#7a1526" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 212 115 Q 142 122 140 128 L 140 180 Q 142 174 215 168 Z" fill="#7a1526" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Book Pages -->
        <path d="M 72 118 Q 138 124 139 128 L 139 176 Q 136 172 70 166 Z" fill="#fcf6e8" stroke="#1d1612" stroke-width="1.5" />
        <path d="M 208 118 Q 142 124 141 128 L 141 176 Q 144 172 210 166 Z" fill="#fcf6e8" stroke="#1d1612" stroke-width="1.5" />
        
        <!-- Hogwarts 'H' Crest on cover / bookmark -->
        <path d="M 132 135 L 148 135 L 148 165 L 140 158 L 132 165 Z" fill="#d4a843" stroke="#876228" stroke-width="1.2" />
        <text x="140" y="152" font-family="'Cinzel Decorative', serif" font-size="10" font-weight="bold" fill="#7a1526" text-anchor="middle">H</text>

        <!-- Cute thumbs holding the edges -->
        <ellipse cx="78" cy="138" rx="6" ry="8" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <ellipse cx="202" cy="138" rx="6" ry="8" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Floating sparkles -->
        <path d="M 65 80 L 68 88 L 76 91 L 68 94 L 65 102 L 62 94 L 54 91 L 62 88 Z" fill="#d4a843" />
        <path d="M 215 75 L 217 80 L 222 82 L 217 84 L 215 89 L 213 84 L 208 82 L 213 80 Z" fill="#d4a843" />
      </g>
    </svg>`;
  },

  // 2. Page 2: Boy leaning on desk/books, blushing warmly, holding a little heart
  boyConfession() {
    return `
    <svg viewBox="0 0 260 190" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy blushing with heart">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Stack of books on the left -->
        <rect x="25" y="145" width="70" height="15" rx="3" fill="#2d4a3e" stroke="#1d1612" stroke-width="2" />
        <rect x="28" y="130" width="65" height="15" rx="3" fill="#842838" stroke="#1d1612" stroke-width="2" />
        <rect x="32" y="116" width="58" height="14" rx="3" fill="#d4a843" stroke="#1d1612" stroke-width="2" />

        <!-- Warm cocoa mug with steam on the right -->
        <rect x="185" y="132" width="32" height="28" rx="5" fill="#7a1526" stroke="#1d1612" stroke-width="2" />
        <path d="M 217 138 Q 226 145 217 152" stroke="#1d1612" stroke-width="2" fill="none" />
        <!-- Marshmallows -->
        <circle cx="195" cy="131" r="4" fill="#ffffff" stroke="#1d1612" stroke-width="1.2" />
        <circle cx="205" cy="132" r="4.5" fill="#ffffff" stroke="#1d1612" stroke-width="1.2" />
        <path d="M 198 122 Q 196 114 200 108" stroke="#d4a843" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 206 120 Q 208 112 205 106" stroke="#d4a843" stroke-width="1.5" fill="none" stroke-linecap="round" />

        <!-- Sweater Body -->
        <path d="M 95 130 Q 130 120 165 130 L 175 168 L 85 168 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Scarf around neck -->
        <path d="M 100 105 Q 130 115 160 105 Q 155 125 130 126 Q 105 125 100 105 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 112 120 L 105 152 L 122 154 L 126 122 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.2" />

        <!-- Arms resting forward, holding a red floating heart -->
        <path d="M 90 135 Q 110 148 125 142" stroke="#1d1612" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 170 135 Q 150 148 135 142" stroke="#1d1612" stroke-width="3" fill="none" stroke-linecap="round" />
        
        <!-- Cute Hands -->
        <circle cx="124" cy="142" r="6" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="136" cy="142" r="6" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Head / Face -->
        <ellipse cx="130" cy="75" rx="34" ry="33" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        <circle cx="94" cy="78" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="166" cy="78" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Big blush cheeks -->
        <ellipse cx="110" cy="85" rx="8" ry="5" fill="#f09090" opacity="0.75" />
        <ellipse cx="150" cy="85" rx="8" ry="5" fill="#f09090" opacity="0.75" />

        <!-- Happy shy eyes (curved arcs ^_^) -->
        <path d="M 108 74 Q 116 68 122 74" stroke="#1d1612" stroke-width="2.8" fill="none" stroke-linecap="round" />
        <path d="M 138 74 Q 144 68 152 74" stroke="#1d1612" stroke-width="2.8" fill="none" stroke-linecap="round" />

        <!-- Cute smiling mouth with a tiny tongue / tooth -->
        <path d="M 124 86 Q 130 92 136 86" stroke="#1d1612" stroke-width="2.2" fill="none" stroke-linecap="round" />

        <!-- Messy Hair -->
        <path d="M 98 68 Q 92 42 118 36 Q 130 30 144 36 Q 168 38 164 68 Q 170 54 158 42 Q 144 28 122 30 Q 102 36 98 56 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 98 62 Q 108 60 112 68 Q 118 58 128 62 Q 136 56 146 64 Q 154 58 162 64 Q 156 74 154 70" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        
        <!-- Glowing Floating Red Heart -->
        <path d="M 190 60 C 190 50, 175 48, 175 62 C 175 74, 190 84, 190 84 C 190 84, 205 74, 205 62 C 205 48, 190 50, 190 60 Z" fill="#d93848" stroke="#7a1526" stroke-width="1.8" />
        <!-- Sparkle next to heart -->
        <path d="M 214 48 L 216 53 L 221 55 L 216 57 L 214 62 L 212 57 L 207 55 L 212 53 Z" fill="#d4a843" />
      </g>
    </svg>`;
  },

  // 3. Page 3: Boy holding phone, overthinking with thought bubble of sending a reel/message
  boyOverthinkingPhone() {
    return `
    <svg viewBox="0 0 280 200" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy overthinking while looking at phone">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Thought Bubble above left -->
        <path d="M 60 48 Q 50 35 68 28 Q 85 20 105 26 Q 120 18 132 30 Q 138 42 128 52 Q 135 64 118 68 Q 102 74 88 68 Q 72 74 62 64 Q 50 58 60 48 Z" fill="#ffffff" stroke="#1d1612" stroke-width="2" />
        <circle cx="120" cy="80" r="4" fill="#ffffff" stroke="#1d1612" stroke-width="1.8" />
        <circle cx="126" cy="90" r="2.5" fill="#ffffff" stroke="#1d1612" stroke-width="1.5" />
        
        <!-- Content inside thought bubble: Mini Reel / Video card + "send?" -->
        <rect x="74" y="32" width="24" height="28" rx="3" fill="#f5eedc" stroke="#1d1612" stroke-width="1.5" />
        <polygon points="82,41 91,46 82,51" fill="#7a1526" />
        <path d="M 80 36 L 92 36" stroke="#d4a843" stroke-width="1.5" />
        <text x="104" y="44" font-family="'Outfit', sans-serif" font-size="8" font-weight="bold" fill="#1d1612">Send?</text>
        <text x="103" y="54" font-family="'Outfit', sans-serif" font-size="7" fill="#842838">wait... no 😅</text>

        <!-- Spiral overthinking clouds/doodles near right temple -->
        <path d="M 195 50 Q 205 45 208 55 Q 212 65 202 70" stroke="#7a1526" stroke-width="1.8" fill="none" />
        <text x="212" y="60" font-family="'Outfit', sans-serif" font-size="12" fill="#7a1526">?</text>

        <!-- Body & Sweater -->
        <path d="M 120 145 Q 155 138 190 145 L 200 185 L 110 185 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        <!-- Scarf -->
        <path d="M 125 125 Q 155 135 185 125 Q 180 142 155 144 Q 130 142 125 125 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.2" />

        <!-- Head / Face (turned slightly left towards phone) -->
        <ellipse cx="155" cy="95" rx="33" ry="32" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        <circle cx="120" cy="98" r="6" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="188" cy="98" r="6" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Blush marks -->
        <ellipse cx="138" cy="104" rx="7" ry="4" fill="#f09090" opacity="0.7" />
        <ellipse cx="172" cy="104" rx="7" ry="4" fill="#f09090" opacity="0.7" />

        <!-- Eyes: nervous, looking at phone -->
        <ellipse cx="142" cy="94" rx="3.5" ry="5" fill="#1d1612" />
        <ellipse cx="166" cy="94" rx="3.5" ry="5" fill="#1d1612" />
        <circle cx="140" cy="92" r="1.2" fill="#ffffff" />
        <circle cx="164" cy="92" r="1.2" fill="#ffffff" />

        <!-- Nervous wavy mouth -->
        <path d="M 146 108 Q 150 105 154 109 Q 158 113 162 108" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Eyebrows: slightly tilted worried -->
        <path d="M 136 86 Q 144 88 149 84" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 162 84 Q 168 88 174 86" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Messy Hair -->
        <path d="M 124 88 Q 118 64 142 58 Q 154 52 168 58 Q 192 60 188 88 Q 194 74 182 62 Q 168 48 146 50 Q 126 56 124 76 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 124 82 Q 134 80 138 88 Q 144 78 154 82 Q 162 76 172 84" fill="#201a18" stroke="#1d1612" stroke-width="2" />

        <!-- Hands holding Smartphone -->
        <!-- Smartphone -->
        <g transform="rotate(-10 115 155)">
          <rect x="90" y="130" width="36" height="56" rx="6" fill="#1d1612" stroke="#d4a843" stroke-width="1.8" />
          <rect x="93" y="135" width="30" height="46" rx="3" fill="#ffffff" />
          <!-- Phone screen details -->
          <circle cx="108" cy="142" r="4" fill="#7a1526" />
          <rect x="97" y="152" width="22" height="4" rx="2" fill="#e0d6c5" />
          <rect x="97" y="159" width="16" height="4" rx="2" fill="#7a1526" opacity="0.7" />
          <!-- Thumbs holding the phone -->
          <ellipse cx="88" cy="155" rx="5" ry="7" fill="#faeedd" stroke="#1d1612" stroke-width="1.8" />
          <ellipse cx="128" cy="155" rx="5" ry="7" fill="#faeedd" stroke="#1d1612" stroke-width="1.8" />
        </g>

        <!-- Sweat drop (cute anime overthinking trope) -->
        <path d="M 184 80 Q 188 83 186 86 Q 184 89 181 86 Q 180 83 184 80 Z" fill="#70b0e0" />
      </g>
    </svg>`;
  },

  // 4. Page 4: Boy holding a cinema movie ticket & popcorn bucket
  boyInvitationTicket() {
    return `
    <svg viewBox="0 0 280 200" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy presenting movie ticket and popcorn">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Boy in warm winter sweater -->
        <path d="M 100 135 Q 140 125 180 135 L 195 185 L 85 185 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Scarf around neck -->
        <path d="M 105 110 Q 140 122 175 110 Q 170 130 140 132 Q 110 130 105 110 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 148 126 L 158 160 L 142 163 L 136 128 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.2" />

        <!-- Head / Face -->
        <ellipse cx="140" cy="80" rx="35" ry="34" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        <circle cx="103" cy="82" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="177" cy="82" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Rosy Blushing Cheeks -->
        <ellipse cx="118" cy="90" rx="8" ry="5" fill="#f09090" opacity="0.75" />
        <ellipse cx="162" cy="90" rx="8" ry="5" fill="#f09090" opacity="0.75" />

        <!-- Hopeful Sparkly Eyes -->
        <ellipse cx="125" cy="78" rx="4.5" ry="6" fill="#1d1612" />
        <ellipse cx="155" cy="78" rx="4.5" ry="6" fill="#1d1612" />
        <circle cx="123" cy="76" r="1.8" fill="#ffffff" />
        <circle cx="153" cy="76" r="1.8" fill="#ffffff" />
        <circle cx="127" cy="81" r="0.8" fill="#ffffff" />
        <circle cx="157" cy="81" r="0.8" fill="#ffffff" />

        <!-- Soft shy, warm smile -->
        <path d="M 132 92 Q 140 98 148 92" stroke="#1d1612" stroke-width="2.2" fill="none" stroke-linecap="round" />

        <!-- Eyebrows: soft earnest -->
        <path d="M 118 68 Q 126 66 132 70" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 148 70 Q 154 66 162 68" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Messy Hair with Christmas Holly leaf & berry -->
        <path d="M 104 74 Q 98 48 124 42 Q 138 34 152 42 Q 178 44 174 74 Q 182 60 168 48 Q 154 32 128 34 Q 108 40 104 62 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 104 68 Q 116 66 120 74 Q 126 64 138 68 Q 146 62 156 70 Q 164 64 172 70" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <!-- Holly berry in hair -->
        <circle cx="165" cy="46" r="3.5" fill="#d93848" />
        <circle cx="170" cy="48" r="3" fill="#d93848" />
        <path d="M 172 44 Q 178 40 176 46 Q 178 50 172 47 Z" fill="#2d4a3e" />

        <!-- Left Arm holding Popcorn Bucket -->
        <g transform="translate(48, 115)">
          <!-- Popcorn Bucket -->
          <polygon points="12,28 38,28 33,65 17,65" fill="#fcf6e8" stroke="#1d1612" stroke-width="2" />
          <!-- Red stripes on bucket -->
          <polygon points="18,28 22,28 21,65 17,65" fill="#7a1526" />
          <polygon points="28,28 32,28 29,65 26,65" fill="#7a1526" />
          <!-- Fluffy popcorn kernels -->
          <circle cx="18" cy="24" r="5" fill="#ffd770" stroke="#1d1612" stroke-width="1.2" />
          <circle cx="26" cy="22" r="6" fill="#fff8e7" stroke="#1d1612" stroke-width="1.2" />
          <circle cx="33" cy="25" r="4.5" fill="#ffd770" stroke="#1d1612" stroke-width="1.2" />
          <circle cx="23" cy="18" r="5" fill="#fff8e7" stroke="#1d1612" stroke-width="1.2" />
          <!-- Hand holding bucket -->
          <ellipse cx="38" cy="45" rx="6" ry="7" fill="#faeedd" stroke="#1d1612" stroke-width="1.8" />
        </g>

        <!-- Right Hand presenting the Movie Ticket -->
        <g transform="translate(165, 115) rotate(-8)">
          <!-- Vintage Cinema Ticket -->
          <rect x="10" y="10" width="60" height="32" rx="4" fill="#d4a843" stroke="#876228" stroke-width="2" />
          <!-- Ticket notches on sides -->
          <circle cx="10" cy="26" r="4" fill="#0d1117" />
          <circle cx="70" cy="26" r="4" fill="#0d1117" />
          <line x1="28" y1="12" x2="28" y2="40" stroke="#876228" stroke-width="1.5" stroke-dasharray="2,2" />
          <!-- Ticket text / icons -->
          <text x="18" y="29" font-family="'Cinzel Decorative', serif" font-size="9" font-weight="bold" fill="#7a1526">ADMIT</text>
          <text x="46" y="24" font-family="'Outfit', sans-serif" font-size="7" font-weight="bold" fill="#1d1612">MOVIE DATE</text>
          <text x="45" y="33" font-family="'Outfit', sans-serif" font-size="6" fill="#7a1526">FOR TWO ♡</text>
          <!-- Hand holding ticket -->
          <ellipse cx="14" cy="24" rx="6" ry="7" fill="#faeedd" stroke="#1d1612" stroke-width="1.8" />
        </g>

        <!-- Sleeping cute cat / owl at bottom corner -->
        <g transform="translate(195, 160)">
          <!-- Cozy sleeping white cat with closed eyes -->
          <ellipse cx="20" cy="14" rx="16" ry="10" fill="#ffffff" stroke="#1d1612" stroke-width="1.8" />
          <polygon points="8,8 12,2 16,7" fill="#ffffff" stroke="#1d1612" stroke-width="1.5" />
          <polygon points="22,7 26,2 30,8" fill="#ffffff" stroke="#1d1612" stroke-width="1.5" />
          <path d="M 12 14 Q 15 16 18 14" stroke="#1d1612" stroke-width="1.2" fill="none" />
          <path d="M 22 14 Q 25 16 28 14" stroke="#1d1612" stroke-width="1.2" fill="none" />
        </g>
      </g>
    </svg>`;
  },

  // 5. Page 5A: Boy celebrating excitedly (arms raised, sparkles, confetti)
  boyCelebratingYes() {
    return `
    <svg viewBox="0 0 280 200" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy celebrating excitedly">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Confetti & Magic Stars in Air -->
        <path d="M 45 40 L 48 45 L 53 47 L 48 49 L 45 54 L 43 49 L 38 47 L 43 45 Z" fill="#d4a843" />
        <path d="M 235 45 L 237 50 L 242 52 L 237 54 L 235 59 L 233 54 L 228 52 L 233 50 Z" fill="#d4a843" />
        <circle cx="70" cy="28" r="3.5" fill="#d93848" />
        <circle cx="210" cy="30" r="3.5" fill="#2d4a3e" />
        <rect x="60" y="55" width="6" height="6" transform="rotate(25 60 55)" fill="#d4a843" />
        <rect x="220" y="65" width="6" height="6" transform="rotate(40 220 65)" fill="#d93848" />

        <!-- Raised Arms celebrating in sweater -->
        <path d="M 110 135 L 75 90 L 88 82 L 120 125 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 170 135 L 205 90 L 192 82 L 160 125 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Hands in fists / cheering palms -->
        <circle cx="78" cy="85" r="7" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="202" cy="85" r="7" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Sweater Body -->
        <path d="M 105 130 Q 140 120 175 130 L 185 180 L 95 180 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Scarf ends fluttering joyfully -->
        <path d="M 105 105 Q 140 118 175 105 Q 170 125 140 126 Q 110 125 105 105 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 155 118 Q 185 130 195 150 L 182 154 Q 172 135 145 125 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2" />

        <!-- Head / Face -->
        <ellipse cx="140" cy="75" rx="35" ry="34" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        <circle cx="102" cy="78" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="178" cy="78" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Big Radiant Blush -->
        <ellipse cx="118" cy="84" rx="9" ry="6" fill="#f09090" opacity="0.8" />
        <ellipse cx="162" cy="84" rx="9" ry="6" fill="#f09090" opacity="0.8" />

        <!-- Overjoyed closed smiling eyes (happy arcs >_<) -->
        <path d="M 116 74 L 126 70 L 116 66" stroke="#1d1612" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M 164 74 L 154 70 L 164 66" stroke="#1d1612" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Wide happy open mouth with cute tongue :D -->
        <path d="M 126 86 Q 140 102 154 86 Z" fill="#d93848" stroke="#1d1612" stroke-width="2.2" />
        <path d="M 132 93 Q 140 98 148 93" fill="#ff9999" />

        <!-- Eyebrows raised high with excitement -->
        <path d="M 116 60 Q 124 55 130 60" stroke="#1d1612" stroke-width="2.2" fill="none" stroke-linecap="round" />
        <path d="M 150 60 Q 156 55 164 60" stroke="#1d1612" stroke-width="2.2" fill="none" stroke-linecap="round" />

        <!-- Messy Hair tossing with joy -->
        <path d="M 104 68 Q 96 42 122 36 Q 138 28 152 36 Q 178 38 174 68 Q 182 54 168 42 Q 154 26 128 28 Q 108 34 104 56 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 104 62 Q 116 60 120 68 Q 126 58 138 62 Q 146 56 156 64 Q 164 58 172 64" fill="#201a18" stroke="#1d1612" stroke-width="2" />

        <!-- Popcorn & Cocoa cup celebrating on the desk below -->
        <g transform="translate(195, 140)">
          <!-- Mini Hot Chocolate cup -->
          <rect x="0" y="8" width="22" height="20" rx="3" fill="#7a1526" stroke="#1d1612" stroke-width="1.5" />
          <circle cx="7" cy="6" r="3" fill="#fff" stroke="#1d1612" stroke-width="1" />
          <circle cx="15" cy="6" r="3" fill="#fff" stroke="#1d1612" stroke-width="1" />
        </g>
        <g transform="translate(62, 138)">
          <!-- Mini Popcorn bucket -->
          <polygon points="5,8 20,8 17,28 8,28" fill="#fcf6e8" stroke="#1d1612" stroke-width="1.5" />
          <polygon points="9,8 12,8 11,28 8,28" fill="#7a1526" />
          <circle cx="12" cy="5" r="4" fill="#ffd770" stroke="#1d1612" stroke-width="1" />
        </g>
      </g>
    </svg>`;
  },

  // 6. Page 5B: Boy smiling gently and warmly (peaceful, sincere, cat purring beside him)
  boyPeacefulFriendship() {
    return `
    <svg viewBox="0 0 280 200" class="doodle-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cute doodle of boy smiling gently and warmly">
      ${this.defs}
      <g filter="url(#ink-sketch)">
        <!-- Warm mug on left with soft steam -->
        <g transform="translate(48, 130)">
          <rect x="0" y="10" width="28" height="26" rx="4" fill="#7a1526" stroke="#1d1612" stroke-width="2" />
          <path d="M 28 16 Q 36 22 28 30" stroke="#1d1612" stroke-width="1.8" fill="none" />
          <path d="M 10 4 Q 8 -2 12 -6" stroke="#d4a843" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 18 2 Q 20 -4 16 -8" stroke="#d4a843" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </g>

        <!-- Cozy cat curled up on right sleeping happily -->
        <g transform="translate(192, 142)">
          <ellipse cx="20" cy="14" rx="18" ry="12" fill="#fbf7ef" stroke="#1d1612" stroke-width="2" />
          <polygon points="8,7 12,1 17,6" fill="#fbf7ef" stroke="#1d1612" stroke-width="1.5" />
          <polygon points="23,6 28,1 32,7" fill="#fbf7ef" stroke="#1d1612" stroke-width="1.5" />
          <path d="M 12 14 Q 15 16 18 14" stroke="#1d1612" stroke-width="1.2" fill="none" />
          <path d="M 22 14 Q 25 16 28 14" stroke="#1d1612" stroke-width="1.2" fill="none" />
          <text x="35" y="10" font-family="'Outfit', sans-serif" font-size="8" fill="#d4a843">zZ</text>
        </g>

        <!-- Sweater Body -->
        <path d="M 100 135 Q 140 125 180 135 L 195 185 L 85 185 Z" fill="url(#doodle-sweater)" stroke="#1d1612" stroke-width="2.5" />
        
        <!-- Scarf around neck -->
        <path d="M 105 110 Q 140 122 175 110 Q 170 130 140 132 Q 110 130 105 110 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.5" />
        <path d="M 118 126 L 110 160 L 128 163 L 132 128 Z" fill="url(#doodle-scarf)" stroke="#1d1612" stroke-width="2.2" />

        <!-- Gentle hands folded peacefully in front -->
        <path d="M 105 145 Q 130 160 140 152" stroke="#1d1612" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <path d="M 175 145 Q 150 160 140 152" stroke="#1d1612" stroke-width="2.5" fill="none" stroke-linecap="round" />
        <ellipse cx="140" cy="153" rx="8" ry="6" fill="#faeedd" stroke="#1d1612" stroke-width="1.8" />

        <!-- Head / Face -->
        <ellipse cx="140" cy="78" rx="35" ry="34" fill="#faeedd" stroke="#1d1612" stroke-width="2.5" />
        <circle cx="103" cy="80" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />
        <circle cx="177" cy="80" r="6.5" fill="#faeedd" stroke="#1d1612" stroke-width="2" />

        <!-- Soft gentle blush -->
        <ellipse cx="118" cy="87" rx="7" ry="4.5" fill="#f09090" opacity="0.65" />
        <ellipse cx="162" cy="87" rx="7" ry="4.5" fill="#f09090" opacity="0.65" />

        <!-- Kind, relaxed, peaceful eyes (^ _ ^) -->
        <path d="M 118 76 Q 124 70 130 76" stroke="#1d1612" stroke-width="2.6" fill="none" stroke-linecap="round" />
        <path d="M 150 76 Q 156 70 162 76" stroke="#1d1612" stroke-width="2.6" fill="none" stroke-linecap="round" />

        <!-- Warm, kind, grateful smile -->
        <path d="M 132 88 Q 140 94 148 88" stroke="#1d1612" stroke-width="2.2" fill="none" stroke-linecap="round" />

        <!-- Gentle eyebrows -->
        <path d="M 118 68 Q 125 65 131 69" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />
        <path d="M 149 69 Q 155 65 162 68" stroke="#1d1612" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Messy Hair -->
        <path d="M 104 72 Q 98 46 124 40 Q 138 32 152 40 Q 178 42 174 72 Q 182 58 168 46 Q 154 30 128 32 Q 108 38 104 60 Z" fill="#201a18" stroke="#1d1612" stroke-width="2" />
        <path d="M 104 66 Q 116 64 120 72 Q 126 62 138 66 Q 146 60 156 68 Q 164 62 172 68" fill="#201a18" stroke="#1d1612" stroke-width="2" />

        <!-- Small floating gold heart -->
        <path d="M 140 22 C 140 16, 130 14, 130 23 C 130 30, 140 36, 140 36 C 140 36, 150 30, 150 23 C 150 14, 140 16, 140 22 Z" fill="#d4a843" opacity="0.85" />
      </g>
    </svg>`;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Doodles;
}
