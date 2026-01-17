function Hero() {
    return (
        <div className="relative w-full flex flex-col py-8 h-112 items-center justify-center gap-4 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/hero_bg1.jpg')" }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <h1 className="text-6xl font-bold z-50 text-white ">Find Your Pace. Find Your People.</h1>
            <p className="text-3xl text-white z-50">Join a growing community of Filipino runners.</p>
            <button className="z-50 border-none border text-lg px-6 py-3 rounded-lg bg-blue-600 text-white font-bold tracking-wide">Follow Us in Facebook</button>
        </div>
    )
}

export default Hero