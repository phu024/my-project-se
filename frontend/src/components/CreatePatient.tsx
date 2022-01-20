import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';

function CreatePatient() {
    const [pType, setpType] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [value, setValue] = React.useState<Date | null>();
    const handleChange = (event: SelectChangeEvent) => {
        setpType(event.target.value as string);
    };
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 5,
                    mt: 4,
                    width: 1 / 2,
                    mx: "auto",
                    flexGrow: 1,
                }}
            >
                <Typography variant="h4" sx={{ mb: 10, color: "#2962ff" }}>
                    ระบบบันทึกการรับเข้าผู้ป่วย
                    <Divider sx={{ my: 2, color: "#2962ff" }} />
                </Typography>
                <Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">หมายเลขประจำตัวผู้ป่วย</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    //value={values.amount}
                                    //onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">HN</InputAdornment>}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    label="วันที่เข้ารับการรักษา(Admit Date)"
                                    renderInput={(params) => (
                                        <TextField fullWidth variant="standard" {...params} />
                                    )}
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    ประเภทผู้ป่วย
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pType}
                                    label="ประเภทผู้ป่วย"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>ปกติ</MenuItem>
                                    <MenuItem value={20}>อุบัติเหตุ</MenuItem>
                                    <MenuItem value={30}>คลอดบุตร</MenuItem>
                                    <MenuItem value={40}>เด็กแรกเกิด</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Typography>
                <Typography>
                    <Divider sx={{ my: 2 }} >
                        <Chip label="ข้อมูลประวัติผู้ป่วย" />
                    </Divider>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="หมายเลขประจำตัวประชาชน"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="ชื่อ"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="นามสุกล"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">เพศ</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="เพศ"
                                //onChange={handleChange}
                                >
                                    <MenuItem value={10}>ชาย</MenuItem>
                                    <MenuItem value={20}>หญิง</MenuItem>
                                    <MenuItem value={30}>อื่นๆ</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="วัน-เดือน-ปีเกิด"
                                    inputFormat="dd-MM-yyyy"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} fullWidth variant="standard" />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="อายุ"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                type="number"
                                inputProps={{ min: "0", max: "150" }}
                            />
                        </Grid>
                    </Grid>
                </Typography>
                <Typography>
                    <Divider sx={{ my: 2 }}>
                        <Chip label="ข้อมูลทางการแพทย์" />
                    </Divider>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">สิทธิการรักษา</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="สิทธิการรักษา"
                                //onChange={handleChange}
                                >
                                    <MenuItem value={10}>ชาย</MenuItem>
                                    <MenuItem value={20}>หญิง</MenuItem>
                                    <MenuItem value={30}>อื่นๆ</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-textarea"
                                label="อาการสำคัญ"
                                placeholder="Placeholder"
                                fullWidth
                                multiline
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </Typography>
                <Grid container spacing={1} sx={{mt:4}}>
                    <Grid item xs={12} sm={8}/>
                    <Grid item xs={12} sm={2}>
                        <LoadingButton
                            color="success"
                            onClick={handleClick}
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            Save
                        </LoadingButton>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                            color="error"
                            onClick={handleClick}
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            ย้อนกลับ
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default CreatePatient;
