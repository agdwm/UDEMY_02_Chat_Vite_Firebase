import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "reactfire";

const RegisterPage = () => {
  const auth = useAuth();

  const handleClickGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Login Successful");
    } catch (error) {
      console.log("Error signing in", error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleClickGoogle}>Sing in with Google</button>
    </div>
  );
};
export default RegisterPage;
