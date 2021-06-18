function header() {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "ICHI SANDO";

  const line = document.createElement("hr");

  const navContainer = document.createElement("div");
  navContainer.classList.add("nav-container");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("home-btn");

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("menu-btn");

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("contact-btn");

  navContainer.appendChild(homeButton);
  navContainer.appendChild(menuButton);
  navContainer.appendChild(contactButton);

  header.appendChild(title);
  header.appendChild(line);
  header.appendChild(navContainer);

  return header;
}

function footer() {
  const footer = document.createElement("footer");

  const authorText = document.createElement("h3");
  authorText.textContent = "Built with 🧡 by Han Dao";

  const githubAnchor = document.createElement("a");
  githubAnchor.href = "https://github.com/hanvdao";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fa");
  githubIcon.classList.add("fa-github");
  githubIcon.classList.add("fa-2x");

  githubAnchor.appendChild(githubIcon);
  footer.appendChild(authorText);
  footer.appendChild(githubAnchor);

  return footer;
}

export { header, footer };
