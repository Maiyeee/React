import React from "react";
import "./App.css";

function App() {
  const members = [
    { name: "Juan Dela Cruz", role: "Leader" },
    { name: "Maria Santos", role: "Designer" },
    { name: "Pedro Reyes", role: "Developer" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Our Group</h1>
        <p>We build simple and useful projects.</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a group of IT students working together to create practical
          solutions using technology.
        </p>
      </section>

      <section className="members">
        <h2>Members</h2>
        <div className="member-list">
          {members.map((member, index) => (
            <div key={index} className="card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;