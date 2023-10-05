import { ContaVisualizada } from "../../../../../../types/conta/ContaVisualizada";

export const configuracaoGeracaoExportacaoContasPDF = (
  dadosRelatorio: string[][],
  logomarcaBase64: string
) => {
  const definicoesDocumento = {
    pageSize: "A4",
	userPassword: 'jg12345',
    content: [
      {
        image: logomarcaBase64,
        width: 50,
      },
      {
        text: "Gcontas",
        style: "header",
      },
      {
        text: "Exportações de Logins de Usuários",
      },
      {
        layout: "lightHorizontalLines",
        style: "small",
        table: {
          headerRows: 1,

          widths: ["auto", "auto", "auto", "auto", "auto", "auto"],
          body: dadosRelatorio,
        },
        // layout: {
        //   fillColor: function (rowIndex: any, node: any, columnIndex: any) {
        //     return rowIndex % 2 === 0 ? "#CCCCCC" : null;
        //   },
        // },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        margin: [0, 0, 0, 5],
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
    },

    footer: function (paginaAtual: number, quantidadeTotalPaginas: number) {
      const quantidadeLinhas = dadosRelatorio.length - 1;
      return [
        {
          fontSize: 9,
          text:
            "Pagina " +
            paginaAtual.toString() +
            " até " +
            quantidadeTotalPaginas.toString(),
          alignment: "center",
        },
        {
          fontSize: 9,
          text: "N° de registros: " + quantidadeLinhas,
          alignment: "right",
          margin: [0, 0, 30, 0],
        },
      ];
    },
  };
  return definicoesDocumento;
};
