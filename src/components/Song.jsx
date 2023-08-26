import { useState } from "react";


export const Song=({fn,song})=>{
   
   const play=()=>{
   
   play(true,song);
   }
  // console.log(fn,"song");
    return(
        <div className="row">
            <div className="col-4">
                <img src = {song.artworkUrl100} alt=""/>

            </div>
            
            <div className="col-4">
               {song.artistName} {song.trackName}

            </div>
            <div className="col-4">
                <button onClick={play} className="btn btn-success">play song </button>
            </div>
            <br/>
       
        </div>
    )
}
