import P from 'prop-types';
import {SectionBackground} from '../SectionBackground';
import {TextComponent} from '../TextComponent';
import {Heading} from '../Heading';
import * as Styled from './styles';
import React, { useState, useEffect }   from 'react';
import { MDBDataTable,MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './tabela.css';
import {Form, Row, Col,Container, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export const GridCRUD = ({
    title,
    description,
    grid,
    background = false,
    id='',

})  => {

  // Arruma os dados para colocar na tabela
  var clientes = []
  useEffect(() => {
    // Run! Like go get some data from an API.
    for(var key in grid) {
      var value = grid[key];
      for (var k in value.usinas){
          clientes.push({
            'numeroCliente': value.numeroCliente,
            'nomeCliente': value.nomeCliente,
            'usinaId': value.usinas[k].usinaId,
            'percentualDeParticipacao':  value.usinas[k].percentualDeParticipacao,
            'editar': <Button size="lg" nomecliente={value.nomeCliente} perc={value.usinas[k].percentualDeParticipacao} numusina={value.usinas[k].usinaId} numcliente={value.numeroCliente} onClick={handleEdit}> Editar </Button>,
            'excluir': <Button size="lg" nomecliente={value.nomeCliente} perc={value.usinas[k].percentualDeParticipacao} numusina={value.usinas[k].usinaId} numcliente={value.numeroCliente} onClick={handleRemove}> Excluir </Button>,
          });
      }
    }

  }, []);

  const [dados, setDados] = useState(clientes);
  const [ev, setEv] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const { register, handleSubmit, reset, setValue,getValues, formState: {errors } } = useForm();

  function handleRemove(e) {
    const nomeCliente = e.target.getAttribute("nomecliente")
    const numeroCliente = e.target.getAttribute("numcliente")
    const percentualDeParticipacao = e.target.getAttribute("perc")
    const usinaId = e.target.getAttribute("numusina")
    clean()
    setDados(dados => dados.filter(item => item.numeroCliente !== numeroCliente
              && item.nomeCliente !== nomeCliente
              && item.percentualDeParticipacao !== percentualDeParticipacao
              && item.usinaId !== usinaId
            ))

  }

  function handleEdit(e) {
    clean()
    document.getElementById("InputNumeroCliente").value = e.target.getAttribute("numcliente");
    document.getElementById("InputNomeCliente").value = e.target.getAttribute("nomecliente");
    document.getElementById("InputPerc").value = e.target.getAttribute("perc");
    document.getElementById("InputIdUsina").value = e.target.getAttribute("numusina");
    setValue("numeroCliente",e.target.getAttribute("numcliente"));
    setValue("nomeCliente",e.target.getAttribute("nomecliente"));
    setValue("usinaId",e.target.getAttribute("numusina"));
    setValue("percentualDeParticipacao",e.target.getAttribute("perc"));
    setEdit(true)
    setEv(e)
  }

  function clean(){
    document.getElementById("InputNumeroCliente").value = '';
    document.getElementById("InputNomeCliente").value = '';
    document.getElementById("InputPerc").value = '';
    document.getElementById("InputIdUsina").value = '';
  }


  function onSubmitEdit(data){
    handleRemove(ev)
    var numerocliente = getValues("numeroCliente");
    var nomecliente = getValues("nomeCliente");
    var numerousina = getValues("usinaId");
    var percentual = getValues("percentualDeParticipacao");
    clean();
    setDados( dados => [...dados,  {'numeroCliente':numerocliente,
      'nomeCliente':nomecliente,
      'usinaId':numerousina,
      'percentualDeParticipacao':percentual,
      'editar': <Button size="lg" nomecliente={nomecliente}
          perc={percentual}
          numusina={numerousina}
          numcliente={numerocliente}
          onClick={handleEdit}> Editar </Button>,
      'excluir': <Button size="lg" nomecliente={nomecliente}
          perc={percentual}
          numusina={numerousina}
          numcliente={numerocliente}
          onClick={handleRemove}> Excluir </Button>}])
       setEdit(false)
  }

  function onSubmit(data) {
        clean();
        setDados( dados =>[...dados,
                  {'numeroCliente':data.numeroCliente,
                  'nomeCliente':data.nomeCliente,
                  'usinaId':data.usinaId,
                  'percentualDeParticipacao':data.percentualDeParticipacao,
                  'editar': <Button size="lg" nomecliente={data.nomeCliente}
                      perc={data.percentualDeParticipacao}
                      numusina={data.usinaId}
                      numcliente={data.numeroCliente}
                      onClick={handleEdit}> Editar </Button>,
                  'excluir': <Button size="lg" nomecliente={data.nomeCliente}
                      perc={data.percentualDeParticipacao}
                      numusina={data.usinaId}
                      numcliente={data.numeroCliente}
                      onClick={handleRemove}> Excluir </Button>,
       }])
    }

    const data = {
      columns: [
        {
          label: 'Número do Cliente',
          field: 'numeroCliente',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Nome do Cliente',
          field: 'nomeCliente',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Id da Usina',
          field: 'usinaId',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Percentual de participação',
          field: 'percentualDeParticipacao',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Editar',
          field: 'editar',
          width: 100
        },
        {
          label: 'Excluir',
          field: 'excluir',
          width: 100
        },
      ],
      rows:dados
    };



  return (
    <>
    <SectionBackground background={background} id={id}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>
          {description}

          <Heading size="medium">
            Clientes


          </Heading>

          <div class="crud-style">
            <form id="CreateForm" onSubmit={isEdit ? handleSubmit(onSubmitEdit): handleSubmit(onSubmit)} onReset={reset}>
            <Container fluid>
              <Row>
                <Form.Group as={Col} controlId="formIdClient">
                  <Form.Label>Id do Cliente</Form.Label><br/>
                   <input type="number" id="InputNumeroCliente" {...register("numeroCliente",
                   {
                     required: '*Campo obrigatório',
                     valueAsNumber: true,
                   })} />
                    <ErrorMessage errors={errors} name="numeroCliente" render={({ message }) => <div style={{ color: 'red' }}>{message}</div>}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formNameClient">
                  <Form.Label>Nome do Cliente</Form.Label><br/>
                   <input name="InputNomeCliente" id="InputNomeCliente" {...register("nomeCliente",
                   {
                     required: '*Campo obrigatório',
                   })} />
                    <ErrorMessage errors={errors} name="nomeCliente" render={({ message }) => <div style={{ color: 'red' }}>{message}</div>}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formIUsina">
                  <Form.Label>Id da Usina</Form.Label><br/>
                   <input id="InputIdUsina" type="number" name="InputIdUsina" {...register("usinaId",{
                      required: '*Campo obrigatório',
                      valueAsNumber: true,
                    })} />
                    <ErrorMessage errors={errors} name="usinaId" render={({ message }) => <div style={{ color: 'red' }}>{message}</div>}/>
                </Form.Group>

                <Form.Group as={Col} controlId="forPercentUsina">
                  <Form.Label>% do Valor</Form.Label><br/>
                  <input type="number" id="InputPerc" {...register("percentualDeParticipacao", {
                    required: '*Campo obrigatório',
                    valueAsNumber: true,
                   })} />
                    <ErrorMessage errors={errors} name="percentualDeParticipacao" render={({ message }) => <div style={{ color: 'red' }}>{message}</div>} />
                </Form.Group>
                <Form.Group as={Col} controlId="forButton">
                  <Button size="lg" id="ButtonCRUD" type="Submit">
                      Salvar
                  </Button>
                </Form.Group>

              </Row>
            </Container>
            </form>

          </div>
        </TextComponent>

        <MDBDataTable
        striped
         bordered
         hover
         entriesOptions={[5, 20, 25]}
         entries={5}
         pagesAmount={4}
         data={data}
       className='table-styles' />

      </Styled.Container>

    </SectionBackground>

     </>
  );

};

GridCRUD.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  id: P.string,
};
