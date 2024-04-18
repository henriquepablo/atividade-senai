const h1 = document.querySelector('#temp');
const input = document.querySelector('#input');
const temp_min = document.querySelector('#temp_min');
const temp_max = document.querySelector('#temp_max');
const humidity = document.querySelector('#humidity');
let cityName = 'São Paulo';
let actualCity = document.querySelector('#actualCity');

const obterTemp = () =>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&units=metric&appid=b34ddb2bac572c7d57c315df91073134`)
      .then(resposta =>{
        
        return resposta.json()
      })
        .then(dados =>{
          h1.innerText = dados.main.temp;
          temp_max.innerText = dados.main.temp_max;
          temp_min.innerText = dados.main.temp_min;
          humidity.innerText = dados.main.humidity;
          actualCity.innerText = cityName;
        })
        .catch(erro => {
          console.log(erro)
        });
}

obterTemp();

function search() {
    cityName = input.value;
    obterTemp();
}
