## Test Completion

See it live at [http://thanos-blocks-brexit.surge.sh/](http://thanos-blocks-brexit.surge.sh/)

### Scope

My goal was to make something similar to the calculator on macOS with the 4 basic arithmetic operations.

### Tech Stack

- React with the `useReducer` hook.
- The app was bootstrapped with `create-react-app` in order to save time setting up the boilerplate, build and bundling.
- ES6/7
- jest and enzyme for testing.

### With more time I would've liked to

- Add PropTypes + eslint or even TypeScript/Flow
- Make it responsive: maybe have it expand to the full viewport on a mobile
- Make the display font responsive: having its size decrease as to fit all digits in the display
- Have better error handling, like displaying specific errors for division by 0, validation around the max number that can possibly be displayed or limit the decimal places
- Add e2e with Cypress for the critical paths, like a add a test where a user: clicks a digit, then an operator, another digit, another operator; and assert the display shows the expected result.
- Add keyboard event listeners
- Add a feature to continue to sum up values while pressing the equals sign
- Add some visual feedback when pressing an operator
- Add an audit trail to have a historical visual feedback of the operations performed
- Do more exploratory testing in search of potential bugs
- Look at performance and make sure it only triggers rendering when necessary, maybe try `React.memo`
- Add some testing utilities in order to remove duplication, in order to abstract things like the `render` helper function I have at the bottom of every component test file


`Version 627d7be039e0085025a51d47e42bdd970409ec1c`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
