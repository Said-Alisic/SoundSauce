// TODO: Turn into functional component or move handler methods to appropriate components
class LoginHandler {
  handleLogin = (email: string, password: string): boolean => {
    console.log(
      `Login button pressed with [email] ${email} and [password] ${password}`
    );

    // TODO: Add logic for handling login information
    return true;
  };
}

export default LoginHandler;
