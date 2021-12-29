console.log("Let's get this party started!");



async function getGiphys(q) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { q, api_key: 'IIH5XSkvZHZmaIuygDyWHMnxks62I1xo' } });
    const resultIndex = Math.floor(Math.random() * 49);
    console.log(res.data.data[resultIndex].embed_url);
}

getGiphys('cat');
