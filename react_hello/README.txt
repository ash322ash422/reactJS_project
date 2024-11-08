1) Install nodeJS from URL: https://nodejs.org/en/download/prebuilt-installer

This would download nodeXXXX.msi file. Double click it and run it. Note that command "node" would automatically be added to system variables path.

2) At the command prompt type 'node -v' and 'npm -v'. This would display version.

3) In visual studio code install extensions:"Live Server", "Prettier - Code formatter", "Simple React Snippets" and "ES7+ React/Redux/React-Native snippets"

4) Using VSCode, open folder 'hello_world' and then open the terminal.

5) In the terminal type following command and you will receive error:

..\reactJS_projects\hello_world> npx create-react-app hello_app
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\hi\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\hi\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\hi\AppData\Local\npm-cache\_logs\2024-05-20T05_55_44_172Z-debug-0.log

SOLUTION: a) Create C:\Users\hi\AppData\Roaming\npm directory  OR

 b) run 'npm install -g create-react-app'  OR

c) run 'npm cache clean --force' and restart VS Code.

6) Run above command again and you would have to update:
..\reactJS_projects\hello_world> npx create-react-app hello_app
Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\hi\Desktop\projects\reactJS_projects\hello_world\hello_app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1489 packages in 2m

258 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 67 packages, and changed 1 package in 17s

262 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1556 packages in 6s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created hello_app at C:\Users\hi\Desktop\projects\reactJS_projects\hello_world\hello_app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd hello_app
  npm start

Happy hacking!
PS C:\Users\hi\Desktop\projects\reactJS_projects\hello_world> 

7) Inside hello_app directory run 'npm start' and the output is,

You can now view hello_app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.6:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
