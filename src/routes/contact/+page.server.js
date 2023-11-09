// Importing 'object' and 'string' from the 'yup' library for validation
import { object, string } from "yup";

// Definition of a set of actions related to form submission
export const actions = {
  default: async ({ request }) => {
    // Extracting form data from the incoming request
    const formData = await request.formData();

    // Extracting specific fields from the form data
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const message = formData.get("message");

     // Defining a schema for validating the contact form data
    const contactFormSchema = object({
      first_name: string()
        .min(2, "Too short")
        .required("We only accept named users"),
      last_name: string()
        .min(2, "Too short")
        .required("We only accept named users"),
      email: string()
        .min(2, "Too short")
        .required("Please enter a valid email address"),
      message: string()
        .min(2, "Too short")
        .required("Please enter a valid message"),
    });

    try {
      // Validating the form data against the defined schema
      await contactFormSchema.validate(
        { first_name, last_name, email, message },
        { abortEarly: false }
      );

      // If validation is successful, return success status
      return {
        success: true,
        status: "Form is submitted",
      };

    } catch (error) {
      // If validation fails, handle errors and return details
      console.log({ error });

       // Extracting validation errors and mapping them to field-specific error messages
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      // Returning error details along with the submitted form data
      return {
        errors,
        first_name,
        last_name,
        email,
        message,
      };
    }
  },
};
