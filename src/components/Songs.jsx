import { Song } from "./Song"
export const Songs =({fn , allsongs})=>{
    console.log('all songs',allsongs);
    //map(JS)
    // allsongs(data) --> convert->jsx
 return(<>
 {allsongs.map((currentSong,index)=><Song  fn= {fn } key={index} song ={currentSong}/>)}
  
 </>
 )
}