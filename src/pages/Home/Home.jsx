import EventsGallery from "../../components/EventsGallery/EventsGallery";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <EventsGallery/>
            {/* {events.length === 0 ? (
                <p>No events found.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            Organizer: {event.event_name} <br />
                            Organizer: {event.organizer} <br />
                            Date: {event.datetime} <br />
                            Location: {event.location} <br />
                            Category: {event.category}
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    )
}

export default Home;