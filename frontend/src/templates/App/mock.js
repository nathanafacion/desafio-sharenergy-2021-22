export const mock = {
  links:  [
    {
      children: 'Gráfico',
      link: '#1',
      newTab: false,
    },
    {
      children: 'CRUD',
      link: '#2',
      newTab: false,
    },
    {
      children: 'Raciocínio Lógico',
      link: '#3',
      newTab: false,
    },
  ],
  section_graphic: {
        'title':'Gráfico',
        'background':true,
        'description': 'A aplicação deve plotar os dados em um gráfico de uma variável de interesse (tensão, corrente, potência ou temperatura) em função do tempo.',
        'id': '1'
      },
  section_logic: {
      'title':'Lógica',
      'background':true,
      'description': 'A aplicação deve estimar o retorno financeiro obtido por cada cliente oriundo da energia produzida pela usina fotovoltaica no dia.',
      'id': '3'
  },
  section_crud : {
        'title':'CRUD',
        'description': 'A aplicação deve possuir os recursos básicos de CRUD (Create, Read, Update, Delete) de modo que seja possível editar os dados de um cliente específico e exibir as informações de todos os clientes.',

        'background':false,
        'id': '2'
      },
  logoData: {'text':'Sharenergy', 'srcImg':'./logo.png','link':'https://sharenergy.com.br/'},
  footer_text: '© Copyright 2021 Nana Facion',
};
