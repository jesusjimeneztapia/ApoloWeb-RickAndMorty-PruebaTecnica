import { useLogin } from "@hooks/login.hooks";
import KeyFilledIcon from "@icons/KeyFilledIcon";
import MailFilledIcon from "@icons/MailFilledIcon";
import { Link } from "react-router-dom";

export default function LoginRegisterForm() {
  const { isRegister, handleSubmit, form } = useLogin();

  return (
    <form
      className={`
    bg-white/70 p-4 shadow-lg backdrop-blur rounded border md:bg-transparent md:shadow-none md:backdrop-blur-0 md:rounded-none md:border-0 md:row-start-1 lg:p-6
    ${isRegister ? "md:col-start-2" : "md:col-start-1"}
  `}
      onSubmit={handleSubmit as never}
    >
      <h2
        className={`font-get-schwifty font-bold text-3xl mb-4 ${
          isRegister ? "text-ricks-hair-blue" : "text-portal-green"
        }`}
      >
        {isRegister ? "Registrarse" : "Iniciar Sesion"}
      </h2>
      <p className="font-semibold font-karla text-lg text-pretty mb-16 text-intergalactic-black/80">
        ¡Bienvenido al multiverso de Rick y Morty!{" "}
        <strong>{isRegister ? "Regístrate" : "Inicia Sesión"}</strong> para
        explorar.
      </p>
      <div className="group mb-4">
        <div className="relative mb-1">
          <label
            className={`
              absolute left-4 top-1/2 -translate-y-1/2
              ${
                form.formState.errors.email
                  ? "text-morty-red/50 group-focus-within:text-morty-red"
                  : "text-intergalactic-black/50 group-focus-within:text-intergalactic-black"
              }
            `}
            htmlFor="email"
          >
            <MailFilledIcon />
          </label>
          <input
            id="email"
            className={`w-full h-14 py-4 pl-12 pr-4 border rounded-lg ${
              form.formState.errors.email &&
              "border-morty-red text-morty-red placeholder:text-morty-red/45 focus:text-intergalactic-black focus:outline-morty-red"
            }`}
            placeholder="Email"
            {...form.register("email")}
          />
        </div>
        <p className="text-sm text-morty-red">
          {form.formState.errors.email?.message}
        </p>
      </div>
      <div className="group mb-4">
        <div className="relative mb-1">
          <label
            className={`
              absolute left-4 top-1/2 -translate-y-1/2
              ${
                form.formState.errors.password
                  ? "text-morty-red/50 group-focus-within:text-morty-red"
                  : "text-intergalactic-black/50 group-focus-within:text-intergalactic-black"
              }
            `}
            htmlFor="password"
          >
            <KeyFilledIcon />
          </label>
          <input
            id="password"
            className={`w-full h-14 py-4 pl-12 pr-4 border rounded-lg ${
              form.formState.errors.password &&
              "border-morty-red text-morty-red placeholder:text-morty-red/45 focus:text-intergalactic-black focus:outline-morty-red"
            }`}
            type="password"
            placeholder="Contraseña"
            {...form.register("password")}
          />
        </div>
        <p className="text-sm text-morty-red">
          {form.formState.errors.password?.message}
        </p>
      </div>
      <p className="mb-4 text-morty-red text-sm text-end">
        {form.formState.errors.root?.message}
      </p>
      <button
        className={`w-full uppercase rounded py-3 text-sm font-medium shadow text-white mb-4 disabled:bg-opacity-50 ${
          isRegister ? "bg-ricks-hair-blue" : "bg-portal-green"
        }`}
        type="submit"
        disabled={Object.values(form.formState.errors).length > 0}
      >
        {isRegister ? "Registrarse" : "Iniciar Sesión"}
      </button>
      <small className="block text-xs text-end text-intergalactic-black/75">
        {isRegister ? "Ya tienes una cuenta? " : "No tienes una cuenta? "}
        <Link
          className={`font-bold hover:underline ${
            isRegister ? "text-portal-green" : "text-ricks-hair-blue"
          }`}
          to={`/autenticacion?registrar=${!isRegister}`}
        >
          {isRegister ? "Inicia Sesión" : "Regístrate"}
        </Link>
      </small>
    </form>
  );
}
