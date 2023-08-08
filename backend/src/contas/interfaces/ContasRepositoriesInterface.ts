import { Injectable } from '@nestjs/common';
import { CriarContaBodyDto } from '../contas.dto/CriarContaBodyDto';
import { CriteriosDePesquisaContaDto } from '../contas.dto/CriteriosDePesquisaContaDto';

@Injectable()
export abstract class ContasRepositoriesInterface {
  abstract salvar(conta: CriarContaBodyDto);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract pesquisarCriteriosPorPagina(
    criteriosDeBusca: CriteriosDePesquisaContaDto,
  );
  abstract buscarUmPorId(id: number);
  abstract contarTodos();
  abstract contarTodosPorCriterio(
    criteriosDeBusca: CriteriosDePesquisaContaDto,
  );
  abstract deletarUmPorId(id: number);
  abstract editarUmPorId(id: number, conta: CriarContaBodyDto);
}
