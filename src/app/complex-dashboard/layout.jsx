export default function ComplexDashboardLayout({
  children,
  users,
  performance,
  activity,
}) {
  return (
    <section>
      <h1>{children}</h1>
      <div style={{display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>{users}</div>
          <div>{performance}</div>
        </div>
        <div style={{display: "flex", flex: 1}}>{activity}</div>
      </div>
    </section>
  );
}
