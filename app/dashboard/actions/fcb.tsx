"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import {BackendInstance} from "@/app/service/axios"

// zod schema defination
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FormSchema = z.object({
  id: z.string(),
  clientName: z.string().min(1 ,"Name cant be empty !!"),
  email: z.string().min(1 ,"email cant be empty !!"),
  address: z.string().min(1 ,"address cant be empty !!"),
  industry: z.string().min(1 ,"industry cant be empty !!"),
  clientType: z.string().min(1 ,"clientType cant be empty !!"),

  navixyId: z.coerce.number().gt(0, {
    message: "navixyId should be greater than zero",
  }),
  
  fleetSize : z.coerce.number().gt(0, {
    message: "fleet size should be greater than zero",
  }),
  // status: z.enum(["pending", "paid"], {
  //   invalid_type_error: "Please select an invoice status",
  // }),
  // date: z.string(),

  comment: z.string().min(1 ,"comment  cant be empty !!"),
});

const CreateClient = FormSchema.omit({ id: true,});

export type State = {
  errors?: {
    clientName?: String[];
    email?:String[];
    address?:String[];
    navixyId?: String[];
    fleetSize?: String[];
    comment?: String[];
   
  };
  message?: string | null;
};

export async function createClient(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  

  const validateFields = CreateClient.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create client ",
    };
  }

  let formDataFields = validateFields.data;
  

  //try {
//     let clientObject = {

//       "clientName": formDataFields.clientName,
//       "email":formDataFields.email,
//       "address":formDataFields.address,
//       "fleetSize":formDataFields.fleetSize,
//       "isPotentialBusiness":true,
//       "areaOfSpecialisation":formDataFields.industry,
//       "comment": formDataFields.comment,
//       "navixyId":formDataFields.navixyId,
//       "clientType":formDataFields.clientType
//   }


//   let createClientRes = await BackendInstance.post("/client" , clientObject)


//   if(createClientRes.status != 201){
//     return {
//       message: 'API  Failed to Create Invoice.',
//     };
//   }
//   } catch (error) {
//     // If a database error occurs, return a more specific error.
//     return {
//       message: 'Database Error: Failed to Create client .',
//     };
//   }

    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard");
  redirect("/dashboard/query");
  
}