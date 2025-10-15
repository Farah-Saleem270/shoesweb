let wrapperSlider = document.querySelector(".sliderwrapper");
// let sliderItem = document.querySelectorAll(".sliderItem");
let manuItem = document.querySelectorAll(".manuItem");

console.log(manuItem);

manuItem.forEach((item, idx) => {
item.addEventListener("click", () => {
    console.log("item was clicked");
    wrapperSlider.style.transform = `translateX(${-100 * idx}vw)`;
})
})