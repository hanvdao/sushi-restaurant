function createHomePage() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.classList.add("main");

  const image = document.createElement("img");
  image.classList.add("home-img");
  image.src =
    "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1086&q=80";

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const introText = document.createElement("p");
  introText.classList.add("intro-text");
  introText.textContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus.`;

  textContainer.appendChild(introText);
  home.appendChild(image);
  home.appendChild(textContainer);

  return home;
}

//loadHome() append homePage to tabContent
function loadHome() {
  let tabContent = document.querySelector("#tab-content");
  tabContent.innerHTML = "";
  tabContent.appendChild(createHomePage());
}
export { loadHome };
