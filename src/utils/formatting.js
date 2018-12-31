// @flow

const titleMap = {
  rvnbox: 'RVNBOX',
  rest: 'REST',
  gui: 'GUI',
  other: 'Other',
}
export const getTitleDisplay = (product: string) => {
  return titleMap[product] || titleMap['other']
}
