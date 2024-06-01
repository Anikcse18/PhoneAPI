const phone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayphone(phones);
};

const displayphone = (phones) => {
  const phone_container = document.getElementById("phone_container");

  phones.forEach((phone) => {
    const creatdiv = document.createElement("div");
    creatdiv.classList = "card w-96 bg-base-100 shadow-xl m-2 ";
    creatdiv.innerHTML = `
    <figure><img src="${phone.image}"
    alt="Shoes" /> </figure>
    <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>`;
    phone_container.appendChild(creatdiv);
    console.log(phone);

    // console.log(phone.phone_name);
  });
};
phone();
