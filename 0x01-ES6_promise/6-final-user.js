import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName).then((value) => ({
    status: 'resoved',
    value,
  }));
  const photo = await uploadPhoto(fileName).catch((value) => ({
    status: 'rejected',
    value: value.message,
  }));
  return [user, photo];
}
