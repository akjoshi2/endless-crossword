import { CrosswordPuzzle } from './CrosswordPuzzle';
import CrosswordSettings from './CrosswordSettings';
//import { Container } from '@mui/material';

export const CrosswordLayout = () => {
    return (
        <div>
          <CrosswordSettings />
          <CrosswordPuzzle />
        </div>
      )
}