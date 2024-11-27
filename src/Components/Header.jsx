
function Header(props) {
    return (
        <>
            <div className="flex justify-between flex-wrap  ">

                <div>
                    <h1 className="text-3xl text-[#166FE5] font-medium motion-preset-blur-right motion-duration-2000 ">
                        Hi {props.username} ! , <span className="text-orange-500">Have a Nice Day...</span>
                    </h1>
                    <p className="text-green-600 text-xl font-medium mt-2 mb-2 ">
                        I'll help you check the weather Report.
                    </p>
                </div>

                <div>
                    <h1 className="text-orange-500 text-3xl font-medium motion-preset-typewriter-[12]">
                        Weather App
                    </h1>
                </div>
                
            </div>
        </>
    )
}
export default Header