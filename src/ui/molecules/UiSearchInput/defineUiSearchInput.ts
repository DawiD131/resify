import { provide } from 'vue';
import type { SearchInputItem } from './types';

export const defineUiSearchInput = (items: SearchInputItem[] | null) => {
  provide<SearchInputItem[] | null>('search-input-items', items);
};
