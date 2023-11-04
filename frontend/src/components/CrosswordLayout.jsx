import Crossword from '@jaredreisinger/react-crossword';
import CrosswordSettings from './CrosswordSettings';
import { Container, Grid, Typography } from "@mui/material";

export const CrosswordLayout = () => {
    const data = {
      across: {
          1: {
              clue: "placeholder",
              answer: 'EARSE',
              row: 0,
              col: 0,
          },
          7: {
              clue: "placeholder",
              answer: 'EPICRITIC',
              row: 0,
              col: 6,
          },
          16: {
              clue: "placeholder",
              answer: 'RHEES',
              row: 1,
              col: 0,
          },
          18: {
              clue: "placeholder",
              answer: 'XEROSTOMA',
              row: 1,
              col: 6,
          },
          19: {
              clue: "placeholder",
              answer: 'RESET',
              row: 2,
              col: 0,
          },
          21: {
              clue: "placeholder",
              answer: 'PROUSTIAN',
              row: 2,
              col: 6,
          },
          22: {
              clue: "placeholder",
              answer: 'AAUIEAE',
              row: 3,
              col: 0,
          },
          26: {
              clue: "placeholder",
              answer: 'PANGA',
              row: 3,
              col: 10,
          },
          27: {
              clue: "placeholder",
              answer: 'SPE',
              row: 4,
              col: 0,
          },
          28: {
              clue: "placeholder",
              answer: 'EERASE',
              row: 4,
              col: 4,
          },
          32: {
              clue: "placeholder",
              answer: 'ISIL',
              row: 4,
              col: 11,
          },
          36: {
              clue: "placeholder",
              answer: 'AEAIEEIA',
              row: 5,
              col: 3,
          },
          38: {
              clue: "placeholder",
              answer: 'PNG',
              row: 5,
              col: 12,
          },
          39: {
              clue: "placeholder",
              answer: 'TRUES',
              row: 6,
              col: 0,
          },
          42: {
              clue: "placeholder",
              answer: 'EEESS',
              row: 6,
              col: 6,
          },
          44: {
              clue: "placeholder",
              answer: 'IEO',
              row: 6,
              col: 12,
          },
          45: {
              clue: "placeholder",
              answer: 'ROSETAN',
              row: 7,
              col: 0,
          },
          47: {
              clue: "placeholder",
              answer: 'METERER',
              row: 7,
              col: 8,
          },
          49: {
              clue: "placeholder",
              answer: 'AAE',
              row: 8,
              col: 0,
          },
          50: {
              clue: "placeholder",
              answer: 'ESCES',
              row: 8,
              col: 4,
          },
          52: {
              clue: "placeholder",
              answer: 'ESERE',
              row: 8,
              col: 10,
          },
          53: {
              clue: "placeholder",
              answer: 'VDB',
              row: 9,
              col: 0,
          },
          55: {
              clue: "placeholder",
              answer: 'REEDPIPE',
              row: 9,
              col: 4,
          },
          59: {
              clue: "placeholder",
              answer: 'EMYD',
              row: 10,
              col: 0,
          },
          61: {
              clue: "placeholder",
              answer: 'YSLETA',
              row: 10,
              col: 5,
          },
          62: {
              clue: "placeholder",
              answer: 'ODB',
              row: 10,
              col: 12,
          },
          65: {
              clue: "placeholder",
              answer: 'REDID',
              row: 11,
              col: 0,
          },
          69: {
              clue: "placeholder",
              answer: 'ASHTREE',
              row: 11,
              col: 8,
          },
          71: {
              clue: "placeholder",
              answer: 'STARSEARC',
              row: 12,
              col: 0,
          },
          75: {
              clue: "placeholder",
              answer: 'EEESS',
              row: 12,
              col: 10,
          },
          76: {
              clue: "placeholder",
              answer: 'EATAPEACH',
              row: 13,
              col: 0,
          },
          78: {
              clue: "placeholder",
              answer: 'AAREA',
              row: 13,
              col: 10,
          },
          79: {
              clue: "placeholder",
              answer: 'RLEEERMEY',
              row: 14,
              col: 0,
          },
          81: {
              clue: "placeholder",
              answer: 'DEEDE',
              row: 14,
              col: 10,
          },
      },
      down: {
          1: {
              clue: "placeholder",
              answer: 'ERRAS',
              row: 0,
              col: 0,
          },
          39: {
              clue: "placeholder",
              answer: 'TRAVERSER',
              row: 6,
              col: 0,
          },
          2: {
              clue: "placeholder",
              answer: 'AHEAP',
              row: 0,
              col: 1,
          },
          40: {
              clue: "placeholder",
              answer: 'ROADMETAL',
              row: 6,
              col: 1,
          },
          3: {
              clue: "placeholder",
              answer: 'RESUE',
              row: 0,
              col: 2,
          },
          41: {
              clue: "placeholder",
              answer: 'USEBYDATE',
              row: 6,
              col: 2,
          },
          4: {
              clue: "placeholder",
              answer: 'SEEI',
              row: 0,
              col: 3,
          },
          36: {
              clue: "placeholder",
              answer: 'AEE',
              row: 5,
              col: 3,
          },
          60: {
              clue: "placeholder",
              answer: 'DIRAE',
              row: 10,
              col: 3,
          },
          5: {
              clue: "placeholder",
              answer: 'ESTEEESTER',
              row: 0,
              col: 4,
          },
          66: {
              clue: "placeholder",
              answer: 'DSPE',
              row: 11,
              col: 4,
          },
          23: {
              clue: "placeholder",
              answer: 'AEA',
              row: 3,
              col: 5,
          },
          46: {
              clue: "placeholder",
              answer: 'ASEY',
              row: 7,
              col: 5,
          },
          72: {
              clue: "placeholder",
              answer: 'EER',
              row: 12,
              col: 5,
          },
          7: {
              clue: "placeholder",
              answer: 'EXPERIENCES',
              row: 0,
              col: 6,
          },
          73: {
              clue: "placeholder",
              answer: 'AAM',
              row: 12,
              col: 6,
          },
          8: {
              clue: "placeholder",
              answer: 'PER',
              row: 0,
              col: 7,
          },
          29: {
              clue: "placeholder",
              answer: 'AEE',
              row: 4,
              col: 7,
          },
          51: {
              clue: "placeholder",
              answer: 'EDL',
              row: 8,
              col: 7,
          },
          74: {
              clue: "placeholder",
              answer: 'RCE',
              row: 12,
              col: 7,
          },
          9: {
              clue: "placeholder",
              answer: 'IRO',
              row: 0,
              col: 8,
          },
          30: {
              clue: "placeholder",
              answer: 'SEEMSPEACHY',
              row: 4,
              col: 8,
          },
          10: {
              clue: "placeholder",
              answer: 'COU',
              row: 0,
              col: 9,
          },
          31: {
              clue: "placeholder",
              answer: 'EISE',
              row: 4,
              col: 9,
          },
          56: {
              clue: "placeholder",
              answer: 'ITS',
              row: 9,
              col: 9,
          },
          11: {
              clue: "placeholder",
              answer: 'RSSP',
              row: 0,
              col: 10,
          },
          37: {
              clue: "placeholder",
              answer: 'ASTEPAHEAD',
              row: 5,
              col: 10,
          },
          12: {
              clue: "placeholder",
              answer: 'ITTAI',
              row: 0,
              col: 11,
          },
          48: {
              clue: "placeholder",
              answer: 'ESE',
              row: 7,
              col: 11,
          },
          70: {
              clue: "placeholder",
              answer: 'TEAE',
              row: 11,
              col: 11,
          },
          13: {
              clue: "placeholder",
              answer: 'TOINSPIRE',
              row: 0,
              col: 12,
          },
          62: {
              clue: "placeholder",
              answer: 'ORERE',
              row: 10,
              col: 12,
          },
          14: {
              clue: "placeholder",
              answer: 'IMAGINEER',
              row: 0,
              col: 13,
          },
          63: {
              clue: "placeholder",
              answer: 'DESED',
              row: 10,
              col: 13,
          },
          15: {
              clue: "placeholder",
              answer: 'CANALGORE',
              row: 0,
              col: 14,
          },
          64: {
              clue: "placeholder",
              answer: 'BESAE',
              row: 10,
              col: 14,
          },
      },
      }
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
                <Crossword data={data} />
                </Grid>
            </Grid>
        </Container>
      );
}