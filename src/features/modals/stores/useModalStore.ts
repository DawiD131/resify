import { defineStore } from 'pinia';
import { nameToModalMap, type ModalNames } from '@/features/modals/nameToModalMap';
import { computed, ref } from 'vue';

export const useModalStore = defineStore('useModalStore', () => {
  const initState = {} as Record<ModalNames, boolean>;

  Object.keys(nameToModalMap).forEach((key) => (initState[key as ModalNames] = false));

  const modalsState = ref<Record<ModalNames, boolean>>(initState);

  const setModalState = (key: ModalNames, value: boolean) => {
    Object.keys(modalsState.value).forEach((key) => {
      modalsState.value[key as ModalNames] = false;
    });

    modalsState.value[key] = value;
  };

  const activeModalName = computed(
    () => Object.keys(modalsState.value).find((key) => modalsState.value[key as ModalNames]) ?? null
  );

  const activeModalComponent = computed(() =>
    activeModalName.value ? nameToModalMap[activeModalName.value as ModalNames].component : null
  );

  const activeDisplayName = computed(() =>
    activeModalName.value ? nameToModalMap[activeModalName.value as ModalNames].displayName : null
  );

  const closeModals = () => {
    Object.keys(modalsState.value).forEach((key) => {
      modalsState.value[key as ModalNames] = false;
    });
  };

  return {
    setModalState,
    modalsState,
    activeModalName,
    activeModalComponent,
    activeDisplayName,
    closeModals
  };
});
