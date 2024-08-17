import { useSearchParams } from "react-router-dom"

const Search = () => {
    const[searchParams, setSearchParams] = useSearchParams()
  return (
    <div>
        <div className="input-group">
        <span className="input-group-text">
            <i className="fa fa-search" ></i>
        </span>
        
        
        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" value={searchParams.get("filter") || ""}
        onChange={
            event=>{
                let filter = event.target.value
                if(filter){
                    setSearchParams({filter})
                }else{
                    setSearchParams({})
                }
            }
        }/>
    </div>
    </div>
  )
}

export default Search