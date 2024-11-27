import Header from "../Components/Header"
import Weather from "../Components/Weather"
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()
    return (
        <>
            <div className="bg-gray-900 p-10">
                <div className="bg-[#fff5f0] p-8 rounded-md">
                    <Header username={data.state.user} />
                    <Weather />
                </div>
            </div>
        </>
    )
}
export default Landing