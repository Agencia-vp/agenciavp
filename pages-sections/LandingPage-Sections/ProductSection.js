import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vamos falar sobre seu business?</h2>
          <h5 className={classes.description}>
            Seu business precisa crescer e a partir de agora decidiu que iria fazer isso.
            Escolheu melhorar suas fotos, seus posts, deixar seu feed mais " bonito "
            E todas essas atitutes ainda por algum motivo parece que precisa de mais...
            Nosso planejamento consiste em te ajudar com todas as dificuldades que provavelmente citamos acima.
            Porque sabemos que os algoritmos foram estruturados para as grandes massas.
            E com nosso know-how a gente consegue trazer o resultado que seu business precisa.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Como nossos jobs funcionam?"
              description="Realizamos o impulsionamento e realizamos todo o trackeamento para atingir seu objetivo
                           Temos o produto de consultoria de marketing digital, onde analisamos o seu business por todo a parte digital, onde conseguimos te guiar e trazer insights valiosos que assim que aplicados, aumentam de maneira absoluta o seu business."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Garantia"
              description="Trabalhamos para lhe garantir que o seu objetivo seja cumprido, em cima dos seus objetivos, planejamos e executamos a finco para lhe trazer seus objetivos. Caso fique insatisfeito ou nao alcance sua meta, devolvemos inteiramente o investimento de nosso trabalho."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Skin in the game"
              description="Por estarmos todos os dias estudando e por termos passado um bom tempo fazendo isso, estamos no jogo, e nossa meta envolve trazer seu business para participar dos ganhos e riscos disso."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}