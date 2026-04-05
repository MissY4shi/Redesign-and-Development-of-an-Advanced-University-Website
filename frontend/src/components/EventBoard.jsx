import React, { useState, useEffect } from "react";

const EventBoard = ({ user, refreshTrigger }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://redesign-and-development-of-an-advanced.onrender.com/api/events/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEvents(events.filter((event) => event._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div
      id="events-section"
      className="max-w-6xl mx-auto py-12 px-6 border-t border-slate-200 mt-12"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">
          Upcoming Events
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event._id}
            className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 flex flex-col"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="bg-orange-100 text-orange-600 font-bold text-sm px-3 py-1 rounded-md inline-block mb-4 shadow-sm self-start">
              {new Date(event.eventDate).toLocaleDateString()}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {event.title}
            </h3>
            <p className="text-sm font-semibold text-slate-500 mb-3">
              📍 {event.location}
            </p>

            {/* REMOVED line-clamp-3 here! */}
            <p className="text-slate-600 mb-4 leading-relaxed flex-grow">
              {event.description}
            </p>

            {user === "faculty" && (
              <button
                onClick={() => handleDelete(event._id)}
                className="w-full mt-2 bg-red-50 text-red-600 py-2 rounded-lg font-bold text-sm hover:bg-red-500 hover:text-white transition-colors border border-red-100"
              >
                Delete Event
              </button>
            )}
          </div>
        ))}
        {events.length === 0 && (
          <p className="text-slate-500 italic col-span-full bg-slate-50 p-8 rounded-2xl text-center border border-dashed border-slate-300">
            No upcoming events scheduled at the moment. Check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default EventBoard;
