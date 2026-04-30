export default function formatLog(message) {
  const date = new Date();
  const formmatedDate = `[${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}]`
  return `${formmatedDate} - ${message}`
}
