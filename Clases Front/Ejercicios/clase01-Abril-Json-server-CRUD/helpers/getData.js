const getData = async (url) => {
    const data = await axios.get(url)
    console.log(data)
    return data.data
}
export default getData