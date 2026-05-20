
export const patData = async() => {
    const res = await fetch('http://localhost:8000/allpat')
    const data = await res.json();
    return data;
}
export const patDataDetels = async (userId) => {
  const res = await fetch(`http://localhost:8000/allpat/${userId}`, {
  });
  const data = await res.json();
  return data;
};