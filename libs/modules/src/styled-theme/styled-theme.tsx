import { ReactNode, createContext, useContext, useMemo, useState } from "react";

import { IObject } from "@artemis/utils";
import { ThemeProvider } from "styled-components";

type TTheme = "light" | "dark";

const THEME: IObject<TTheme> = {
  LIGHT: "light",
  DARK: "dark",
};

/**
 * Theme context
 */
type TContext = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};

const ThemeContext = createContext<TContext>({
  theme: THEME["DARK"],
  setTheme: () => "",
});

/**
 * Theme provider
 */
interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  defaultTheme: TTheme;
  children: ReactNode;
}

const ThemesProvider = ({
  schema,
  defaultTheme = THEME["DARK"],
  children,
}: IProps) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const selectedSchema = useMemo(
    () => (theme ? schema?.data?.[theme] : schema?.data?.[defaultTheme]),
    [defaultTheme, schema?.data, theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={selectedSchema}>{children}</ThemeProvider>;
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  return { setTheme, theme };
};

const styledTheme = { useTheme, ThemesProvider };

export default styledTheme;
