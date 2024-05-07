import './breadcrumb.style.css';
const breadcrumbData = [
  {
    id: 'women',
    label: 'Women',
  },
  {
    id: 'dresses',
    label: 'Dresses',
  },
];

// type Props = {};

export const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <ul>
        {breadcrumbData.map(({ id, label }) => (
          <li key={id}>
            <a href="" className="breadcrumb__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
