const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {params: {
    apikey: '180ecee5',
    s: 'Avengers'
    }});

    console.log(response.data);

}
fetchData()