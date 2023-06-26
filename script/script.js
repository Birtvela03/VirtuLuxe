const API_URL = "https://api.escuelajs.co/api/v1/products";

const item = localStorage.getItem("item")

/* Hamburger Menu */

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

/* Show Featured 3 items */

getFeaturedItems(API_URL);

async function getFeaturedItems(url) {
    const res = await fetch(url);

    const data = await res.json();

    showFeaturedItems(data.results);
}

    document.addEventListener('DOMContentLoaded', function() {
        let getFeaturedItems = document.querySelector('.getFeaturedItems');
        async function fetchProducts(url) {
            try {
                let data = await fetch(url);
                let response = await data.json();
    
                for (let i = 0; i < 3; i++) {
                    let description = response[i].description;
                    let title = response[i].title;
                    getFeaturedItems.innerHTML += `
           <div class="product">
               <img src="${response[i].images[1]}" alt="${
              response[i].category.name
            }" class="product-img">
               <div class="product-content">
               <h2 class="product-title">${
                 title.length > 18 ? title.substring(0, 18).concat(' ...') : title
               }</h2>
               <h4 class="product-category">${response[i].category.name}</h4>
               <p class="product-description">${
                 description.length > 80
                   ? description.substring(0, 80).concat(' ...more')
                   : description
               }</p>
               <div class="product-price-container">
                   <h3 class="product-price">$${response[i].price}</h3>
                   <a href="details.html" data-productId="${
                     response[i].id
                   }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
               </div>
               </div>
              
           </div>
           `;
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts('https://api.escuelajs.co/api/v1/products');
    });

/* All Products */

document.addEventListener('DOMContentLoaded', function() {
  let products = document.querySelector('.products');
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();

          for (let i = 0; i < response.length; i++) {
              let description = response[i].description;
              let title = response[i].title;
              products.innerHTML += `
     <div class="product">
         <img src="${response[i].images[1]}" alt="${
        response[i].category.name
      }" class="product-img">
         <div class="product-content">
         <h2 class="product-title">${
           title.length > 18 ? title.substring(0, 18).concat(' ...') : title
         }</h2>
         <h4 class="product-category">${response[i].category.name}</h4>
         <p class="product-description">${
           description.length > 80
             ? description.substring(0, 80).concat(' ...more')
             : description
         }</p>
         <div class="product-price-container">
             <h3 class="product-price">$${response[i].price}</h3>
             <a href="details.html" data-productId="${
               response[i].id
             }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
         </div>
         </div>
        
     </div>
     `;
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts('https://api.escuelajs.co/api/v1/products');
});

/* Detailed Info */

    document.addEventListener('DOMContentLoaded', function() {
      let getDetailedInfo = document.querySelector('.getDetailedInfo');
      async function fetchProducts(url) {
          try {
              let data = await fetch(url);
              let response = await data.json();
  
              for (let i = 0; i < 1; i++) {
                  let description = response[i].description;
                  let title = response[i].title;
                  getDetailedInfo.innerHTML += `
                  <div class="details container">
                    <div class="left image-container">
                      <img src="${response[i].images[1]}" alt="${
                        response[i].category.name
                      }" class="product-img">
                    </div>
                    <div class="right">
                      <h1 class="productName">${title}</h1>
                      <div class="price">$${response[i].price}</div>
                      <form class="form">
                        <input type="text" placeholder="1" />
                        <a href="cart.html" class="addCart">Add To Cart</a>
                      </form>
                      <h3>Product Detail</h3>
                      <p class="product-description">${description}</p>
                    </div>
                  </div>
         `;
              }
          } catch (err) {
              console.log(err);
          }
      }
      fetchProducts('https://api.escuelajs.co/api/v1/products');
  });

/* Checkout Info */

document.addEventListener('DOMContentLoaded', function() {
  let getCheckoutInfo = document.querySelector('.getCheckoutInfo');
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();

          for (let i = 0; i < 1; i++) {
              let title = response[i].title;
              getCheckoutInfo.innerHTML += `
              <div class="container cart">
              <table>
                  <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
              </tr>
              <tr>
                  <td>
                  <div class="cart-info">
                  <img src="${response[i].images[1]}" alt="${
                    response[i].category.name
                  }" class="product-img">
                      <div>
                      <h1 class="productName">${title}</h1>
                      <span>$${response[i].price}</span> <br />
                      <a href="#">remove</a>
                      </div>
                  </div>
                  </td>
                  <td><input type="number" class="value" value="1" min="1" /></td>
                  <td class="price">$${response[i].price}</td>
              </tr>
            
              <div class="total-price">
              <table>
                  <tr>
                  <td>Total</td>
                  <td></td>
                  </tr>
              </table>
              <a href="#" class="checkout btn">Proceed To Checkout</a>
              </div>
          </div>
     `;
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts('https://api.escuelajs.co/api/v1/products');
});

/* Contact */

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform form submission or validation logic here
  // You can use AJAX to submit the form data to the server
  alert('Form submitted successfully!');
});