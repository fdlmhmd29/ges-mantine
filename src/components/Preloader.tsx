import { createStyles, Loader } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  preloader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    zIndex: 5,
    position: "relative",
  },
}));

export default function Preloader() {
  const { classes } = useStyles();

  return (
    <div className={classes.preloader}>
      <Loader size="xl" color={"blue"} />
    </div>
  );
}
