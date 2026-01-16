let wrapperSlider = document.querySelector(".sliderwrapper");
let sliderItem = document.querySelectorAll(".sliderItem");
let manuItem = document.querySelectorAll(".manuItem");
let sliderPrice = document.querySelectorAll(".sliderPrice");

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
                color: "#561f47",
                img: "./images/shoes-1(1).png",
            },
        ],
    },

     {
        id : 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "#dcf612",
                img: "./images/shoes-3.png",
            },
            {
                color: "#003103",
                img: "./images/shoes-3(1).png",
            },
        ],
    },

     {
        id : 4,
        title: "CREATER",
        price: 129,
        colors: [
            {
                code: "#4D1A1D",
                img: "./images/shoes-4.png",
            },
            {
                color: "#675f84",
                img: "./images/shoes-4(1).png",
            },
        ],
    },

     {
        id : 5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code: "#EDC101",
                img: "./images/shoes-5.png",
            },
            {
                color: "black",
                img: "./images/shoes-5(1).png",
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

     //hero slider Price update
     sliderPrice[idx].textContent = "$" + choosenProduct.price;


     CurrentProductColor
});
});

