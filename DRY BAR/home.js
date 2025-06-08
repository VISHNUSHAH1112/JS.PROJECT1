function loadBoxes() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("container");
      data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
          <a href=des1.html?ID=${encodeURIComponent(item.id)}> 
          <img src="${item.image}" alt="" class="product-img id="product-img">
          </a>
                    <h3 class="itemtitle">${item.title}</h3>
                    <strong class="itemprice">$${item.price}</strong>
                    <button class="Addtobag">Add To Bag</button> 
                    `;
        container.appendChild(box);
      });

      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

loadBoxes();

function ninecontainer() {
  fetch("http://localhost:3000/media")
    .then((res) => res.json())
    .then((data) => {
      const ninecontainer1 = document.getElementById("ninecontainer");
      data.forEach((image1) => {
        const ninebox = document.createElement("div");
        ninebox.classList.add("nine");
        ninebox.innerHTML = `<img src="${image1.image}" alt="">`;
        ninecontainer1.appendChild(ninebox);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

ninecontainer();

function imgtext() {
  fetch("http://localhost:3000/singliimage")
    .then((res) => res.json())
    .then((data) => {
      const imgtext = document.getElementById("imgtext");
      data.forEach((imgtxt) => {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = imgtxt.image;
        image.alt = "";
        imgtext.appendChild(image);

        const text = document.createElement("p");
        text.classList.add("txt");
        text.innerHTML = `${imgtxt.title}<br><button id="shopnow">Shop Now</button>`;
        imgtext.appendChild(text);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

imgtext();

function textimg() {
  fetch("  http://localhost:3000/shampoo")
    .then((res) => res.json())
    .then((data) => {
      const textimg = document.getElementById("textimg");
      data.forEach((shampo) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const span = document.createElement("span");
        span.classList.add("texts");
        span.innerHTML = `${shampo.title}`;
        textimg.appendChild(span);

        const img2 = document.createElement("img");
        img2.classList.add("im");
        img2.src = shampo.image;
        img2.alt = "";
        textimg.appendChild(img2);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

textimg();

function fiveimg() {
  fetch("http://localhost:3000/fiveimg")
    .then((res) => res.json())
    .then((data) => {
      const fiveimgcontainer = document.getElementById("fiveimgcontainer");
      data.forEach((fimg) => {
        const div1 = document.createElement("div");
        div1.classList.add("rotatedcontainer");
        const img = document.createElement("img");
        img.src = fimg.image;
        div1.appendChild(img);
        fiveimgcontainer.appendChild(div1);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
fiveimg();

function products() {
  fetch("http://localhost:3000/product")
    .then((res) => res.json())
    .then((data) => {
      const productcontainer = document.getElementById("productcontainer");

      data.forEach((items) => {
        const detailscontainer = document.createElement("div");
        detailscontainer.classList.add("detailscontainer");
        detailscontainer.innerHTML = `
          
           <div class="hearticons">♡</div>
            <a href=des.html?ID=${encodeURIComponent(items.id)}> 
            <div class="imgdiv" id="imgdiv">
                <img src="${items.image}" alt="" class="product-img">
            </div>
            </a>
             <a href="" class="product-a"> 
            <h4 class="text">${items.title}</h4></a>
                 <a href="" class="product-a"> 
            <h2 class="price">$${items.price}</h2></a>
            <button class="add">Add To Bag</button>
        `;
        const img = detailscontainer.querySelector(".product-img");
        img.addEventListener("mouseover", () => {
          img.src = items.imagehover;
        });

        img.addEventListener("mouseout", () => {
          img.src = items.image;
        });

        productcontainer.appendChild(detailscontainer);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
products();

// const relevance = document.getElementById("relevance");

// relevance.addEventListener("click", () => {
//   function productss() {
//     fetch("http://localhost:3000/product")
//       .then((res) => res.json())
//       .then((data) => {
//         const productcontainer = document.getElementById("productcontainer");
//         productcontainer.innerHTML = "";

//         data.forEach((items) => {
//           const detailscontainer = document.createElement("div");
//           detailscontainer.classList.add("detailscontainer");
//           detailscontainer.innerHTML = `

//            <div class="hearticons">♡</div>
//             <a href="" class="product-a">
//             <div class="imgdiv">
//                 <img src="${items.image}" alt="" class="product-img">
//             </div>
//             </a>
//                         <a href="" class="product-a">
//             <h4 class="text">${items.title}</h4></a>
//                  <a href="" class="product-a">
//             <h2 class="price">$${items.price}</h2></a>
//             <button class="add">Add To Bag</button>
//         `;
//           const img = detailscontainer.querySelector(".product-img");
//           detailscontainer.addEventListener("mouseover", () => {
//             img.src = items.imagehover;
//           });

//           detailscontainer.addEventListener("mouseout", () => {
//             img.src = items.image;
//           });

//           productcontainer.appendChild(detailscontainer);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   productss();
// });

// const bestsellerr = document.getElementById("bestseller");

// bestsellerr.addEventListener("click", () => {
//   function best() {
//     fetch(" http://localhost:3000/bestseller")
//       .then((res) => res.json())
//       .then((data) => {
//         const productcontainer = document.getElementById("productcontainer");
//         productcontainer.innerHTML = "";

//         data.forEach((items) => {
//           const detailscontainer = document.createElement("div");
//           detailscontainer.classList.add("detailscontainer");
//           detailscontainer.innerHTML = `

//            <div class="hearticons">♡</div>
//             <a href="" class="product-a">
//             <div class="imgdiv">
//                 <img src="${items.image}" alt="" class="product-img">
//             </div>
//             </a>
//                         <a href="" class="product-a">
//             <h4 class="text">${items.title}</h4></a>
//                  <a href="" class="product-a">
//             <h2 class="price">$${items.price}</h2></a>
//             <button class="add">Add To Bag</button>
//         `;
//           const img = detailscontainer.querySelector(".product-img");
//           detailscontainer.addEventListener("mouseover", () => {
//             img.src = items.imagehover;
//           });

//           detailscontainer.addEventListener("mouseout", () => {
//             img.src = items.image;
//           });

//           productcontainer.appendChild(detailscontainer);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// best();

// // });
