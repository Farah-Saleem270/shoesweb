let wrapperSlider = document.querySelector(".sliderwrapper");
// let sliderItem = document.querySelectorAll(".sliderItem");
let manuItem = document.querySelectorAll(".manuItem");

const products = [
    {
        id : 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/shoes-1.png",
            },
            {
                color: "darkblue",
                img: "./images/shoes-1(1).png",
            },
        ],
    },

     {
        id : 2,
        title: "Air Jorden",
        price: 149,
        colors: [
            {
                code: "#EA604E",
                img: "./images/shoes-2.png",
            },
            {
                color: "darkblue",
                img: "./images/shoes-1(1).png",
            },
        ],
    },
]

let choosenProduct = products[0];
 
const CurrentProductImg = document.querySelector(".productImg");
const CurrentProductTittle = document.querySelector(".productTittle");
const CurrentProductPrice = document.querySelector(".productPrice");
const CurrentProductColor = document.querySelectorAll(".color");
const CurrentProductSize = document.querySelectorAll(".size");


manuItem.forEach((item, idx) => {
item.addEventListener("click", () => {
   //chnage ka current slide
    wrapperSlider.style.transform = `translateX(${-100 * idx}vw)`;

    //chnage the choosen product
    choosenProduct = products[idx];

    //chnage Text of currentProdect
     CurrentProductTittle.textContent = choosenProduct.title;
     CurrentProductPrice.textContent = "$" + choosenProduct.price;
     CurrentProductImg.src = choosenProduct.colors[0].img;

})
})

