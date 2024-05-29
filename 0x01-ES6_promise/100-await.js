import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser().then((res) => res);
    const photo = await uploadPhoto().then((res) => res);
    return {
      user,
      photo,
    };
  } catch (error) {
    return {
      user: null,
      photo: null,
    };
  }
}
