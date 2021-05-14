import React, {useState} from 'react'

const Accordion = (props) => {
    const [displayToggle, setDisplayToggle] = useState(false)

    return(
        <article className="card">
                 <button
                     onClick={(event)=>{
                      event.preventDefault()
                          setDisplayToggle(!displayToggle)
          }}
            >
                     <img src={props.result.image} alt="Card image cap" />
                     <h5 class="card-title">{props.result.name} - <i class="card-title">{props.result.status}</i> </h5>
                     </button> 
                
                
                
              {displayToggle &&(<>
                
                
                Localização: <h6 class="card-title">{props.result.location.name} </h6> 
                Gênero: <h6 class="card-title">{props.result.gender} </h6> 
                Data de criação: <h6 class="card-title">{props.result.created} </h6> 
                
                
                
              </>)}
              

              </article>
        )
}

export default Accordion