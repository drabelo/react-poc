## React Project for Global Banking

# Architecture

This is a simple react application that uses the ` https://reqres.in/` api to test the POST (creation) and PUT (update) calls. I used React for this project because of it's modularity and vast ecosystem. My architecture design choice was to make everything into a component to reduce code duplication, and allow for easier testing. I used Redux to to hold the state of the application, and the `redux-persist` library to keep the redux store in local storage to mock save it. I made sure to add git prehooks to run lint, testing, and formatting on every commit.


# Trade Offs

If I had more time to work on this project there is a couple of things I would do. 
1. Add validations to the form. Currently setting the input type helps with this but I could go further.
2. Enhance the tests to bring code coverage to 90% +
3. Enhance the UI, in a way thats more logical. I chose the 3 column setup because of time, but would prefer a 3 page app, with distinct pages for the different actions. (creating, viewing, and updating)

# How to run

To run
```npm install``` and then ```npm start```

To test
```npm test```

To build
```npm run build```

To lint check
```npm run lint```

# Link to deployed application
[https://react-gb.herokuapp.com/](https://react-gb.herokuapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).