import { ProductCard } from 'src/components/productCard';
import { categoriesData } from '../../utils/fakeCategoriesData';
import './Categories.style.css';
import { Pagination } from 'src/components/ui/pagination';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'src/components/ui/breadcrumb';
import DropDown from 'src/components/ui/dropDown';
import { useState } from 'react';
import Checkbox from 'src/components/ui/checkbox';
import Button from 'src/components/ui/button';

const categoriesSortBy = [
  {
    label: 'Best Selling',
    id: 'bestSelling',
  },
  {
    label: 'Newest',
    id: 'newest',
  },
  {
    label: 'Lowest Price',
    id: 'lowestPrice',
  },
  {
    label: 'Highest Price',
    id: 'highestPrice',
  },
];

const fakeBreadcrumbData = [
  {
    key: 'women',
    title: 'WOMEN',
  },
  {
    key: 'dresses',
    title: 'Dresses',
  },
];

export type TSortBy = 'bestSelling' | 'newest' | 'lowestPrice' | 'highestPrice';

export const Categories = () => {
  const { category, type } = useParams();

  const [sortBy, setSortBy] = useState<TSortBy>('newest');

  const breadcrumbItems =
    category && type
      ? [
          { title: category, key: category },
          { title: type, key: type },
        ]
      : fakeBreadcrumbData;

  const handleChange = (value: TSortBy) => {
    setSortBy(value);
  };

  return (
    <main className="categories">
      <Breadcrumb items={breadcrumbItems} className="categories__breadcrumb" />

      <div className="categories__filters">
        <div className="categories__row">
          <Button
            classes={{
              button: 'categories__filters-button-filters',
              icon: 'categories__filters-button-icon',
            }}
            icon="FilterDown"
          >
            Filters
          </Button>

          <DropDown
            trigger="hover"
            classes={{ dropDown: 'categories__filters-dropdown-sort' }}
          >
            <DropDown.Button
              classes={{
                dropDownButton: 'dropdown__sort-btn',
                dropdownButtonIcon: 'filter-icon',
              }}
              icon="ArrowDown"
            >
              Sort by
            </DropDown.Button>
            <DropDown.Panel
              classes={{ dropDownPanel: 'dropdown__sort-panel' }}
              menu={
                <Checkbox.Group
                  className="dropdown__checkbox-sort"
                  options={categoriesSortBy}
                  defaultChecked={sortBy}
                  type="radio"
                  onChange={handleChange}
                />
              }
            />
          </DropDown>
        </div>
      </div>

      <div className="categories__cards cards">
        {categoriesData.map((category) => (
          <ProductCard size="small" src={category.img} key={category.id} />
        ))}
      </div>

      <div className="categories__pagination">
        <Pagination />
      </div>
    </main>
  );
};
