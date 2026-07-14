import { Container, Typography } from "@mui/material";

function Contact() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3">
        Contact
      </Typography>

      <Typography sx={{ mt: 2 }}>
        GitHub: RadKane2
      </Typography>

      <Typography>
        LinkedIn: Your LinkedIn Profile
      </Typography>

      <Typography>
        Email: your@email.com
      </Typography>
    </Container>
  );
}

export default Contact;