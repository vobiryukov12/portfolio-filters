export default function ProjectList({ projects }) {
  return (
    <ul className='projects__list'>
      {projects.map(item => <li key={item.id} className='projects__item'><img className='projects__img' src={item.img} alt={item.category}/></li>)}
    </ul>
  )
}

