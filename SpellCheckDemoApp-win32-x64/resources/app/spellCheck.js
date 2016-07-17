console.log('renderer process  called ');

var webFrame = require('electron').webFrame;
var SpellCheckProvider = require('electron-spell-check-provider');
var spellchecker = require('spellchecker');
var word1 = 'ttst'
console.log('Test log: Test spellchecker with word '+word1+' '+ spellchecker.isMisspelled(word1) + ' suggestions include '+ spellchecker.getCorrectionsForMisspelling(word1) );

webFrame.setSpellCheckProvider('en-US', true,
    new SpellCheckProvider('en-US').on('misspelling', function(suggestions) {
        console.log('The text at the site of the cursor is misspelled.',
            'Maybe the user meant to type:', suggestions);
    }));

