# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Daniel Phung**

Time spent: **10** hours spent in total

Link to project: [https://glitch.com/edit/#!/daniel-phung-memory-game?path=index.html%3A16%3A8](https://glitch.com/edit/#!/daniel-phung-memory-game?path=index.html%3A16%3A8)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Displays score after losing
* [x] Added an infinite mode
* [x] Playback speed capped at a minimum for infinite mode

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![walkthrough gif](https://media0.giphy.com/media/0WJqYw6XBOmJJMgEQY/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I haven't used html or javascript in a while, so I didn't remember much about the languages' syntax and functions I could use. I had to look up javascript
and html syntax from websites such as (https://www.w3schools.com) and (https://www.geeksforgeeks.org). Since I wanted more specific colors than the given
"blue", "light blue", etc. I used google to get specific colors I wanted converted into hex code so that I could use it in my css.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I have very little experience with html, css, and javascript, and that little experience was years ago, so I had to look up how to use these languages.
While I am used to other languages like java, I didn't remember the syntax of the languages used in this project. I also knew that I wanted to make an
infinite mode. I had some trouble making the playback speed scaling change in a way that felt good. While it was easy to have the speed increase a certain
amount for the mode that had a specific level you had to get to before you win, the infinite mode would keep on going. That meant that I needed to make it
continuously increase in speed at a nice speed. I also had to put a minimum speed, or the speed might get too small. When implementing the speed up for the
first time, I also put it in the wrong place, and was unable to figure out for a long time why my game would speed up so much despite my setting the change
in speed to small numbers. Turns out I had increased the speed after every clue was given, not every round. This meant that as the rounds went by, it would
get increasingly faster, which was not the scaling I wanted.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

In the information presentation, I saw that web development is important in many different fields, especially cs fields. Completing this submission allowed
me to have a closer look at mt browser's developer tools. While I have played around with it before, doing simple things like changing text or link addresses,
I never knew that it could be used as a debug console to log messages. I saw that there were many other tabs and sections in the developer tools window. I want
to know more about those tabs and what they do. I saw words like scope, watch, multiple different breakpoints, threads, global listeners, sources, network,
application, security, etc. It looks like there is so much useful information that the developer tools give us, yet I dont understand what they are when I click
on each of the tabs. A lot of the tabs are empty when I click on them, I'm guessing because my project is simple and probably doesn't used much advanced functions.
I'd want to see what information those tabs give, how that information can be used, and how that can help someone develop a website.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would have tried to make other effects when hints are played or when the player presses the buttons. Some ideas for that are: waves bouncing throughout the
button when clicked, button grows and shrinks (pulses) when clicked, or effects flying out of the button when clicked. These would require me to do more
research. Although I'm not sure how these can be achieved, I think they require either javascript or css code. It might even require both and a bit of html
as well. Another thing that seems not too hard to implement if I had more time is rather than showing an alert that says that the player picked the wrong
button, the button can flash red or some color that indicates the incorrect choice. The game could also play a certain sound. Finally, I wanted to make it
so the player cannot press any buttons while the clue is playing. Currently, you can just press buttons over the clues. The game would be much more fleshed
out and clean if the player wasn't able to do that and had to wait until the clue was finished playing.



## License

    Copyright Daniel Phung

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.