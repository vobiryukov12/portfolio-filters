export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="portfolio__categories categories">
      <ul className='categories__list'>
        {filters.map(filter => <li key={filter.id} onClick={onSelectFilter} className= {`categories__item ${filter.name === selected ? 'categories__selected' : ''}`}>{filter.name}</li>)}
      </ul>
    </div>
  );
}
