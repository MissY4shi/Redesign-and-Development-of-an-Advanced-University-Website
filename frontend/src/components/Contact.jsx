import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black text-[#113b69] mb-10">
        Contact Information
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Contact Details */}
        <div className="w-full lg:w-1/3 bg-[#eaeef2] rounded-2xl p-8 border border-slate-300 shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            University Campus
          </h2>

          <div className="space-y-6 text-slate-600 text-lg">
            <div>
              <h3 className="font-bold text-slate-800">Address:</h3>
              <p>
                KRMU Campus, Sohna Road
                <br />
                Gurugram, Haryana 122103
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800">Admissions Helpline:</h3>
              <p>+91 999 999 9999</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800">Email:</h3>
              <p className="hover:text-blue-600 transition-colors cursor-pointer">
                admissions@krmu.edu.in
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Google Map */}
        <div className="w-full lg:w-2/3 bg-slate-200 rounded-2xl overflow-hidden shadow-inner min-h-[450px] border border-slate-200">
          <iframe
            title="KRMU Campus Map"
            src="https://maps.google.com/maps?q=K.R.%20Mangalam%20University,%20Sohna%20Road,%20Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
