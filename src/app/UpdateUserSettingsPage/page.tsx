import { useForm } from "react-hook-form";
import { usersRequest } from "../../data";
import { CreateUserQuery, UserSettingsFunctions } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "../../validators/users/createUserValidator";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { useContext } from "react";
import { updateUserSettingsSchema } from "@/validators/updateUsersSettingsValidator";

export default function UpdateUserSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserQuery>({
    mode: "onSubmit",
    resolver: yupResolver(updateUserSettingsSchema),
  });

  const context = useContext(UserSettingsContext);

  return (
    <>
      <input type="text" placeholder="First name" {...register("firstName")} />
      {errors.firstName && <div>{errors.firstName?.message as string}</div>}
      <br />
      <br />
      <input type="text" placeholder="Enter email" {...register("email")} />
      {errors.email && <div>{errors.email?.message as string}</div>}
      <br />
      <br />
      <button
        onClick={() => {
          handleSubmit((data) => {
            context?.dispatch({
              type: UserSettingsFunctions.CHANGE_EMAIL,
              payload: { email: data.email },
            });
          })();
          console.log(errors);
        }}
      >
        Submit
      </button>
    </>
  );
}
