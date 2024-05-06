import { ImageFinder, SvgFinder } from '../../Helper';
import { Breadcrumb } from '../../components/common/breadcrumb/breadcrumb';
import { Pagination } from '../../components/common/pagination/pagination';
import { categoriesData } from '../../utils/fakeCategoriesData';
import './Categories.style.css';

export const Categories = () => {
  return (
    <div className="categories">
      <Breadcrumb />

      <div className="categories__filters">
        <div className="categories__row">
          <button className="categories__filters-button-filters">
            Filters <SvgFinder src="filter.svg" />
          </button>
          <button className="categories__filters-button-sort">
            Sort by
            <SvgFinder src="arrow-bottom.svg" />
          </button>
        </div>
      </div>

      <div className="categories__cards">
        {categoriesData.map((category) => (
          <div className="categories__card" key={category.id}>
            <div className="categories__card-img">
              <ImageFinder
                alt={category.title}
                src={category.img}
                className="categories__card_img"
              />
              <SvgFinder
                src="favorite.svg"
                className="categories__card-img-favorite"
              />
            </div>
            <div className="categories__card-header">
              <h4>{category.title}</h4>
              <p>{category.text}</p>
              <p>{category.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="categories__pagination">
        <Pagination />
      </div>
    </div>
  );
};
