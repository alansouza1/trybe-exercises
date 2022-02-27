const fetchCurrency = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.usd.brl;
  } catch(error) {
    console.log(`Algo deu errado :( \n${error})`)
  }
};


const fetchCoins = async () => {
  const url = `https://api.coincap.io/v2/assets`;

  try {
    const response = await fetch(url);
    const result  = await response.json();
    const topTen = result.data.filter(coin => Number.parseInt(coin.rank) <= 10);
    topTen.forEach(listCoins);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error})`);
  }
};

const listCoins = async (coin) => {
  const { name, symbol, priceUsd } = coin;
  const list = document.querySelector('#cryptos');
  const li = document.createElement('li');

  const brlPrice = await fetchCurrency();
  const priceReal = Number.parseFloat(priceUsd) * brlPrice;
  
  li.innerText = `${name} (${symbol}): ${priceReal.toFixed(2)} reais`;
  list.appendChild(li);
};

fetchCoins();