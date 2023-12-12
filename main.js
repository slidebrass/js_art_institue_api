/*
    The Herring Net
    The Races at Longchamp
    Mount Washington
    Lion c. 1880
    Landscape with Dog
    Purple Heron
*/

// Function to get art info when the image is clicked
async function clickedEvent(img_index) {
    // get id for artwork
    let id = document.getElementsByTagName('img')[img_index].attributes[1].value;

    // headers for JSON
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['AIC-User-Agent', 'aic-bash (patrickrdonohoe@gmail.com)']
    ]);

    // JSON 'GET' Request
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        headers : headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);
    let data = response.data

    // create alert to display details about the artwork
    alert(`Title: ${data.title}
    Artist: ${data.artist_title}
    Place of Origin: ${data.place_of_origin}
    Description: ${data.thumbnail.alt_text}`)
};