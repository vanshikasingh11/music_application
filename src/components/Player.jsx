 
export const Player=({song,fn})=>{
    const back=()=>{
        fn(false);
    }
    return(
        <>
        <button onClick={back} className="btn btn-success">back </button>
        <h1>Singer Name  :{song.artistName}</h1>
        <h1>Song Name  :{song.trackName}</h1>
        <div className="col-4">
           <img src = {song.artworkUrl100} alt=""/>
        </div>
        <br/>
        <br/>
        <audio controls>
            <source src={song.previewUrl} type="audio/mp4"/>
            Your Browser does not support audio element
        </audio>
        </>
    )
}
