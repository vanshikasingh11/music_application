import { Player } from "../components/Player";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs}  from "../services/apiclient";
import { useEffect, useState } from "react";

export const SearchPage=()=>{
    const [allSongs, setSongs] =useState([]);
    // Component Life Cycle
    const [flag, setFlag] = useState(false);
    const [song, setSong]=useState(null);

    const loadSongs=async ()=>{
        const resp = await getSongs('Latest Songs');
        console.log(resp,"resppp");
        setSongs(resp);
    }
    useEffect(()=>{
        loadSongs();
    },[])
    const togglePlayer= (flag, songarg) => {
        setSong(songarg);
        setFlag(flag);
    }

    const getArtistName=async (artistName)=>{
        console.log('rec Artist name', artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx = <><Search fn={getArtistName}/>
    <Songs allsongs={allSongs} fun={togglePlayer}/></>;
    return(
    <div className='container'>
        <h1 className="alert alert-success text-center">Music Store</h1>
        {flag?<Player song={song} fn ={togglePlayer}/>:jsx}
        
    </div>
    );
}