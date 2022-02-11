import React from "react";
import { StyleSheet, View } from "react-native";
import DashboardHeader from "./DashboardHeader";
import StatisticsChart from "./StatisticsChart";
import TopCategories from "./TopCategories";

const Dashboard = (props) => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <div style={{ display: "flex", width: "100%" }}>
        <StatisticsChart />
        <TopCategories />
      </div>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: { paddingHorizontal: "1rem", flex: 1, height: "100%", paddingTop: '1.2rem' },
  dashboard: { fontFamily: "Montserrat", fontWeight: "700", fontSize: '0.85rem', marginBottom: '0.8rem' },
});
