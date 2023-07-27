// Array of quotes

var quotes = [
{
    quoteText: "Believe you can and you're halfway there.",
    quoteAuthor: "Theodore Roosevelt"
},
{
    quoteText: "The only way to do great work is to love what you do.",
    quoteAuthor: "Steve Jobs"
},
{
    quoteText: "Don't watch the clock; do what it does. Keep going.",
    quoteAuthor: "Sam Levenson"
},
{
    quoteText: "We may encounter many defeats but we must not be defeated.",
    quoteAuthor: "Maya Angelou"
},
{
    quoteText: "You are never too old to set another goal or to dream a new dream.",
    quoteAuthor: "C.S. Lewis"
},
{
    quoteText: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    quoteAuthor: "Christian D. Larson"
},
{
    quoteText: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    quoteAuthor: "Winston S. Churchill"
},
{
    quoteText: "If you want to live a happy life, tie it to a goal, not to people or things.",
    quoteAuthor: "Albert Einstein"
},
{
    quoteText: "You miss 100% of the shots you don't take.",
    quoteAuthor: "Wayne Gretzky"
},
{
    quoteText: "The best way to predict the future is to invent it.",
    quoteAuthor: "Alan Kay"
},
{
    quoteText: "It does not matter how slowly you go as long as you do not stop.",
    quoteAuthor: "Confucius"
},
{
    quoteText: "Happiness is not something readymade. It comes from your own actions.",
    quoteAuthor: "Dalai Lama"
},
{
    quoteText: "In three words I can sum up everything I've learned about life: it goes on.",
    quoteAuthor: "Robert Frost"
},
{
    quoteText: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    quoteAuthor: "St. Jerome"
},
{
    quoteText: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    quoteAuthor: "Oprah Winfrey"
},
{
    quoteText: "The only person you are destined to become is the person you decide to be.",
    quoteAuthor: "Ralph Waldo Emerson"
},
{
    quoteText: "I have not failed. I've just found 10,000 ways that won't work.",
    quoteAuthor: "Thomas A. Edison"
},
{
    quoteText: "With the new day comes new strength and new thoughts.",
    quoteAuthor: "Eleanor Roosevelt"
},
{
    quoteText: "The only limit to our realization of tomorrow will be our doubts of today.",
    quoteAuthor: "Franklin D. Roosevelt"
},
{
    quoteText: "You can't build a reputation on what you are going to do.",
    quoteAuthor: "Henry Ford"
},
{
    quoteText: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    quoteAuthor: "Helen Keller"
},
{
    quoteText: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    quoteAuthor: "Brian Tracy"
},
{
    quoteText: "It always seems impossible until it's done.",
    quoteAuthor: "Nelson Mandela"
},
{
    quoteText: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    quoteAuthor: "Nelson Mandela"
},
{
    quoteText: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    quoteAuthor: "Jimmy Dean"
},
{
    quoteText: "If you want to make your dreams come true, the first thing you have to do is wake up.",
    quoteAuthor: "J.M. Power"
},
{
    quoteText: "The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.",
    quoteAuthor: "Kalu Ndukwe Kalu"
},
{
    quoteText:"The only way to do great work is to love what you do.",
    quoteAuthor: "Steve Jobs"
},
{
    quoteText: "The only thing we have to fear is fear itself.",
    quoteAuthor: "Franklin D. Roosevelt"
},
{
    quoteText: "If you don't stand for something, you will fall for anything.",
    quoteAuthor: "Malcolm X"
},
{
    quoteText: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    quoteAuthor: "Maya Angelou"
},
{
    quoteText: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    quoteAuthor: "Roy T. Bennett"
},
{
    quoteText: "The best way to find yourself is to lose yourself in the service of others.",
    quoteAuthor: "Mahatma Gandhi"
},
{
    quoteText: "The only place where success comes before work is in the dictionary.",
    quoteAuthor: "Vidal Sassoon"
},
{
    quoteText: "The only true wisdom is in knowing you know nothing.",
    quoteAuthor: "Socrates"
},
{
    quoteText: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    quoteAuthor: "David Brinkley"
}];

var prevNo = null;
var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var quoteCards= document.querySelectorAll(".quote-card");

// console.log(quoteCards)

function getRandNumber(len) {
    var randNum = null;
    do {
        randNum = Math.floor(Math.random() * len);
    } while (randNum === prevNo);
    prevNo = randNum;
    return randNum;
}


function generateNewQuote(){

    quoteCards.forEach((e)=>{
        e.classList.remove("d-none");
    });

    var randIndex = getRandNumber(quotes.length);

    quoteText.innerHTML =  quotes[randIndex].quoteText;
    quoteAuthor.innerHTML =  quotes[randIndex].quoteAuthor;


}




