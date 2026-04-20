import { useState, useEffect } from "react";
import "./Activity2.css";

function Activity2() {
  const [members, setMembers] = useState([]);
  const [hasMembers, setHasMembers] = useState(false);

  useEffect(() => {
    const data = [
      { name: "Rhiza Mae Dacutanan", role: "Frontend" },
      { name: "Sharah De Dios", role: "Backend" },
      { name: "Marielle Manahon", role: "UI Designer" },
      { name: "Stephanie Nabor", role: "Tester" },
    ];

    setMembers(data);
    setHasMembers(data.length > 0);
  }, []);

  return (
    <div className="a2-container">
      <header className="a2-header">
        <h1>Activity 2</h1>
        <p>useState + useEffect with Conditional Rendering</p>
      </header>

      <section className="a2-members">
        <h2>Team Members</h2>

        {hasMembers ? (
          <div className="a2-grid">
            {members.map((member, index) => (
              <div key={index} className="a2-card">
                <div className="a2-avatar">
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="a2-empty">No members found</p>
        )}
      </section>
    </div>
  );
}

export default Activity2;