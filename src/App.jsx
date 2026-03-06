import React from "react";
import { motion } from "framer-motion";

const InvitePage = () => {

  const config = {
    group: "АСОИиУ-2-23(9)",
    college: "ОшТУ Колледжи",
    date: "05.03.2026",
    time: "18:00",
    location: "г. Ош, Ошту универстет 'Ош Ордо'",
    waNumber: "996777150509"
  };

  const sendWa = () => {
    const text = encodeURIComponent(`Салам! Я приду. Группа ${config.group}`);
    window.open(`https://wa.me/${config.waNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">


      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[-20%] left-[-20%] w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[120px] opacity-30"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-[-20%] right-[-20%] w-72 h-72 md:w-96 md:h-96 bg-cyan-600 rounded-full blur-[120px] opacity-30"
      />


      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
        relative z-10 
        w-full 
        max-w-md 
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-3xl 
        p-6 md:p-10 
        shadow-2xl
        "
      >


        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <img
            src="http://oshtu.kg/wp-content/uploads/2025/05/logo0003.svg"
            alt="OSHTU"
            loading="lazy"
            className="w-40 md:w-56 object-contain"
          />
        </motion.div>


        <div className="text-center mb-8 md:mb-10">

          <p className="text-cyan-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3">
            Graduation Invitation
          </p>

          <motion.h1
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black mb-2 tracking-tight uppercase italic"
          >
            {config.group}
          </motion.h1>

          <p className="text-gray-400 tracking-widest text-xs md:text-sm italic">
            {config.college}
          </p>

        </div>


        <div className="space-y-6 mb-8 md:mb-10 border-y border-white/10 py-6">

          <div className="flex items-center gap-3">
            <span className="text-xl">📅</span>
            <div>
              <span className="text-cyan-400 text-[10px] uppercase block">
                Event Date
              </span>
              <span className="text-lg md:text-xl font-bold">
                {config.date} — {config.time}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <div>
              <span className="text-cyan-400 text-[10px] uppercase block">
                Location
              </span>
              <span className="text-sm md:text-base font-semibold">
                {config.location}
              </span>
            </div>
          </div>

        </div>


        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={sendWa}
          className="
          w-full 
          bg-white 
          text-black 
          py-4 md:py-5 
          rounded-xl md:rounded-2xl 
          font-black 
          text-base md:text-lg 
          tracking-widest 
          shadow-xl 
          hover:bg-cyan-400 
          hover:shadow-cyan-400/40
          transition
          "
        >
          ПОДТВЕРДИТЬ УЧАСТИЕ
        </motion.button>

        <div className="mt-6 text-center">
          <code className="text-[9px] md:text-[10px] text-gray-600 font-mono">
            dev: Madazimov M 
          </code>
        </div>

      </motion.div>

    </div>
  );
};

export default InvitePage;