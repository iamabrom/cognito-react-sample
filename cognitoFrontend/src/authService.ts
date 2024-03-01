import { CognitoIdentityProviderClient, InitiateAuthCommand, SignUpCommand, ConfirmSignUpCommand, ForgotPasswordCommand, ConfirmForgotPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";
import config from "./config.json";

export const cognitoClient = new CognitoIdentityProviderClient({
  region: config.region,
});

export const signIn = async (username: string, password: string) => {
  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: config.clientId,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };
  try {
    const command = new InitiateAuthCommand(params);
    const { AuthenticationResult } = await cognitoClient.send(command);
    if (AuthenticationResult) {
      sessionStorage.setItem("idToken", AuthenticationResult.IdToken);
      sessionStorage.setItem("accessToken", AuthenticationResult.AccessToken);
      sessionStorage.setItem("refreshToken", AuthenticationResult.RefreshToken);
      return AuthenticationResult;
    }
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  const params = {
    ClientId: config.clientId,
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };
  try {
    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Sign up success: ", response);
    return response;
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const confirmSignUp = async (email: string, code: string) => {
  const params = {
    ClientId: config.clientId,
    Username: email,
    ConfirmationCode: code,
  };
  try {
    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);
    console.log("User confirmed successfully");
    return true;
  } catch (error) {
    console.error("Error confirming sign up: ", error);
    throw error;
  }
};

export const forgotPassword = async (username: string) => {
  const params = {
    ClientId: config.clientId,
    Username: username,
  };
  try {
    const command = new ForgotPasswordCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Forgot password flow started: ", response);
    return response;
  } catch (error) {
    console.error("Error resetting password: ", error);
    throw error;
  }
}

export const resetPassword = async (email: string, confirmationcode: string, password: string) => {
  const params = {
    ClientId: config.clientId,
    Username: email,
    ConfirmationCode: confirmationcode,
    Password: password
  };
  try {
    const command = new ConfirmForgotPasswordCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Forgot password flow started: ", response);
    return response;
  } catch (error) {
    console.error("Error resetting password: ", error);
    throw error;
  }
}
