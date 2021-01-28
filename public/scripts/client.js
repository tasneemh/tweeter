/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ]
$(document).ready(function(){
  //hides the error message html element
$('.errorMsg').hide();
//converts date into days ago
const convertDate = function(d){
  const daysSinceTweet = (Date.now() - d) / 86400000;
  return Math.round(daysSinceTweet);
}

 const createTweetElement = function(tweetData){
   const result = `<article class="tweet-article">
                      <header class="tweet-header">
                        <div>
                          <img src=${tweetData.user.avatars} alt="">
                            <p class="name" id="name"></p>
                        </div>
                          <p class="tweet-name" id="tweet-name">@</p>
                      </header>
                      
                    <p class="text" id="text"></p>
                    <footer class="tweet-footer">
                    <label for="day">${convertDate(tweetData.created_at)} days ago</label>
                    <div class="tweet-icons">
                      <i class="fas fa-flag"></i>
                      <i class="fas fa-retweet"></i>
                      <i class="fas fa-heart"></i>
                    </div>
                    </footer>
                    </article>`;
                    //result is a tweet object
                    return result;
 };

 // to add it to the page so we can make sure it's got all the right elements, classes, etc.
 

const renderTweets = function(tweets){
  //tweets is an array of tweet objects
  for (let tweet of tweets){
    // remove any tweets that are already in the container
  //$('#tweets-container').empty();
    //create new tweet element
    const newTweet = createTweetElement(tweet);
    //append each new tweet to the tweets-container
    $('#tweets-container').prepend(newTweet);
    $('#text').text(tweet.content.text);
    $('#name').text(tweet.user.name);
    $('#tweet-name').text(tweet.user.handle);
    $('#tweet-text').val('');
  }
};
const loadTweets =function(){
  $.ajax({
    url: "/tweets",
    method: 'GET',
  }).done((result)=>{
    renderTweets(result);
  }).fail(()=>{
    console.log(`Error`);
  }).always(()=>{
    console.log(`Request is completed`);
  })
};


  //event handler for the form with id tweet-form and submit event
  $('#tweet-form').on('submit', function(event){
    // prevent the default form submission
    event.preventDefault();
    // Read the data from the input text content
    // target the text area in the form
    const searchBox = $(this).children('#tweet-text');
    const tweetEle = searchBox.val();
    //extract the information from the form => serialize
    const formContent = $(this).serialize();
    if (tweetEle.length > 140){
      //shows the error message html element
      //$('.errorMsg').show();
      $('.error-text').text("Please enter only 140 characters");
      $('.errorMsg').slideDown(500);
    } else if (tweetEle === "" || tweetEle === null){
       //shows the error message html element
      //$('.errorMsg').show();
      $('.error-text').text("Please do not submit empty tweet");
      $('.errorMsg').slideDown(500);
    } else {
      //adding the information to the array of tweets objects
      $.ajax({
      url: `/tweets`,
      method: 'POST',
      data: formContent
      }).done(()=>{
      $('.errorMsg').slideUp(0);
      loadTweets();
      }).fail(()=>{
      console.log(`Error`);
      });
    }        
});
loadTweets();
});
