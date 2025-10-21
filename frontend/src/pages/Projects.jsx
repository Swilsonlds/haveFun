import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // prefer env var or relative path
  const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    fetch(`${API}/api/projects`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects…</p>;
  if (!projects.length) return <p>No projects yet — add some via the API.</p>;

  return (
    <div className="app">
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p._id}>
            <h3>{p.title}</h3>
            {p.description && <p>{p.description}</p>}
            {p.url && (
              <p>
                <a href={p.url} target="_blank" rel="noreferrer">
                  Live demo / repo
                </a>
              </p>
            )}
            {p.tags && p.tags.length > 0 && <p>Tags: {p.tags.join(', ')}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}