import {NICA_SOURCE_DB} from '../data/faker';

export const DataFiltered = (
  filter: 'team' | 'country' | 'jobTitle' | 'departament' | '',
  value: string,
) =>
  NICA_SOURCE_DB.filter(item => {
    switch (filter) {
      case 'team':
        return item.team === value;
      case 'country':
        return item.country === value;
      case 'jobTitle':
        return item.jobTitle === value;
      case 'departament':
        return item.departament === value;
      default:
        return item;
    }
  });
