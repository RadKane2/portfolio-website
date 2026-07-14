import {
  Container,
  Typography,
  Chip,
  Stack
} from "@mui/material";

function Skills() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Skills
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="React" />
        <Chip label="TypeScript" />
        <Chip label="C#" />
        <Chip label="ASP.NET Core" />
        <Chip label="SQL Server" />
        <Chip label="Entity Framework" />
        <Chip label="Power BI" />
        <Chip label="Power Apps" />
        <Chip label="Git" />
        <Chip label="GitHub" />
      </Stack>
    </Container>
  );
}

export default Skills;