import { FC } from "react";
import { create } from "zustand";

type TReturn<T extends object> = {
  Component: FC<{}>;
  controller: (props: T) => void;
};

type TStore<T> = T & { setProps: (props: T) => void };

export const withRCC = <T extends object>(
  Component: FC<T>,
  defaultPropsValues: T
): TReturn<T> => {
  const useRCCStore = create<TStore<T>>()((set) => ({
    ...defaultPropsValues,
    setProps: (props: T) => set({ ...props }),
  }));

  // bazı proplar rcc bazıları ise klasik yöntem ile kullanılmak istenebilir patial bişeyler yap.
  const ComponentWrapper: FC<{}> = () => {
    const props = useRCCStore();

    return <Component {...props} />;
  };

  return {
    Component: ComponentWrapper,
    controller: useRCCStore.getState().setProps,
  };
};
