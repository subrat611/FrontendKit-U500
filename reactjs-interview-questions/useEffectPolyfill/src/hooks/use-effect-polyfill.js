import { useRef } from "react";

const useEffectPolyfill = (cb, deps) => {
  /**
   * Why useRef instead of useState
   * - The value of useRef persisted even after the compoent re-render
   */
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    // cb();
    const cleanup = cb();
    // return;
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  // deps changes and no deps array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    // cb();
    const cleanup = cb();
    if (deps && cleanup && typeof cleanup === "function") {
      cleanup();
    }
  }

  // clean up
  /**
   * We can not simulate the component unmount because React does this via help of
   * Algorithm called fiber-tree and the process called Reconciliation which manages the component life cycle including handling effects and cleanup during unmounting.
   *
   * We can implement when the deps array changes.
   */

  prevDeps.current = deps || [];
};

export default useEffectPolyfill;
