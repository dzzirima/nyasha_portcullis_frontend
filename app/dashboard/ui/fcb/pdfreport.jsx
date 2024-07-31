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
  authenticationCode ,
  maximumSpeed, 
  vehicleModel,
  chassisNumber, 
  engineNumber , 
  bodyType, 
  deviceModel,
deviceSerialNumber,
certificateNumber
) {
  generatedOn = dayjs(generatedOn).format("DD/MM/YYYY");
  expiryDate = dayjs(expiryDate).format("DD/MM/YYYY");
  var docDefinition = {
    background: function (currentPage, pageSize) {
      return [
        {
          canvas: [
            {
              type: "line",
              x1: 5,
              y1: 5,
              x2: 835,
              y2: 5,
              lineWidth: 1,
              strokeStyle: "green",
            }, //Up line
            { type: "line", x1: 5, y1: 5, x2: 5, y2: 590, lineWidth: 1 }, //Left line
            { type: "line", x1: 5, y1: 590, x2: 835, y2: 590, lineWidth: 1 }, //Bottom line
            { type: "line", x1: 835, y1: 5, x2: 835, y2: 590, lineWidth: 1 }, //Rigth line
          ],
        },
      ];
    },
    pageSize: "A4",

    // by default we use portrait, you can change it to landscape if you wish
    pageOrientation: "landscape",
    content: [
      {
        image: await getBase64ImageFromURL("/logo.png"),
        fit: [68, 68],
        alignment: "center",

        // pageBreak: 'after'
      },
      {
        text: "SPEED LIMITER COMPLIANCE CERTIFICATE",
        style: "header",
        fontSize: 30,
        color: "#00CCFF",
        alignment: "center",
        characterSpacing: 2,
      },
      {
        lineHeight: 2,
        text: "IS PRESENTED TO :",
        style: "subheader",
        fontSize: 15,
        alignment: "center",
        color: "Blue",
      },

      {
        lineHeight: 2,
        text: `           ${companyName}          `,
        style: "header",
        alignment: "center",
        fontSize: 15,
        decoration: "underline",
        decorationColor: "#00CCFF",
        bold: true,
      },

//       This serves to certify that Fanset International (Pvt) Ltd (FANtracker) a duly Zimbabwean registered company, situated at 39 Van Praagh Ave, Milton Park Harare, Zimbabwe, installed an approved speed limiting device with a set Maximum Speed limit of 80km/hour for TEEMARK INVESTMENTS on the vehicle Model Freightliner International 98I with registration number AEG1856, Chassis number 93SRUAPR08R663415, Engine
// number 79281828. Device used: NXS-4D Serial Number: 21047213752
// The Speed limiting devices are compliant with ZIMBABWE STATUTORY INSTRUMENT 118 OF 2023.

      {
        text: `This serves to certify that Fanset International (Pvt) Ltd (FANtracker) a duly Zimbabwean registered company, situated at  39 Van Praagh Ave, Milton Park Harare, Zimbabwe, installed an approved speed limiting device   with a set Maximum speed of ${maximumSpeed}km/hour  for  ${companyName} on the vehicle Model  ${vehicleModel} with registration number  ${vehicle}  , Chassis number ${chassisNumber } , Engine number  ${engineNumber} , Body Type : ${bodyType}  Device used : ${deviceModel} Serial Number : ${deviceSerialNumber} .
     The Speed limiting devices are compliant with ZIMBABWE STATUTORY INSTRUMENT 118 OF 2023. \n

    This certificate is valid from  ${generatedOn}  to ${expiryDate}. `,
        alignment: "center",
      },

      {
        text: `\nAuthentication code:${authenticationCode} \n`,
        alignment: "center",
        bold: true,
        fontSize: 15,
      },
      {
        text: `\nCertificate Number :${certificateNumber} \n`,
        alignment: "center",
        bold: true,
        fontSize: 15,
      },

      {
        text: "\n The validity and authentication of this certificate must be validated on fantracker page at  https://fanset.net/ or scan the QR Code below \n\n .",
        alignment: "center",
      },
      {
        columns: [
          {
            type: "none",
            ul: [
              {
                image: await getBase64ImageFromURL("/Bright Sign.jpeg"),
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
            image: await getBase64ImageFromURL("/Fanset stamp.jpg"),
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
