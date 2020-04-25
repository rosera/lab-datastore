# lab-list

Lab list is a utility to generate and maintain a list of labs. Information is held in a json file, with support for importing a CSV file.
The application expects an identifier and name of a lab in the base CSV/JSON data.

* Frontend - app.js
* Backend  - lab.js

## APP.JS
app.js controls the user interface and has the following parameters available

* add
* remove
* list
* csv
* read

### Add
```node app.js add --id="lab-id" --name="Name of the lab"```

### Remove
```node app.js remove --id="lab-id"```

### List
```node app.js list```

### CSV
```node app.js csv```

### Read
```node app.js --id="lab-id"```

## LAB.js
lab.js controls the data management with the following module exports:

* addLab
* removeLab
* listLab
* readLab
* csvLab
