export default async function loadBalancer(chinaDownload, USDownload) {
  const winner = await Promise.race([chinaDownload, USDownload]);
  return winner;
}
