import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!globalThis.matchMedia) return;
    const media = matchMedia(query);

    const listener = () => setMatches(media.matches);
    listener(); // run once on mount
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
