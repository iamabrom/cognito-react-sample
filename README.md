# Amazon Cognito Sample React App

This is a sample react and TypeScript SPA application that can be used with Amazon Cognito. This entirely uses the AWS SDK for JavaScript v3.

Learn more about Amazon Cognito: https://aws.amazon.com/cognito/

## Getting started
1. [Create your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-as-user-directory.html)
    1. For this sample app, use email to sign-in to the user pool

2. Clone this repo
    ```
    git clone https://github.com/iamabrom/cognito-react-sample.git
    ```
3. Navigate to sample app frontend and install all dependencies
    ```
    cd cognitoFrontend/
    npm install
    ```
4. Provide Cognito user pool configurations
    1. Make a copy of the "configExample.json" and name it "config.json"
    2. Edit the "config.json" and update it accordingly with your Cognito user pool information
    3. The "config.json" should already be part of the .gitignore file, but validate this if you have forked this repo or intended to push your copy to a remote repo

5. Still within the /cognitoFrontend directory, run your web app
    ```
    npm run dev
    ```

## Experimenting 

Here's a few things you're able to do with this sample application:

- Sign-up: create a new user
- Confirm user: confirm a newly created user
- Sign-in: Sign-in with your account you created
- Forgot Password: You can self recover your account by beginning the forgot password flow
- Forgot Password Confirmation

## Building From Scratch 

1. Bootstrap our project with Vite.js
    ```
    npm create vite@latest cognitoFrontend -- --template react-ts -y
    cd cognitoFrontend
    npm install
    ```

2. Install dependencies
    ```
    npm install @aws-sdk/client-cognito-identity-provider react-router-dom@6
    npm install --save-dev @types/react-router-dom
    ```

3. Create your components within the `/cognitoFrontend/src` directory. All source code can be obtained within the repo.
    1. `config.json` : This will house all of our Amazon Cognito user pool info
        1. Use the `configExample.json` file as a template. Just make sure to update the file name to "config.json"
    2. `authService.ts` : This will be our primary Amazon Cognito client component
    3. `loginPage.tsx` : This is the page for the /login resource
    4. `homePage.tsx` : This is the default /home resource
    5. `confirmUserPage.tsx` : This is the resource page to handle confirming the user after signing up