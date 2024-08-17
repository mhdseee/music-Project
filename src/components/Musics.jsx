import {getMusics} from '../data/data'
import Search from './Search'
import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom'
const Musics = () => {
  const[searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  let Musics= getMusics()
  return (
    <> 
      <div className="container">
        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-12 col-md-4">
            <Search/> 
            <div className="list-group">
              {
                Musics.filter((music)=>{
                  let filter= searchParams.get('filter')
                  if(!filter) return true
                  let singer= music.singer
                  return singer.includes(filter)
                })
                .map((music)=>(
                  <NavLink className='list-group-item' to={`${music.id}${location.search}`} key={music.id}>
                    {music.singer}
                  </NavLink>
                )

                )
              }
            </div>
          </div>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Musics