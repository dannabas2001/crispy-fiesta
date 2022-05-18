 const PostData= async(url,objeto)=>{
    let {data} = await axios.post(url,objeto) 
    return data}
export default PostData