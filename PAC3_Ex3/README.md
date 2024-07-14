## Build
```
npx tsc
```

# VS Code
## Afegir les extensions recomanades a VS Code
1. Obrir la línia d'ordres a VS Code, en macOS: ⌘⇧P
2. Executar l'ordre ```Extensions: Configure Recommended Extensions (Workspace Folder)```
3. Afegir els identificadors de les extensions al fitxer [extensions.json](.vscode/extensions.json)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - [Emmet](https://code.visualstudio.com/docs/editor/emmet)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Configuració de Prettier
1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `default formatter`
4. Seleccionar l'opció `Prettier`

## Configuració d'Emmet
1. Obrir les preferències de l'espai de treball a VS Code, en macOS: ⌘,
2. Seleccionar `Workspace`
3. teclejar `emmet tab`
4. Habilitar l'opció `Trigger Expansion on Tab`

## ESLint
```
npm init @eslint/config@latest
```

## Dreceres de VS Code
| Drecera | Acció |
| ------- | ----- |
| ⌘ , | Obrir les preferències |
| ⌘ ⇧ P | Obrir la linia d'ordres |
| ⌘ ⇧ 7 | (des)Comentar el codi |
| ⌥ ⇧ F | Donar format al codi |
| F5 | Iniciar la depuració |
| Fn F2 | Refactor: canviar el nom |
| Fn F3 | Cercar: cercar el següent |
