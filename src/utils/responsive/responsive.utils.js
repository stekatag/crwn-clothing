const sizes = {
  smallPhone: "21.25em",
  phone: "37.5em",
  tabPort: "56.25em",
  tabLand: "68.75em",
  bigDesktop: "112.5em",
};

export const respond = {
  smallPhone: `(max-width: ${sizes.smallPhone})`,
  phone: `(max-width: ${sizes.phone})`,
  tabPort: `(max-width: ${sizes.tabPort})`,
  tabLand: `(max-width: ${sizes.tabLand})`,
  bigDesktop: `(min-width: ${sizes.bigDesktop})`,
};
