export default function KpiCard({ title, value, unit }) {
  return (
    <div style={styles.card}>
      <p style={styles.title}>{title}</p>
      <h2 style={styles.value}>
        {value} {unit && <span>{unit}</span>}
      </h2>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    minWidth: "160px",
  },
  title: {
    color: "#666",
    marginBottom: "8px",
  },
  value: {
    margin: 0,
  },
};
