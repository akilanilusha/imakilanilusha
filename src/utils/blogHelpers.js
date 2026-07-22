export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function blockText(block) {
  if (block.type === "list") return (block.items || []).join(" ");
  return block.text || "";
}

export function getReadTime(post) {
  const words = (post.content || [])
    .map(blockText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getHeadings(post) {
  return (post.content || [])
    .filter((block) => block.type === "heading")
    .map((block) => ({ text: block.text, id: slugify(block.text) }));
}

export function getCategoryCounts(posts) {
  const counts = {};
  posts.forEach((post) => {
    (post.tags || []).forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}

export function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
