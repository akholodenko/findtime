import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { createAvailability } from "../models/availabilityModel";

const Home = () => {
  const navigate = useNavigate();

  const onStartClick = () => {
    createAvailability().then((hash: string) => {
      console.log("before navigate", hash);
      //   navigate(`/ft/${hash}`);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "50vh" }}
      >
        <Grid item xs={12}>
          <Button variant="contained" onClick={() => onStartClick()}>
            Start
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
