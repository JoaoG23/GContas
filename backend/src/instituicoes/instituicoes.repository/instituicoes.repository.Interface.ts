import { Injectable } from '@nestjs/common';

import { InstituicaoCriadaDto } from '../instituicoes.dto/InstituicaoCriada';
import { CriterioDePesquisaInstituicaoDto } from '../instituicoes.dto/InstituicaoPesquisa';
import { InstituicaoEditadaDto } from '../instituicoes.dto/InstituicaoEditada';

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
  abstract pesquisarPorCriterios(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  );
  abstract buscarUmPorId(id: number);
  abstract contarTodos();
  abstract contarTodosPorCriterio(
    criteriosDeBusca: CriterioDePesquisaInstituicaoDto,
  );
  abstract deletarUmPorId(id: number);
  abstract editarUmPorId(id: number, instituicao: InstituicaoEditadaDto);
}
