let jsonArray = [
    
    {"quote": "Not all those who wander are lost.",
    "author": "J. R. R. Tolkien"},

    {"quote": "To defy the laws of tradition is a crusade only of the brave.",
    "author": "Les Claypool"},

    {"quote": "There is no life i know of that compares with true imagination. There you'll be free if you truly wish to be.",
    "author": "Roald Dahl"},

    {"quote": "An opinion just feels like a distraction.",
    "author": "Flea"},
    
    {"quote": "People shouldn't have trade secrets. And if they do, shame on them.",
    "author": "Carl Thompson"},
    
    {"quote": "But we'll never survive! Nonsense. You're just saying that because no one ever has before.",
    "author": "The Princess Bride"},
    
    {"quote": "If you measure yourself against other people, you're always gonna be unhappy.",
    "author": "NorthernLion"},
    
    {"quote": "Be not afraid of them that kill the body, and after that have no more that they can do.",
    "author": "Jesus Christ"},
    
    {"quote": "A brave man's hand can speak for itself; it does not even need a woman's love to hear its music.",
    "author": "Bram Stoker"},
    
    {"quote": "Wow that was way easier than I though it'd be; although, i guess so is everything.",
    "author": "Archer"},
    
    {"quote": "The quickest way home is the longest way.",
    "author": "Professor Van Helsing"},
    
    {"quote": "Earthbound but aspiring... Not enough wingspread but plenty of intention.",
    "author": "John Steinbeck"},
    
    {"quote": "People respond to characters that have a pure agenda. And it's not at the expense of anybody.",
    "author": "Stuart Cornfeld "},
    
    {"quote": "I always try to get better. But as long as I'm playing, I don't think ill ever reach the point where I'm satisfied.",
    "author": "Jimi Hendrix"},
    
    {"quote": "The minute you give someone else control over your happiness, you're fucked.",
    "author": "Chelsea O'Bannon "},
    
    {"quote": "Humans were meant to work and sweat to earn their living.",
    "author": "Jet (Cowboy Bebop) "},
    
    {"quote": "I asked myself: 'What do they want?' And then one night it came to me. They want to be free from concern.",
    "author": "Jim Carrey "},
    
    {"quote": "You can't win against fools.",
    "author": "Princess Mononoke "},
    
    {"quote": "Great minds think alike, but small minds rarely differ",
    "author": ""},
    
    {"quote": "Put out fear and they'll feel fear. Put out love and they'll feel love. It's a chain reaction.",
    "author": "Craig Minowa "},
    
    {"quote": "Live life calmly.",
    "author": ""},
    
    {"quote": "You have to earn every audience.",
    "author": "Neil Peart "},
    
    {"quote": "I don't think a man can hurt another, not in any important way. Neither hurt him nor help him. I have really nothing to forgive you.",
    "author": "Howard Roark"},
    
    {"quote": "The more highly developed a man is on the intellectual and moral side, the more independent he is, and the more pleasure life gives him.",
    "author": "Anton Chekhov "},
    
    {"quote": "Oftentimes, the moment you've been dreading the most, actually ends up being the most blissful moment once you're enduring it.",
    "author": "Will Smith "},
    
    {"quote": "A stupid question is better than a stupid mistake.",
    "author": ""},
    
    {"quote": "If I have seen further than others, it is by standing on the shoulders of giants.",
    "author": "Isaac Newton"},
    
    {"quote": "A glimpse at the truth is good for people. Even if most don't accept what they see.",
    "author": "Celeste Crazy Old Lady "},
    
    {"quote": "Genius is eternal patience.",
    "author": "Michelangelo "},
    
    {"quote": "Thinking is the hardest work there is, which is probably the reason so few engage in it.",
    "author": "Henry Ford "},
    
    {"quote": "It is not the strongest species that survive, nor the most intelligent, but the most responsive to change.",
    "author": "Charles Darwin "},
    
    {"quote": "The whole idea of motivation is a trap. Forget motivation. Just do it.",
    "author": "John Maxwell "},
    
    {"quote": "God sells us all things at the price of labor.",
    "author": "Leonardo Davinci "},
    
    {"quote": "You will know the good from the bad when you are calm at peace.",
    "author": "Yoda "},
    
    {"quote": "If we will be quiet and ready enough, we shall find compensation in every disappointment.",
    "author": "Henry David Thoreau"},
    
    {"quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    "author": "Andre Gide"},
    
    {"quote": "The one who cares less, wins.",
    "author": "Albert Einstein"},
    
    {"quote": "The moment one gives close attention to anything,  it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    "author": "Henry Miller"},
    
    {"quote": "No garden is without its weeds.",
    "author": "Thomas Fuller"},
    
    {"quote": "Act on your principles, not your moods.",
    "author": ""},
    
    {"quote": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    "author": "Epictetus"},
    
    {"quote": "Speak low, if you speak love.",
    "author": "William Shakespeare"},
    
    {"quote": "There is nothing in a caterpillar that tells you it is going to be a butterfly.",
    "author": "Buckminster Fuller"},
    
    {"quote": "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    "author": "Elbert Hubbard"},
    
    {"quote": "Do not mistake activity for achievement.",
    "author": "Mabel Newcomber"},
    
    {"quote": "We do not stop playing because we grow old; we grow old because we stop playing.",
    "author": "George Bernard Shaw"},
    
    {"quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    "author": "Henry Wadsworth Longfellow"},
    
    {"quote": "If you light a lamp for somebody, it will also brighten your path.",
    "author": "Buddha"},
    
    {"quote": "As we are liberated from our own fear, our presence automatically liberates others.",
    "author": "Nelson Mandela"}
    
];

let randomIndex = Math.floor(Math.random() * 49);

document.getElementById('quote').innerHTML = jsonArray[randomIndex].quote;
document.getElementById('author').innerHTML = jsonArray[randomIndex].author;

