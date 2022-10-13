import {useState, useEffect} from 'react'
import ProjectCard from '../cards/ProjectCard'
import styles from './Data.module.css'

export default function Project () {

    const [project, setProject] = useState([])

    useEffect(() => {
        // Para ver o loading
        setTimeout(
          () =>
            fetch('http://localhost:5000/projects', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setProject(data)
              }),
          100,
        )
      }, [])

    return (
          <div className={styles.data}>
              <h1>My Projects</h1>
              {project.length > 0 &&
              project.map((project) => (
                  <ProjectCard
                  key={project.id}
                  nome={project.nome}
                  linguagem={project.linguagem}
                  descricao={project.descricao}
                  ano_construcao={project.ano_construcao}
                  ferramentas={project.ferramentas}/>
              ))}    
          </div>
        )
}