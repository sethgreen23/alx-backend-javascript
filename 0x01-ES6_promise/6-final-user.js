import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled(
    [signUpUser(firstName, lastName), uploadPhoto(fileName)],
  );
  const resultsObj = [
    {
      status: results[0].status,
      value: results[0].value,
    },
    {
      status: results[1].status,
      value: results[1].reason,
    },
  ];
  return resultsObj;
}
