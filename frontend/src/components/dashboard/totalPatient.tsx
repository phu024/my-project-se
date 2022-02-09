import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

export const TotalPatient = (props:number) => (
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
            fontSize={20}
            fontWeight="bold"
          >
            จำนวนผู้ป่วยทั้งหมด
          </Typography>
          <Typography
            color="#000"
            variant="h3"
            fontWeight="bold"
          >
            {props}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#b71c1c',
              height: 56,
              width: 56,
              mt:4
            }}
          >
            <GroupRoundedIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);