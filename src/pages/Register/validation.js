import * as yup from "yup";

const schema = yup.object().shape({
  employeeId: yup.string().required("Employee-Id is required"),
  messageBody: yup
    .string()
    .required("MessageBody is required")
    .min(4, "MessageBody must be at least 10 characters"),
  // termsCheck: yup
  //   .boolean()
  //   .oneOf([true], "Required terms of use"),
  //   termsCheck1: yup
  //   .boolean()
  //   .oneOf([true], "Required terms of use"),
});

export default schema;
