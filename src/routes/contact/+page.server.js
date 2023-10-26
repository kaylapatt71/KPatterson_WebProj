import { object, string } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    /** Add other fields */

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
        
    });

    try {
      await contactFormSchema.validate(
        { first_name, last_name, email /** Add other fields */ },
        { abortEarly: false }
      );

      return {
        success: true,
        status: "Form is submitted",
      };
    } catch (error) {
      console.log({ error });
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        first_name,
        last_name,
        email,
        /** Add other fields */
      };
    }
  },
};
