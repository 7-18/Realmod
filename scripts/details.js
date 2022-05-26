const container = document.getElementById("property-info");

document.addEventListener("DOMContentLoaded", async () => {
  const data = JSON.parse(localStorage.getItem("property"));
  container.innerHTML = "";
  const { id, name, address, price, type, beds, baths, square_feet, image } =
    data;

  container.innerHTML += `
      <div class="col-12">
        <img
          src="${image}"
          alt="${name}"
          loading="lazy"
          class="img-fluid"
        />
      </div>
      <div class="col-12">
        <div class="property-data">
          <h2 class="fw-bold mb-2">${name}</h2>
        </div>
        <div class="property-data">
          <h3 class="mb-3">$${price}</h3>
          <h5 class="mb-3 type">${type}</h5>
          <h5><i class="bi bi-geo-alt me-1"></i>${address}</h5>
          <div class="pt-3 pb-3">
            <small class="beds me-3 d-inline-flex">Beds ${beds}</small>
            <small class="baths me-3 d-inline-flex">Baths ${baths}</small>
            <small class="sqft me-3 d-inline-flex">${square_feet} Sqft</small>
          </div>
        </div>
        <button class="btn btn-dark w-100 text-uppercase fw-bold mb-2" id="AddToCart">
          add to cart
        </button>
        <button class="btn btn-primary w-100 text-uppercase fw-bold mb-3" id="AddFavorites">
          add to favorites
        </button>
        <a href="./home.html" class="text-dark">View more</a>
      </div>
            `;
});
