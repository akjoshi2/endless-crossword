import { CrosswordPuzzle } from './CrosswordPuzzle';
import CrosswordSettings from './CrosswordSettings';
import { Container, Grid, Typography } from "@mui/material";

export const CrosswordLayout = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h1" gutterBottom style={{ margin: '30px 0 0 0' }}>
                Crossword Puzzle Generator
            </Typography>
            <Grid container spacing={40}>
            {/* CrosswordSettings component on the left */}
                <Grid item xs={12} md={4} style={{ margin: '100px 0 0 0' }}>
                <CrosswordSettings />
                </Grid>
        
            {/* Crossword component on the right */}
                <Grid item xs={12} md={8} style={{ display: 'flex', margin: '100px 0 0 0' }}>
                <CrosswordPuzzle />
                </Grid>
            </Grid>
        </Container>
      );
}