const rpc = require('discord-rpc');
const client = new rpc.Client({
    transport : 'ipc',
});

//以下為範例，可用 json 檔儲存======
const ClientID = "1160967275625582713";
const Image = "rickroll";
const TextImage = "Rick you";
const Button = "Rick Roll";
const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
const state = "Ricking";
const detail = "Never gonna give you up.";
//================================

client.login({
    clientId : ClientID
}).catch(console.error);

client.on('read',()=>{

    console.log('Start!')

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details:detail,
            state:state,
            timestamps: {
                start:Date.now()
            },
            assets: {
                large_image:Image,
                large_text:TextImage,
            },
            buttons: [{
                    label:Button,
                    url:url,
                },
            ]
        }
    })
})