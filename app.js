
const $gifSection = $("#gif-section");
const $searchInput = $("#search-term");

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let resultIndex = Math.floor(Math.random() * numResults);
        let $newGif = $("<img>", {
            src: res.data[resultIndex].embed_url,
            class: "gif-result"
        });
        console.log(res.data[resultIndex].embed_url);
        console.log($newGif)
        $gifSection.append($newGif);
    }
}
$("form").on("submit", async function (e) {
    e.preventDefault();

    let searchTerm = $searchInput.val();

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'IIH5XSkvZHZmaIuygDyWHMnxks62I1xo'
        }
    });
        console.log(res.data)
        addGif(res.data);
        searchTerm.value = '';
    })



// SAME ERROR - without jQuery:

// const gifSection = document.querySelector('#results-section');
// const form = document.querySelector('#search-form')

// function addGif(res) {
//     let numResults = res.data.length;
//     if (numResults) {
//         let resultIndex = Math.floor(Math.random() * numResults);
//         let newGif = document.createElement('img');
//         console.log(res.data[resultIndex].embed_url);
//         let gifURL = res.data[resultIndex].embed_url;
//         newGif.src = gifURL;
//         newGif.classList.add('gif-result');
//         console.log(newGif)
//         gifSection.append(newGif);
//     }
// }

// form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     let searchTerm = document.querySelector('#search-term');
    
//     const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
//         params: {
//             q: searchTerm.value,
//             api_key: 'IIH5XSkvZHZmaIuygDyWHMnxks62I1xo'
//         }
//     });
    
//     console.log(res.data)
//     addGif(res.data);
//     searchTerm.value = '';
// })