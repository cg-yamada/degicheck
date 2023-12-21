function getAllLinkElements(elementId) {
  const container = document.getElementById(elementId);
  const allLinks = container.querySelectorAll("a");

  return Array.from(allLinks)
    .map((el) => {
      const href = el.getAttribute("href");
      return href ? { href, children: el.textContent.trim() } : null;
    })
    .filter(Boolean);
}

window.onload = () => {
  console.log(getAllLinkElements("__next"));
};
