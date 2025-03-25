async function weather() {
    const input_details = document.getElementById("input").value
    apiKey = "6c714bfd2b9f9700f3e529a46978066c"
    apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
    try{
        if (document.getElementById("input").value == ""){
            alert("Pls enter city name")
            return
        }
        response = await fetch(apiURL+"&appid=" + apiKey + "&q=" + input_details)
        data = await response.json()
        console.log(data)
        if (response.status == 404){
            document.querySelector(".invalid").style.display = "initial"
            document.querySelector(".all_other_contents").style.display = "none"
        }
        document.querySelector(".all_other_contents").style.display = "initial"
        document.querySelector(".invalid").style.display = "none"
        document.querySelector(".name").innerHTML = data.name
        document.querySelector(".country").innerHTML = data.sys.country
        document.querySelector(".temp").innerHTML = data.main.temp + "℃"
        document.querySelector(".humidityt").innerHTML = data.main.humidity + "%"
        document.querySelector(".windt").innerHTML = data.wind.speed + " KM/H"
        if (data.weather[0].main == "Rain"){
            document.querySelector(".all_other_contents img").src = "images/rain.png"
        }
        if (data.weather[0].main == "Clear"){
            document.querySelector(".all_other_contents img").src = "images/clear.png"
        }
        if (data.weather[0].main == "Clouds"){
            document.querySelector(".all_other_contents img").src = "images/clouds.png"
        }
        if (data.weather[0].main == "Drizzle"){
        }
        if (data.weather[0].main == "Mist"){
            document.querySelector(".all_other_contents img").src = "images/mist.png"
        }
        else if (data.weather[0].main == "Snow"){
            document.querySelector(".all_other_contents img").src = "images/snow.png"
        }
    }
    catch(error){
        alert("Error encounterd while fetching data, pls stay connected and try again")
        console.log("Error encountered: ", error);
        
    }
    
}
button = document.getElementById("button")

button.addEventListener("click", (event)=>{
    event.preventDefault()
    weather()
})

document.addEventListener("click", (event)=>{
    if (event.key === "Enter"){
        weather()
    }
})