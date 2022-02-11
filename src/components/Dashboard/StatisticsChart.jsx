import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { chartData, legendPayload } from "../../utils/constants";

const labelStyle = {
  fontSize: "0.7rem",
  fontFamily: "Montserrat",
  fill: "#B9B9B9",
};

const StatisticsChart = props => {
    return (
      <View style={styles.chartVw}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartHeadline}>Business Statistics</Text>
          <View style={styles.chartHeader}>
            {legendPayload.map((legend, i) => (
              <View>
                <View
                  style={[
                    styles.chartHeader,
                    { marginRight: i ? 0 : "2.5rem" },
                  ]}
                >
                  <View
                    style={[styles.circle, { backgroundColor: legend.color }]}
                  />
                  <Text style={styles.legend}>{legend.label}</Text>
                </View>
                <View
                  style={[
                    styles.chartHeader,
                    { marginRight: i ? 0 : "2.5rem", marginTop: 6 },
                  ]}
                >
                  <View style={[styles.circle, { backgroundColor: "white" }]} />
                  <Text
                    style={[
                      styles.legend,
                      { color: "black", fontWeight: "500" },
                    ]}
                  >
                    {legend.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <LineChart width={700} height={300} data={chartData} margin={{ top: 30 }}>
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="month" strokeWidth={0} style={labelStyle} />
          <YAxis strokeWidth={0} style={labelStyle} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="numOfRfqSqs"
            stroke="#5F2EEA"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#4BDE97"
            strokeWidth={2}
          />
        </LineChart>
      </View>
    );
}

export default memo(StatisticsChart);

const styles = StyleSheet.create({
  container: { padding: "1rem", flex: 1, height: "100%" },
  dashboard: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "0.85rem",
    marginBottom: "0.8rem",
  },
  chartVw: {
    backgroundColor: "white",
    paddingVertical: "1rem",
    paddingRight: "2rem",
    paddingLeft: "1rem",
    width: "fit-content",
    marginRight: '1rem',
  },
  chartHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartHeadline: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "0.85rem",
    flex: 1,
  },
  circle: { width: 7, height: 7, borderRadius: 7, marginRight: "0.5rem" },
  legend: { fontFamily: "Montserrat", fontSize: "0.75rem", color: "#B9B9B9" },
});
