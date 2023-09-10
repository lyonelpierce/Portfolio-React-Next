import create from "zustand";

type GlobalState = {
  previewLink: string;
  setPreviewLink: (link: string) => void;
};

const useGlobalStore = create<GlobalState>((set) => ({
  previewLink: "",
  setPreviewLink: (link) => set({ previewLink: link }),
}));

export default useGlobalStore;
