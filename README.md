# Discord-Rich-Presence
這會改變你的 discord 狀態顯示欄。
# 開始:設定
首先，要下載 node.js 才能跑  
還有 nvm (Node Version Manager)
node.js 官網 : https://nodejs.org/zh-tw  
nvm github : https://github.com/coreybutler/nvm-windows  
下載好後，就用 npm install 指令在你的資料夾中下載需用的 discord 套件  
在 shell 輸入:  
1. $ npm install discord-rpc  
2. $ npm init

會跑出 package-lock.json 和 package.json 是正常的  

然後再 package.json 中加入 "type" : "module"  
```
{
  "dependencies": {
    "discord-rpc": "^4.0.1",
    "discord.js": "^14.13.0"
  },
  "name": "discord-rich-presence",
  "description": "87",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",  <-在這裡
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

還有記得要創一個機器人  
網址 : https://discord.com/developers
在 RichPresence -> art assets 的選項裡設置圖片以及素材  

# 寫程式
創一個檔案 index.js 和 token.json  
這時你的專案結構會長這樣，看不懂的話可以下載檔案來看看，我也看不太懂  

YourFilePath/  
|── node_modules/  
&emsp;|── 好多東西但不重要  
|── index.js  
|── package-lock.json  
|── package.json  
|── token.json   

之後就要開始寫程式囉  
其實只需要寫在 index.js 裡而已，而且只有 40 幾行。  

程式碼:  

```
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

```
最後在 command 裡輸入 node index 就可以了  
要停止的話就按 ctrl + c 就會跳出來了  
