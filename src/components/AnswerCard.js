import { Card, Stack, Typography } from '@mui/material';
import React from 'react';

const AnswerCard = ({ index, answer}) => {


  return (
    <>
        <Card sx={{
            padding: '0.5rem',
            margin: '1rem'
        }}>
            <Stack direction={'row'} spacing={2}>
                <Typography> {index} </Typography>
                <Typography> {answer} </Typography>
            </Stack>
        </Card>
    </>
  );
}

export default AnswerCard;