import React from 'react';
import { Document, Page, Text, pdf } from '@react-pdf/renderer';
import axios from 'axios';
import Button from '../components/atoms/Button/Button';

const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

const doc = (
  <Document>
    <Page wrap>
      <Text >
      text
      </Text>
      {/* This is used to break the page into new Page. */}
      <Text break>
        text
      </Text>
      <Text break>
        text
      </Text>
    </Page>
  </Document>
);

const generatePDF = async () => {
  const blob = await pdf(doc).toBlob();
  blobToBase64(blob)
    .then((base64String) => {
      const url = 'UPLOAD_URL';
      axios.post(url, base64String, {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }).catch(e => console.log(e));
};

const MyDocument = () => {
  return (
    <div className="c-counter-body">
      <h1>PDF</h1>
      <div>
        <Button id="btn" text={'Convert PDF' } onClick={() => generatePDF()}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default MyDocument;

