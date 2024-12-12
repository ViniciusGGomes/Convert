const USD = 5.95
const EUR = 6.25
const GBP = 7.60

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasNumberRegex = /\D+/g
    
    amount.value = amount.value.replace(hasNumberRegex, "")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

function convertCurrency(amount, price, symbol){

    try{
        footer.classList.add("show-result")
        description.innerText = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        total = Number(amount * price)
        total = formatCurrencyBRL(total).replace("R$", "")
        if(!isNaN(total)){
            alert("Por favor, digite o valor corretamente para converter")
        }

        result.innerText = `${total} reais`

    }catch(error){
        footer.classList.remove("show-result")

        console.log(error)
        window.alert("Não foi possível converter. Tente novamente mais tarde")
    }


}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}