import rpc from 'discord-rpc';
import token from './token.json' assert{type:'json'}; // 讀取 token.js 中的資料
const client = new rpc.Client({
    transport : 'ipc',
});

client.login({
    clientId : token.ClientID // ClientId
}).catch(console.error);

client.on('ready', () => {
    
    console.log("Start!")
    
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: token.Detail, // 描述(在玩什麼)
            state: token.State, // 狀態
            timestamps: {
                start: Date.now() // 玩了多久?
            },
            assets: {
                large_image: token.largeImage, // 主要圖片素材的名稱
                large_text: token.largeImageText, // 主要圖片描述
                small_image: token.smallImage, // 小圖片素材的名稱
                small_text: token.smallImageText // 小圖片描述
            },
            buttons: [{ // 按鈕，可有可無
                    label: token.Button, // 按鈕的字
                    url: token.Url // 按鈕的連結
                },
            ]
        }
    })
})