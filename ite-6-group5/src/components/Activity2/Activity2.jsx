import { useState, useEffect } from "react";
import "./Activity2.css";

function Activity2() {
 
  const [members, setMembers] = useState([]);
  const [hasMembers, setHasMembers] = useState(false);

 
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const data = [
      { name: "Rhiza Mae Dacutanan", role: "Leader" },
      { name: "Sharah De Dios", role: "Member" },
      { name: "Marielle Manahon", role: "Member" },
      { name: "Stephanie Nabor", role: "Member" },
    ];

    setMembers(data);

    if (data.length > 0) {
      setHasMembers(true);
    } else {
      setHasMembers(false);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getInitials = (name) =>
    name.split(" ").slice(0, 2).map((w) => w[0]).join("");

  const leaderCount = members.filter((m) => m.role === "Leader").length;
  const memberCount = members.filter((m) => m.role === "Member").length;

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const formatDate = (date) =>
    date.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="a2-page">
      <div className="a2-topbar">
        <div className="a2-topbar-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="a2-topbar-text">
          <h1>Activity 2</h1>
          <p>useState + useEffect with if-else conditional statement</p>
        </div>

        <div className="a2-clock">
          <span className="a2-clock-time">{formatTime(currentTime)}</span>
          <span className="a2-clock-date">{formatDate(currentTime)}</span>
        </div>
      </div>

      {hasMembers && (
        <div className="a2-stats">
          <div className="a2-stat">
            <span className="a2-stat-label">Total</span>
            <span className="a2-stat-value">{members.length}</span>
          </div>
          <div className="a2-stat">
            <span className="a2-stat-label">Leaders</span>
            <span className="a2-stat-value">{leaderCount}</span>
          </div>
          <div className="a2-stat">
            <span className="a2-stat-label">Members</span>
            <span className="a2-stat-value">{memberCount}</span>
          </div>
        </div>
      )}

      <div className="a2-section-label">
        <span>Team members</span>
      </div>

      {hasMembers ? (
        <div className="a2-grid">
          {members.map((member, index) => (
            <div key={index} className="a2-card">
              <div className="a2-avatar">{getInitials(member.name)}</div>
              <p className="a2-card-name">{member.name}</p>
              <span className={`a2-badge ${member.role === "Leader" ? "leader" : "member"}`}>
                {member.role}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="a2-empty">No members found.</p>
      )}
    </div>
  );
}

export default Activity2;
