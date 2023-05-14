import * as yup from "yup";

export const createUserSchema = yup
  .object()
  .shape({
    firstName: yup.string().required().label("First Name"),
    email: yup.string().email().label("Email"),
  })
  .required();
