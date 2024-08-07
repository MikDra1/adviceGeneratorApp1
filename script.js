const btn = document.querySelector('.btn');
const advice = document.querySelector('.advice')
const id = document.querySelector('.id')

btn.addEventListener("click", async function() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data)
    advice.textContent = data.slip.advice;
    id.textContent = data.slip.id;
});