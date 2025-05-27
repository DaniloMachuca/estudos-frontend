import { useEffect, useState } from "react";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/DaniloMachuca/repos")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setRepos(data);
        }, 2000);
      });
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}
      <ul>
        {repos.map(({ id, name, html_url }) => (
          <li key={id}>
            <a target="_blank" href={html_url}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposList;
