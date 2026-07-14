import {
  Container,
  Typography,
  Card,
  CardContent
} from "@mui/material";

function Projects() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Projects
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h5">
            IT Inventory Management System
          </Typography>

          <Typography>
            Full Stack application developed using
            React, TypeScript, ASP.NET Core and
            SQL Server.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Features:
          </Typography>

          <ul>
            <li>Role Based Access Control</li>
            <li>Asset Assignment</li>
            <li>Employee Management</li>
            <li>Request Workflows</li>
            <li>Audit History</li>
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Projects;