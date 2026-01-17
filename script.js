let wrapperSlider = document.querySelector(".sliderwrapper");
let sliderItem = document.querySelectorAll(".sliderItem");
let manuItem = document.querySelectorAll(".manuItem");
let sliderPrice = document.querySelectorAll(".sliderPrice");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/shoes-1.png",
            },
            {
                code: "darkblue",
                img: "./images/shoes-1-alt.png",
            },
        ],
    },

    {
        id: 2,
        title: "Air Jorden",
        price: 149,
        colors: [
            {
                code: "#EA604E",
                img: "./images/shoes-2.png",
            },
            {
                code: "#561f47",
                img: "./images/shoes-2-alt.png",
            },
        ],
    },

    {
        id: 3,
        title: "BLAZER",
        price: 109,
        colors: [
            {
                code: "#dcf612",
                img: "./images/shoes-3.png",
            },
            {
                code: "#003103",
                img: "./images/shoes-3-alt.png",
            },
        ],
    },

    {
        id: 4,
        title: "CREATER",
        price: 129,
        colors: [
            {
                code: "#4D1A1D",
                img: "./images/shoes-4.png",
            },
            {
                code: "#675f84",
                img: "./images/shoes-4-alt.png",
            },
        ],
    },

    {
        id: 5,
        title: "HIPPIE",
        price: 99,
        colors: [
            {
                code: "#EDC101",
                img: "./images/shoes-5.png",
            },
            {
                code: "#402a1b",
                img: "./images/shoes-5-alt.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const CurrentProductImg = document.querySelector(".productImg");
const CurrentProductTittle = document.querySelector(".productTittle");
const CurrentProductPrice = document.querySelector(".productPrice");
const CurrentProductColors = document.querySelectorAll(".color");
const CurrentProductSize = document.querySelectorAll(".size");


manuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //chnage ka current slide
        wrapperSlider.style.transform = `translateX(${-100 * index}vw)`;

        //chnage the choosen product
        choosenProduct = products[index];

        //chnage Text of currentProdect
        CurrentProductTittle.textContent = choosenProduct.title;
        CurrentProductPrice.textContent = "$" + choosenProduct.price;
        CurrentProductImg.src = choosenProduct.colors[0].img;

        //hero slider Price update
        sliderPrice[index].textContent = "$" + choosenProduct.price;
    
        //Assing new Colors
        CurrentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

CurrentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        CurrentProductImg.src = choosenProduct.colors[index].img
    })
})
