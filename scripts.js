const button = document.getElementById('convert')
const select = document.getElementById('select-id')



async function convertValues (){
let money = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( function(resposta){
return resposta.json()
})
let dolar = money.USDBRL.high
let euro = money.EURBRL.high
let bitcoin = money.BTCBRL.high

const inputreais = document.getElementById('input-real').value
const realValueText = document.getElementById('real-value-text')
const dolarValueText = document.getElementById('dolar-value-text')

realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
{ style: 'currency', currency: 'BRL' }
).format(inputreais)

if (select.value === "U$: Dólar aericano") {
dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
{ style: 'currency', currency: 'USD' }
).format(inputreais / dolar)
}

if (select.value === "€ Euro") {
dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
{ style: 'currency', currency: 'EUR' }
).format(inputreais / euro)
}

if (select.value === "Bitcoin"){
dolarValueText.innerHTML = inputreais / bitcoin
}
}

changeCurrency = () => {
const currencyName = document.getElementById("currency-name")
const currencyImg = document.getElementById('currency-img')

if (select.value === 'U$: Dólar aericano') {
currencyName.innerHTML = "Dolar americano"
currencyImg.src = "./assets/estados-unidos (1) 1.svg"
}

if (select.value === '€ Euro') {
currencyName.innerHTML = "Euro"
currencyImg.src = "./assets/euro.svg"
}

if (select.value === 'Bitcoin') {
currencyName.innerHTML = "Bitcoin"
currencyImg.src = "./assets/bitcoin.svg"
}

convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)
