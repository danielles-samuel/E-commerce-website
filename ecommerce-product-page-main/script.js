let nav = document.getElementById("navbar");
let showNav = document.getElementById("menu");
let closeNav = document.getElementById("close")


// =================HIDE AND SHOW SIDE NAVBAR=================//

showNav.addEventListener('click', () => {
    nav.classList.add("active")

})

closeNav.addEventListener('click', () => {
    nav.classList.remove("active")
})


// ================PLUS AND MINUS CART ITEMS======================//
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("number");

plus.addEventListener('click', ()=>{
    let result = Number(counter.innerText) + 1;
    counter.innerText = result;
});

minus.addEventListener('click', ()=>{
    let result = Number(counter.innerText) - 1;

if (result < 0){
    result = 0;
}
    counter.innerText = result;
});



function addAndSubstract(num1, num2) {
    let result =  num1 - num2;
    console.log(result);
}
addAndSubstract(4, 5);












// let counter = 0;

// setInterval(() => {
//     plus.addEventListener('click', ()=>{

//         while (counter <= 10) {
//             console.log(counter)
//             counter ++;
//         }
//     })

//     counter = document.getElementById("number").innerHTML = counter
// }, 300);



// console.log("heyyyyyyyyyyyyyy");