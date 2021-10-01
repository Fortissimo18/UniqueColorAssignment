# Unique Colour Display Coding Challenge
Site URL: https://uniquecolordisplay.web.app/ 

## Additional Installations:
Please refer to the package.json file:
- react-router-dom 5.3.0 : For page routing [Docs](https://reactrouter.com/web/guides/quick-start)
- color-convert 2.0.1 : Convert between RGB and HSL [Docs](https://www.npmjs.com/package/color-convert)
- semantic-ui-css 2.4.1 : Bootstrap styling basic UI components [Docs](https://react.semantic-ui.com/)
- semantic-ui-react 2.0.4 Bootstrap basic UI components <br />

Run npm install without arguments for one-off installation

## My Ideas for This Challenge
### Version 1: Working Skeleton
Getting things to work is always the most important thing.
This is what I created on the first evening after receiving this challenge.
My idea was to ensure the uniqueness of each RGB combination first,
so I used a somewhat brute force way to rank the data points:
RGB (7,7,7) (7,7,15) (7,7,23) ... (255,255,255)

### Version 2: Sorting
When things are organised, they generate aesthetics.
After getting the first draft done, I found that the visual result also follows a pattern, just like the numbers.
Sorting them might get a more pleasing visualisation without glitches.
So I chose the common colour representation RGB HSL as the metrics.
Personally speaking, I was also quite curious about how the results might look.
And I got a rainbow sorting by hue!

### Version 3: Find the Resemblance
When individuals cannot shine by themselves, there're always companions to help!
The visualisation of randomised RGB data points reminded me of an old colour TV losing its signals.
So I added a TV frame to the generated image as its companion.
Reckon it can be a good 404 page!


## My Project Plan
#### The First Evening
- Understand the requirements
- Create a working skeleton
#### Day 1
- Improve the design to be aesthetically pleasing
- Build the add-ons
#### Day 2
- Build the remaining add-ons
- Check browser competibilities
- Check the performance
#### Day 3
- Clean the code
- Deploy


## Framework and Techs
This single-page web app uses React as the framework. Below are the detailed techs used: 
- State management: useContext hook
- Canvas animation: useRef and useEffect Hook
- Bootstrap UI components: Semantic UI 
- Hosting: Firebase
