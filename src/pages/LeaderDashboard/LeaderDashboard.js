import { leaderData } from "../../data/fakeDashboardData";
import KpiCard from "../../components/KpiCard";

export default function LeaderDashboard() {
  return (
    <>
      <h1>{leaderData.teamName}</h1>

      <div style={styles.grid}>
        <KpiCard title="Performans Skoru (Sp)" value={leaderData.performanceScore} />
        <KpiCard
          title="Görev Tamamlama"
          value={leaderData.taskCompletion}
          unit="%"
        />
        <KpiCard
          title="Ortalama Verimlilik (ηeff)"
          value={leaderData.avgEfficiency}
        />
      </div>

      <p style={{ marginTop: 24 }}>
        ⚠️ Sadece kendi ekibine ait veriler gösterilmektedir.
      </p>
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
};
