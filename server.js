const express = require('express');
const bodyParser = require('body-parser'); // 換成老師使用的 body-parser
const DB = require('nedb-promises');
const cors = require('cors');

const app = express();
app.use(cors());

// 【修改這裡】改用動態 Port，如果 Render 雲端沒有指定，就預設使用你原本的 80
const port = process.env.PORT || 80;

// 配合老師的設定，使用 body-parser 解析資料並加大接收容量限制
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb' }));

// 【重要】將 public 資料夾設為對外的網頁大門
app.use(express.static(__dirname + '/public'));

// 建立 NeDB 資料庫連線 (自動建立 game.db 檔案)
const db = DB.create({ filename: 'game.db', autoload: true });
console.log('✅ NeDB 資料庫載入成功！');

// =================【1. 儲存資料 API (POST)】=================
app.post('/api/saveData', async (req, res) => {
    try {
        // 從 GDevelop 接收完整的資料包
        const { 
            playerName, score, 
            achScore50, achScore67, achScore100, 
            achSurvivor, achTNTSpike, achGodMode, 
            achEarlyDeath, achCollector, achHardcore 
        } = req.body;

        console.log(`📥 收到玩家 [${playerName}] 的完整存檔資料！分數: ${score}`);

        // 將變數轉成底線格式 (snake_case)
        const recordToSave = {
            player_name: playerName,
            score: score, 
            ach_score50: achScore50, 
            ach_score67: achScore67, 
            ach_score100: achScore100, 
            ach_survivor: achSurvivor, 
            ach_tntspike: achTNTSpike, 
            ach_godmode: achGodMode, 
            ach_earlydeath: achEarlyDeath, 
            ach_collector: achCollector, 
            ach_hardcore: achHardcore
        };

        // 執行寫入動作
        const result = await db.insert(recordToSave);
        
        console.log(`💾 玩家資料已成功寫入，資料庫 ID: ${result._id}`);
        res.json({ message: '資料與成就儲存成功！', insertId: result._id });
        
    } catch (err) {
        console.error('❌ 寫入資料庫失敗:', err);
        res.status(500).json({ error: '資料庫寫入失敗' });
    }
});

// =================【2. 讀取資料 API (GET)】=================
app.get('/api/loadData/:playerName', async (req, res) => {
    try {
        const playerName = req.params.playerName;
        console.log(`📤 準備讀取玩家 [${playerName}] 的雲端資料...`);

        // 【修正這裡！】將 _id: -1 改成 score: -1，這樣就會確保每次讀檔都抓出「分數最高」的那一筆！
        const results = await db.find({ player_name: playerName })
                                .sort({ score: -1 }) 
                                .limit(1);
        
        if (results.length > 0) {
            console.log(`✅ 成功找到玩家 [${playerName}] 的歷史存檔！最高分數: ${results[0].score}`);
            res.json(results[0]); 
        } else {
            console.log(`⚠️ 找不到玩家 [${playerName}] 的資料，這是一位新玩家。`);
            res.json({ message: 'new_player' });
        }
    } catch (err) {
        console.error('❌ 讀取資料庫失敗:', err);
        res.status(500).json({ error: '資料庫讀取失敗' });
    }
});

// =================【3. 刪除資料 API (DELETE)】=================
app.delete('/api/deleteData/:playerName', async (req, res) => {
    try {
        const playerName = req.params.playerName;
        console.log(`🗑️ 收到刪除指令！準備清除玩家 [${playerName}] 的雲端資料...`);

        // 刪除該玩家所有紀錄
        const numRemoved = await db.remove({ player_name: playerName }, { multi: true });
        
        console.log(`✅ 玩家 [${playerName}] 的資料已從雲端徹底清除！共刪除 ${numRemoved} 筆紀錄。`);
        res.json({ message: '雲端存檔已清除！' });
    } catch (err) {
        console.error('❌ 刪除資料庫失敗:', err);
        res.status(500).json({ error: '資料庫刪除失敗' });
    }
});

// 啟動伺服器
app.listen(port, () => {
    // 【修改這裡】順便把 log 改成印出目前的變數 port，方便你檢查
    console.log(`🚀 遊戲伺服器已啟動，正在監聽 Port: ${port}`);
});