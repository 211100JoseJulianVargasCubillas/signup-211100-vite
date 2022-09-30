import React from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { ReactComponent as Error } from "../../../images/icon-error.svg";
import clsx from "clsx";

type Props = {
  className?: string;
  id: string;
  type?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError | undefined;
  errorText: string;
};
export const Input = ({
  className,
  id,
  type = "text",
  register,
  placeholder,
  error,
  errorText,
}: Props): JSX.Element => {
  return (
    <div className="relative mb-4">
      <label className="hidden" htmlFor={id}>{`${id} Label`}</label>

      <input
        id={id}
        className={clsx(
          "w-full rounded px-6 py-4 focus:outline-none",
          "font-semibold text-sm",
          "placeholder-gray-600",
          error
            ? "border-2 border-red-default focus:border-red-default text-red-default"
            : "border border-gray-200 focus:border-purple-default text-gray-600",
          className
        )}
        type={type}
        placeholder={error ? "" : placeholder}
        {...register}
      />

      {error && (
        <p className="w-full mt-2 text-red-default text-xs font-medium text-right italic">
          {errorText}
        </p>
      )}

      {error && (
        <div className="w-6 h-6 absolute top-0 right-0 mt-4 mr-6">
          <Error />
        </div>
      )}
    </div>
  );
};
