import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from '@material-ui/core/TablePagination';
import moment from "moment";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PatientInterface } from "../../models/IPatient";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 800,
    },
    tableSpace: {
      marginTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    title: {
      color: "#000000",
      fontSize: "1rem",
      //fontWeight: "bold",
  },

  })
);
export const listPatients = (props:any) => (
    <Paper >
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="center" style={{fontWeight:"bold"}}>
                HN
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                หมายเลขประจำตัวประชาชน
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                ชื่อ-นามสกุล
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                วัน/เดือน/ปีเกิด
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                อายุ
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                เพศ
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                วันที่เข้ารับการรักษา/เวลา
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                ประเภทผู้ป่วย
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                สิทธิการรักษา
              </TableCell>
              <TableCell align="center" style={{fontWeight:"bold"}}>
                อาการสำคัญ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.map((patient: PatientInterface) => (
              <TableRow key={patient.ID}>
                <TableCell align="center">{patient.HN}</TableCell>
                <TableCell align="center">{patient.Pid}</TableCell>
                <TableCell align="center">
                  {patient.FirstName + " " + patient.LastName}
                </TableCell>
                <TableCell align="center">
                  {moment(patient.Birthdate).format("D-MM-YYYY")}
                </TableCell>
                <TableCell align="center">{patient.Age}</TableCell>
                <TableCell align="center">{patient.Gender.Identity}</TableCell>
                <TableCell align="center">
                  {moment(patient.DateAdmit).format("D-MM-YYYY เวลา HH:mm น.")}
                </TableCell>
                <TableCell align="center">{patient.PatientType.Typename}</TableCell>
                <TableCell align="center">{patient.PatientRight.Name}</TableCell>
                <TableCell align="center">{patient.Symptom}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
)