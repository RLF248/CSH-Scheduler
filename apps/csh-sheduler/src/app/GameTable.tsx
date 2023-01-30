import { theme } from './Theme/theme';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { useState, useEffect } from 'react';

export function GameTable() {
  const [mydata, setMyData] = useState([]);
  const fetchData = () => {
    fetch('/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMyData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img
        src="https://cdn1.sportngin.com/attachments/logo_graphic/12de-107101114/touch-icon_small.png"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        alt="CSH Logo"
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Teams</TableCell>
            <TableCell>Rink</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {mydata.map((row) => (
            <TableRow>
              <TableCell>{row['teams']}</TableCell>
              <TableCell>{row['rink']}</TableCell>
              <TableCell>{row['time']}</TableCell>
              <TableCell>{row['address']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ThemeProvider theme={theme}>
        <Link to="/createGame" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '3rem',
            }}
          >
            Add New Game
          </Button>
        </Link>
      </ThemeProvider>
    </div>
  );
}
