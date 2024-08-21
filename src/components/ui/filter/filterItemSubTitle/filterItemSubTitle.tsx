import './filterItemSubTitle.style.css';
import { TSubTitle } from '../types';
import classNames from 'classnames';
import { useState } from 'react';
import Typography from 'src/components/ui/typography';

type FilterItemSubTitleProps = {
  subTitleItems: TSubTitle[];
};

export const FilterItemSubTitle = ({
  subTitleItems,
}: FilterItemSubTitleProps) => {
  const [openIndexSubTitle, setOpenIndexSubTitle] = useState<number | null>(
    null
  );

  const toggleSubTitle = (index: number) => {
    setOpenIndexSubTitle(openIndexSubTitle === index ? null : index);
  };

  return (
    <>
      {subTitleItems.map((item, index) => (
        <div key={index}>
          <Typography
            as="span"
            className={classNames('item__sub_count', {
              item__sub_count__open: openIndexSubTitle === index,
            })}
            onClick={() => toggleSubTitle(index)}
          >
            {item.subTitleTitle}
          </Typography>
          {subTitleItems[index].subTitleItem.map((it, i) => (
            <div
              key={i}
              className={classNames('sub__title__list_count', {
                sub__title__list_count__open: openIndexSubTitle === index,
              })}
            >
              <Typography as="span" className="sub__title__list_item">
                {it}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
