import React, { useState } from "react";

const AdminNoticeForm = ({ onNoticePosted }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setTitle("");
        setContent("");
        if (onNoticePosted) onNoticePosted();
      }
    } catch (err) {
      console.error("Post error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Added h-full and flex flex-col to stretch the card
    <div className="h-full p-8 bg-blue-50 rounded-3xl border-2 border-blue-100 shadow-inner flex flex-col animate-in fade-in slide-in-from-top-4 duration-500">
      <h2 className="text-2xl font-black text-[#003366] uppercase tracking-tight">
        Publish Official Notice
      </h2>

      {/* Added flex-grow so the form stretches inside the card */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-6 flex-grow flex flex-col"
      >
        <input
          type="text"
          placeholder="Notice Title (e.g. Exam Schedule)"
          className="w-full p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {/* Added flex-grow so the textarea absorbs the empty space */}
        <textarea
          placeholder="Write the official announcement content here..."
          className="w-full p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none flex-grow"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        {/* Added mt-auto to ensure the button is pushed exactly to the bottom */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg uppercase tracking-widest disabled:opacity-50 mt-auto"
        >
          {loading ? "Publishing..." : "Publish Official Notice"}
        </button>
      </form>
    </div>
  );
};

export default AdminNoticeForm;
