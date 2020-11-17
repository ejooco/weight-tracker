import React from "react";
import { timeFormat } from "d3-time-format";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  {
    date: "2007-06-29T00:00:00.000Z",
    index: 100
  },
  {
    date: "2007-08-06T00:00:00.000Z",
    index: 100.38
  },
  {
    date: "2007-09-18T00:00:00.000Z",
    index: 105.16
  },
  {
    date: "2007-10-31T00:00:00.000Z",
    index: 131.14
  },
  {
    date: "2020-03-02T00:00:00.000Z",
    index: 315.6788520002291
  },
  {
    date: "2020-04-20T00:00:00.000Z",
    index: 271.49095938908175
  }
];

const transformedData = data.map(item => {
  return {
    date: new Date(item.date).getTime(),
    index: item.index
  };
});

const monthFormat = timeFormat("%Y");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const ticks = [
  1167589800000,
  1199125800000,
  1230748200000,
  1262284200000,
  1293820200000,
  1325356200000,
  1356978600000,
  1388514600000,
  1420050600000,
  1451586600000,
  1483209000000,
  1514745000000,
  1546281000000,
  1577817000000
];

const tooltipStyles = {
  background: "#fff",
  padding: "8px",
  border: "1px solid"
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div style={tooltipStyles}>
        <p className="label">{`smallcase: ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
}

const Charty = () => (
  <div style={styles}>
    <LineChart
      width={600}
      height={300}
      data={transformedData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="index" stroke="#8884d8" dot={false} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
      <XAxis
        dataKey="date"
        type="number"
        domain={[1167589800000, 1577817000000]}
        // domain={['auto', 'auto']}
        tickFormatter={monthFormat}
        ticks={ticks}
        interval={0}
      />
      <YAxis tickCount={8} />
      <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />
    </LineChart>
  </div>
);

export default Charty;