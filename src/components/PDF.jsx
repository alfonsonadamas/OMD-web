import React from "react";
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  Tspan,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    backgroundColor: "white",
  },
  section: {
    alignItems: "center",
    margin: 15,
    // padding: 10,
    // flexGrow: 1
  },
  imagenes: {
    width: 200,
    height: 200,
    borderRadius: 60,
    objectFit: "cover",
  },
  pdf: {
    width: 1000,
    height: 800,
  },
  cliente: {
    color: "#D65886",
    fontWeight: "bold",
  },
  compañia: {
    color: "#5DC1B9",
    fontWeight: "bold",
  },
  logo_section: {
    alignItems: "center",
    margin: 10,
  },
  logo: {
    width: 250,
    height: 100,
    objectFit: "cover",
  },
});

const PDF = (PDF) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.logo_section}>
          <Image src={PDF.logo} style={styles.logo}></Image>
        </View>
        <View style={styles.section}>
          <Text>
            Información <Tspan style={styles.cliente}>General</Tspan>
          </Text>
          <Image src={PDF.people} style={styles.imagenes} />
          <Text> </Text>
          <Text>
            <Tspan style={styles.cliente}>Nombre:</Tspan> {PDF.name}
          </Text>
          <Text>
            <Tspan style={styles.cliente}>Apellido Materno:</Tspan>{" "}
            {PDF.subnameM}
          </Text>
          <Text>
            <Tspan style={styles.cliente}>Apellido Paterno:</Tspan>{" "}
            {PDF.subnameP}
          </Text>
          <Text>
            <Tspan style={styles.cliente}>E-mail:</Tspan> {PDF.email}
          </Text>
          <Text>
            <Tspan style={styles.cliente}>Fecha de Nacimiento:</Tspan>{" "}
            {PDF.birthday}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
