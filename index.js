const rpc = require('discord-rpc');
const client = new rpc.Client({
    transport : 'ipc',
});

//===以下為範例，可用 json 檔儲存===
const ClientID = "1160967275625582713"; //來自機機人的 ID 
const Image = "rickroll"; //來自機機人素材的的圖片名字
const ImageText = "Rick you";
const Button = "Rick Roll";
const Url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
const State = "Ricking";
const Detail = "Never gonna give you up.";
//================================

client.login({
    clientId : ClientID
}).catch(console.error);

client.on('ready', () => {
    
    console.log("Start!")
    
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: Detail,
            state: State,
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: Image,
                large_text: ImageText,
            },
            buttons: [{
                    label: Button,
                    url: Url
                },
            ]
        }
    })
})