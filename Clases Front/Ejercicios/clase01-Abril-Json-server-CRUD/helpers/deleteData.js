const DeleteData = async (url) => {
    const data = await axios.delete(url)
    console.log(data)
    return data.data
}
export default DeleteData