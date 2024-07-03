"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/validations/user";
import { z } from "zod";
import { useTranslation } from "next-i18next";

type FormData = z.infer<typeof userSchema>;

export default function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });
  const { t } = useTranslation();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} aria-label={"email"} />
      {errors.email && errors.email.message && (
        <p className="px-1 text-xs text-red-600">{t(errors.email.message)}</p>
      )}
      <input {...register("password")} aria-label={"password"} />
      {errors.password && errors.password.message && (
        <p className="px-1 text-xs text-red-600">
          {t(errors.password.message)}
        </p>
      )}
      {/* include validation with required or other standard HTML validation rules */}
      <input type="submit" />
    </form>
  );
}
