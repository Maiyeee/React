import React from "react";
import "./App.css"; 

function Activity1() {
  const members = [
    { name: "Rhiza Mae Dacutanan", role: "Member" },
    { name: "Sharah De Dios", role: "Member" },
    { name: "Marielle Manahon", role: "Member" },
    { name: "Stephanie Nabor", role: "Member" },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Group 5</h1>
        <p>We are group 5, BSIT 2A.</p>
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

export default Activity1;