import { create } from 'zustand';

import { Store } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Store;
  onOpen: (data: Store) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Store) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
