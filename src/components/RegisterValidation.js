function Validation(values) {
  alert("");
  let error = {};
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const name_pattern = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;

  if (values.name === "") {
    error.name = "Name should not be empty";
  } else if (!name_pattern.test(values.name)) {
    error.name = "Name didn't match";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password Didn't match";
  } else {
    error.password = "";
  }

  return error;
}
export default Validation;
