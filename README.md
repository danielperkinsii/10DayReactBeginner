# 10 Days of React Challenges (Beginner) from scotch.io
#### [Link](https://scotch.io/courses/10-react-challenges-beginner/display-simple-data-with-jsx?autoplay=true)
#### Just some React.js practice to keep the skills sharp. Hopefully I'll be able to finish this in less than 10 days. The challenge is coded in codesandbox.io but I decided to do a CRA and make a repo to keep those green squares up. 

#### Components: I'm going to use React components for organization and cleanliness. Each challenge will be a different component that is rendered in App.js.

#### CSS: I'm using the CSS found in the codesandbox.io examples (follow link above then scroll to the bottom of any lesson and to find the codesandbox.io links)

### Here we go!

### Day 1
#### Display simple data with jsx

### Day 2
#### Loop over an array of data

### Day 3
#### update data from form input
I went a different route from the tutorial today but used the same general concepts of event listening and updating state. In the tutorial, Chris used React Hooks with a useState function, however, in my UpdateForm component, I assigned state directly and then used setState() to achieve a temporary update.

### Day 4 (Open Sesame!)
#### show an alert based on input
I took the same approach as yesterday by updating state with my form input by using handleChange and handleSubmit functions within my form. And then taking my new state and using if logic to trigger the alert. Open Sesame!

### Day 5 
#### addition calculator
This one was tricky because react wanted to interpret my integers in state as strings. So I had to add in some logic to make sure I parsed the values as integers. This made it to where my calculateTotal function was ADDING instead of concatinating :)

### Day 6
#### Dom Movement with Events
Manipulated div styling by using events to invoke function that change state!

### Day 7
#### Fetch and Display from an API
Made an fetch call to a Game of Thrones API. The call randomized a number between 0 and 2138 (# of characters in the API) and concatenated that to the request URL. After getting the response, I pushed the JSON data and into an array then mapped through the array to display the cached list of Game of Throne Characters.