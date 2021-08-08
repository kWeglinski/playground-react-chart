# Notes:
This project was created as a part of recruitment process and it fit's it's technical requirements.
Main foucs of the task was proper application architecture, NOT UI/UX design.

### Structure
It might feel like I went a bit overhead with folder/file structure, there's simple reason
this is future proofing. We all know that once given requirements are not eternal and will change quickly over the course of product development. It's easier and healthier to prepare for it.

### Tests
There are unit tests for all the logic happening in components and around them. 
In perfect world it could use some integration tests between these elements, add a pinch of snapshots and we're in much better shape.

### Fields of improvement 
There's plenty of things we could do to make it work and look better.

* Styles aside it could use nice error handling (fetch)
* It could use better (or custom) charting library. I've started working on custom D3 solution but it's quite time consuming, given the requirements of this task it would be pointless so I've reverted it to some random charting lib.
* For improved styling performance it could use some nice css/sass/less extension or library

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn prettier`

Runs prettier over codebase to make it unified

### `yarn lint`

Lints for errors

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
