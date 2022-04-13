
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const temp = document.getElementById('temp');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == "") {
        city_name.innerText = `Please write the city name before search`; 
        temp_status.style.visibility = 'hidden';
        temp.style.visibility = 'hidden';
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f7c5c12a8d413933ca7284183149d1b`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = `${arrData[0].main.temp}`;
            temp.style.visibility = 'visible';
            temp_status.style.visibility = 'visible';
            const Status = arrData[0].weather[0].main;
            console.log(Status);
            
            if (Status == "Sunny") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: yellow;'></i>" ;
            }
            else if (Status == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: yellow;'></i>" ;
            }
            else if (Status == "Haze") {
                temp_status.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            }
            else if (Status == "Smoke") {
                temp_status.innerHTML = `<i class="fa-solid fa-smog"></i>`;
            }
            else if (Status == "Rain") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
            }
            else if (Status == "Clouds") {
                temp_status.innerHTML = "<i class='fas  fa-cloud'></i>" ;
            }
            else{
                temp_status.innerHTML = "<i class='fas  fa-cloud'></i>" ;
            }




            // console.log(data);
        } catch (error) {
            city_name.innerText = `Please enter the city name properly before search`;  
            temp_status.style.visibility = 'hidden';
            temp.style.visibility = 'hidden'; 
        }
    }


}

submitBtn.addEventListener('click',getInfo);