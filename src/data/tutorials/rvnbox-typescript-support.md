---
title: RVNBOX Typescript Support
author: Gabriel Cardona
contributors: [
MSFTserver,
]
publishedAt: 2018-12-20
updatedAt: 2018-12-20
---

In this article I will demonstrate how to get started with TypeScript using the RVNBOX scaffolding tool for Node.js. To enable TypeScript some minor modifications to the generated code are required, each shown in this article. All of the code used in this tutorial can be found [on GitHub](http://github.com/raven-community/rvnbox-ts-example).

### Purpose

Unit testing and statically typed programming languages can help reduce the number of errors and bugs when writing software, and this can be especially important when building cryptocurrency related applications. To this end, ravencoin.online recently updated their [RVNBOX JavaScript SDK](http://developer.ravencoin.online/rvnbox.html) to include TypeScript type definition files (aka \*d.ts files). A new folder named “typings” was added to the [project’s repo](https://github.com/raven-community/rvnbox-javascript-sdk) which contain all of the type definition files to enable this TypeScript development support.

![RVNBOX + TypeScript](/images/rvnbox-plus-typescript.png)

### Goal

The goal for this article will be to show how to enable TypeScript types for RVNBOX. We will utilize the existing RVNBOX scaffolding system to create a new project and then show how to make the required updates so that the types can be accessed during development.

### Prerequisites

- Have a basic understanding of Node.js, npm, TypeScript. If you don’t yet know what TypeScript is then just know it can be used to fill two primary roles in a JavaScript development project:
  - It can provide an optional type system for JavaScript.
  - It can provide planned features from future JavaScript editions to current JavaScript engines
- Install RVNBOX SDK globally using `npm install -g rvnbox-sdk` (visit [http://developer.ravencoin.online/rvnbox/docs/getting-started](http://developer.ravencoin.online/rvnbox/docs/getting-started) for more details).
- You must have a recent version of Node.js installed (8.11.x or higher) TypeScript installed via `npm install -g typescript`
- Visual Studio Code is the recommended IDE for feature rich TypeScript tooling and debugging support, but other may work as well.

### Tutorial

Create a new project using `rvnbox new <project-name> --scaffold node` which will leverage the existing RVNBOX tooling to setup a new Node.js project directory with a `package.json` file and other template files.

![new RVNBOX nodeJS project](/images/new-rvnbox-node.png)

Initiate TypeScript for the project by typing `tsc --init` within the project directory. This will generate a file called `tsconfig.ts` which will contain many configurable options for your TypeScript project. We’ll update the “libs” property to equal `[“es2015”]` as shown in the capture below. This will allow use of Promises (used heavily by RVNBOX sdk) within our TypeScript code by including the ES2015 (aka., EcmaScript 6) library.

![tsconfig](/images/tsconfig.png)

Add `@types/node` as a dependency to the package.json file as shown in the image below. Then run `npm install`.

![add typings](/images/add-typings-dep.png)

Rename `index.js` to `index.ts` so that the IDE and TypeScript compiler can recognize the file as a TypeScript file instead of a JavaScript file.

The import statements need to be updated for TypeScript to match the following:

![import interface](/images/import-rvnbox-interface.png)

Now we can access the RVNBOX namespaces, methods, and properties through our IDE as illustrated in the following screen capture:

![rvnbox namespaces](/images/rvnbox-namespaces.png)

We can also see the expected inputs and outputs for each available method, as well as a strongly typed return type (i.e., `Promise<AddressDetailsResult>`). This `AddressDetailsResult` return type can imported into the project with it’s relevant properties and types readily available during development.

![address details return type](/images/address-details-return.png)

Since the details method can also return an array of address details, we cast with `<AddressDetailsResult>` so the IDE and compiler knows we are expecting a single `AddressDetailsResult` object. We can see all of the properties associated with this object when we go to use our new `details` variable.

![address details string](/images/addrStr.png)

Finally we compile the index.ts file using `tsc index.ts --lib ‘es2015’` which generates `index.js` file within the same directory, then run the newly created `index.js` file to verify the code functions.

![typescript project complete](/images/ts-done.png)

### Summary

TypeScript is a powerful superset of Javascript which adds optional typing and improves the developer experience. With RVNBOX’s typings you can hit the ground running w/ no further setup.

This post was written by [James Cramer](https://twitter.com/James_Cramer).
