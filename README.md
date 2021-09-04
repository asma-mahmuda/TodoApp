# Simple React app with Docker

# FrontEnd

For first time users please run:

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

`yarn start`

will deploy the app in localhost:3000

## Running FrontEnd in container

- In the frontend directory, you can run:

`docker build -t <imagename> .`

This would create the image file for you in your local system

- Check the image file using

`docker images `

and

`docker run <imagename> `

will run the app in the container, Use the browser link provided by docker to view the app in your browser.

## Backend

- in the backend directory follow the above docker steps to run the backend service in a container.
