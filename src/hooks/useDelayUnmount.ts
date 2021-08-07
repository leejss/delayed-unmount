import { useEffect, useState } from "react";

function useDelayUnmount(mounted: boolean, delay: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timer: number;
    // Mounted => Render
    if (mounted) {
      setShouldRender(true);
      //   Mounted false and shouldRender true => setShouldRender after delayed time
    } else if (!mounted) {
      timer = setTimeout(() => setShouldRender(false), delay);
    }
    return () => clearTimeout(timer);
  }, [mounted, delay]);

  //   Return shouldRender
  //   Mounted값에 따라서 state값도 변한다.
  return shouldRender;
}

export default useDelayUnmount;
