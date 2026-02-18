import React from "react";
import { useState } from "react";

const GalleryTabs = ({ residential, commercial }) => {
  const [active, setActive] = useState("residential");

  const categories = { residential, commercial };
  const projects = categories[active] || [];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 mb-10">
        {Object.keys(categories).map((cat) => (
          <button key={cat} onClick={() => setActive(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.slug}>
            <img src={project.thumbnail} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTabs;
