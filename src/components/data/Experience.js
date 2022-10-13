import {useState, useEffect} from 'react'
import ExperiencesCard from '../cards/ExperiencesCard'
import styles from './Data.module.css'

export default function Experience () {

    const [experience, setExperience] = useState([])

    useEffect(() => {
        // Para ver o loading
        setTimeout(
          () =>
            fetch('http://localhost:5000/companies', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((resp) => resp.json())
              .then((data) => {
                setExperience(data)
              }),
          100,
        )
      }, [])
      return (
          <div className={styles.data}>
              <h1>Experiences</h1>
              {experience.length > 0 &&
              experience.map((experience) => (
                  <ExperiencesCard
                  key={experience.id}
                  nome={experience.nome}
                  periodo={experience.periodo}
                  fucoes={experience.fucoes}/>
              ))}
          </div>
      )
}