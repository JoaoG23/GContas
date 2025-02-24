import { Injectable } from '@nestjs/common';

import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { CriterioDePesquisaInstituicaoDto } from '../instituicoes.dto/InstituicaoPesquisa';
import { Instituicao } from '../instituicoes.dto/Instituicao';

@Injectable()
export abstract class InstituicoesRepositoriesInterface {
  abstract salvar(instituicao: InstituicaoCriadaDto);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  );
  abstract buscarUmPorId(id: number);
  abstract buscarTodos();
  abstract contarTodos();
  abstract contarTodosPorCriterio(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  );
  abstract deletarUmPorId(id: number);
  abstract editarUmPorId(id: number, instituicao: Instituicao);
}
