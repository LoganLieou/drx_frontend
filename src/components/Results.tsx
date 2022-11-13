import { Link, useParams } from 'react-router-dom'
import waves2 from '../images/waves2.svg'
import CityContainer from './CityContainer'

function Results() {
    const {origin, destination} = useParams()
    const results = [1,12,34,5,3]
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
            <div className="bg-[#475790] w-fit mt-20 mb-2 rounded-md">
                <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
                    <Link to="/">
                    knock knock
                    </Link>
                </div>
            </div>

            <h1 className="italic text-[#434C5E] text-lg mb-8">find your new neighborhood</h1>

            {results.map(() => (<CityContainer/>))}


            <img src={waves2} className="relative inset-x-0 bottom-0"/>
      </div>
    )
}

export default Results
