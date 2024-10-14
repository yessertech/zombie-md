"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'AM ALIVE STUPID.... \n\n\nLIVE like you never live a gain🦍$\n\n\n';
    let d = '                                                                           my owneris handsome';
    let varmess = z + d;
    var img = 'https://i.imgur.com/ExqNrFC.jpeg';
    await zk.sendMessage(dest, { video: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
