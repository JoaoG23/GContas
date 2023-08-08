import { Injectable } from '@nestjs/common';
import { CriarUsuariosBodyDto } from '../usuarios.dto/CriarUsuarioBodyDto';

@Injectable()
export abstract class UsuariosRepositoriesInterface {
  abstract salvar(usuario: CriarUsuariosBodyDto);
  abstract buscarUmPorLogin(login: string);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: number);
  abstract deletarUmPorId(id: number);
}
