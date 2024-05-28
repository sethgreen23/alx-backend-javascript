import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((res) => {
    process.stdout.write(`${res.body}`);
    return createUser();
  })
    .then((res) => {
      process.stdout.write(` ${res.firstName} ${res.lastName} \n`);
    })
    .catch(() => console.log('Signup system offline'));
}
