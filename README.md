# Maeum

This template should help get you started developing with Vue 3 in Vite.

## Conventions

### Motivation

- As code get complicated, documentation is need for the better development environment

  - To understand a function, a developer needs to read the every lines of function to guess what it does.
 
    >
    > **"Code is more often read than written"**
    >
    > *- Guido van Rossum*

### Naming Convnetion
#### JavaScript
  1. **Variable, Function**
    - `camelCase`: starts with a lowercase letter, words separated by uppercase first letter of the next word
      - e.g. `userName`, `itemCount`
      - e.g. `getUserInfo()`, `calculateTotal()`
          
  2. **Class**
    - `PascalCase`: starts with an uppercase letter, words separated by uppercase first letter of the next word
      - e.g. `UserInformation`, `ItemDetails`
      
  3. **Constant**
    - SCREAMING_SNAKE_CASE : words separated by underscore(`_`) with all letters uppercase
      - e.g. `MAX_LIMIT`, `DEFAULT_VALUE`

### Git commit Convention

#### Commit Type

- `feat`: a commit with a new feature
- `fix`: a commit with a bug fix
- `refactor`: a commit rewriting / restructure codebase, probably for clean code or performance improvement
- `style`: a commit that changes formatting of codebase, not changing its functions (white-space, missing semi-colons, etc)
- `test`: a commit with test codes
- `docs`: a commit with documentation
- `build`: a commit with infrastructure, deployment, building, etc
- `chore`: a miscellaneous commit (none of above)

### Github Pull Reqeust Convention

- If you need to add or modify a new code such as modification or function addition, create a `branch` and make a `pull request`. In the `pull request`, the reviewer is always @kim-song-jun

- When requesting `Pull reqeust`, write markdown according to the template form.


```md
## Docs

- [Issue Link]()

## Changes

- before :
- after :
- images

## Review Points

#### Problem

#### Solution

## Test Checklist

- [ ] check 1
- [ ] check 2
```

## Project Setup

> Using node lts version is recommended

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
