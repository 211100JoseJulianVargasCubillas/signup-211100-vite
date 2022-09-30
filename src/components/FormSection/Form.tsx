import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { emailPattern } from "../../constant/pattern";
import { Button, Input } from "../widgets";

const TermsServices = (): JSX.Element => {
  return (
    <p className="text-gray-300 text-xs text-center mx-6 mt-3 mb-0 md:my-4 leading-5">
      By clicking the button, you are agreeing to our{" "}
      <a className="text-red-default font-bold" href="#">
        Terms and Services
      </a>
    </p>
  );
};

type FormValues = {
  firstName: string;
  second: string;
  lastName: string;
  email: string;
  date: Date; 
  password: string;
  phoneNumber: number;
};

const Form = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  return (
    <form
      className="w-full rounded-xl p-6 md:p-8 shadow-solid bg-white flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="firstName"
        placeholder="Primer Nombre"
        register={{ ...register("firstName", { required: true }) }}
        error={errors.firstName}
        errorText=" primer nombre no puede quedar vacio"
      />
      <Input
        id="SecondName"
        placeholder="Segundo Nombre"
        register={{ ...register("second", { required: false }) }}
        error={errors.second}
        errorText="Segundo nombre no puede quedar vacio "
      />

      <Input
        id="lastName"
        placeholder="Apellido"
        register={{ ...register("lastName", { required: true }) }}
        error={errors.lastName}
        errorText="Apellidos no puede quedar vacio"
      />
            <label htmlFor="datatime">Fecha de nacimiento</label>
      <Input
        id="datetime"
        placeholder="fecha de nacimiento"
        type="date"
        register={{ ...register("date", { required: true }) }}
        error={errors.date}
        errorText="Fecha de nacimiento no puede quedar vacia"
      />

      <Input
        id="email"
        placeholder="Direccion de correo"
        type="text"
        register={{
          ...register("email", { required: true, pattern: emailPattern }),
        }}
        error={errors.email}
        errorText="Revisa nuevamente, esto no es un correo"
      />

      <Input
        id="password"
        placeholder="Constraseña"
        type="password"
        register={{ ...register("password", { required: true }) }}
        error={errors.password}
        errorText="La contraseña no puede quedar vacia"
      />
      <Input
        id="password"
        placeholder="confirme la contraseña"
        type="password"
        register={{ ...register("password", { required: true }) }}
        error={errors.password}
        errorText="La contraseña no puede quedar vacia"
      />      
      <Input
        id="phoneNumber"
        placeholder="numero telefonico"
        register={{ ...register("phoneNumber", { required: true }) }}
        error={errors.lastName}
        errorText="no puede quedar vacio"
      />
      <Button
        className="bg-green-default hover:bg-green-light shadow-inner rounded"
        type="submit"
        value="Registrate"
      />

      <TermsServices />
    </form>
  );
};

export default Form;
