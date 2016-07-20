# HPE POC - Using ReactJS with HP Grommet Frmework
Its a test [React](https://facebook.github.io/react/) project to create some sample pages using [Grommet](http://www.grommet.io/) framework.

## Project Specefication:
- this project cover:
  - How to get started with grommet.
  - How to deal with grommet form and form elements.
  - How to submit the grommet form and get the Form Data in JSON format.
  - How to deal with [React Router](https://github.com/reactjs/react-router)
    - You can find router setup for [404 page](http://localhost:9000/404/) and [register](http://localhost:9000/register/) page.

## Setup this locally:
1) Clone the [Git Repo](https://github.com/jainvabhi/HPE-React-Grommet-POC)
  ```sh
  $ git clone git@github.com:jainvabhi/HPE-React-Grommet-POC.git
  ```

2) Use the Grommet generator to bootstrap your the POC app.
  ```sh
  $ cd HPE-React-Grommet-POC
  ```

3) Install all the node dependencies running
  ```sh
  $ npm install
  ```

4) Start a development server with hot reload enabled.
  ```sh
  $ gulp dev
  ```

5) Open [http://localhost:9000/webpack-dev-server/]

  At this point, you should be able to see the application dashboard running.

## Other way to fresh Grommet Installation
Grommet requires [Node.js](https://nodejs.org/) latest stable version to run.

1) Install NODE JS via Package Manager `Using Homebrew:`
  ```sh
  $ brew install node
  ```
2) Install all dependencies for Grommet
  - Install Gulp globally (make sure to run as an admin)
    ```sh
    $ npm install -g gulp
    ```

  - Install Grommet globally (make sure to run as an admin)
    ```sh
    $ npm install -g grommet
    ```

Detailed instructions are on the [Get Started](http://grommet.io/docs/develop/get-started) page.

## Dependencies:
1) [ReactJS](https://facebook.github.io/react/): Javascript Library for building new user interface.

2) [Babel](https://babeljs.io/) Javascript complier.

3) [ES6](http://es6-features.org/#Constants) New way to write the javascript.

4) [JSX](https://facebook.github.io/jsx/) XML Like syntax to support HTML rendering with React.

5) [Moment.js](http://momentjs.com/docs/#/displaying/format/): Parse, validate, manipulate and display dates and times in Javascript libraries like Reactjs and Nodejs.

