"use server";

import { profileSchema } from "./schemas";

export async function createProfileAction(prevState, formData) {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: "Profile Created" };
  } catch (error) {
    console.log(error);
    return { message: "there was an error..." };
  }
}
