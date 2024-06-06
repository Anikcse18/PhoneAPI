const phone_API = async (searching = 13, isshowall) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searching}`
  );
  const data = await res.json();
  const phones = data.data;

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
    alt="Phone Image"/> </figure>
    <div class="card-body text-center">
    <h2 class="text-xl font-bold">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>

    <div class="card-actions justify-center">
        <button onclick="showdetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
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
  const phone_features = data.data;
  showphonedetailsmodals(phone_features);
};

//show phone details in the modals

const showphonedetailsmodals = (phone_features) => {
  console.log(phone_features.image);
  const modal_box_details = document.getElementById("modal_box_details");
  modal_box_details.innerHTML = `
  <!-- phone Image -->
  <div class="image_container bg-slate-200 rounded-md">
      <img src="${phone_features.image}" alt="" class="mx-auto p-5">
  </div>
  
  <!-- show other details -->
  <div class="mt-3 space-y-2" id="">
  
      <h3 class="font-bold text-lg">${phone_features.name}</h3>
      <p class="text-slate-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          omnis.
      </p>
      <!-- all features -->
      <div class="all_features space-y-2">
      <p><span class="font-bold ">Storage: </span> <span class="text-sm text-slate-500">${
        phone_features.mainFeatures?.storage
      }</span></p>
      <p><span class="font-bold">Display Size: </span><span class="text-sm text-slate-500">${
        phone_features.mainFeatures?.displaySize
      }</span></p>
      <p><span class="font-bold">Chipset: </span><span class="text-sm text-slate-500">${
        phone_features.mainFeatures?.chipSet
      }</span></p>
      <p><span class="font-bold">Memory: </span><span class="text-sm text-slate-500">${
        phone_features.mainFeatures?.memory
      }</span></p>
      <p><span class="font-bold">Slug: </span><span class="text-sm text-slate-500">${
        phone_features.slug
      }</span></p>
      <p><span class="font-bold">Release date: </span><span class="text-sm text-slate-500">${
        phone_features.releaseDate
      }</span></p>
      <p><span class="font-bold">Brand: </span><span class="text-sm text-slate-500">${
        phone_features.brand
      }</span></p>
      <p><span class="font-bold">GPS: </span><span class="text-sm text-slate-500">${
        phone_features.others?.GPS || "NO GPS"
      }</span></p>
      </div>
  </div>
  <div class="modal-action">
      <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn bg-red-600 rounded-md">Close</button>
      </form>
  </div>
  
  `;

  // show modal
  my_modal_1.showModal();
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
