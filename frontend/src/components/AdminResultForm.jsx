import React, { useState } from "react";

const AdminResultForm = () => {
  const [formData, setFormData] = useState({
    rollNo: "",
    studentName: "",
    courseCode: "",
    courseName: "",
    credits: "",
    grade: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          programName: "B.Tech Computer Science & Engineering",
          academicYear: "2025-2026",
          semester: "Semester 3",
        }),
      });
      if (res.ok) {
        alert("Grade Published Successfully!");
        setFormData({
          rollNo: "",
          studentName: "",
          courseCode: "",
          courseName: "",
          credits: "",
          grade: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-green-50 rounded-3xl border-2 border-green-100 shadow-inner flex flex-col lg:col-span-2">
      <h2 className="text-2xl font-black text-green-700 uppercase tracking-tight">
        Academic Grade Entry
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
      >
        <input
          type="text"
          placeholder="Roll No"
          className="p-4 rounded-xl border border-green-200 outline-none"
          value={formData.rollNo}
          onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Student Name"
          className="p-4 rounded-xl border border-green-200 outline-none"
          value={formData.studentName}
          onChange={(e) =>
            setFormData({ ...formData, studentName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Course Code"
          className="p-4 rounded-xl border border-green-200 outline-none"
          value={formData.courseCode}
          onChange={(e) =>
            setFormData({ ...formData, courseCode: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Course Name"
          className="p-4 rounded-xl border border-green-200 outline-none md:col-span-2"
          value={formData.courseName}
          onChange={(e) =>
            setFormData({ ...formData, courseName: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Credits"
          className="p-4 rounded-xl border border-green-200 outline-none"
          value={formData.credits}
          onChange={(e) =>
            setFormData({ ...formData, credits: e.target.value })
          }
          required
        />
        <select
          className="p-4 rounded-xl border border-green-200 outline-none bg-white md:col-span-1"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          required
        >
          <option value="">Grade</option>
          <option value="O">O</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-green-600 text-white font-black py-4 rounded-xl hover:bg-green-700 transition-all uppercase tracking-widest shadow-lg"
        >
          {loading ? "Processing..." : "Upload Official Grade"}
        </button>
      </form>
    </div>
  );
};

export default AdminResultForm;
