import P from 'prop-types';
import * as Styled from './styles'
import {SectionBackground} from '../SectionBackground';
import {Heading} from '../Heading';
import {TextComponent} from '../TextComponent';
import React, { useState }  from 'react';
import { MDBDataTable,MDBBtn, MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import './tabela.css';
export const GridLogic = ({ title, description, graphic,user,background,id}) => {

  // Soma toda a potencia
  var potenciaTotal = 0
  // define a diferenca aproximada
  var diff_aprox = 0
  // Seleciona alguns elementos para identificar de quanto em quanto tempo ocorre
  var amostragemTempoPotencia = []
  // Precisamos sempre olhar o tempo anterior para ver o padrao de intervalo
  var tempo_anterior = 0
  // auxilia a achar o delta tempo
  var aux = 0
  // Faz a conta da potencia x tempo x dinheiro
  var Total_geral = 0
  for (var k in graphic){
      if(k != 0) aux = graphic[k].tempo_h.toFixed(1) - tempo_anterior
      amostragemTempoPotencia.push({
        'potencia_kW': graphic[k].potencia_kW.toFixed(1),
        'tempo_h': graphic[k].tempo_h.toFixed(1),
        'tempo_diff': aux
      });
      tempo_anterior = graphic[k].tempo_h.toFixed(1)
      potenciaTotal = potenciaTotal + graphic[k].potencia_kW
  }
  diff_aprox = aux
  Total_geral = aux.toFixed(1)*potenciaTotal.toFixed(2)*0.95

  // Criacao da tabela usina
  const headUsina = {
    columns: [
      {
        label: 'Potência',
        field: 'potencia_kW',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Tempo',
        field: 'tempo_h',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Diferença de Tempo',
        field: 'tempo_diff',
        sort: 'asc',
        width: 200
      },

    ],
    rows:amostragemTempoPotencia
  };

  // Pegando dados de pessoas para saber quanto cada um ganharia
  var clientes = []
  for(var key in user) {
    var value = user[key];
    for (var k in value.usinas){
        clientes.push({
          'nomeCliente': value.nomeCliente,
          'usinaId': value.usinas[k].usinaId,
          'percentualDeParticipacao':  value.usinas[k].percentualDeParticipacao,
          'valorGanho':(Total_geral*value.usinas[k].percentualDeParticipacao/100).toFixed(2)
        });
    }
  }
  const headClientes = {
    columns: [
      {
        label: 'Nome Cliente',
        field: 'nomeCliente',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Id da Usina',
        field: 'usinaId',
        sort: 'asc',
        width: 270
      },
      {
        label: '% de Participação',
        field: 'percentualDeParticipacao',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Valor ganho',
        field: 'valorGanho',
        sort: 'asc',
        width: 200
      },

    ],
    rows:clientes
  };


  return (
    <SectionBackground background={background} id={id}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} id={id}>
            {title}
          </Heading>
            <Styled.Description>
              {description}
            </Styled.Description>
            <TextComponent>
            <Heading size="medium" colorDark={!background}>
              Tabela Potência e Tempo
            </Heading>
            <MDBDataTable
            striped
             bordered
             hover
             entriesOptions={[5, 20, 25]}
             entries={5}
             pagesAmount={4}
             data={headUsina}
           className='style-table' />

            </TextComponent>
            <Styled.Resultados id="ResultadosLogicos">
               Resultados:
               <p>(T)  Tempo aproximado então entre intervalos é de: {diff_aprox.toFixed(2)}</p>
               <p>(E)  Potência total é de: {potenciaTotal.toFixed(2)}</p>
               <p>(R$) O valor da energia elétrica é de: R$0,95</p>
               <p>Total de dinheiro (T x E x R$): {Total_geral.toFixed(2)}</p>
             </Styled.Resultados>
            <Heading size="medium" colorDark={!background}>
              Tabela lucro por cliente
            </Heading>
            <MDBDataTable
            striped
             bordered
             hover
             entriesOptions={[5, 20, 25]}
             entries={5}
             pagesAmount={4}
             data={headClientes}
           className='style-table' />

        </Styled.TextContainer>
      </Styled.Container>
    </SectionBackground>
  );

};

GridLogic.propTypes = {
  title: P.string.isRequired,
  graphic: P.string.isRequired,
  background: P.bool,
  id: P.string,
};
