const PutData= async(url,objeto)=>{
    let {data} = await axios.put(url,objeto) 
    return data}
export default PutData