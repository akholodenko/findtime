import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Availability = () => {
  const { availability_id } = useParams();

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
          Availability {availability_id}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Availability;
