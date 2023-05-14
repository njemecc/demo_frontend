import * as yup from "yup";

export const updateUserSettingsSchema = yup
  .object()
  .shape({
    firstName: yup.string().required().label("First Name"),
    email: yup.string().email().label("Email"),
  })
  .required();
