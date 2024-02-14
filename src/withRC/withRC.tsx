import { FC } from "react";
import { create } from "zustand";

type TStore<T extends object> = T & { setProps: (props: Partial<T>) => void };

export const withRC = <T extends object>(
  Component: FC<T>,
  defaultPropsValues: T
) => {
  const useRCCStore = create<TStore<T>>()((set) => ({
    ...defaultPropsValues,
    setProps: (props) => {
      set({ ...(props as Partial<TStore<T>>) }); //there could be a better solution instead of "as"  related to https://stackoverflow.com/questions/70164972/in-typescript-why-is-an-omit-type-not-a-partial-type
    },
  }));

  // bazı proplar rcc bazıları ise klasik yöntem ile kullanılmak istenebilir patial bişeyler yap.
  const ComponentWrapper: FC<{}> = () => {
    const props = useRCCStore();

    return <Component {...props} />;
  };

  return [
    ComponentWrapper, /// component
    useRCCStore.getState().setProps, // controller
    //factory function
    (defaultPropsValues: T) => {
      const [RCC, RC] = withRC(Component, defaultPropsValues);

      return [RCC, RC] as const;
    },
  ] as const;
};
