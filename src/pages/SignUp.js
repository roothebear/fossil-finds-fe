import SignUpForm from "../components/inputs/SignUpForm";

export default function SignUp({ createAccount }) {
  return (
    <main>
      <h1>Create an account</h1>
      <SignUpForm createAccount={createAccount} />
    </main>
  );
}
