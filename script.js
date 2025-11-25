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
                img: "./iamges/shoes-1.png",
            },
            {
                color: "darkblue",
                img: "./images/shoes-1(1).png",
            },
        ],
    },
    
        {
        id : 1,
        title: "Air jordan",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./iamges/shoes-1.png",
            },
            {
                color: "darkblue",
                img: "./images/shoes-6.png",
            },
        ],
    },
]

manuItem.forEach((item, idx) => {
item.addEventListener("click", () => {
    console.log("item was clicked");
    wrapperSlider.style.transform = `translateX(${-100 * idx}vw)`;
})
})

