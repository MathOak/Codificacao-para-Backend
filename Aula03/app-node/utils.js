

export function displayMemory(label='Durante') {
  const memory = process.memoryUsage();
  const rss = (memory.rss / 1024 / 1024).toFixed(2);
  const heap = (memory.heapUsed / 1024 / 1024).toFixed(2);
  console.log(`[${label}] RSS: ${rss}MB | Heap: ${heap}MB`);
}