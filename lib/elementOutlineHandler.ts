export function elementOutlineHandler(className: string, width?: number) {
  const w = width === undefined ? 2 : width;
  return {
    onMouseOver: () => {
      const els = document.querySelectorAll(`.${className}`);
      els.forEach((e: any) => {
        if (e.style) {
          e.style.outline = `${w}px solid #1e1e1e`;
        }
      });
    },

    onMouseOut: () => {
      const els = document.querySelectorAll(`.${className}`);
      els.forEach((e: any) => {
        if (e.style) {
          e.style.outline = 'none';
        }
      });
    },
  };
}
