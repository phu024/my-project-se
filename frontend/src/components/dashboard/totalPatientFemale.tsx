import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import FemaleRoundedIcon from '@mui/icons-material/FemaleRounded';

export const TotalPatientFemale = (props:number) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="#000"
            gutterBottom
            variant="overline"
            fontWeight="bold"
          >
            จำนวนผู้ป่วยหญิง
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight="bold"
          >
            {props}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#c2185b',
              height: 56,
              width: 56,
              mt:1
            }}
          >
            <FemaleRoundedIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);