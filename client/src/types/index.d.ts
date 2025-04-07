interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}

interface User {
  uid: string;
  name: string;
  email: string;
  photoURL?: string;
}
