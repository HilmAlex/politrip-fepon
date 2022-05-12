import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

// @ts-ignore
const TicketPDF: React.FC<{ name: string; movie: string; number:number }> = ({
  name,
  movie,
  number
}) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
            position: "absolute",
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: "55px",
            }}
          >
            {name}
          </Text>
          <Image
            src="https://i.postimg.cc/J0tgdb8W/ticket.png"
            alt="random image"
            style={{
              maxWidth: "600px",
              maxHeight: "400",
              position: "relative",
              zIndex: -1,
            }}
          />
          <Text
            style={{
              position: "absolute",
              top: "105px",
            }}
          >
            {movie}
          </Text>
          <Text
            style={{
              position: "absolute",
              top: "225px",
              left: "470px",
              fontSize: "35px",
              color: 'red'
            }}
          >
            {number}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default TicketPDF;
