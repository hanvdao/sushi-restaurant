//add load method to each module

// import { renderHome } from "./home";
import { header, footer } from "./page-load";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

let contentDiv = document.querySelector("#content");

initialPageLoad();

function initialPageLoad() {
  contentDiv.innerHTML = "";
  contentDiv.appendChild(header());
  contentDiv.appendChild(createTabContent());
  contentDiv.appendChild(footer());
  loadHome();
}

function createTabContent() {
  const tabContent = document.createElement("div");
  tabContent.setAttribute("id", "tab-content");
  return tabContent;
}

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const contactButton = document.querySelector(".contact-btn");

homeButton.addEventListener("click", () => {
  loadHome();
});

menuButton.addEventListener("click", () => {
  loadMenu();
});

contactButton.addEventListener("click", () => {
  loadContact();
});
