import { Container, Typography, Button, Stack } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h2" fontWeight="bold">gitt
        Angel Rios Vega
      </Typography>

      <Typography variant="h4" color="primary" sx={{ mt: 2 }}>
        Full Stack Developer
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        React • TypeScript • ASP.NET Core • SQL Server
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
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