class Weather {
    constructor(minTemp, maxTemp, climate, wind, date){

        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.climate = climate;
        this.wind = wind,
        this.date = date;
    }

    meanTemp() {
        return Math.round((this.minTemp + this.maxTemp) / 2);
    }
}

const week = [
    new Weather(10, 25, 'Cloudy', 14, '2024-01-15'),
    new Weather(12, 20, 'Foggy', 2, '2024-01-16'),
    new Weather(22, 27, 'Sunny', 12, '2024-01-17'),
    new Weather(19, 28, 'Cloudy', 16, '2024-01-18'),
    new Weather(15, 22, 'Sunny', 8, '2024-01-19'),
    new Weather(12, 18, 'Rainy', 20, '2024-01-20'),
    new Weather(9, 17, 'Cloudy', 12, '2024-01-21')
];

function getEmojiClimate(climate) {
    switch (climate.toLowerCase()) {
        case 'cloudy':
            return '⛅';
        case 'foggy':
            return '🌫️';
        case 'sunny':
            return '☀️';
        case 'rainy':
            return '🌧️';
    }
}

function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex]
}

function calculateMeanTemp(week) {

    let minTempSum = 0;
    let maxTempSum = 0;

    week.forEach((day) => {
        minTempSum += day.minTemp;
        maxTempSum += day.maxTemp;
    });

    const minTempMean = Math.round(minTempSum / week.length);
    const maxTempMean = Math.round(maxTempSum / week.length);

    return {
        minTempMean,
        maxTempMean
    }
}

function render(){
    const mainDiv = document.querySelector('#main');
    const {minTempMean, maxTempMean} = calculateMeanTemp(week);

    const minMeanTempDiv = document.createElement('div');
    minMeanTempDiv.innerHTML = `<h3>Min mean temp: ${minTempMean}ºC</h3>` ;

    const maxMeanTempDiv = document.createElement("div");
    maxMeanTempDiv.innerHTML = `<h3>Max mean temp: ${maxTempMean}ºC </h3>`;

    mainDiv.appendChild(minMeanTempDiv);
	mainDiv.appendChild(maxMeanTempDiv);

    week.forEach((day) => {
		const dayElem = document.createElement("div");
        dayElem.classList.add('day');
        const climateEmoji = getEmojiClimate(day.climate);
        const dayOfWeek = getDayOfWeek(day.date);


		dayElem.innerHTML = `<h3>${dayOfWeek} ${climateEmoji}</h3>
                            <p><b>Mean Temp:</b> ${day.meanTemp()}ºC</p>
                            <p><b>Min Temp:</b> ${day.minTemp}ºC</p>
                            <p><b>Max Temp:</b> ${day.maxTemp}ºC</p>
                            <p><b>Climate:</b> ${day.climate}</p>
                            <p><b>Wind:</b> ${day.wind}km/h</p>`;
                            
		mainDiv.appendChild(dayElem);
	});
}
document.addEventListener('DOMContentLoaded', render);