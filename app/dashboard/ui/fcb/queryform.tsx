"use client"
import SubmitButton from "@/app/dashboard/ui/utils/SubmitButton";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormState } from "react-dom";
import { createClient, State } from "@/app/dashboard/actions/fcb";

export default function QueryForm() {

  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createClient, initialState);

  let submit = () =>{
    //@ts-ignore
    var formEl = document.forms.fcbForm;

    var formData = new FormData(formEl);
    const rawDataFromEntries = Object.fromEntries(formData.entries());
    console.log("Seending data to backend")
    console.log(rawDataFromEntries)
  }

  return (
    
    <form action={submit}  id="fcbForm">
      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="names"
            size="small"
            variant="outlined"
            label="names"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="surname"
            size="small"
            variant="outlined"
            label="Surname"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className=""
            name="dob"
            size="small"
            variant="outlined"
            label="D.O.B"
          />
        </div>
      </div>
      {/* second row  */}

      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="national_id"
            size="small"
            variant="outlined"
            label="National Id"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="gender"
            size="small"
            variant="outlined"
            label="Gender"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className=""
            name="married"
            size="small"
            variant="outlined"
            label="Married"
          />
        </div>
      </div>

      {/* third row  */}
      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="nationality"
            size="small"
            variant="outlined"
            label="Nationality"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="streetno"
            size="small"
            variant="outlined"
            label="Street Number"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className=""
            name="streetname"
            size="small"
            variant="outlined"
            label="Street Name"
          />
        </div>
      </div>
      {/* fouth row  */}

      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="building"
            size="small"
            variant="outlined"
            label="Building"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="passport"
            size="small"
            variant="outlined"
            label="Passport"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className="mr-1"
            name="suburb"
            size="small"
            variant="outlined"
            label="Suburb"
          />
        </div>
      </div>
{/* fourth row */}
      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
             className="mr-1"
            name="pbag"
            size="small"
            variant="outlined"
            label="P Bag"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
             className="mr-1"
            name="city"
            size="small"
            variant="outlined"
            label="City"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
            className=""
            name="telephone"
            size="small"
            variant="outlined"
            label="telephone"
          />
        </div>
      </div>

      {/* fifth row  */}

      <div className="flex w-full  ">
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
          className="mr-1"
            name="mobile"
            size="small"
            variant="outlined"
            label="Mobile"
          />
        </div>
        <div className="flex flex-col justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <TextField
           className="mr-1"
            name="ind_email"
            size="small"
            variant="outlined"
            label="Email"
          />
        </div>
        
      </div>

    
        
          <SubmitButton label={"Generate Report"} />
     
     
    </form>
  );
}
