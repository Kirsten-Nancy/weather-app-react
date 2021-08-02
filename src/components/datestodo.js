import { useState } from "react";
import Search from "./components/Search";

import "date-fns";
// import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const [selectedDate, setSelectedDate] = useState(
  new Date("2014-08-18T21:11:54")
);

const handleDateChange = (date) => {
  setSelectedDate(date);
};

//   <MuiPickersUtilsProvider utils={DateFnsUtils}>
{
  /* <KeyboardDatePicker
margin="normal"
id="date-picker-dialog"
label="Date picker dialog"
format="MM/dd/yyyy"
value={selectedDate}
onChange={handleDateChange}
KeyboardButtonProps={{
  "aria-label": "change date",
}}
/>
</MuiPickersUtilsProvider> */
}
