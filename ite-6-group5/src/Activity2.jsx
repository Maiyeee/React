import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [hasMembers, setHasMembers] = useState(false);

  useEffect(() => {
    // simulate fetching data
    const data = [
      { name: "Rhiza Mae Dacutanan", role: "Member" },
      { name: "Sharah De Dios", role: "Member"  },
      { name: "Marielle Manahon", role: "Member" },
      { name: "Stephanie Nabor", role: "Member" },
       
    ];

    setMembers(data);

    // conditional check
    if (data.length > 0) {
      setHasMembers(true);
    } else {
      setHasMembers(false);
    }
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>My Team</h1>
        <p>Simple React Example</p>
      </header>

      <section className="members">
        <h2>Members</h2>

        {/* conditional rendering */}
        {hasMembers ? (
          <div className="member-list">
            {members.map((member, index) => (
              <div key={index} className="card">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No members available</p>
        )}
      </section>
    </div>
  );
}

export default App;