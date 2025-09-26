import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const points = [
  {
    title: "Faster Emergencies",
    desc: "Ambulances and fire trucks get priority, reducing response times.",
    icon: "🚑",
    pos: { x: "2%", y: "50%" },
  },
  {
    title: "Less Traffic Jams", 
    desc: "AI-driven traffic lights keep vehicles moving smoothly.",
    icon: "🚗",
    pos: { x: "25%", y: "10%" },
  },
  {
    title: "Eco-Friendly",
    desc: "Optimized routes reduce CO₂ emissions and fuel waste.",
    icon: "🌱", 
    pos: { x: "50%", y: "60%" },
  },
  {
    title: "Better Planning",
    desc: "Authorities use real-time data for smarter city decisions.",
    icon: "📊",
    pos: { x: "75%", y: "15%" },
  },
];

const WhySmartTraffic = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20 text-blue-800"
        >
          Why Smart Traffic Matters?
        </motion.h2>

        {/* Desktop: Curved Road Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Curved Road SVG */}
          <svg
            className="absolute inset-0 w-full h-[400px] pointer-events-none z-0"
            viewBox="0 0 800 300"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            {/* Main curved road */}
            <path
              d="M 40 180 Q 200 50 400 180 Q 600 280 760 120"
              stroke="url(#roadGradient)"
              strokeWidth="4"
              strokeDasharray="18 12"
              strokeLinecap="round"
              fill="transparent"
              className="drop-shadow-sm"
            />
          </svg>

          {/* Desktop Cards Container */}
          <div className="relative h-[400px] px-4">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 120 
                }}
                viewport={{ once: true }}
                className="absolute w-72 max-w-[280px] bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-100 hover:bg-white transition-all duration-300 z-10"
                style={{ 
                  left: `clamp(0%, ${point.pos.x}, calc(100% - 280px))`, 
                  top: `clamp(0%, ${point.pos.y}, calc(100% - 120px))`
                }}
              >
                {/* Blue Location Pin */}
                <div className="absolute -top-2 -right-2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: i * 0.15 + 0.3, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                    className="relative"
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                  </motion.div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-2xl p-2 bg-blue-50 rounded-lg flex-shrink-0">
                    {point.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-blue-800 mb-2 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl p-2 bg-blue-50 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400"></div>
          
          <div className="space-y-8">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-4 rounded-xl shadow-lg ml-12"
              >
                {/* Mobile Pin */}
                <div className="absolute -left-14 top-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                    className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md flex items-center justify-center relative"
                  >
                    <MapPin className="w-3 h-3 text-white" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                  </motion.div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-xl p-2 bg-blue-50 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-blue-800 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmartTraffic;