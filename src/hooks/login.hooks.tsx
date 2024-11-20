import Toast from "@components/shared/Toast";
import {
  InvalidPasswordError,
  UserAlreadyExistsError,
  UserNotFoundError,
} from "@errors/auth.errors";
import { joiResolver } from "@hookform/resolvers/joi";
import { messages } from "@joi-tools/translator";
import { User } from "@services/authService";
import { useAuthStore } from "@stores/auth.store";
import Joi from "joi";
import { ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { ToastOptions } from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const schema = Joi.object({
  email: Joi.string()
    .required()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: Joi.string().required().min(8).label("contraseña"),
}).messages({
  ...messages.es,
  "string.pattern.base": messages.es["string.email"],
} as never);

export function useLogin() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("registrar") === "true";
  const token = useAuthStore((state) => state.token);
  const login = useAuthStore((state) => state.login);
  const register = useAuthStore((state) => state.register);

  const {
    handleSubmit: onSubmit,
    register: formRegister,
    ...form
  } = useForm<User>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
    resolver: joiResolver(schema),
  });

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    form.clearErrors();
  }, [isRegister]); // eslint-disable-line

  const registerField = (field: keyof User) => {
    const registered = formRegister(field);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      form.clearErrors("root");
      return registered.onChange(e);
    };
    return { ...registered, onChange };
  };

  const handleSubmit = onSubmit(async ({ email, password }, event) => {
    event?.preventDefault();
    const options: ToastOptions = {
      position: "bottom-right",
    };
    try {
      if (isRegister) {
        await register({ email, password });
        return toast.custom(
          <Toast message={`Bienvenido!, ${email}`} color="blue" />,
          options
        );
      }
      await login({ email, password });
      toast.custom(
        <Toast message={`Hola de nuevo!, ${email}`} color="green" />,
        options
      );
    } catch (error) {
      let message = "Ocurrió algún error, intente más tarde";
      if (error instanceof UserAlreadyExistsError) {
        message = "El usuario ya existe";
        toast.custom(<Toast message={message} icon="error" />, options);
        return form.setError("root", { message });
      }
      if (
        error instanceof UserNotFoundError ||
        error instanceof InvalidPasswordError
      ) {
        message = "Credenciales inválidas";
        toast.custom(<Toast message={message} icon="error" />, options);
        return form.setError("root", { message });
      }
      toast.custom(<Toast message={message} icon="error" />, options);
      return form.setError("root", {
        message,
      });
    }
  });

  return {
    isRegister,
    handleSubmit,
    form: { ...form, register: registerField },
  };
}
