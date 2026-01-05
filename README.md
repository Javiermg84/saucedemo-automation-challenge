


SETUP INSTRUCTIONS (Setup and more)


1.- Download and Install nodejs
Webpage -> nodejs.org/en/download
After install nodejs you can open cmd with the followings commands to confirm nodejs and npm are installed:
node --version    > it should show the version
npm --version   > it should show the version

2.- Download and Install VSCode

3.- create a folder for the project and open in vscode

4.- open terminal and execute the following command
npm -i init    > creates package json file

5.- install cypress
npm install cypress --save -dev

6.- Install Git

download it from here https://git-scm.com/
important: during the installation in "Adjusting your PATH environment" choose "Git from the command line and also from 3rd-party software" option.

in terminal VScode
   git init
   gid add origins "remote repository"

in VSc files
   create a file ".gitignore" and in this file add "node_modules"
   create a fil ".github/workflows/main.yml" and add the following:


name: Cypress Tests

on: push

jobs:
  cypress-run:
    runs-on: ubuntu-24.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          build: npm run build
          start: npm start



7.- create a GitHub account

create a public repository.


8.- create html reports and run 2 browsers in parallel. (Reports will be available in GitHub/actions/artifacts)


Modify "main.yml" previously created in .GitHub/workflow , it should looks like this :


name: Cypress Tests

on: 
    push:
    workflow_dispatch:

jobs:
  cypress-run:
    runs-on: ubuntu-24.04
    strategy:
      fail-fast: false
      matrix:
        browsers: [chrome, firefox]
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run ${{ matrix.browsers }}
        uses: cypress-io/github-action@v6
        with:
          browsers: ${{ matrix.browsers }}
          command: npx cypress run --browser ${{ matrix.browsers }} --reporter mochawesome --reporter-options reportDir=cypress/reports/${{ matrix.browsers }},overwrite=false,html=false,json=true
           
      - name: Merge Mochawesome Reports
        run: npx mochawesome-merge cypress/reports/${{ matrix.browsers }}/*.json > cypress/reports/${{ matrix.browsers }}/merged-report.json

      - name: Generate HTML Reports
        run: npx marge cypress/reports/${{ matrix.browsers }}/merged-report.json --reportDir cypress/reports/${{ matrix.browsers }} -f "${{ matrix.browsers }}-report.html"
      
      - name: Upload HTML Reports
        uses: actions/upload-artifact@v4
        with:
          name: Cypress HTML Reports - ${{ matrix.browsers }}
          path: cypress/reports/${{ matrix.browsers }}






8.- start cypress
npx cypress open
npx cypress run (if you wan to run headless)
npx cypress run --spec "path" (to run only one e2e test)


9.- filtering with Grep/Tag in Cypress > 10

install cypress grep:
     npm install --save-dev @cypress/grep

add to cypress/support/e2e.js file the following:
     require('@cypress/grep').register();

to apply it, you can add a "filter-word" to the title in "describe" or "it" or a tag, like this:

    Title

      describe('User Management (smoke)', () => {

      it('should login successfully (smoke)', () => {

   Tag:     

      describe('User Management', { tags: '@smoke' }, () => {

      it('should login successfully', { tags: '@smoke' }, () => {

to run it:

    Title
      
      npx cypress run --spec "path" --env grep="smoke"

    Tag

      npx cypress run --spec "path" --env grepTag="@smoke"


     npx cypress run --env grep="login"

modify " cypress/support/e2e.js" adding :
	
      require('@cypress/grep').register();



10 .- COMMIT
Git add . (to stage all changes)
Git commit -m "Your descriptive commit message" (to commit the changes)
Git push origin master  [to push the committed changes to the remote repository (note: use master if the default branch is still named that)]
