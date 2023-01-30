import { TextField, Button } from '@mui/material';
import { Stack } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/theme';
import { useState } from 'react';

export const CreateGame = () => {
  const [teams, setTeams] = useState('');
  const [rink, setRink] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');

  const TeamInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeams(event.target.value);
  };

  const rinkInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRink(event.target.value);
  };

  const timeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const addressInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(' game Added');
    const gameData = {
      teams: teams,
      rink: rink,
      time: time,
      address: address,
    };

    try {
      const add = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });
      console.log(add);
    } catch (err) {
      console.error();
    }
  };

  return (
    <div>
      <h1>Add a game to the schedule</h1>
      <form onSubmit={onSubmitHandler}>
        <Stack direction="column" spacing={2}>
          <TextField label="teams" onChange={TeamInputChange} value={teams} />
          <TextField label="Rink" onChange={rinkInputChange} value={rink} />
          <TextField onChange={timeInputChange} value={time} type="time" />
          <TextField
            label="Address"
            onChange={addressInputChange}
            value={address}
          />
          <ThemeProvider theme={theme}>
            <Button variant="contained" type="submit">
              ADD
            </Button>
          </ThemeProvider>
        </Stack>
      </form>
    </div>
  );
};
