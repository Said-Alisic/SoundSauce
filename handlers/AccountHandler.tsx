class AccountHandler {
  handleAccountUpdate = (
    name: string,
    email: string,
    password: string
  ): void => {
    console.log(
      `Account update button pressed with [name] ${name}, [email] ${email} and [password] ${password}`
    );
  };
}

export default AccountHandler;
