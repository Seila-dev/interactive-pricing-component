// Billing type switch function
const switchBtn = document.getElementById('switchBtn');
const switchCircle = document.getElementById('whiteCircle');
const paymentValue = document.getElementById('paymentValue');
// const monthText = document.getElementById('monthText');
const inputSlider = document.getElementById('inputSlider');
const views = document.getElementById('pageviewsQuantity');
const discount = document.querySelector('.discount')

const data = [
    {
        pageviews: "10K",
        monthlycost: 6,
        leftporcentage: 0
    },
    {
        pageviews: "50K",
        monthlycost: 12,
        leftporcentage: 25
    },
    {
        pageviews: "100K",
        monthlycost: 16,
        leftporcentage: 50
    },
    {
        pageviews: "500K",
        monthlycost: 24,
        leftporcentage: 75
    },
    {
        pageviews: "1M",
        monthlycost: 36,
        leftporcentage: 100
    }
]

const getData = function(){
    const { pageviews , monthlycost , leftporcentage } = data[inputSlider.value -1];

    if(inputSlider.value == 1){
        inputSlider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 0%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%)100%)";
    }else if (inputSlider.value == 2){
        inputSlider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%)100%)";
    }
    else if (inputSlider.value == 3){
        inputSlider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%)100%)";
    }
    else if (inputSlider.value == 4){
        inputSlider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%)100%)";
    }
    else if (inputSlider.value == 5){
        inputSlider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 100%, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%)100%)";
    }

    views.innerHTML = pageviews;
    paymentValue.innerHTML = monthlycost.toFixed(2)
    discount.innerHTML = `${leftporcentage}%`
}

inputSlider.addEventListener('input', getData)

switchBtn.addEventListener('click', () => {
    const active = document.querySelector('.active');
    switchBtn.classList.toggle('active');
    switchCircle.classList.toggle('active');
});