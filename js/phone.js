const phone_API = async (searching = 13, isshowall) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searching}`
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  displayphone(phones, isshowall);
};

const displayphone = (phones, isshowall) => {
  const phone_container = document.getElementById("phone_container");
  phone_container.innerHTML = "";

  let show_all = document.getElementById("show-all");

  if (phones.length > 10 && !isshowall) {
    show_all.classList.remove("hidden");
  } else {
    show_all.classList.add("hidden");
  }
  if (!isshowall) {
    phones = phones.slice(0, 10);
  }

  phones.forEach((phone) => {
    const creatdiv = document.createElement("div");
    creatdiv.classList = "card bg-base-100 shadow-xl m-2 ";
    creatdiv.innerHTML = `
    <figure><img src="${phone.image}"
    alt="Shoes"/> </figure>
    <div class="card-body text-center">
    <h2 class="text-xl font-bold">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>

    <div class="card-actions justify-center">
        <button onclick="showdetails('${phone.slug}'),my_modal_1.showModal()" class="btn btn-primary">Show Details</button>
    </div>
    </div>
    </div>`;
    phone_container.appendChild(creatdiv);
  });

  loadder(false);
};

//show details
const showdetails = async (phone_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${phone_id}`
  );
  const data = await res.json();
  console.log(data);
};
// search handel

const searchhandeler = (isshowall) => {
  loadder(true);
  const search_field = document.getElementById("search_field");
  phone_API(search_field.value, isshowall);
};
phone_API();

//Spinner here
const loadder = (isloading) => {
  const spinner_container = document.getElementById("spinner_container");

  if (isloading) {
    spinner_container.classList.remove("hidden");
  } else {
    spinner_container.classList.add("hidden");
  }
};

//showall

const handelshowall = () => {
  searchhandeler(true);
};
