function Badge({ label, type }) {
  const badgeColors = {
    category: {
      backgroundColor: "#e0f2fe",
      color: "#0369a1",
    },

    available: {
      backgroundColor: "#dcfce7",
      color: "#166534",
    },

    unavailable: {
      backgroundColor: "#fee2e2",
      color: "#991b1b",
    },
  }

  const selectedStyle = badgeColors[type] || badgeColors.category

  return (
    <span
      style={{
        ...styles.badge,
        ...selectedStyle,
      }}
    >
      {label}
    </span>
  )
}

const styles = {
  badge: {
    display: "inline-block",
    padding: "5px 11px",
    borderRadius: "999px",
    fontSize: "0.72rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
}

export default Badge