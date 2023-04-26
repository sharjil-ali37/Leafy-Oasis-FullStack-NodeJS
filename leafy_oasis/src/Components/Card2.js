
import './Card2.css'
function Card2(props){
    return(
                <>

                <main class="page-content">
                        <div class="card">
                            <div class="content">
                                <h2 class="title">{props.name}</h2>
                                <p class="copy">{props.description}</p><button class="btn">View Trips</button>
                            </div>
                        </div>
                        
                    </main>

                </>
    )
}
export default Card2;