import P from 'prop-types';
import * as Styled from './styles'
import {SectionBackground} from '../SectionBackground';
import {Heading} from '../Heading';
import {TextComponent} from '../TextComponent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { useState }  from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export const GridGraphic = ({ title,description, graphic,background,id}) => {

  const [typeGraph, settypeGraph] = useState("tensao_V");

  function handleGraphic(e) {
    settypeGraph(e.target.value);
  }

  return (
    <SectionBackground background={background} id={id}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase titleSize="small" colorDark={!background} id={id}>
            {title}
          </Heading>
            <Styled.Description>
                A aplicação deve plotar os dados em um gráfico de uma variável de interesse (tensão, corrente, potência ou temperatura) em função do tempo.
            </Styled.Description>
            <ResponsiveContainer width={400} height="80%" aspect={1}>
              <LineChart
                 width={500}
                 height={300}
                 data={graphic}
                 >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="tempo_h" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Line type="monotone" dataKey={typeGraph} stroke="#82ca9d" />
               </LineChart>
              </ResponsiveContainer>

          </Styled.TextContainer>
           <FormControl component="fieldset">
              <FormLabel component="legend"><Styled.LegendTitle> Opções de Gráficos</Styled.LegendTitle></FormLabel>
              <RadioGroup
                aria-label="graph"
                defaultValue="tensao_V"
                name="radio-buttons-group"
                >

                  <FormControlLabel value="tensao_V" onClick={handleGraphic} control={<Radio color="primary" />}  label= {<Styled.Legend> Tensão
                      </Styled.Legend>} />
                  <FormControlLabel value="corrente_A" onClick={handleGraphic} control={<Radio color="primary" />} label={<Styled.Legend> Corrente </Styled.Legend>}  />
                  <FormControlLabel value="potencia_kW" onClick={handleGraphic} control={<Radio color="primary"/>} label={<Styled.Legend> Potência </Styled.Legend>}  />
                  <FormControlLabel value="temperatura_C" onClick={handleGraphic} control={<Radio color="primary"/>} label={<Styled.Legend> Temperatura</Styled.Legend>} />
              </RadioGroup>
            </FormControl>

        </Styled.Container>

      </SectionBackground>
  );

};

GridGraphic.propTypes = {
  title: P.string.isRequired,
  graphic: P.arrayOf(
    P.shape({
      tempo_h: P.number.isRequired,
      tensao_V: P.number.isRequired,
      corrente_A: P.number.isRequired,
      potencia_kW: P.number.isRequired,
      temperatura_C: P.number.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  id: P.string,
};
