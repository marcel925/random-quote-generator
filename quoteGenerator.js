var arrayOfQuotes = ["You don’t have to be great to start, but you have to start to be great", "An investment in knowledge always pays the best interest.", "Success is not just the crowning moment, the spiking of the ball in the end zone or the raising of the flag on the summit. It is the whole process of reaching for a goal and, sometimes, it begins with failure.", "Our greatest glory is not in never falling, but in rising every time we fall.", "Great achievement is usually born of great sacrifice, and is never the result of selfishness.", "The Way Get Started Is To Quit Talking And Begin Doing.", "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character", "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.", "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?", "We Generate Fears While We Sit. We Overcome Them By Action.", "Whether You Think You Can Or Think You Can’t, You’re Right.", "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.", "Reading Is To The Mind, As Exercise Is To The Body.", "Life is 10% what happens to you and 90% how you react to it", "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing.", "The secret of getting ahead is getting started.", "What you do today can improve all your tomorrows.", "You can't cross the sea merely by standing and staring at the water", "Setting goals is the first step in turning the invisible into the visible.", "Excellence is not an act, but a habit.", "You will never win if you never begin", "There is only one corner of the universe you can be certain of improving, and that's your own self.", "The key is to keep company with people who uplift you, whose presence calls forth your best.", "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.", "If you don't like how things are, change it! You're not a tree.", "A somebody was once a nobody who wanted to and did.", "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.", "Always desire to learn something useful.", "You must take action now that will move you towards your goals. Develop a sense of urgency in your life.", "If you don't ask, you don't get", "Wherever you are - be all there.", "Wherever you are, be all there", "The best way to cheer yourself up is to try to cheer somebody else up", "Life is 10% what happens to you and 90% how you react to it.", "The best preparation for tomorrow is doing your best today."];

  document.getElementById("button").onclick = function() {randomQuote()};

function randomQuote() {
    var randQuote = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)]
    document.getElementById("showQuoteHere").innerHTML = randQuote;
  
    var str = "Tweet this quote!";
    var linkStart = "http://twitter.com/home?status=";
    var result = str.link(linkStart + randQuote);
    document.getElementById("tweet").innerHTML = result;
    result.setAttribute('target', '_blank');
  
}


