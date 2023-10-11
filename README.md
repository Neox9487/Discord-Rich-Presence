# Discord-Rich-Presence
好歐，這會教你怎麼改變你的 discord 狀態顯示欄。  
看到新同學在用，感覺很屌，我就去學了一下。  
這是我第一次寫 md 檔所以排版可能不好看，我還是個 noob。
# 開始:設定
首先，要下載 node.js 才能跑  
node.js 官網 : https://nodejs.org/zh-tw  
下載好後，就用 npm install 指令在你的資料夾中下載需用的 discord 套件  
在 command 輸入:  
1. $ npm install discord.js  
2. $ npm install discord-rpc  
3. $ npm init -y  

會跑出 package-lock.json 和 package.json 是正常的  

還有記得要創一個機器人  
網址 : https://discord.com/developers
在 RichPresence 的選項裡設置圖片以及素材

# 寫程式
創一個檔案 index.js  
這時你的專案結構會長這樣，看不懂的話可以下載檔案來看看，我也看不太懂  

YourFilePath/  
|── node_modules/  
&emsp;|── 好多東西但不重要  
|── index.js  
|── package-lock.json  
|── package.json  

之後就要開始寫程式囉  
其實只需要寫在 index.js 裡而已，而且只有 40 幾行。  

程式碼:  

```
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
```
最後在 command 裡輸入 node index 就可以了  
要停止的話就按 ctrl + c 就會跳出來了  