import { useEffect, useState } from "react";

function EventsGallery() {
    const [events, setEvents] = useState([]);

    // https://aaron.free.nf/index.php?url=events
    //http://localhost/mvc_1/public/index.php?url=events
    useEffect(() => {
        fetch("https://aaron.free.nf/index.php?url=events")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])
    return (
            <div className="flex flex-col gap-2 py-8 bg-[#fff9f4]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Upcoming Races</h1>
                <p className="text-xl text-gray-900">Discover events that match your pace and passion.</p>
            </div>
            <div className="mt-4 flex justify-center">
                {/* events list */}
                <div className="flex flex-wrap gap-6 p-4">
                    {events.map((event) => (
                        <div className="w-md shadow-lg hover:scale-105 cursor-pointer hover:shadow-xl" key={event.id}>
                            <div className="bg-cover bg-center bg-no-repeat h-40 rounded-md"
                                style={{ backgroundImage: "url('/banner.png ')" }}>
                            </div>
                            <div className="p-2 flex flex-col gap-2">
                                <div>
                                    <p className="text-2xl font-bold">{event.event_name}</p>
                                    <p className="text-md uppercase">{event.organizer}</p>
                                </div>
                                <p className="text-lg">{event.datetime}</p>
                                <p className="text-lg">{event.location}</p>
                                <div className="flex gap-2 text-lg ">
                                    <p className="bg-violet-400 rounded-xl px-2  text-white">2K</p>
                                    <p className="bg-violet-400 rounded-xl px-2 text-white">5K</p>
                                    <p className="bg-violet-400 rounded-xl px-2  text-white">10K</p>
                                </div>
                            </div>
                            {/* Organizer: {event.event_name} <br />
                            Organizer:  <br />
                            Date:  <br />
                            Location: } <br />
                            Category: {event.category} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventsGallery