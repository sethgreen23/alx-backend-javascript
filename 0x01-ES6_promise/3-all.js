import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [data1, data2] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${data1.body} ${data2.firstName} ${data2.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
