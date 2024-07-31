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
    pageSize: "A4",

    content: [
      {
        table: {
          widths: "*",
          body: [
            [
              {
                border: [false, false, false, false],
                fontSize: 15,
                fillColor: "#686D76",
                alignment: "center",
                color: "#FFFFFF",
                text: "CREDIT & CLEARING REFERENCE BUREAU DIRECTORS REPORT",
                lineHeight: 1,
              },
            ],
          ],
        },
      },

      // with red title
      {
        columns: [
          {
            table: {
              widths: "*",
              body: [
                [
                  {
                    border: [false, false, false, false],
                    fontSize: 9,
                    fillColor: "#921A40",
                    alignment: "left",
                    lineHeight: 2,
                    color: "#FFFFFF",
                    text: "SUBSCRIBER: ONE FOUR NINE FINANCIAL SERVICE PL            BRANCH: HARARE              USER: TINASHE CHAWIRA",
                    lineHeight: 1,
                  },
                ],
              ],
            },
          },
        ],
      },
      // serial and Date

      {
        columns: [
          {
            text: "Report Serial: 205586334",
            fontSize: "8",
            lineHeight: 1,
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
        style: "tableExample",
        table: {
          widths: [100, "auto", "*"],
          body: [
            [
              "Column 1",
              {
                text: "COMPANY NAME :",
                bold: true,
                fontSize: 10,
              },
              " DUTCH SHIPPING AND LOGISTICS",
            ],
            [
              "Column 1",
              {
                text: "TRADE NAME :",
                bold: true,
                fontSize: 10,
              },
              "",
            ],
            [
              "Column 1",
              {
                text: "COMPANY TYPE:",
                bold: true,
                fontSize: 10,
              },
              " PRIVATE LIMITED COMPANY",
            ],
            [
              "Column 1",
              {
                text: "COUNTRY",
                bold: true,
                fontSize: 10,
              },
              " ZIMBABWE",
            ],
            [
              "Column 1",
              {
                text: "INDUSTRY :",
                bold: true,
                fontSize: 10,
              },
              " TRANSPORT",
            ],
            [
              "Column 1",
              {
                text: "GOODS AND SERVICES :",
                bold: true,
                fontSize: 10,
              },
              " ",
            ],
            [
              "Column 1",
              {
                text: "REGISTRATION NUMBER :",
                bold: true,
                fontSize: 10,
              },

              "14928/2021",
            ],
            [
              "Column 1",
              {
                text: "DATE OF REGISTRATION:",
                bold: true,
                fontSize: 10,
              },

              "2021-09-07",
            ],
            [
              "Column 1",
              {
                text: "REGISTERED ADDRESS::",
                bold: true,
                fontSize: 10,
              },

              " 298 KIRKMAN ROAD DZIVARASEKWA EXTENSION HARARE",
            ],
            [
              "Column 1",
              {
                text: "VAT No :",
                bold: true,
                fontSize: 10,
              },

              "",
            ],
            [
              "Column 1",
              {
                text: "BP No:",
                bold: true,
                fontSize: 10,
              },

              "",
            ],
            [
              "Column 1",
              {
                text: "INSURANCE:",
                bold: true,
                fontSize: 10,
              },

              "N/A",
            ],
          ],
        },
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
        style: "tableExample",
        table: {
          widths: [100, "auto", "*"],
          body: [
            [
              "Column 1",

              {
                text: "NATIONALITY :",
                bold: true,
                fontSize: 10,
              },
              "ZIMBABWE",
            ],
            [
              "Column 1",
              {
                text: "DATE OF BIRTH :",
                bold: true,
                fontSize: 10,
              },

              "1992-11-11",
            ],
            [
              "Column 1",
              {
                text: "NATIONAL ID :",
                bold: true,
                fontSize: 10,
              },
              " 59142397N22",
            ],
            [
              "Column 1",

              {
                text: "PASSPORT NO :",
                bold: true,
                fontSize: 10,
              },
              " ",
            ],
            [
              "Column 1",

              {
                text: "GENDER :",
                bold: true,
                fontSize: 10,
              },
              " FEMALE",
            ],
            [
              "Column 1",

              {
                text: "MOBILE :",
                bold: true,
                fontSize: 10,
              },
              " 0773824275",
            ],
            [
              "Column 1",

              {
                text: "PROPERTY STATUS :",
                bold: true,
                fontSize: 10,
              },

              "OWNED",
            ],
            [
              "Column 1",

              {
                text: "PROPERTY DENSITY:",
                bold: true,
                fontSize: 10,
              },

              "High",
            ],
            [
              "Column 1",
              {
                text: "ADDRESS:",
                bold: true,
                fontSize: 10,
              },
              " 298 KIRKMAN ROAD DZIVARASEKWA EXTENSION HARARE",
            ],
            [
              "Column 1",

              {
                text: "MARITAL STATUS:",
                bold: true,
                fontSize: 10,
              },
              "",
            ],
            [
              "Column 1",
              {
                text: "BP No:",
                bold: true,
                fontSize: 10,
              },
              "",
            ],
          ],
        },
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
        style: "tableExample",
        table: {
          widths: ["*", 100, 100, 100],
          headerRows: 1,
          body: [
            [
              { text: "DIRECTORS", style: "tableHeader" },
              { text: "ID NUMBER", style: "tableHeader" },
              { text: "SCORE", style: "tableHeader" },
              { text: "STATUS", style: "tableHeader" },
            ],
            ["TAWANDA CUTHBERT CHITIMA", "25085687A75", "245", "GOOD"],
            ["BELINDA", "25085687A75", "245", "GOOD"],
          ],
        },
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
        style: "tableExample",
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [
              { text: "DATE", style: "tableHeader" },
              { text: "STREET NAME", style: "tableHeader" },
              { text: "CITY", style: "tableHeader" },
              { text: "COUNTRY", style: "tableHeader" },
              { text: "PHONE", style: "tableHeader" },
              { text: "PROPERTY RIGHTS", style: "tableHeader" },
            ],
            [
              "23-July-2024",
              "298 KIRKMAN ROAD",
              "HARARE",
              "ZIMBABWE",
              "077382275",
              "HIGH : Owned",
            ],
          ],
        },
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
        style: "tableExample",
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [
              { text: "DATE", style: "tableHeader" },
              { text: "SEARCH PURPOSE", style: "tableHeader" },
              { text: "SUBSCRIBER", style: "tableHeader" },
              { text: "BRANCH", style: "tableHeader" },
              { text: "SCORE", style: "tableHeader" },
              { text: "STATUS", style: "tableHeader" },
            ],
            [
              "23-Jul-2024",
              "NEW CUSTOMER (KYC)",
              "ONE FOUR NINE FINANCIAL SERVICE PL",
              "HARARE",
              "313",
              "GOOD",
            ],
            [
              "23-Jul-2024",
              "NEW CUSTOMER (KYC)",
              "ONE FOUR NINE FINANCIAL SERVICE PL",
              "HARARE",
              "333",
              "GREEN",
            ],
          ],
        },
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
        style: "tableExample",
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [
              { text: "DATE", style: "tableHeader" },
              { text: "EMPLOYER", style: "tableHeader" },
              { text: "INDUSTRY", style: "tableHeader" },
              { text: "SALARY BAND", style: "tableHeader" },
              { text: "OCCUPATION", style: "tableHeader" },
            ],
            [
              "23-Jul-2024",
              "DUTCH SHIPPING AND LOGISTICS",
              "TRANSPORT",
              "",
              "DIRECTOR",
            ],
            [
              "23-Jul-2024",
              "DUTCH SHIPPING AND LOGISTICS",
              "TRANSPORT",
              "",
              "DIRECTOR",
            ],
          ],
        },
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
        style: "tableExample",
        table: {
          // widths: ['*', 100,100 , 100 , 100, 100],
          headerRows: 1,
          body: [
            [
              { text: "COMPANY NAME", style: "tableHeader" },
              { text: "TRADE NAME", style: "tableHeader" },
              { text: "REG No.", style: "tableHeader" },
              { text: "D.O.F", style: "tableHeader" },
              { text: "DATE SENT", style: "tableHeader" },
              { text: "STATUS", style: "tableHeader" },
            ],
            [
              "DUTCH SHIPPING AND LOGISTICS",
              "",
              "14928/2021",
              "07-Sep-2021",
              "04-Mar-2024",
              "GREEN",
            ],
          ],
        },
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
            ],
          },
         
          {
            qr: 'hello world ',
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
