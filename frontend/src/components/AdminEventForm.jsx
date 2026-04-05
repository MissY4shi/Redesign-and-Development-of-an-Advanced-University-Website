import React, { useState } from "react";

const AdminEventForm = ({ onEventPosted }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://redesign-and-development-of-an-advanced.onrender.com/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, eventDate, location }),
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        setEventDate("");
        setLocation("");
        if (onEventPosted) onEventPosted();
      }
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Added h-full and flex flex-col
    <div className="h-full p-8 bg-orange-50 rounded-3xl border-2 border-orange-100 shadow-inner flex flex-col animate-in fade-in slide-in-from-top-4 duration-500">
      <h2 className="text-2xl font-black text-orange-600 uppercase tracking-tight">
        Schedule Campus Event
      </h2>

      {/* Added flex-grow */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-6 flex-grow flex flex-col"
      >
        <input
          type="text"
          placeholder="Event Title (e.g., Tech Fest 2026)"
          className="w-full p-4 rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="flex gap-4">
          <input
            type="date"
            className="w-1/2 p-4 rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white outline-none text-slate-600"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location (e.g., Main Auditorium)"
            className="w-1/2 p-4 rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        {/* Added flex-grow */}
        <textarea
          placeholder="Event description and details..."
          className="w-full p-4 rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white outline-none resize-none flex-grow"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        {/* Added mt-auto */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all uppercase tracking-widest disabled:opacity-50 mt-auto"
        >
          {loading ? "Publishing..." : "Publish Event"}
        </button>
      </form>
    </div>
  );
};

export default AdminEventForm;
