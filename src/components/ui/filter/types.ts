export type TProgressBarItem = {
  start: number,
  end: number,
  currencies: string[]
}

export type TSubTitle = {
  subTitleTitle: string,
  id: number,
  subTitleItem: string[]
}

export type TRadioItem = string[]

export type TFilterData = {
  title: string,
  id: number,
  selectedItems: number[],
  subTitle?: TSubTitle[],
  radioItem?: TRadioItem,
  progressBarItem?: TProgressBarItem
}
