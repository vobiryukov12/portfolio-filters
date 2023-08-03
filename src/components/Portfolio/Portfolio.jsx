import { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projects from '../../data/projects.json';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(project => project.category === filter);

  const filters = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Websites'},
    {id: 3, name: 'Flayers'},
    {id: 4, name: 'Business Cards'}
  ];
  
  return (
    <div className='container'>
      <div className='portfolio'>
        <Toolbar filters={filters} selected={filter} onSelectFilter={filter => setFilter(filter.target.textContent)} />
        <ProjectList projects={filter === 'All' ? projects : filteredProjects} />
      </div>
    </div>
  );
}
