export const ShowProperties = (container, data) => {
  container.innerHTML = "";
  data.forEach((item) => {
    const { id, name, address, price, type, beds, baths, square_feet, image } =
      item;

    container.innerHTML += `
    <div class="col-12">
    <div class="card-properties mx-1 mx-lg-0">
        <span class="for text-capitalize">for buy</span>
        <img src="${image}" alt="${name}" class="card-img-top w-100 property" id="${id}">
        <span class="price">$${price}/mo</span>
        <div class="card-body p-4 pt-3">
          <span class="text-capitalize fw-bold">${type}</span>
          <h6 class="text-capitalize fw-bold pt-2">${name}</h6>
          <small><i class="bi bi-geo-alt me-1"></i>${address}</small>
          <div class="pt-3 ">
            <small class="beds me-3 d-inline-flex">Beds ${beds}</small>
            <small class="baths me-3 d-inline-flex">Baths ${baths}</small>
            <small class="sqft me-3 d-inline-flex">${square_feet} Sqft</small>
          </div>
        </div>
    </div>
  </div>
    `;
  });
};
