export const inputChecks = (type, name) => {
  if (type === "text") {
    return { required: "*Please fill this field" };
  } else if (type === "email") {
    return {
      required: "*Please fill this field",
      pattern:
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
    };
  } else if (type === "number") {
    switch (name) {
      case "mobile":
        return {
          required: "*Please fill this field",
          minLength: { value: 10, message: "*mobile number not valid " },
          maxLength: { value: 10, message: "*mobile number not valid" },
        };
      case "postalCode":
        return {
          required: "*Please fill this field",
          minLength: { value: 6, message: "*postal code is Invalid" },
          maxLength: { value: 6, message: "*postal code is Invalid" },
        };
      default:
        return { required: "*Please fill this field" };
    }
  }
};
