const phone_API = async (searching, isshowall) => {
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
  console.log("Status Prove: ", !isshowall);

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
    <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>`;
    phone_container.appendChild(creatdiv);
  });

  loadder(false);
};

// search handel

const searchhandeler = (isshowall) => {
  loadder(true);
  const search_field = document.getElementById("search_field");
  phone_API(search_field.value, isshowall);
};

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
