"use client";
import dayjs from "dayjs";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

// let companyName = "Dummy Company"
// let generatedOn ="11/10/2023"
// let expiryDate ="12/10/2023"
// let authenticationCode ="as345f"

function getBase64ImageFromURL(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = (error) => {
      reject(error);
    };

    img.src = url;
  });
}

async function printFcbPdfReport(
  companyName,
  vehicle,
  generatedOn,
  expiryDate,
  authenticationCode,
  maximumSpeed,
  vehicleModel,
  chassisNumber,
  engineNumber,
  bodyType,
  deviceModel,
  deviceSerialNumber,
  certificateNumber
) {
  generatedOn = dayjs(generatedOn).format("DD/MM/YYYY");
  expiryDate = dayjs(expiryDate).format("DD/MM/YYYY");
  var docDefinition = {
    // background: function (currentPage, pageSize) {
    //   return [
    //     {
    //       canvas: [
    //         {
    //           type: "line",
    //           x1: 5,
    //           y1: 5,
    //           x2: 835,
    //           y2: 5,
    //           lineWidth: 1,
    //           strokeStyle: "green",
    //         }, //Up line
    //         { type: "line", x1: 5, y1: 5, x2: 5, y2: 590, lineWidth: 1 }, //Left line
    //         { type: "line", x1: 5, y1: 590, x2: 835, y2: 590, lineWidth: 1 }, //Bottom line
    //         { type: "line", x1: 835, y1: 5, x2: 835, y2: 590, lineWidth: 1 }, //Rigth line
    //       ],
    //     },
    //   ];
    // },
    pageSize: "A4",

    // by default we use portrait, you can change it to landscape if you wish
    // pageOrientation: "landscape",
    content: [
      {
        text: "CREDIT & CLEARING REFERENCE BUREAU DIRECTORS REPORT",
        style: "header",
        fontSize: 15,
        color: "#00CCFF",
        alignment: "center",
        characterSpacing: 2,
      },

      // with red title
      {
        columns: [
          {
            text: "SUBSCRIBER: ONE FOUR NINE FINANCIAL SERVICE PL ",
            fontSize: "8",
            alignment: "left",
          },
          {
            text: "BRANCH: HARARE",
            fontSize: "8",
            alignment: "right",
          },
          {
            text: "USER: TINASHE CHAWIRA ",
            fontSize: "8",
            alignment: "right",
          },
        ],
      },
      // serial and Date

      {
        columns: [
          {
            text: "Report Serial: 205586334",
            fontSize: "8",
            alignment: "left",
          },

          {
            text: "Report Date: 23-Jul-2024 10:32 ",
            fontSize: "8",
            alignment: "right",
          },
        ],
      },

      // directors report 
      {
        text: `DIRECTORS REPORT`,
        alignment: "center",
        bold: true,
        fontSize: 15,
      },
      {
        text: `BELINDA KUDZAI CHITIMA`,
        alignment: "center",
        bold: true,
        fontSize: 10,
      },
      {
        text: `SCORE: 313 (Medium to Low Risk - 301 to 350)`,
        alignment: "center",
        bold: true,
        fontSize: 10,
      },
      {
        text: `STATUS: GOOD (Clean History)`,
        alignment: "center",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },
      /** end of directors  */
      {
        style: 'tableExample',
        table: {
          widths: [100, 'auto','*'],
          body: [
            ['Column 1', 'COMPANY NAME :', ' DUTCH SHIPPING AND LOGISTICS'],
            ['Column 1', 'TRADE NAME :', ''],
            ['Column 1', 'COMPANY TYPE:', ' PRIVATE LIMITED COMPANY'],
            ['Column 1', 'COUNTRY:', ' ZIMBABWE'],
            ['Column 1', 'INDUSTRY :', ' TRANSPORT'],
            ['Column 1', 'GOODS AND SERVICES :', ' '],
            ['Column 1', 'REGISTRATION NUMBER :', '14928/2021'],
            ['Column 1', 'DATE OF REGISTRATION:', '2021-09-07'],
            ['Column 1', 'REGISTERED ADDRESS::', ' 298 KIRKMAN ROAD DZIVARASEKWA EXTENSION HARARE'],
            ['Column 1', 'VAT No :', ''],
            ['Column 1', 'BP No:', ''],
            ['Column 1', 'INSURANCE:', 'N/A'],
          ]
        }
      },
      /** start of director details */
      {
        text: `DIRECTOR DETAILS`,
        alignment: "center",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          widths: [100, 'auto','*'],
          body: [
            ['Column 1', 'NATIONALITY :', 'ZIMBABWE'],
            ['Column 1', 'DATE OF BIRTH :', '1992-11-11'],
            ['Column 1', 'NATIONAL ID :', ' 59142397N22'],
            ['Column 1', 'PASSPORT NO :', ' '],
            ['Column 1', 'GENDER :', ' FEMALE'],
            ['Column 1', 'MOBILE :', ' 0773824275'],
            ['Column 1', 'PROPERTY STATUS :', 'OWNED'],
            ['Column 1', 'PROPERTY DENSITY:', 'High'],
            ['Column 1', 'ADDRESS::', ' 298 KIRKMAN ROAD DZIVARASEKWA EXTENSION HARARE'],
            ['Column 1', 'MARITAL STATUS:', ''],
            ['Column 1', 'BP No:', ''],
          ]
        }
      },

      /** DIRECTORS */

      {
        text: `DIRECTORs`,
        alignment: "left",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          widths: ['*', 100,100 , 100],
          headerRows: 1,
          body: [
            [{text: 'DIRECTORS', style: 'tableHeader'}, {text: 'ID NUMBER', style: 'tableHeader'}, {text: 'SCORE', style: 'tableHeader'} , {text: 'STATUS', style: 'tableHeader'}],
            ['TAWANDA CUTHBERT CHITIMA', '25085687A75', '245' , 'GOOD'],
            ['BELINDA', '25085687A75', '245' , 'GOOD']

          ]
        }
      },


      /** Address */

      {
        text: `ADDRESSES  (Last 5 years with most recent first)`,
        alignment: "left",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [{text: 'DATE', style: 'tableHeader'}, {text: 'STREET NAME', style: 'tableHeader'}, {text: 'CITY', style: 'tableHeader'} , {text: 'COUNTRY', style: 'tableHeader'} , {text: 'PHONE', style: 'tableHeader'}, {text: 'PROPERTY RIGHTS', style: 'tableHeader'}],
            ['23-July-2024', '298 KIRKMAN ROAD', 'HARARE' , 'ZIMBABWE', '077382275' , 'HIGH : Owned'],
          ]
        }
      },

      /** previous searches */

      {
        text: `Previous Searches   (Last 5 years with most recent first)`,
        alignment: "left",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [{text: 'DATE', style: 'tableHeader'}, {text: 'SEARCH PURPOSE', style: 'tableHeader'}, {text: 'SUBSCRIBER', style: 'tableHeader'} , {text: 'BRANCH', style: 'tableHeader'} , {text: 'SCORE', style: 'tableHeader'}, {text: 'STATUS', style: 'tableHeader'}],
            ['23-Jul-2024', 'NEW CUSTOMER (KYC)', 'ONE FOUR NINE FINANCIAL SERVICE PL' , 'HARARE', '313' , 'GOOD'],
            ['23-Jul-2024', 'NEW CUSTOMER (KYC)', 'ONE FOUR NINE FINANCIAL SERVICE PL' , 'HARARE', '333' , 'GREEN'],
          ]
        }
      },


      /** report incomes */

      {
        text: `REPORTED INCOMES  (Last 5 years with most recent first)`,
        alignment: "left",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [{text: 'DATE', style: 'tableHeader'}, {text: 'EMPLOYER', style: 'tableHeader'}, {text: 'INDUSTRY', style: 'tableHeader'} , {text: 'SALARY BAND', style: 'tableHeader'} , {text: 'OCCUPATION', style: 'tableHeader'}],
            ['23-Jul-2024', 'DUTCH SHIPPING AND LOGISTICS', 'TRANSPORT' , '', 'DIRECTOR'  ],
            ['23-Jul-2024', 'DUTCH SHIPPING AND LOGISTICS', 'TRANSPORT' , '', 'DIRECTOR'  ]
          ]
        }
      },



      /** report incomes */

      {
        text: `DIRECTORSHIP FROM USER SEARCHES`,
        alignment: "left",
        bold: true,
        fontSize: 10,
        lineHeight: 2,
      },

      {
        style: 'tableExample',
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [{text: 'COMPANY NAME', style: 'tableHeader'}, {text: 'TRADE NAME', style: 'tableHeader'}, {text: 'REG No.', style: 'tableHeader'} , {text: 'D.O.F', style: 'tableHeader'} , {text: 'DATE SENT', style: 'tableHeader'} , {text: 'STATUS', style: 'tableHeader'}],
            ['DUTCH SHIPPING AND LOGISTICS', '', '14928/2021' , '07-Sep-2021', '04-Mar-2024','GREEN'  ],
       
          ]
        }
      },
      

      

      
      {
        columns: [
          {
            type: "none",
            ul: [
              {
                image: await getBase64ImageFromURL("/logo.png"),
                fit: [66, 66],
                // pageBreak: 'after'
              },
              {
                text: "TAZVIDA GAZA ",
                fontSize: "13",
                alignment: "left",
              },
              {
                text: "CHIEF EXECUTIVE OFFICER",
                color: "#00CCFF",
                fontSize: "8",
                alignment: "left",
              },
            ],
          },
          {
            image: await getBase64ImageFromURL("/logo.png"),
            fit: [120, 120],
            alignment: "center",
          },
          {
            // qr:"https://7246-41-60-67-137.ngrok-free.app/certificate/verify/"+authenticationCode+"/",
            qr: ` Name : ${companyName} \n  Service : Speed Limiter Compliance  \n Vehicle:${vehicle}\n Validity : ${generatedOn} - ${expiryDate} \n Verification Code : ${authenticationCode} `,
            style: "para",
            fit: "100",
            alignment: "right",
          },
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      tableExample: {
        margin: [0, 5, 0, 15],
        fontSize: 8,
      },
      small: {
        fontSize: 8,
      },
      para: {
        margin: [0, 9, 0, 9],
      },
      defaultStyle: {
        columnGap: 500,
      },
      bigger: {
        fontSize: 15,
        italics: true,
      },
    },
  };
  pdfMake.createPdf(docDefinition).open();
}

export default printFcbPdfReport;
