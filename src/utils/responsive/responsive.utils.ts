type Breakpoints = {
  smallPhone: string;
  phone: string;
  tabPort: string;
  tabLand: string;
  bigDesktop: string;
};

const sizes: Breakpoints = {
  smallPhone: "21.25em",
  phone: "37.5em",
  tabPort: "56.25em",
  tabLand: "68.75em",
  bigDesktop: "112.5em",
};

type Respond = Record<keyof Breakpoints, string>;

export const respond: Respond = {
  smallPhone: `(max-width: ${sizes.smallPhone})`,
  phone: `(max-width: ${sizes.phone})`,
  tabPort: `(max-width: ${sizes.tabPort})`,
  tabLand: `(max-width: ${sizes.tabLand})`,
  bigDesktop: `(min-width: ${sizes.bigDesktop})`,
};
