import Link from "next/link";
import UserLoginForm from "@/app/components/user-login-form";

export default function LoginPage() {
  return (
    <div>
      Login page
      <UserLoginForm />
      <Link href="/register">Register</Link>
    </div>
  );
}
