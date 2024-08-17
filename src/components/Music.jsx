import { useParams } from "react-router-dom"
import { getMusic } from "../data/data"
const Music = () => {
  const params= useParams()
  const Music= getMusic(params.MusicId)
 if(Music){
  return (
    <>
      <div className="col-12 col-md-6">
        <div className="card" style={{width: "16rem"}}>
          <img src={Music.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">song name:{Music.song}</p>
            <p className="card-text"> album:
              {Music.album}</p>
          </div>
        </div>
      </div>
    </>
  )
 }else{
  return(
    <div className="text-center text-danger">
      sorry we don't have this music
    </div>
  )
 }
}

export default Music