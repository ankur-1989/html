# HTML Notes

## Page title

The title should describe the content and the meaning of the page.

The page title is very important for search engine optimization (SEO). The text is used by search engine algorithms to decide the order when listing pages in search results.

## Block-Level and Inline Elements

- **Block-Level Elements**: Elements like `<p>` and `<h1>` create a new line and take up the full width available.
- **Inline Elements**: Elements like `<strong>` and `<em>` do not create a new line and flow inline with the text.

---

## HTML Symbols and Operators

- Use **HTML entity codes** to display symbols or operators.
- Entity codes start with `&` (e.g., `&amp;` for `&`, `&lt;` for `<`, `&gt;` for `>`).

---

## Accessibility Note

- Tooltips are generally **not accessible** by assistive devices.

---

## List Types

1. **Unordered List (`<ul>`)**: Items are marked with bullets.
2. **Ordered List (`<ol>`)**: Items are marked with numbers.
3. **Description List (`<dl>`):** Defines terms with `<dt>` and their descriptions with `<dd>`.

---

## Links in HTML

Links are created using the `<a>` tag. Types of links:

1. **Absolute Reference**: Links to a full web address (e.g., `https://example.com`).
2. **Relative Reference**: Links to a file on the same server.
3. **Anchor Links**: Links to a specific tag or section on the same page (e.g., `#section-id`).
4. **Tel Link**: Links to initiate a phone call (`tel:+123456789`).
5. **Mailto Link**: Links to initiate an email (`mailto:example@example.com`).
6. **Download Link**: Enables downloading of a file.
7. **Back to Home Link**: A link to navigate back to the homepage.

* Why email links might not be such a good idea.
  * Increased spam vulnerability: Email links expose addresses to spam scrapers, potentially leading to an influx of unsolicited messages.
  * Limited functionality: Not all users have desktop email clients installed, rendering these links useless for some visitors
* How to avoid some of the problems they create.
  * Use contact forms instead of email links on websites. This prevents spam bots from scraping email addresses.
  * Implement strong email security protocols like SPF, DKIM, and DMARC to authenticate emails and reduce the risk of spoofing

---

## Sources for Downloading Free Images

1. [Unsplash](https://unsplash.com)
2. [Gratisography](https://gratisography.com)
3. [Pexels](https://pexels.com)
4. [Lorem Ipsum](https://loremipsum.io)
5. [Pixabay](https://pixabay.com)
6. [IrfanView](https://www.irfanview.com)

---

## Semantic HTML

Semantic HTML provides **meaningful tags** for better accessibility and SEO.

### Examples:

- `<section>`: Generic section of content.
- `<article>`: Specific, self-contained content like blog posts.
- `<aside>`: Sidebar content that is related but not essential to the main content.

### Semantic Elements Without Meaning:

1. `<div>`: Creates divisions, primarily for styling purposes.
2. `<span>`: Used for inline styling, lacks semantic meaning.

### Notes on `<section>` vs. `<article>`:

- `<article>`: Used for specific, related content that can stand alone.
- `<section>`: A generic container for grouping content, without inherent semantic meaning.

---

## `<aside>` Element

- A **semantic element** used for sidebars or non-essential details.
- Can be used inside `<article>` or `<main>`.

---

## `<details>` and `<summary>`

- `<details>`: Creates a collapsible element to hide/show content.
- `<summary>`: Defines the visible heading of the collapsible `<details>` element.
