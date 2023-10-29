import path from "node:path";
import moduleAlias from 'module-alias'

//Adiciona alias para produção com código javascript

const files = path.resolve(__dirname, '../../')

moduleAlias.addAliases({
    '@src': path.join(files,'src'),
    '@test': path.join(files, 'test')
})