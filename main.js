/*
    The Herring Net
    The Races at Longchamp
    Mount Washington
    Lion c. 1880
    Landscape with Dog
    Purple Heron
*/

// Declaration of our art values
let art;
let clickArt;

// Function to get art info when the image is clicked
async function clickedEvent(img_index, item_index) {
    // get title of artwork
    let id = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['AIC-User-Agent', 'aic-bash (patrickrdonohoe@gmail.com)']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
        method: 'GET',
        headers : headers
    });

    let result = await fetch(request);

    let response = await result.json();

    // what are these two statements for?
    console.log(response);
    let art = response.

    // create alert to display details about the artwork
    // alert needs to wait for response
    alert(`Title: ${data.title}, Artist: ${data.artist_title}, Place of Origin: ${data.place_of_origin}, Description: ${data.thumbnail.alt_text}`)
};

function getDetails(id, event) {
    switch(id){
        // why stop propagation?
        // prevents further propagation of an event during event flow
        case 'fig1': { // herring net
            event.stopPropagation();
            clickedEvent();
            break;
        };
        case 'fig2': { // races at longchamp
            event.stopPropagation();
            clickedEvent();
            break;
        };
        case 'fig3': { // mount washington
            event.stopPropagation();
            clickedEvent();
            break;
        };
        case 'fig4': { // lion
            event.stopPropagation();
            clickedEvent();
            break;
        };
        case 'fig5': { // landscape with dog
            event.stopPropagation();
            clickedEvent();
            break;
        };
        case 'fig6': { // purple heron
            event.stopPropagation();
            clickedEvent();
            break;
        };
    };
};