import {
  Container,
  Typography,
  Button,
  Stack,
  Avatar,
} from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Avatar
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          mb: 3,
        }}
      />

      <Typography variant="h2" fontWeight="bold">
        Angel Rios Vega
      </Typography>

      <Typography
        variant="h5"
        color="primary"
        sx={{ mt: 2 }}
      >
        Full Stack Developer
      </Typography>

      <Typography sx={{ mt: 2 }}>
        React • TypeScript • ASP.NET Core • SQL Server
      </Typography>

      <Typography sx={{ mt: 3 }}>
        Computer Systems Engineering student with
        experience in Full Stack Development and
        IT Infrastructure projects.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mt: 4 }}
      >
        <Button variant="contained">
          View Projects
        </Button>

        <Button variant="outlined">
          Download CV
        </Button>
      </Stack>
    </Container>
  );
}

export default Home;