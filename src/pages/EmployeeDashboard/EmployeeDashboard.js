import { employeeData } from "../../data/fakeDashboardData";
import KpiCard from "../../components/KpiCard";

export default function EmployeeDashboard() {
  return (
    <>
      <h1>Hoş geldin, {employeeData.name}</h1>

      <div style={styles.grid}>
        <KpiCard
          title="Verimlilik (ηeff)"
          value={employeeData.efficiency}
        />
        <KpiCard
          title="Bugünkü Çalışma Süresi"
          value={employeeData.todayWorkTime}
        />
      </div>

      <div style={styles.reminder}>
        ⏰ {employeeData.breakReminder}
      </div>
    </>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginTop: "24px",
  },
  reminder: {
    marginTop: "24px",
    padding: "12px",
    background: "#e0f2fe",
    borderRadius: "8px",
  },
};
