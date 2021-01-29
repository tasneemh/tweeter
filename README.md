# Tweeter Project

Tweeter is a simple, single-page AJAX based Twitter clone.

## Screenshots
!["Screenshot of tweet compose box"](https://github.com/tasneemh/tweeter/blob/master/images/desktop-img.png?raw=true)
!["Screenshot of tweets"](https://github.com/tasneemh/tweeter/blob/master/images/tweets-img.png?raw=true)
!["Screenshot of tweet compose box on tablet"](https://github.com/tasneemh/tweeter/blob/master/images/tablet-img.png?raw=true)
!["Screenshot of error message1"](https://github.com/tasneemh/tweeter/blob/master/images/errormsg1-img.png?raw=true)
!["Screenshot of error message2"](https://github.com/tasneemh/tweeter/blob/master/images/errormsg2-img.png?raw=true)

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5

# Technology
Mostly a front-end project, with focus on having a good-looking UI.

This app uses HTML, CSS, JS, jQuery and AJAX on the front-end; and Node, Express and MongoDB on the back-end.

# Getting Started
- Install all dependencies (using the npm install command).
- Start the web server using the npm run local command. The app will be served at http://localhost:8080/.
- Go to http://localhost:8080/ in your browser and start tweetering!

# How To Use Tweeter
- Read Tweets
  * Depending on what device you're on, the tweet timeline will either be under your profile picture, or to the right.
  * The tweets will show new to old. Scroll through and enjoy.

- Write Tweets
  * Simply write your thoughts in tweet section and click tweet. You will see it appear on the timeline.

- Responsive Design
  * For devices such as tablets and laptops (768px and above), your profile will appear on the left, and tweets on the right.
  * For smaller devices (below 767px), sections will be stacked on top of each other, profile being on top and tweets on the bottom.

- Features
  * Tweet validation prevents you from sending empty tweets, or those with over 140 characters.
  * Each tweet shows the user's name, handle, and when hovered over, social icons.


