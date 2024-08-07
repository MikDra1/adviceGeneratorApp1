const btn = document.querySelector('.btn');
const advice = document.querySelector('.advice')
const id = document.querySelector('.id')

btn.addEventListener('click', newAdvice)

async function newAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    advice.textContent = data.slip.advice
    id.textContent = data.slip.id
}

// 
// newAdvice()