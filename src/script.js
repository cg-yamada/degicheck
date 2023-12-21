function getAllLinkElements(elementId) {
  console.log("クリック");
  const container = document.getElementById(elementId);
  const allLinks = container.querySelectorAll("a");

  const links = Array.from(allLinks)
    .forEach((el) => {
      const href = el.getAttribute("href");
      return href ? { href, children: el.textContent.trim() } : null;
    })
    .filter(Boolean);

  const linkListContainer = document.getElementById("js-links");
  links.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${link.href}">${link.children}</a>`;
    linkListContainer.appendChild(listItem);
  });

  return links;
}

// window.onload = () => {
//   const links = getAllLinkElements("__next");

//   const linkListContainer = document.getElementById("js-links");
//   links.map((link) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `<a href="${link.href}">${link.children}</a>`;
//     linkListContainer.appendChild(listItem);
//   });
// };
