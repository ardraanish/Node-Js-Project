const yargs  = require("yargs")
const notes = require("./notes")
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{

        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
        describe:"Note body",
        demandOPtion:true,
        type:"string"
        }
    },
    handler(argmt){
        notes.addNote(argmt.title, argmt.body);
    }

});
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argmt) {
        notes.readNote(argmt.title);
    }
});

yargs.command({
    command: "remove",
    describe:"remove the note",
    builder: {
        title: {
            describe:"remove a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argmt){
        notes.removeNote(argmt.title);
    }
});

yargs.command({
    command:"list",
    describe: "list out the notes",
    builder: {
        title:{
            describe:"for listing the notes",
            demandOPtion: true,
            type: "string"
        }
    },
    handler(argmt){
        notes.listNotes(argmt.title);
    }
})

yargs.parse()