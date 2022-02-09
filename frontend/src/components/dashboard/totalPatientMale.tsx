import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import MaleRoundedIcon from '@mui/icons-material/MaleRounded';

export const TotalPatientMale = (props:number) => (
  <Card {...props}>
    <CardContent sx={{backgroundColor:""}}>
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
            จำนวนผู้ป่วยชาย
          </Typography>
          <Typography
            color="#000"
            variant="h4"
            fontWeight="bold"
          >
            {props}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#1e88e5",
              height: 56,
              width: 56,
              mt:2
            }}
          >
            <MaleRoundedIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);