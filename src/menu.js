const menuItems = [
  {
    title: "PREMIUM WAGYU DON ━ 1250",
    ingredients: "Wagyu, uni, foie gras, fish roe, onsen egg over rice",
  },
  {
    title: "SUKIYAKI DON ━ 450",
    ingredients: "Sliced Wagyu beef with Sukiyaki sauce, onsen egg over rice",
  },
  {
    title: "PREMIUM CHIRASHI ━ 2850",
    ingredients: "O-toro, uni, ikura, abalone, ama ebi",
  },
  {
    title: "ROKA CHIRASHI ━ 1500",
    ingredients:
      "4 types of seasonal sashimi, uni, ikura, ama ebi over sushi rice",
  },
];

function createMenuPage() {
  const menu = document.createElement("div");
  menu.classList.add("main");
  menu.classList.add("menu");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const ingredients = document.createElement("h5");
    ingredients.textContent = item.ingredients;

    menuItem.appendChild(title);
    menuItem.appendChild(ingredients);

    menuContainer.appendChild(menuItem);
  });

  const menuImg = document.createElement("img");
  menuImg.classList.add("menu-img");
  menuImg.src =
    "https://images.unsplash.com/photo-1575253301299-db3f10d814dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";

  menu.appendChild(menuContainer);
  menu.appendChild(menuImg);

  return menu;
}

function loadMenu() {
  let tabContent = document.querySelector("#tab-content");
  tabContent.innerHTML = "";
  tabContent.appendChild(createMenuPage());
}

export { loadMenu };
