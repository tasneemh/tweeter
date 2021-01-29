# Tweeter Project

Tweeter is a simple, single-page AJAX based Twitter clone.

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
  * Either click 'write a new tweet' on the navigation bar, or (if you scrolled   down) click the orange arrow on the right bottom.
  * This will open the tweet field. Simply write your thoughts and click tweet. You will see it appear on the timeline.

- Responsive Design
  * For desktops and laptops (over 1024px), your profile will appear on the left, and tweets on the right.
  * For smaller devices like mobile, sections will be stacked on top of each other, profile being on top and tweets bottom.

- Features
  * Tweet validation prevents you from sending empty tweets, or those with over 140 characters.
  * Tweeting field toggles on/off as you prefer.
  * Each tweet shows the user's name, handle, and when hovered over, social icons.


