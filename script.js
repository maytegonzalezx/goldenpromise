
async function fetchCurrency() {
    const priceEUR = 1200;
    const usdSpan = document.getElementById('price-usd');
    
    if(!usdSpan) return; 

    try {
        const response = await fetch('https://open.er-api.com/v6/latest/EUR');
        const data = await response.json();
        const rate = data.rates.USD;
        const finalPrice = (priceEUR * rate).toFixed(2);
        usdSpan.innerText = finalPrice;
    } catch (error) {
        console.error("Error connecting to API:", error);
        usdSpan.innerText = "1,295.00"; // Precio de respaldo si falla la red
    }


 
function addImageInteractivity() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = "scale(1.05)";
            img.style.transition = "all 0.3s ease";
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = "scale(1)";
        }
    


window.onload = () => {
    fetchCurrency();
    addImageInteractivity();
};

document.getElementById('custom-ring-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your inquiry! Our family will contact you soon.");
    this.reset();
