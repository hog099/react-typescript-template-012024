## React e TypeScript Template

__Date: 01-2024__
## 💻 Projeto

Este projeto é uma base para futuras criações utilizando React, Vite e TypeScript, oferecendo uma infraestrutura organizada e eficiente. Incorpora ferramentas como Husky para garantir a qualidade do código, Prettier para formatação consistente e Jest para testes. Seu objetivo é acelerar o desenvolvimento de novos projetos, mantendo altos padrões de código e eficiência operacional. Ideal para desenvolvedores que buscam uma estrutura pronta e confiável para iniciar rapidamente projetos React escaláveis.

## 🧪 Tecnologias

[![Static Badge](https://img.shields.io/badge/-React-blue?style=for-the-badge)](https://reactjs.org) [![Static Badge](https://img.shields.io/badge/-Vite-yellow?style=for-the-badge)](https://vitejs.dev) [![Static Badge](https://img.shields.io/badge/-Typescript-blue?style=for-the-badge)](https://www.typescriptlang.org) [![Static Badge](https://img.shields.io/badge/-CSS-orange?style=for-the-badge)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) [![Static Badge](https://img.shields.io/badge/-Tailwindcss-gray?style=for-the-badge)](https://tailwindcss.com) [![Static Badge](https://img.shields.io/badge/-Husky-silver?style=for-the-badge)](https://typicode.github.io/husky/) [![Static Badge](https://img.shields.io/badge/-ConvencionalCommit-pink?style=for-the-badge)](https://www.conventionalcommits.org/en/v1.0.0/) [![Static Badge](https://img.shields.io/badge/-Prettier-blue?style=for-the-badge)](https://prettier.io/) [![Static Badge](https://img.shields.io/badge/-ESlint-purple?style=for-the-badge)](https://eslint.org/) [![Static Badge](https://img.shields.io/badge/-Babel-yellow?style=for-the-badge)](https://babeljs.io/) [![Static Badge](https://img.shields.io/badge/-ReactHookForm-pink?style=for-the-badge)](https://react-hook-form.com/) [![Static Badge](https://img.shields.io/badge/-Yup-blue?style=for-the-badge)](https://github.com/jquense/yup)

## 🗂️ Pastas

Segue abaixo padronização das pastas:

-   `src`: Arquivos de código fonte do projeto.
    -   `components`: Componentes reutilizáveis do React com atomic design.
    -   `contexts`: Implementação de contexto da API.
    -   `guards`: Validação de guardas para autenticação de rotas privadas.
    -   `repositories`: Classes e tipos de integração com o backend.
    -   `routes`: Rotas lógicas e grupos de rotas.
    -   `screens`: Visualizações navegáveis.
    -   `services`: Bibliotecas de serviços como axios.
    -   `styles`: Estilos globais e módulos CSS.
    -   `utils`: Funções utilitárias e auxiliares.
-   `public`: Arquivos estáticos como imagens e fontes.

## 🐺 Husky e Commitlint

**Husky:** Permite a automatização de scripts Git hooks, como linting e testes, antes dos commits, garantindo que apenas código que passa em certos critérios de qualidade seja submetido ao repositório.

**Commitlint:** Assegura que as mensagens de commit sigam um formato padronizado, o que facilita a compreensão do histórico de mudanças e a automação de changelogs.

Para configurar as regras de commit, vamos ter base a conveção de commit (https://www.conventionalcommits.org/en/v1.0.0)

Instalar as dependências abaixo e realizar as configurações.

```bash

$ yarn add -D husky lint-staged @commitlint/config-conventional @commitlint/cli

```

Adicione os scripts

```js
  "scripts": {
    ...
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "precommit": "lint-staged",
    "prepare": "husky",
    ...
  },

```

Execute a inicializacao do husky, depois dentro da pasta ".husky" crie um arquivo "commit-msg" e por fim configure o arquivo na raiz "commitlint.config.js"

```bash
 yarn husky init

```

```js
//  commit-msg - criar dentro da pasta ".husky"
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"

```

```js
// commitlint.config.js - na raiz do projeto
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 150],
        'scope-case': [2, 'never', ['kebab-case']],
        'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
        'type-case': [2, 'always', 'lower-case'],
        'type-enum': [
            2,
            'always',
            ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'wip', 'merge', 'perf', 'refactor', 'revert', 'style', 'test', 'hotfix'],
        ],
    },
};
```

## 🌈 Prettier e Eslint

**Prettier:** Garante a consistência do estilo de código, formatando automaticamente o código para seguir regras pré-definidas, o que aumenta a legibilidade e reduz as divergências estilísticas entre diferentes desenvolvedores.

**EsLint:** Detecta e alerta sobre erros de código, práticas ruins e desvios dos padrões estabelecidos, melhorando a qualidade do código e evitando bugs comuns em JavaScript e React.

Instale as dependências e as configurações abaixo.

```bash
$ yarn add -D prettier postcss autoprefixer eslint prettier eslint-config-prettier eslint-plugin-prettier

```

Crie um arquivo na raiz ".eslintrc" ou ".eslintrc.cjs" o segundo ja vem no vite.

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};
```

Crie um arquivo na raiz ".prettierrc"

```js
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "endOfLine": "lf",
    "printWidth": 150
  }
```

Adicione o script, o script de lint ja vem no vite.

```js
 "scripts": {
     ...
     "format": "prettier --write ."
    ...
  },
```

## 📝 React Hook Form

Instale as dependências e as configurações abaixo.

```bash
$ yarn add react-hook-form @hookform/resolvers yup

```

utilizacao:

```js
...
// Importacoes
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
...
// Dentro do componente react
 const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Deve ser um email").required("O E-mail é obrigatório"),
    password: Yup.string().required("A Senha é obrigatória"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { handleSubmit, setError, formState, setValue, getValues, control } = useForm(formOptions);
  const { errors } = formState;

  const watch = useWatch({
    control,
  });


  const onSubmit = async ({email, password}) => {
    if(loading) return;
    // Seu codigo para login


  }
...
// No return no jsx - no caso com nosso componente de input
  <InputComponent
    helperText={errors?.email ? errors?.email.message : null}
    label="Endereço de email"
    name="email"
    type="email"
    placeholder="Seu email"
    required
    value={getValues('email')}
    onChange={(value: string) => setValue('email', value)}
/>

...
```

## ⚛️ Atomic design para componentização

O Atomic Design é uma metodologia criada por Brad Frost para o desenvolvimento de interfaces de usuário, e ela se encaixa muito bem no contexto de React, embora não seja exclusiva para ele. A ideia principal por trás do Atomic Design é a de construir interfaces complexas a partir de componentes menores e mais simples, seguindo uma analogia com a química, onde tudo é formado a partir de átomos, moléculas e organismos. Aqui estão os cinco estágios do Atomic Design:

**Átomos:** São os blocos de construção básicos, como botões, títulos, inputs ou outros elementos HTML. Em React, esses seriam os componentes mais simples e reutilizáveis.

**Moléculas:** Combinam vários átomos para formar uma unidade mais complexa e funcional. Por exemplo, um formulário de pesquisa que inclui um input de texto (átomo) e um botão de envio (outro átomo).

**Organismos:** Grupos de moléculas que funcionam juntos para formar uma parte distinta de uma interface, como um cabeçalho que inclui um logotipo, navegação (moléculas) e talvez um widget de busca.

**Templates:** São esqueletos de página que demonstram a estrutura de layout. Aqui, os organismos são colocados em um contexto e sua interação é mais evidente. Os templates são mais abstratos e focam na disposição dos componentes na página.

**Páginas:** São instâncias específicas dos templates onde os componentes são substituídos por conteúdo real para dar uma visão precisa de como a interface funcionará na prática.


## 📖 Storybook

O Storybook é uma ferramenta de código aberto para o desenvolvimento de componentes de interface do usuário (UI) de forma isolada para frameworks como React, Vue, e Angular. É amplamente utilizado na comunidade de desenvolvimento front-end por várias razões:

**Isolamento de Componentes:** Permite aos desenvolvedores criar componentes em isolamento do resto da aplicação, o que facilita a identificação e resolução de problemas específicos de um componente.

**Catálogo de Componentes:** Funciona como um catálogo para os componentes da sua aplicação. Isso ajuda os desenvolvedores e designers a visualizar e interagir com os componentes em diferentes estados e variantes.

**Documentação Viva:** Storybook pode ser usado para criar uma documentação viva e interativa dos componentes. Isso é útil tanto para novos membros da equipe que estão se familiarizando com a base de código, quanto para stakeholders externos que precisam entender como os componentes devem parecer e funcionar.

**Desenvolvimento Dirigido por Componentes:** Facilita a abordagem de desenvolvimento dirigido por componentes (component-driven development), onde a construção da UI começa com os componentes menores e avança para os maiores, melhorando a modularidade e reusabilidade.

**Adoção de Plugins e Add-ons:** O Storybook suporta uma variedade de plugins e add-ons que podem ser usados para aprimorar a experiência de desenvolvimento, como ferramentas para acessibilidade, mock de dados, entre outros.

**Teste de UI:** Facilita o teste de componentes de UI, pois os desenvolvedores podem visualizar os componentes em diferentes estados e contextos, garantindo que eles se comportem conforme esperado.

Instale as dependências e as configurações abaixo.

```bash
yarn add -D @storybook/react @storybook/addon-actions @storybook/addon-links @storybook/addon-essentials @storybook/preset-create-react-app
```

Execute o comando abaixo para inicializar o storybook

```bash
# sera feito a inicializacao e preconfiguracao, na raiz do porjeto sera criado uma pasta ".storybook" e no package sera adicionado um script de inicializacao, assim pasta criar seu arquivos com extensao .stories.tsx que ja sera lido pelo storybook
$ npx sb init
```

Exempo de um arquivo storybook

```js
import { InputComponent } from './Input';
import '@/styles/style.css';
import '@/styles/tailwind.css';

export default {
  title: 'Input Component',
  component: InputComponent,
  argTypes: { // Somente exemplo de argtypes
    bg: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
    },
    texttransform: {
      options: ['capitalize', 'uppercase'],
      control: { type: 'select' },
    },
  },
  parameters: { // Somente exemplo de parametros
    layout: 'fullscreen',
    viewport: {
        viewports: {
            mobile: {
                name: 'Mobile',
                styles: {
                    width: '400px',
                    height: '680px',
                    padding: "5px",
                },
                type: 'mobile',
            },
        },
        defaultViewport: 'mobile',
    }
}
};

const Template = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    helperText:  null,
    label: "Endereço de email",
    name: "email",
    type: "email",
    placeholder: "Seu email",
    required: true,
    value: "email@email.com",
    onChange: ()=>null
};


