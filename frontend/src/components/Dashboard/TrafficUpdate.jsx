import { motion } from "framer-motion";
import { FaChartLine, FaChartBar, FaChartPie, FaArrowUp } from "react-icons/fa";
import { Card } from "./ui/card";
import { TrafficChart } from "../../charts/TrafficChart";
import { AccidentChart } from "../../charts/AccidentChart";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const Analytics = () => {
  const analyticsCards = [
    {
      title: "Peak Hours Analysis",
      value: "8AM - 10AM",
      subtitle: "Highest traffic volume",
      icon: FaChartLine,
      color: "text-blue-500"
    },
    {
      title: "Average Speed",
      value: "45.2 km/h",
      subtitle: "+5.4% from last month",
      icon: FaArrowUp,
      color: "text-green-500"
    },
    {
      title: "Traffic Efficiency",
      value: "78%",
      subtitle: "Improved by 12%",
      icon: FaChartBar,
      color: "text-purple-500"
    },
    {
      title: "Violation Rate",
      value: "2.3%",
      subtitle: "Decreased by 0.8%",
      icon: FaChartPie,
      color: "text-orange-500"
    }
  ];

  const timeRanges = [
    "Last 24 Hours",
    "Last 7 Days", 
    "Last 30 Days",
    "Last 3 Months",
    "Last Year"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 w-[1300px] mx-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Traffic Analytics
              </h1>
              <p className="text-muted-foreground">
                Advanced traffic data analysis and insights
              </p>
            </div>
            <div className="flex gap-2">
      <Card className="w-52 rounded-2xl shadow-md border-0 bg-white/90 backdrop-blur bg-white">
        <Select defaultValue="Last 7 Days">
          <SelectTrigger
            className="w-full rounded-xl bg-gray-50 px-4 py-2 text-sm font-medium shadow-sm 
                       border-0 focus:ring-0 focus:ring-offset-0 focus:outline-none 
                       hover:bg-gray-100 transition"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            className="rounded-xl shadow-lg border-0 bg-white"
          >
            {timeRanges.map((range) => (
              <SelectItem
                key={range}
                value={range}
                className="relative cursor-pointer pl-8 pr-3 py-2 text-sm rounded-lg hover:bg-gray-100 focus:bg-gray-100 data-[state=checked]:bg-gray-50">
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
    </Card>
    <Card className="  shadow-md border-0 bg-white/90 backdrop-blur bg-white">
    <Button className="bg-blue-500 text-white">Export Data</Button>
    </Card>
              
            </div>
          </div>
        </motion.div>

        {/* Analytics Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {analyticsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-none hover:shadow-lg transition-all bg-white">
                <div className="flex items-center justify-between mb-4">
                  <card.icon className={`text-2xl ${card.color}`} />
                  <Button variant="ghost" size="sm">
                    <FaChartLine size={14} />
                  </Button>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  {card.title}
                </h3>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {card.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
         <Card className="bg-card/80 backdrop-blur-sm border-none hover:shadow-lg transition-all h-max bg-white">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TrafficChart/>
          </motion.div>
         </Card> 
          <Card className="bg-card/80 backdrop-blur-sm border-none hover:shadow-lg transition-all h-max bg-white">
            <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AccidentChart />
          </motion.div>
          </Card>
          
        </div>

        {/* Detailed Analytics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Traffic Flow Analysis */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-none bg-white">
            <h3 className="text-lg font-semibold mb-4">Traffic Flow Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Inbound Traffic</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Outbound Traffic</span>
                <span className="font-medium">35%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
          </Card>

          {/* Route Efficiency */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-none bg-white">
            <h3 className="text-lg font-semibold mb-4">Route Efficiency</h3>
            <div className="space-y-3">
              {["Main Street", "Highway 101", "Downtown Ave", "Airport Road"].map((route, index) => (
                <div key={route} className="flex justify-between items-center">
                  <span className="text-sm">{route}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-green-500" : 
                      index === 1 ? "bg-yellow-500" : 
                      index === 2 ? "bg-orange-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-sm font-medium">
                      {index === 0 ? "90%" : index === 1 ? "75%" : index === 2 ? "60%" : "45%"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Predictions */}
          <Card className="p-6 bg-card text-card-foreground rounded-xl bg-white shadow-sm backdrop-blur-sm border border-none">
  <h3 className="text-lg font-semibold mb-4">Traffic Predictions</h3>
  
  <div className="space-y-3">
    {/* Next Hour */}
    <div className="p-3 rounded-lg bg-muted text-muted-foreground transition-transform hover:scale-[1.02] bg-gray-100">
      <div className="text-sm font-medium text-foreground">Next Hour</div>
      <div className="text-xs">Expected increase: <span className="text-success font-semibold">+15%</span></div>
    </div>

    {/* Evening Rush */}
    <div className="p-3 rounded-lg bg-muted text-muted-foreground transition-transform hover:scale-[1.02]  bg-gray-100">
      <div className="text-sm font-medium text-foreground">Evening Rush</div>
      <div className="text-xs">Peak at <span className="text-warning font-semibold">5:30 PM</span></div>
    </div>

    {/* Weekend */}
    <div className="p-3 rounded-lg bg-muted text-muted-foreground transition-transform hover:scale-[1.02] bg-gray-100">
      <div className="text-sm font-medium text-foreground">Weekend</div>
      <div className="text-xs">Traffic <span className="text-success font-semibold">25% lower</span></div>
    </div>
  </div>
</Card>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
