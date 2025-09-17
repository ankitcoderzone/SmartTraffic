import { motion } from "framer-motion";
import { FaCog, FaPlus, FaFileAlt, FaAmbulance } from "react-icons/fa";
import { newsUpdates } from "../../../data/dashboardData"; // removed .tsx

const categoryIcons = {
  "System Update": FaCog,
  "Maintenance": FaCog,
  "Feature": FaPlus,
  "Emergency": FaAmbulance,
  "Report": FaFileAlt,
};

const priorityColors = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-400",
};

export const NewsUpdate = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.8 }}
      className="rounded-xl p-6 bg-white/90 backdrop-blur shadow-sm hover:shadow-lg transition-all "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Latest Updates
          </h3>
          <p className="text-sm text-muted-foreground">
            System notifications and announcements
          </p>
        </div>
        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      {/* Updates List */}
      <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin">
        {newsUpdates.map((news, index) => {
          const Icon = categoryIcons[news.category] || FaCog;
          return (
            <motion.div
              key={news.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              className="relative p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
            >
              {/* Priority indicator bar */}
              <span
                className={`absolute left-0 top-0 h-full w-1 rounded-l-md ${
                  priorityColors[news.priority] || "bg-gray-300"
                }`}
              ></span>

              <div className="flex items-start space-x-3">
                {/* Icon */}
                <div className="flex-shrink-0 p-2 rounded-lg bg-gray-100">
                  <Icon className="text-gray-700 text-sm" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-foreground line-clamp-2">
                      {news.title}
                    </h4>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 capitalize">
                      {news.priority}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{news.time}</span>
                    <span className="text-blue-600 font-medium px-2 py-1 bg-blue-50 rounded">
                      {news.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