```


Após criar seus componentes basta roadr script e validar seus componentes

```bash
$ yarn storybook
```


## 🖲️ Testes Unitários

Os testes unitários são fundamentais para minimizar erros e garantir a eficiência dos sistemas. Eles verificam o funcionamento de pequenos pedaços de código, aumentando a confiabilidade e eficiência dos componentes individuais de um sistema.
O Jest (https://jestjs.io/pt-BR/) é uma estrutura de teste JavaScript focada na simplicidade, criada pelo Facebook. É projetada para garantir a correção de qualquer base de código JavaScript, permitindo escrever testes com uma API familiar e rica em recursos.

Instale as dependências e as configurações abaixo.

```bash
yarn add -D jest @types/jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom ts-jest ts-node @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest
```

Crie e configure na raiz do seu projeto o arquivo "babel.config.js"

```js
module.exports = {
    presets: [['@babel/preset-env', { targets: { esmodules: true } }], ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
};
```

Crie e configure na raiz do seu projeto o arquivo "jest-setup.js"

```js
import '@testing-library/jest-dom';
```

Crie e configure na raiz do seu projeto o arquivo "jest.config.js"

```js
/* eslint-disable no-undef */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    collectCoverage: false,
    moduleNameMapper: {
        // Handle module aliases (if you're using them in your project)
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/(.*)$': '<rootDir>/src/$1',

        // Handle static assets (adjust the regex based on your asset types)
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    roots: ['./src'],
    testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    transform: {
        // Transform files with babel-jest
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['./node_modules/'],
    coverageDirectory: 'coverage', // Output directory for coverage reports
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/utils/**/*',
        '!src/App.tsx',
        '!src/main.tsx',
        '!src/routes/**/*',
        '!src/assets/**/*',
        '!src/styles/**/*',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
```

Adicione o script para rodar os testes.

```js
 "scripts": {
     ...
     "test": "jest",
    ...
  },
```

Segue abaixo um exemplo de como e um arquivo de teste, esse exemplo se encontra em "./src/screens/ExampleTest/ExampleTest.test.js".
Pode ser criado na raiz do seu projeto uma pasta "test" e colocar os testes la, ou em cada componente/arquivo vc criar um arquivo com mesmo nome e com extensão ".spec.js" ou ".test.js", ao rodar o jest ele sempre buscara essas extensoes.

```js
// ARQUIVO COMPONENTE REACT
export default function ExampleTest() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold text-center mb-8">Listagem de Produtos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src="caminho_para_imagem_produto_1.jpg" alt="Produto 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Produto 1</h2>
                    <p className="text-gray-600 mb-4">Descrição breve do produto 1.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Comprar</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src="caminho_para_imagem_produto_2.jpg" alt="Produto 2" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h2 className="text-lg font-semibold mb-2">Produto 2</h2>
                    <p className="text-gray-600 mb-4">Descrição breve do produto 2.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Comprar</button>
                </div>
            </div>
        </div>
    );
}

// ARQUIVO DE TESTE
import { render, screen } from '@testing-library/react';
import ExampleTest from './ExampleTest';

describe('ExampleTest Component', () => {
    it('renders product titles', () => {
        render(<ExampleTest />);
        expect(screen.getByText('Produto 1')).toBeInTheDocument();
        expect(screen.getByText('Produto 2')).toBeInTheDocument();
    });

    it('renders product descriptions', () => {
        render(<ExampleTest />);
        expect(screen.getByText('Descrição breve do produto 1.')).toBeInTheDocument();
        expect(screen.getByText('Descrição breve do produto 2.')).toBeInTheDocument();
    });

    // Add more tests as needed
});
```

Podemos rodar o Jest e ver se os testes passam e podemos também ver o "coverage" que é a cobertura de testes para sabermos se nosso projeto esta 100% ou 80%+ coberto por testes.

```bash
# RODAR TESTES
$ yarn test

# RODAR COVERAGE
$ yarn test --coverage

```


## 📝 Scripts para execução

Instale as dependências.

```bash

$ yarn

```

Para executar o projeto rode o comando abaixo.

```bash

$ yarn dev

```

Para criar o build de produção.

```bash

$ yarn build

```

## 📝 Licença

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

<p  align="center">Made with 💜 by <a  href="https://github.com/hog099"  target="_blank">Hudson O Ginelli</a></p>
