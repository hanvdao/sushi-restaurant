{
  /* <div class="main contact">
<h3>Phone: 123-456-7890</h3>
<h3>Address: 1581 Webster St #150, San Francisco, CA 94115</h3>
<img src="../assets/map.PNG" alt="map" />
</div> */
}

function createContactPage() {
  const contact = document.createElement("div");
  contact.classList.add("main");
  contact.classList.add("contact");

  const phone = document.createElement("h3");
  phone.textContent = "123-456-7890";

  const address = document.createElement("h3");
  address.textContent = "1581 Webster St #150, San Francisco, CA 94115";

  const map = document.createElement("img");
  map.src = "../assets/map.PNG";

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(map);

  return contact;
}

function loadContact() {
  let tabContent = document.querySelector("#tab-content");
  tabContent.innerHTML = "";
  tabContent.appendChild(createContactPage());
}

export { loadContact };
