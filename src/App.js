import React from "react";
import "./App.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";

function App() {
  const pdata = [
    {
      name: "Python",
      student: 13,
      fees: 10,
    },
    {
      name: "Java",
      student: 20,
      fees: 15,
    },
    {
      name: "Scala",
      student: 21,
      fees: 20,
    },
    {
      name: "JavaScript",
      student: 11,
      fees: 8,
    },
    {
      name: "React Js",
      student: 14,
      fees: 18,
    },
    {
      name: "C++",
      student: 8,
      fees: 7,
    },
    {
      name: "C",
      student: 5,
      fees: 4,
    },
  ];

  // for Radial Chart
  const pdata1 = [
    {
      name: "Python",
      student: 13,
      fees: 10,
      fill: "#8884d8",
    },
    {
      name: "Java",
      student: 20,
      fees: 15,
      fill: "#83a6ed",
    },
    {
      name: "Scala",
      student: 21,
      fees: 20,
      fill: "#8dd1e1",
    },
    {
      name: "JavaScript",
      student: 11,
      fees: 8,
      fill: "#82ca9d",
    },
    {
      name: "React Js",
      student: 14,
      fees: 18,
      fill: "#a4de6c",
    },
    {
      name: "C++",
      student: 8,
      fees: 7,
      fill: "#d0ed57",
    },
    {
      name: "C",
      student: 5,
      fees: 4,
      fill: "#ffc658",
    },
  ];

  // For PieChart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#5eff42",
    "#ad42ff",
    "#ff4268",
  ];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h1 className="head-charts">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#dfff78" }} />
          <Legend />
          <Line dataKey="student" stroke="red" activeDot={{ r: 5 }} />
          <Line dataKey="fees" stroke="blue" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
      <br></br>
      <br></br>
      <hr></hr>
      <h1 className="head-charts">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#99f27e" }} />
          <Legend />
          <Area
            type="monotone"
            dataKey="student"
            stroke="#000dff"
            fill="#b80707"
          />
          <Area
            type="monotone"
            dataKey="fees"
            stroke="#ff0000"
            fill="#dbba25"
          />
        </AreaChart>
      </ResponsiveContainer>
      <br></br>
      <br></br>
      <hr></hr>
      <h1 className="head-charts">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 50, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#e699ff" }} />
          <Legend />
          <Bar dataKey="student" fill="#1e35fc" />
          <Bar dataKey="fees" fill="#f04826" />
        </BarChart>
      </ResponsiveContainer>
      <br></br>
      <br></br>
      <hr></hr>
      <h1 className="head-charts">Pie Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart width={500} height={500}>
          <Tooltip contentStyle={{ backgroundColor: "#e699ff" }} />
          <Pie
            data={pdata}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="student"
          >
            {pdata.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <br></br>
      <br></br>
      <hr></hr>
      <h1 className="head-charts">Radial Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <RadialBarChart
          width={500}
          height={100}
          innerRadius="15%"
          outerRadius="100%"
          data={pdata1}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={20}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="student"
          />
          <RadialBar
            minAngle={20}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="fees"
          />
          <Legend
            iconSize={20}
            width={120}
            height={140}
            layout="vartical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip contentStyle={{ backgroundColor: "#f0ae22" }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
