import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setRepos(data);
        }, 2000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, html_url }) => (
            <li className={styles.listItem} key={id}>
              <a className={styles.ItemName} target="_blank" href={html_url}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
