import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>

      <Typography>
        Systems Engineering student with experience in
        Full Stack Development, IT Infrastructure and
        business process automation.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        During my internship at Daimler Truck Mexico,
        I participated in asset management, inventory
        control and IT infrastructure projects.
      </Typography>
    </Container>
  );
}

export default About;