import {useEffect , useState} from 'react'

const Home = () => {


    const [workouts,setWorkouts] = useState(null)
    useEffect(()=>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){

            }
        }
        fetchWorkouts()

    },[])
    
    return ( 

        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                   <p key={workout._id} >{workout.title}</p>
                ))}
            </div>
        </div>

     );
}
 
export default Home;