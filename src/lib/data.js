
export const patData = async() => {
    const res = await fetch('https://pet-server-nu.vercel.app/allpat')
    const data = await res.json();
    return data;
}
export const patDataDetels = async (userId) => {
  const res = await fetch(`https://pet-server-nu.vercel.app/allpat/${userId}`, {
  });
  const data = await res.json();
  return data;
};