class LoginHandler {
  handleLogin = (email: string, password: string): void => {
    console.log(
      `Login button pressed with [email] ${email} and [password] ${password}`
    );
  };
}

export default LoginHandler;
