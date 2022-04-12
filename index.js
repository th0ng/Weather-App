function dataToHTML(dataObject) {
    const temp = dataObject.main.temp;
    const description = dataObject.weather[0].description;
    const icon = dataObject.weather[0].icon;
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    let html = '';
    html += `<h1>${temp}</h1>
            <img src="${imageURL}">
            <h3>${description}</h3>
    `
    return html;
}