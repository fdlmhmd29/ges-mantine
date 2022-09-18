import { useIsomorphicEffect, useSetState } from "@mantine/hooks";

interface ScreenWidthProps {
  width?: number;
}
export default function useWidthSize({ width }: ScreenWidthProps) {
  const [widthSize, setWidthSize] = useSetState<ScreenWidthProps>({
    width: undefined,
  });

  useIsomorphicEffect(() => {
    function handleResize() {
      setWidthSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthSize;
}
