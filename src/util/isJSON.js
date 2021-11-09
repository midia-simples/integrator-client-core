export default function isJSON(json) {
  try {
    JSON.parse(json);
    return true;
  } catch (err) {
    return false;
  }
}
