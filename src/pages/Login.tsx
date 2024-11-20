import nave from "@assets/images/nave.webp";
import LoginRegisterForm from "@components/login/LoginRegisterForm";
import { useLogin } from "@hooks/login.hooks";

export default function Login() {
  const { isRegister } = useLogin();

  return (
    <div className="my-auto md:grid md:grid-cols-2 md:bg-white md:shadow-lg md:border md:rounded-lg md:overflow-hidden">
      <div
        className={`
          w-full max-w-lg px-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:relative md:flex md:items-center md:row-start-1 lg:justify-center
          ${
            isRegister
              ? "md:col-start-1 md:bg-ricks-hair-blue"
              : "md:col-start-2 md:bg-portal-green"
          }
        `}
      >
        <img className="lg:h-48" src={nave} alt="" />
      </div>
      <LoginRegisterForm />
    </div>
  );
}
