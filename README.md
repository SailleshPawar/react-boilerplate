# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Using This Repo

- `npm install`
- `npm start` will start the application
- `npm run storybook` will start the storybook.

## Building components

Start building in the `src/components` folder with this folder structure

```js
- ComponentName
  - ComponentName.stories.js
  - ComponentName.js
```

Create `src/components/Button` and add `Button.css`, `Button.js` and `Button.stories.js`

__Button.js__ will be:

```js
import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <button className="Button" {...this.props}> {this.props.children} </button>
    );
  }
}
```

__Button.stories.js__ will be:

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () =>
  <Button onClick={() => console.log("clicked!!")}>
    Hello Button
  </Button>
);

```

__Button.css__ is plain CSS, but will automatically be loaded when the component is used.

### Run Storybook

```bash
npm run storybook
```

## Add Button to App.js

```jsx
import React, { Component } from 'react';
import { Button } from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => alert('i was clicked!')} > Click Me Please </Button>
      </div>
    );
  }
}

export default App;
```

### Run the application

```bash
npm start
```

## Adding Sass

Adding Sass involves "ejecting" out of create react app. This process is out of the scope of this demo, but I'll include some links below.

- [Adding Sass support to Create React App](https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc)
- [Adding Sass support to Storybook](https://storybook.js.org/configurations/custom-webpack-config/)


### `VSCode Extensions for React Developers`
1. ES7 React/Redux/GraphQL/React-Native snippets:
   This is a great extension that almost every React developer uses. It allows you to easily generate syntax and code snippets for React, Redux, Graphql, and React Native.
   So if you want to speed up the process of developing React applications, this is a good extension to start with. It has almost 3 million downloads and 5-star reviews.

2. Prettier:
   Without any doubts, Prettier is a very useful VSCode extension. It allows you to format your code in a good-looking and easy-to-read structure. It has almost 13 million downloads and 4-star reviews.

3. Auto Import:
   Auto import is a very good VSCode extension that allows you to automatically complete imports. It basically auto imports your modules and this is great because modules are everywhere in React code.
   The extension has over a million downloads and 4-star reviews.


## Reference for Atomic Design:

https://bradfrost.com/blog/post/atomic-web-design/
