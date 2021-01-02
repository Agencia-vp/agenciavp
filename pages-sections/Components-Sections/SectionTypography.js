import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>A partir de agora permita que seu business evolua</h2>
          </div>
          <GridContainer>
              <h1>Estamos focados no seu resultado</h1>
              <p>
              Estruturamos seu business de forma completa para o online, oferecendo insights por meio de mentoria para que sua empresa tenha melhores resultadosor, e ainda montamos planos 100% personalizados e eficazes para o seu business online.
              </p>
              <p>
            Vitor e Pedro atua nesse mercado há mais de um ano, participamos da comunidade Sobral, conhecida como a melhor comunidade de gestores de tráfego. Nasceu a partir do desejo de querer empreender e utilizar nossos conhecimentos para alavancar seus resultados no online. Pedro atuava em uma empresa b2b no mercado nacional e Vitor atua no suporte de e-commerce b2b da Imaginarium. Mais de 10 mil reais investidos em marketing, mais de um R$750.000 faturados. Temos como principal objetivo levar o resultado aos nosso clientes, estruturando planos personalizados que funcionem para o seu business.
              </p>
            <div className={classes.typo}>
              <div className={classes.note}></div>
              <Quote
                text="Insanidade consiste em fazer sempre as mesmas coisas e esperar resultados diferentes"
                author=" Albert Einstein"
              />
            </div>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
