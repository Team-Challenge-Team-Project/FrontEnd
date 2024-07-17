import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DropDownContext, TDropDownState } from 'src/context/dropDown';

export const useDropDownContext = (): TDropDownState | null => {
  return useContext(DropDownContext);
};

type TUseDropDown = () => TDropDownState;

export const useDropDown: TUseDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const refButtonDropDown = useRef<HTMLDivElement>(null);
  const refPanelDropDown = useRef<HTMLDivElement>(null);

  const handleHoverOverButtonDropDown = useCallback(() => {
    setIsDropDownOpen(true);
  }, []);

  const handleHoverLeaveButtonDropDown = useCallback(() => {
    setIsDropDownOpen(false);
  }, []);

  const handleClickButtonDropDown = useCallback(() => {
    setIsDropDownOpen((prevState) => !prevState);
  }, []);

  const handleClickOutsideDropDown = useCallback(
    (event: MouseEvent) => {
      if (
        isDropDownOpen &&
        refButtonDropDown.current &&
        event.target instanceof HTMLElement &&
        !refButtonDropDown.current.contains(event.target)
      ) {
        setIsDropDownOpen((prevState) => !prevState);
        // if (
        //   refPanelDropDown.current &&
        //   !refPanelDropDown.current.contains(event.target)
        // ) {
        //   setIsDropDownOpen((prevState) => !prevState);
        // }
      }
    },
    [isDropDownOpen]
  );

  //if page scroll down then close the dropdown
  // const handleScrollCloseDropDown = useCallback(() => {
  //   setIsDropDownOpen((prevState) => (prevState ? false : prevState));
  // }, []);

  useEffect(() => {
    window.addEventListener('click', handleClickOutsideDropDown);
    return () => {
      window.removeEventListener('click', handleClickOutsideDropDown);
    };
  });

  //if page scroll down then close the dropdown
  // useEffect(() => {
  //   document.addEventListener('scroll', handleScrollCloseDropDown);
  //   return () =>
  //     document.removeEventListener('scroll', handleScrollCloseDropDown);
  // }, [handleScrollCloseDropDown]);

  return useMemo(() => {
    return {
      isDropDownOpen,
      onClickButtonDropDown: handleClickButtonDropDown,
      onHoverOverButtonDropDown: handleHoverOverButtonDropDown,
      onHoverLeaveButtonDropDown: handleHoverLeaveButtonDropDown,
      refButtonDropDown,
      refPanelDropDown,
    };
  }, [
    isDropDownOpen,
    handleClickButtonDropDown,
    handleHoverOverButtonDropDown,
    handleHoverLeaveButtonDropDown,
    refButtonDropDown,
    refPanelDropDown,
  ]);
};
