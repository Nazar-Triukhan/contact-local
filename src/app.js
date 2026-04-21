const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const listRef = document.getElementById("contactList");
const addButton = document.getElementById("buttonAdd");

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

render();

addButton.addEventListener("click", () => {

    const contact = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value
    };

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    render();
});


function render() {
    listRef.innerHTML = "";
    contacts.forEach((c, i) => createItem(c, i));
}


function createItem(obj, i) {
    const item = `
    <li class="item" data-index="${i}">
      <p>${obj.firstName} ${obj.lastName}</p>
      <a href="tel:${obj.phone}">${obj.phone}</a><br>
      <a href="mailto:${obj.email}">${obj.email}</a>
      <button class="btn">x</button>
    </li>`;

    listRef.innerHTML += item;
}


listRef.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn")) {

        const li = e.target.closest(".item");
        const index = Number(li.dataset.index);

        contacts.splice(index, 1);

        localStorage.setItem("contacts", JSON.stringify(contacts));

        render();
    }
});