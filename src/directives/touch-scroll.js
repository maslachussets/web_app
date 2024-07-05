export default {
  bind(el, binding) {
    let ts;

    const onTouchStart = (e) => {
      ts = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      const scrollableEl = binding.value;
      if (scrollableEl) {
        const scroll = scrollableEl.scrollTop;
        const te = e.changedTouches[0].clientY;

        if (scroll <= 0 && ts < te) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    };

    el.__onTouchStart = onTouchStart;
    el.__onTouchMove = onTouchMove;

    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
  },
  unbind(el) {
    el.removeEventListener("touchstart", el.__onTouchStart);
    el.removeEventListener("touchmove", el.__onTouchMove);
  },
};
