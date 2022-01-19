import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import hospital_medical from "../images/hospital_medical.png"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    tableSpace: {
      marginTop: 20,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <h1 style={{ textAlign: "center" }}>ระบบจัดการคนไข้ใน</h1>
        <h4></h4>
        <p>
          
        </p>
        <img src={hospital_medical} alt="hospital_medical" style={{ width: "100%" }} />
      </Container>
    </div>
  );
}
export default Home;