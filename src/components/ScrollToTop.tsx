import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { ActionIcon, Affix, Button, Tooltip, Transition } from "@mantine/core";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Tooltip
            openDelay={500}
            label="Scroll to Top"
            position="left"
            withArrow
          >
            <ActionIcon
              type="button"
              size="xl"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color="blue"
              variant="filled"
            >
              <IconArrowUp size={16} />
            </ActionIcon>
          </Tooltip>
        )}
      </Transition>
    </Affix>
  );
}
