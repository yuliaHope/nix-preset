const stickyHeaderHeight = 80;

export const scrollToElement = (el) => {
  if (el && el.offsetTop) {
    setTimeout(() => {
      window.scrollTo({ top: el.offsetTop - stickyHeaderHeight, behavior: 'smooth' });
    });
  }
};

export const scrollToTop = () => {
  window.focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
