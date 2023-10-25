import { object, string } from "yup";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const first_name = formData.get("first_name");
    /** Add other fields */

    const contactFormSchema = object({
      first_name: string()
        .min(2, "too short")
        .required("We only accept named users"),
    });

    try {
      await contactFormSchema.validate(
        { first_name /** Add other fields */ },
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
        /** Add other fields */
      };
    }
  },
};
