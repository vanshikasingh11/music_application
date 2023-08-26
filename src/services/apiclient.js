import axios from "axios";

export const getSongs=async(termName)=>{
  console.log(termName,"term");
    const URL= `https://itunes.apple.com/search?term=${termName}&limit=25&country=in`;
    const response= await axios.get(URL);
    console.log(response.data['results']);
    return response.data['results'];
}
