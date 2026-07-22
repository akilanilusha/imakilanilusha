# Adding a New Blog Post

The blog doesn't need any code changes to add a post — just edit `src/data/blogs.json` and, optionally, add images.

## 1. Pick a unique `id`

This becomes the URL slug (e.g. `my-second-post` → `/blog/my-second-post`). Use lowercase words separated by hyphens.

## 2. Add images (optional but recommended)

Create a folder: `public/blog-images/<your-id>/` and drop your images in there (e.g. `cover.jpg`, `1.jpg`). Reference them from the JSON as root-relative paths: `/blog-images/<your-id>/cover.jpg`.

## 3. Add an entry to `src/data/blogs.json`

Append a new object to the array with this shape:

```json
{
  "id": "my-second-post",
  "title": "My Second Post",
  "excerpt": "One sentence shown on the blog list card.",
  "coverImage": "/blog-images/my-second-post/cover.jpg",
  "date": "2026-07-25",
  "tags": ["Development"],
  "content": [
    { "type": "paragraph", "text": "Opening paragraph..." },
    { "type": "heading", "text": "A section title" },
    { "type": "paragraph", "text": "More text..." },
    { "type": "list", "items": ["Point one", "Point two", "Point three"] },
    { "type": "image", "src": "/blog-images/my-second-post/1.jpg", "caption": "Optional caption" }
  ]
}
```

Content block types available:

- `paragraph` — plain text
- `heading` — section title; also becomes a Table of Contents entry automatically
- `list` — renders as a checklist
- `image` — full-width image with optional caption

## 4. Save and refresh

That's it — no rebuild step during dev (`npm run dev` hot-reloads JSON changes). The new post automatically:

- shows up on `/blog`, sorted by date (newest first)
- gets counted under its tag(s) in the sidebar Categories widget
- gets a read-time estimate computed from its word count
- gets Previous/Next links to the posts adjacent to it by date

## Removing a post

Delete its object from `blogs.json` and (optionally) its image folder under `public/blog-images/`.

## Note on tags

Only the first tag in a post's `tags` array is shown as the badge on its card, but **all** tags count toward the Categories sidebar — so multiple tags are fine, just know only the first one is visually shown on cards.
