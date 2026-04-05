import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-white font-bold text-lg">K.R. Mangalam University</h3>
          <p className="text-sm mt-1">Sohna Road, Gurugram, Delhi-NCR</p>
        </div>
        <div className="mt-6 md:mt-0 text-xs">
          © 2026 University Redesign Project. Built for Academic Presentation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;