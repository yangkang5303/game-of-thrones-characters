// ==================== 数据定义 ====================
        
        // 家族颜色配置
        const houseColors = {
            stark: "#8B4513",
            lannister: "#FFD700",
            targaryen: "#DC143C",
            baratheon: "#4682B4",
            tully: "#2E8B57",
            martell: "#DAA520",
            tyrell: "#9ACD32",
            others: "#708090"
        };

        // 节点数据（权力的游戏主要人物）
        const nodesData = [
            // 史塔克家族 - 老一代
            { id: "Rickard_Stark", name: "瑞卡德·史塔克", house: "stark", title: "冬境守护者" },
            
            // 史塔克家族 - 主要一代
            { id: "Eddard_Stark", name: "艾德·史塔克", house: "stark", title: "临冬城公爵" },
            { id: "Lyanna_Stark", name: "莱安娜·史塔克", house: "stark", title: "史塔克之女" },
            { id: "Brandon_Stark", name: "布兰登·史塔克", house: "stark", title: "史塔克长子" },
            { id: "Benjen_Stark", name: "班扬·史塔克", house: "stark", title: "守夜人总司令" },
            { id: "Catelyn_Tully", name: "凯特琳·徒利", house: "tully", title: "临冬城主母" },
            
            // 史塔克家族 - 年轻一代
            { id: "Robb_Stark", name: "罗柏·史塔克", house: "stark", title: "北境之王" },
            { id: "Sansa_Stark", name: "珊莎·史塔克", house: "stark", title: "史塔克之女" },
            { id: "Arya_Stark", name: "艾莉亚·史塔克", house: "stark", title: "史塔克之女" },
            { id: "Brandon_Stark_II", name: "布兰·史塔克", house: "stark", title: "森林之子/六国王" },
            { id: "Rickon_Stark", name: "瑞肯·史塔克", house: "stark", title: "史塔克之子" },
            { id: "Jon_Snow", name: "琼恩·雪诺", house: "stark", title: "守夜人/伊耿·坦格利安" },
            
            // 兰尼斯特家族 - 老一代
            
            // 兰尼斯特家族 - 主要一代
            { id: "Tywin_Lannister", name: "泰温·兰尼斯特", house: "lannister", title: "凯岩城公爵" },
            { id: "Joanna_Lannister", name: "乔安娜·兰尼斯特", house: "lannister", title: "凯岩城主母" },
            { id: "Kevan_Lannister", name: "凯冯·兰尼斯特", house: "lannister", title: "兰尼斯特之叔" },
            { id: "Cersei_Lannister", name: "瑟曦·兰尼斯特", house: "lannister", title: "王后/女王" },
            { id: "Jaime_Lannister", name: "詹姆·兰尼斯特", house: "lannister", title: "弑君者/骑士团长" },
            { id: "Tyrion_Lannister", name: "提利昂·兰尼斯特", house: "lannister", title: "半人/摄政" },
            { id: "Lancel_Lannister", name: "蓝赛尔·兰尼斯特", house: "lannister", title: "凯冯之子" },
            
            // 兰尼斯特子女
            { id: "Joffrey_Baratheon", name: "乔佛里·拜拉席恩", house: "lannister", title: "六国王" },
            { id: "Myrcella_Baratheon", name: "弥赛拉·拜拉席恩", house: "lannister", title: "公主" },
            { id: "Tommen_Baratheon", name: "托曼·拜拉席恩", house: "lannister", title: "六国王" },
            
            // 坦格利安家族 - 老一代
            { id: "Aerys_II", name: "伊里斯二世", house: "targaryen", title: "疯王" },
            { id: "Rhaella_Targaryen", name: "雷拉·坦格利安", house: "targaryen", title: "王后" },
            
            // 坦格利安家族 - 主要一代
                        { id: "Rhaegar_Targaryen", name: "雷加·坦格利安", house: "targaryen", title: "龙石岛亲王" },
            { id: "Viserys_Targaryen", name: "韦赛里斯·坦格利安", house: "targaryen", title: "银王子/国王" },
            { id: "Daenerys_Targaryen", name: "丹妮莉丝·坦格利安", house: "targaryen", title: "龙之母/女王" },
            
            // 坦格利安子女
            { id: "Rhaenys_Targaryen", name: "雷妮丝·坦格利安", house: "targaryen", title: "雷加之女" },
            
            // 丹妮莉丝的龙
            { id: "Drogon", name: "卓耿(龙)", house: "targaryen", title: "黑龙" },
            { id: "Rhaegal_Dragon", name: "雷戈(龙)", house: "targaryen", title: "绿龙" },
            { id: "Viserion_Dragon", name: "韦赛利昂(龙)", house: "targaryen", title: "白龙" },
            
            // 拜拉席恩家族 - 老一代
            { id: "Steffon_Baratheon", name: "史蒂芬·拜拉席恩", house: "baratheon", title: "风息堡伯爵" },
            
            // 拜拉席恩家族 - 主要一代
            { id: "Robert_Baratheon", name: "劳勃·拜拉席恩", house: "baratheon", title: "六国王" },
            { id: "Stannis_Baratheon", name: "斯坦尼斯·拜拉席恩", house: "baratheon", title: "风息堡领主" },
            { id: "Renly_Baratheon", name: "蓝礼·拜拉席恩", house: "baratheon", title: "风息堡领主" },
            
            // 拜拉席恩相关
            { id: "Selyse_Florent", name: "瑟蕾莎·佛罗伦", house: "others", title: "斯坦尼斯之妻" },
            { id: "Shireen_Baratheon", name: "希琳·拜拉席恩", house: "baratheon", title: "斯坦尼斯之女" },
            { id: "Gendry", name: "詹德利", house: "baratheon", title: "劳勃私生子" },
            
            // 徒利家族
            { id: "Hoster_Tully", name: "霍斯特·徒利", house: "tully", title: " Riverrun 领主" },
            { id: "Edmure_Tully", name: "艾德慕·徒利", house: "tully", title: " Riverrun 领主" },
            { id: "Lysa_Tully", name: "莱莎·徒利", house: "tully", title: "谷地守护" },
            
            // 马泰尔家族
            { id: "Doran_Martell", name: "多兰·马泰尔", house: "martell", title: "多恩统治者" },
            { id: "Oberyn_Martell", name: "奥柏伦·马泰尔", house: "martell", title: "红毒蛇" },
            { id: "Elia_Martell", name: "伊利亚·马泰尔", house: "martell", title: "雷加之妻" },
            
            // 提利尔家族
            { id: "Mace_Tyrell", name: "梅斯·提利尔", house: "tyrell", title: "高庭伯爵" },
            { id: "Margaery_Tyrell", name: "玛格利·提利尔", house: "tyrell", title: "王后" },
            { id: "Loras_Tyrell", name: "洛拉斯·提利尔", house: "tyrell", title: "百花骑士" },
            
            // 其他重要人物
            { id: "Ygritte", name: "耶哥蕊特", house: "others", title: "野女人" },
            { id: "Missandei", name: "弥桑黛", house: "others", title: "丹妮莉丝的顾问" },
            { id: "Grey_Worm", name: "灰虫", house: "others", title: "无垢者统领" },
                    ];

        // 边数据（关系）
        const linksData = [
            // 史塔克家族 - 父母→子女
            { source: "Rickard_Stark", target: "Eddard_Stark", relation: "父子", type: "parent-child" },
            { source: "Rickard_Stark", target: "Lyanna_Stark", relation: "父女", type: "parent-child" },
            { source: "Rickard_Stark", target: "Brandon_Stark", relation: "父子", type: "parent-child" },
            { source: "Rickard_Stark", target: "Benjen_Stark", relation: "父子", type: "parent-child" },
            
            // 艾德 & 凯特琳 → 子女
            { source: "Eddard_Stark", target: "Catelyn_Tully", relation: "夫妻", type: "spouse" },
            { source: "Eddard_Stark", target: "Robb_Stark", relation: "父子", type: "parent-child" },
            { source: "Eddard_Stark", target: "Sansa_Stark", relation: "父女", type: "parent-child" },
            { source: "Eddard_Stark", target: "Arya_Stark", relation: "父女", type: "parent-child" },
            { source: "Eddard_Stark", target: "Brandon_Stark_II", relation: "父子", type: "parent-child" },
            { source: "Eddard_Stark", target: "Rickon_Stark", relation: "父子", type: "parent-child" },
            { source: "Catelyn_Tully", target: "Robb_Stark", relation: "母子", type: "parent-child" },
            { source: "Catelyn_Tully", target: "Sansa_Stark", relation: "母女", type: "parent-child" },
            { source: "Catelyn_Tully", target: "Arya_Stark", relation: "母女", type: "parent-child" },
            { source: "Catelyn_Tully", target: "Brandon_Stark_II", relation: "母子", type: "parent-child" },
            { source: "Catelyn_Tully", target: "Rickon_Stark", relation: "母子", type: "parent-child" },
            
            // 琼恩·雪诺 (雷加 & 莱安娜之子)
            { source: "Rhaegar_Targaryen", target: "Lyanna_Stark", relation: "夫妻(秘密)", type: "spouse" },
            { source: "Rhaegar_Targaryen", target: "Jon_Snow", relation: "父子", type: "parent-child" },
            { source: "Lyanna_Stark", target: "Jon_Snow", relation: "母子", type: "parent-child" },
            
            // 兰尼斯特家族 - 父母→子女
            { source: "Tywin_Lannister", target: "Cersei_Lannister", relation: "父女", type: "parent-child" },
            { source: "Tywin_Lannister", target: "Jaime_Lannister", relation: "父子", type: "parent-child" },
            { source: "Tywin_Lannister", target: "Tyrion_Lannister", relation: "父子", type: "parent-child" },
            { source: "Tywin_Lannister", target: "Kevan_Lannister", relation: "兄弟", type: "parent-child" },
            { source: "Tywin_Lannister", target: "Joanna_Lannister", relation: "夫妻", type: "spouse" },
            { source: "Joanna_Lannister", target: "Cersei_Lannister", relation: "母子", type: "parent-child" },
            { source: "Joanna_Lannister", target: "Jaime_Lannister", relation: "母子", type: "parent-child" },
            { source: "Joanna_Lannister", target: "Tyrion_Lannister", relation: "母子", type: "parent-child" },
            
            // 瑟曦 & 詹姆 → 子女 (实际是近亲)
            { source: "Cersei_Lannister", target: "Jaime_Lannister", relation: "夫妻(近亲)", type: "spouse" },
            { source: "Cersei_Lannister", target: "Joffrey_Baratheon", relation: "母子", type: "parent-child" },
            { source: "Cersei_Lannister", target: "Myrcella_Baratheon", relation: "母子", type: "parent-child" },
            { source: "Cersei_Lannister", target: "Tommen_Baratheon", relation: "母子", type: "parent-child" },
            { source: "Jaime_Lannister", target: "Joffrey_Baratheon", relation: "父子", type: "parent-child" },
            { source: "Jaime_Lannister", target: "Myrcella_Baratheon", relation: "父子", type: "parent-child" },
            { source: "Jaime_Lannister", target: "Tommen_Baratheon", relation: "父子", type: "parent-child" },
            
            // 凯冯 → 蓝赛尔
            { source: "Kevan_Lannister", target: "Lancel_Lannister", relation: "父子", type: "parent-child" },
            
            // 坦格利安家族 - 父母→子女
            { source: "Aerys_II", target: "Rhaegar_Targaryen", relation: "父子", type: "parent-child" },
            { source: "Aerys_II", target: "Viserys_Targaryen", relation: "父子", type: "parent-child" },
            { source: "Aerys_II", target: "Daenerys_Targaryen", relation: "父女", type: "parent-child" },
            { source: "Aerys_II", target: "Rhaella_Targaryen", relation: "夫妻", type: "spouse" },
            { source: "Rhaella_Targaryen", target: "Rhaegar_Targaryen", relation: "母子", type: "parent-child" },
            { source: "Rhaella_Targaryen", target: "Viserys_Targaryen", relation: "母子", type: "parent-child" },
            { source: "Rhaella_Targaryen", target: "Daenerys_Targaryen", relation: "母女", type: "parent-child" },
            
            // 雷加 → 雷妮丝
            { source: "Rhaegar_Targaryen", target: "Elia_Martell", relation: "夫妻", type: "spouse" },
            { source: "Rhaegar_Targaryen", target: "Rhaenys_Targaryen", relation: "父子", type: "parent-child" },
            { source: "Elia_Martell", target: "Rhaenys_Targaryen", relation: "母子", type: "parent-child" },
            
            // 丹妮莉丝的龙 (从蛋中孵化，象征性的母子关系)
            { source: "Daenerys_Targaryen", target: "Drogon", relation: "龙之母", type: "parent-child" },
            { source: "Daenerys_Targaryen", target: "Rhaegal_Dragon", relation: "龙之母", type: "parent-child" },
            { source: "Daenerys_Targaryen", target: "Viserion_Dragon", relation: "龙之母", type: "parent-child" },
            
            // 拜拉席恩家族 - 父母→子女
            { source: "Steffon_Baratheon", target: "Robert_Baratheon", relation: "父子", type: "parent-child" },
            { source: "Steffon_Baratheon", target: "Stannis_Baratheon", relation: "父子", type: "parent-child" },
            { source: "Steffon_Baratheon", target: "Renly_Baratheon", relation: "父子", type: "parent-child" },
            
            // 劳勃 & 瑟曦 (名义上的夫妻)
            { source: "Robert_Baratheon", target: "Cersei_Lannister", relation: "夫妻(名义)", type: "spouse" },
            
            // 斯坦尼斯 & 瑟蕾莎 → 希琳
            { source: "Stannis_Baratheon", target: "Selyse_Florent", relation: "夫妻", type: "spouse" },
            { source: "Stannis_Baratheon", target: "Shireen_Baratheon", relation: "父女", type: "parent-child" },
            { source: "Selyse_Florent", target: "Shireen_Baratheon", relation: "母女", type: "parent-child" },
            
            // 劳勃私生子
            { source: "Robert_Baratheon", target: "Gendry", relation: "父子(私生)", type: "parent-child" },
            
            // 琼恩 & 耶哥蕊特 → 孩子
            { source: "Jon_Snow", target: "Ygritte", relation: "情侣", type: "spouse" },
            
            // 徒利家族 - 父母→子女
            { source: "Hoster_Tully", target: "Catelyn_Tully", relation: "父女", type: "parent-child" },
            { source: "Hoster_Tully", target: "Lysa_Tully", relation: "父女", type: "parent-child" },
            { source: "Hoster_Tully", target: "Edmure_Tully", relation: "父子", type: "parent-child" },
            
            // 马泰尔家族 - 父母→子女
            { source: "Doran_Martell", target: "Oberyn_Martell", relation: "兄弟", type: "parent-child" },
            { source: "Doran_Martell", target: "Elia_Martell", relation: "父女", type: "parent-child" },
            
            // 提利尔家族 - 父母→子女
            { source: "Mace_Tyrell", target: "Margaery_Tyrell", relation: "父女", type: "parent-child" },
            { source: "Mace_Tyrell", target: "Loras_Tyrell", relation: "父子", type: "parent-child" },
            
            // 玛格利与各位国王的婚姻
            { source: "Margaery_Tyrell", target: "Renly_Baratheon", relation: "夫妻(政治)", type: "spouse" },
            { source: "Margaery_Tyrell", target: "Joffrey_Baratheon", relation: "夫妻(未成婚)", type: "spouse" },
            { source: "Margaery_Tyrell", target: "Tommen_Baratheon", relation: "夫妻", type: "spouse" },
            
            // 丹妮莉丝的伴侣/顾问
            { source: "Daenerys_Targaryen", target: "Missandei", relation: "主仆", type: "spouse" },
            { source: "Daenerys_Targaryen", target: "Grey_Worm", relation: "主仆", type: "spouse" },
        ];

        // ==================== 角色生平故事数据 ====================
        
        const characterStories = {
            "Eddard_Stark": {
                story: "<p>艾德·史塔克（奈德）是临冬城公爵、北境守护。他重誓言、守荣誉，是维斯特洛少见把‘正直’活成习惯的人。</p><p>劳勃称王后，他被召入君临担任国王之手，并发现乔佛里等王嗣身世真相。因坚持底线、拒绝权谋妥协，最终在贝勒大圣堂前被处决。</p>",
                quote: "The man who passes the sentence should swing the sword."
            },
            "Jon_Snow": {
                story: "<p>琼恩·雪诺以私生子身份在临冬城长大，后加入守夜人。他从基层一路成长为总司令，亲历野人与异鬼威胁，逐渐明白‘活人必须团结’。</p><p>后被证实其真实身份为雷加·坦格利安与莱安娜·史塔克之子，名为伊耿。大战之后，他刺杀丹妮莉丝并被流放回长城以北。</p>",
                quote: "You know nothing, Jon Snow."
            },
            "Daenerys_Targaryen": {
                story: "<p>丹妮莉丝是坦格利安末裔，从流亡公主成长为“龙之母”。她在厄斯索斯解放奴隶城邦，集结军队与盟友，横渡狭海争夺铁王座。</p><p>长夜之战后，她在君临之战中焚城，引发巨大争议。最终在铁王座前被琼恩刺杀，卓耿带着她的遗体飞离君临。</p>",
                quote: "Dracarys."
            },
            "Cersei_Lannister": {
                story: "<p>瑟曦·兰尼斯特是泰温之女、劳勃王后。她政治嗅觉敏锐、控制欲极强，为巩固权力不惜牺牲盟友与亲族。</p><p>她以野火炸毁贝勒大圣堂，登上铁王座。君临失守时，她与詹姆在红堡地下相拥而亡。</p>",
                quote: "When you play the game of thrones, you win or you die."
            },
            "Tyrion_Lannister": {
                story: "<p>提利昂·兰尼斯特以机敏、幽默和政治头脑著称。黑水河之战中他曾力挽狂澜，却长期被家族轻视。</p><p>弑父后流亡，成为丹妮莉丝首席谋士。最终在王国会议上推动布兰登基，并再任国王之手。</p>",
                quote: "I drink and I know things."
            },
            "Arya_Stark": {
                story: "<p>艾莉亚从不愿被“淑女”规训。父亲遇害后，她在战火中辗转求生，前往布拉佛斯接受无面者训练。</p><p>返乡后，她亲手终结佛雷家复仇，并在临冬城之战中刺杀夜王。大战后，她选择航向维斯特洛以西的未知海域。</p>",
                quote: "Not today."
            },
            "Sansa_Stark": {
                story: "<p>珊莎从憧憬王城生活的少女，经历乔佛里、拉姆斯与小指头的算计，逐步学会在权力漩涡中自保与反制。</p><p>她协助收复临冬城，并在最终议事中坚持北境独立，加冕为“北境女王”。</p>",
                quote: "The North is free, thanks to you."
            },
            "Brandon_Stark_II": {
                story: "<p>布兰坠塔致残后踏上北境以外的旅程，最终继承三眼乌鸦之力，成为记忆与历史的承载者。</p><p>在战后贵族会议中被推举为六国之王，开启“由记忆统治而非血统统治”的新秩序。</p>",
                quote: "Why do you think I came all this way?"
            },
            "Jaime_Lannister": {
                story: "<p>詹姆是“弑君者”，也是复杂矛盾的骑士。他曾杀死疯王，阻止君临被野火焚毁，却因此背负污名多年。</p><p>失去右手后，他的骑士信念被重塑。最终在君临陷落前回到瑟曦身边，与她同亡。</p>",
                quote: "The things I do for love."
            },
            "Robb_Stark": {
                story: "<p>罗柏在奈德死后被拥立为“北境之王”，以年轻统帅之姿连战连捷。</p><p>但他违背与佛雷家的婚约，最终在“血色婚礼”中与妻子、母亲一同被害，北境独立大业就此崩塌。</p>",
                quote: "The King in the North!"
            },
            "Catelyn_Tully": {
                story: "<p>凯特琳出身徒利家族，是奈德之妻、史塔克子女的母亲。她在战乱中为家族奔走，以母亲身份承受最重代价。</p><p>血色婚礼上，她亲眼见罗柏被杀，随后自己也命丧当场。</p>",
                quote: "Show him how it feels, Lord Bolton."
            },
            "Tywin_Lannister": {
                story: "<p>泰温是兰尼斯特家族真正的权力核心，冷峻、高效、极端重视家族威望。</p><p>他在君临长期把控朝局，却在最松懈的一刻被提利昂以十字弓射杀，象征旧式家长权威的终结。</p>",
                quote: "Any man who must say, 'I am the king,' is no true king."
            },
            "Lyanna_Stark": {
                story: "<p>莱安娜是奈德之妹。其与雷加的关系引爆了篡夺者战争，也改写了七国命运。</p><p>她在“极乐塔”产下琼恩后去世，临终托付奈德守住这个秘密。</p>",
                quote: "Promise me, Ned."
            },
            "Robert_Baratheon": {
                story: "<p>劳勃在篡夺者战争中推翻坦格利安王朝，成为国王。登基后逐渐沉湎酒色狩猎，把政务大量交给他人处理。</p><p>他在狩猎中重伤而亡，直接点燃五王之战。</p>",
                quote: "Gods, I was strong then!"
            },
            "Stannis_Baratheon": {
                story: "<p>斯坦尼斯严苛、刻板、重法理，自认对王位拥有合法继承权。他在红袍女影响下走向宗教极端。</p><p>北上失败后，在临冬城外遭布蕾妮处决（剧中呈现为其执行）。</p>",
                quote: "I never asked for this, no more than I asked to be king."
            },
            "Renly_Baratheon": {
                story: "<p>蓝礼风度翩翩，凭借提利尔支持快速扩军，自立为王。</p><p>他在营帐中被梅丽珊卓召唤的“影子刺客”杀死，势力瞬间瓦解。</p>",
                quote: "Born amidst salt and smoke..."
            },
            "Rhaegar_Targaryen": {
                story: "<p>雷加是疯王长子，文武兼备。其与莱安娜的结合成为战争导火索。</p><p>他在三叉戟河战役中被劳勃击杀，坦格利安王朝由此走向终局。</p>",
                quote: ""
            },
            "Viserys_Targaryen": {
                story: "<p>韦赛里斯长期流亡，执念于“夺回铁王座”。他将丹妮莉丝嫁给卓戈以换取多斯拉克军力。</p><p>在多斯拉克海，他因挑衅卓戈被“加冕”为熔金王冠而死。</p>",
                quote: "I am the dragon."
            },
            "Aerys_II": {
                story: "<p>伊里斯二世即“疯王”，统治末期疑惧成狂，热衷以野火处决敌人。</p><p>君临陷落时，他命令焚城，最终被御林铁卫詹姆所杀。</p>",
                quote: "Burn them all!"
            },
            "Rhaella_Targaryen": {
                story: "<p>雷拉是疯王之妻、丹妮莉丝之母。她在龙石岛产下丹妮莉丝后不久去世。</p>",
                quote: ""
            },
            "Rhaenys_Targaryen": {
                story: "<p>雷妮丝是雷加与伊莉亚之女。在君临陷落时，她与弟弟伊耿一同遇害。</p>",
                quote: ""
            },
            "Drogon": {
                story: "<p>卓耿是丹妮莉丝最强壮的一条龙，以卓戈命名。其火焰改变了多场关键战役走向。</p><p>在丹妮莉丝死后，卓耿熔毁铁王座并携其遗体离开。</p>",
                quote: ""
            },
            "Rhaegal_Dragon": {
                story: "<p>雷戈以雷加命名，绿鳞金翼。临冬城大战后南下途中，被攸伦舰队巨弩重创并击杀。</p>",
                quote: ""
            },
            "Viserion_Dragon": {
                story: "<p>韦赛利昂以韦赛里斯命名。越墙远征时被夜王冰矛射落，后化作尸龙。</p><p>在临冬城大战中随夜王作战，最终被击败。</p>",
                quote: ""
            },
            "Doran_Martell": {
                story: "<p>多兰·马泰尔是多恩亲王，行事隐忍。他长期谋划为姐姐伊莉亚复仇，但行动迟缓。</p><p>剧中第六季初，他在宫廷政变中被艾拉莉亚·沙德杀害。</p>",
                quote: ""
            },
            "Oberyn_Martell": {
                story: "<p>奥柏伦“红毒蛇”是多恩亲王之弟，剑术精绝，性格炽烈。</p><p>他在提利昂审判决斗中几乎战胜魔山，却因执着逼供而被反杀。</p>",
                quote: "I will be your champion."
            },
            "Elia_Martell": {
                story: "<p>伊莉亚是多恩公主、雷加之妻。篡夺者战争末期，她与子女在君临被残忍杀害。</p>",
                quote: ""
            },
            "Mace_Tyrell": {
                story: "<p>梅斯是高庭公爵、提利尔家主。家族凭粮仓与军力成为王都关键支柱。</p><p>他与玛格丽、洛拉斯在贝勒大圣堂爆炸中同日身亡。</p>",
                quote: ""
            },
            "Margaery_Tyrell": {
                story: "<p>玛格丽善于经营民意与宫廷关系，先后与蓝礼、乔佛里（未完婚）和托曼联姻。</p><p>她在教会与王权夹缝中周旋，最终死于瑟曦引爆的野火。</p>",
                quote: ""
            },
            "Loras_Tyrell": {
                story: "<p>洛拉斯“百花骑士”是提利尔家名将。后遭麻雀派囚禁审判，被迫受辱。</p><p>他最终与家族成员一同葬身贝勒大圣堂。</p>",
                quote: ""
            },
            "Hoster_Tully": {
                story: "<p>该角色名称与正剧设定不一致。剧中徒利家族核心长辈为霍斯特·徒利（Hoster Tully）。</p><p>霍斯特在剧中早期病逝，凯特琳、莱莎、艾德慕是其子女。</p>",
                quote: ""
            },
            "Edmure_Tully": {
                story: "<p>艾德慕是徒利家继承人，经历战争与俘虏岁月。血色婚礼后长期被佛雷家控制。</p><p>终局议会中，他短暂提名自己称王，后主动退场。</p>",
                quote: ""
            },
            "Lysa_Tully": {
                story: "<p>莱莎嫁给琼恩·艾林并执掌鹰巢城。她在小指头操控下逐渐偏执，政治判断失衡。</p><p>最终在月门前与小指头争执，被其推下高空身亡。</p>",
                quote: ""
            },
            "Ygritte": {
                story: "<p>耶哥蕊特是自由民女战士，与琼恩在长城以北相爱。她锐利、热烈，也比任何人更懂琼恩的迟疑。</p><p>黑城堡之战中，她中箭倒在琼恩怀里，留下那句最著名的话。</p>",
                quote: "You know nothing, Jon Snow."
            },
            "Missandei": {
                story: "<p>弥桑黛原是奴隶湾通晓多语的少女，后成为丹妮莉丝最信任的译者与顾问之一。</p><p>她在与灰虫的爱情线中展现温柔与坚定，最终被瑟曦下令斩首，临终高呼“Dracarys”。</p>",
                quote: "Dracarys."
            },
            "Grey_Worm": {
                story: "<p>灰虫是无垢者统领，对丹妮莉丝极度忠诚，也在战争中逐步找回自我与情感。</p><p>弥桑黛之死后，他在君临战役中愈发决绝；大战后率无垢者前往纳斯岛。</p>",
                quote: ""
            },
            "Gendry": {
                story: "<p>詹德利是劳勃私生子，擅长锻造。曾与艾莉亚一同逃亡，在风暴与战火中淬炼成战士。</p><p>长夜之战前被丹妮莉丝封为风息堡公爵，仍保有平民出身的朴实。</p>",
                quote: ""
            },
            "Shireen_Baratheon": {
                story: "<p>希琳是斯坦尼斯之女，聪慧善良，曾教戴佛斯识字。她的命运是全剧最痛的一刀。</p><p>斯坦尼斯在绝境中听信梅丽珊卓，将她火祭，直接导致军心崩溃与家族覆灭。</p>",
                quote: ""
            },
            "Selyse_Florent": {
                story: "<p>赛丽丝是斯坦尼斯之妻，虔信光之王。女儿被献祭后，她精神崩溃并在营地自缢。</p>",
                quote: ""
            },
            "Rickard_Stark": {
                story: "<p>瑞卡德是奈德之父。疯王在审判中将其以火刑处死，成为篡夺者战争导火索之一。</p>",
                quote: ""
            },
            "Benjen_Stark": {
                story: "<p>班扬是守夜人首席游骑兵，早期失踪。后以“介于生死之间”的状态回归，多次救下琼恩。</p><p>最终为掩护琼恩撤离，独自迎战尸鬼大军。</p>",
                quote: ""
            },
            "Brandon_Stark": {
                story: "<p>布兰登（奈德长兄）因莱安娜事件赴君临问罪，反被疯王逮捕并残酷处死。</p><p>其死与父亲瑞卡德之死共同点燃了史塔克与王室的全面战争。</p>",
                quote: ""
            },
            "Kevan_Lannister": {
                story: "<p>凯冯是泰温之弟，务实稳健。瑟曦失势期间，他短暂接管朝政，试图恢复秩序。</p><p>在贝勒大圣堂爆炸中身亡。</p>",
                quote: ""
            },
            "Joanna_Lannister": {
                story: "<p>乔安娜是泰温之妻、詹姆/瑟曦/提利昂之母，于提利昂出生时难产去世。</p><p>她虽未在正剧出场，却深刻影响兰尼斯特家族情感结构。</p>",
                quote: ""
            },
            "Lancel_Lannister": {
                story: "<p>蓝赛尔曾是瑟曦情人，后皈依麻雀派。贝勒大圣堂爆炸前，他试图阻止点燃野火但失败。</p>",
                quote: ""
            },
            "Joffrey_Baratheon": {
                story: "<p>乔佛里名义上是劳勃之子，实为瑟曦与詹姆所生。其统治以残酷、任性和羞辱政治对手著称。</p><p>他在“紫色婚礼”上中毒身亡。</p>",
                quote: "Everyone is mine to torment."
            },
            "Myrcella_Baratheon": {
                story: "<p>弥赛菈被送往多恩联姻，性格温和。返航君临途中，她被艾拉莉亚下毒身亡。</p>",
                quote: ""
            },
            "Tommen_Baratheon": {
                story: "<p>托曼心地仁厚，却无力驾驭王权与母后、教会之间的冲突。</p><p>玛格丽死于大圣堂爆炸后，他从红堡高窗坠亡。</p>",
                quote: ""
            },
            "Rickon_Stark": {
                story: "<p>瑞肯是史塔克幼子，长期在战乱边缘成长。私生子之战前被拉姆斯作为诱饵放出，最终中箭身亡。</p>",
                quote: ""
            }
        };

        // ==================== 数据 Review / 扩展 ====================
        // 人物、关系与介绍集中在本文件维护；got-app.js 只负责渲染和交互。
        nodesData.push(...[
            {
                        "id": "Olenna_Tyrell",
                        "name": "奥莲娜·提利尔",
                        "house": "tyrell",
                        "title": "荆棘女王/老玫瑰"
            },
            {
                        "id": "Petyr_Baelish",
                        "name": "培提尔·贝里席",
                        "house": "others",
                        "title": "小指头"
            },
            {
                        "id": "Varys",
                        "name": "瓦里斯",
                        "house": "others",
                        "title": "八爪蜘蛛"
            },
            {
                        "id": "Brienne_Tarth",
                        "name": "布蕾妮·塔斯",
                        "house": "others",
                        "title": "塔斯的布蕾妮"
            },
            {
                        "id": "Theon_Greyjoy",
                        "name": "席恩·葛雷乔伊",
                        "house": "others",
                        "title": "铁群岛继承人/史塔克养子"
            },
            {
                        "id": "Ramsay_Bolton",
                        "name": "拉姆斯·波顿",
                        "house": "others",
                        "title": "波顿私生子/临冬城领主"
            },
            {
                        "id": "Night_King",
                        "name": "夜王",
                        "house": "others",
                        "title": "异鬼之王"
            },
            {
                        "id": "Samwell_Tarly",
                        "name": "山姆威尔·塔利",
                        "house": "others",
                        "title": "守夜人/大学士"
            },
            {
                        "id": "Jorah_Mormont",
                        "name": "乔拉·莫尔蒙",
                        "house": "others",
                        "title": "流亡骑士"
            },
            {
                        "id": "High_Sparrow",
                        "name": "大麻雀",
                        "house": "others",
                        "title": "七神教大主教"
            }
]);
        linksData.push(...[
            {
                        "source": "Olenna_Tyrell",
                        "target": "Mace_Tyrell",
                        "relation": "母子",
                        "type": "parent-child"
            },
            {
                        "source": "Olenna_Tyrell",
                        "target": "Margaery_Tyrell",
                        "relation": "祖孙",
                        "type": "parent-child"
            },
            {
                        "source": "Olenna_Tyrell",
                        "target": "Loras_Tyrell",
                        "relation": "祖孙",
                        "type": "parent-child"
            },
            {
                        "source": "Olenna_Tyrell",
                        "target": "Joffrey_Baratheon",
                        "relation": "毒杀",
                        "type": "relation"
            },
            {
                        "source": "Petyr_Baelish",
                        "target": "Lysa_Tully",
                        "relation": "夫妻/谋杀",
                        "type": "relation"
            },
            {
                        "source": "Petyr_Baelish",
                        "target": "Sansa_Stark",
                        "relation": "操控/监护",
                        "type": "relation"
            },
            {
                        "source": "Ramsay_Bolton",
                        "target": "Sansa_Stark",
                        "relation": "强迫婚姻",
                        "type": "relation"
            },
            {
                        "source": "Ramsay_Bolton",
                        "target": "Rickon_Stark",
                        "relation": "杀害",
                        "type": "relation"
            },
            {
                        "source": "Theon_Greyjoy",
                        "target": "Eddard_Stark",
                        "relation": "养子/质子",
                        "type": "relation"
            },
            {
                        "source": "Theon_Greyjoy",
                        "target": "Sansa_Stark",
                        "relation": "救援",
                        "type": "relation"
            },
            {
                        "source": "Arya_Stark",
                        "target": "Night_King",
                        "relation": "刺杀",
                        "type": "relation"
            },
            {
                        "source": "Night_King",
                        "target": "Theon_Greyjoy",
                        "relation": "杀害",
                        "type": "relation"
            },
            {
                        "source": "Night_King",
                        "target": "Viserion_Dragon",
                        "relation": "击落/复活",
                        "type": "relation"
            },
            {
                        "source": "Brienne_Tarth",
                        "target": "Stannis_Baratheon",
                        "relation": "处决",
                        "type": "relation"
            },
            {
                        "source": "Jaime_Lannister",
                        "target": "Aerys_II",
                        "relation": "弑君",
                        "type": "relation"
            },
            {
                        "source": "Tyrion_Lannister",
                        "target": "Tywin_Lannister",
                        "relation": "弑父",
                        "type": "relation"
            },
            {
                        "source": "Cersei_Lannister",
                        "target": "Margaery_Tyrell",
                        "relation": "野火杀害",
                        "type": "relation"
            },
            {
                        "source": "Cersei_Lannister",
                        "target": "Loras_Tyrell",
                        "relation": "野火杀害",
                        "type": "relation"
            },
            {
                        "source": "Cersei_Lannister",
                        "target": "Mace_Tyrell",
                        "relation": "野火杀害",
                        "type": "relation"
            },
            {
                        "source": "Cersei_Lannister",
                        "target": "Kevan_Lannister",
                        "relation": "野火杀害",
                        "type": "relation"
            },
            {
                        "source": "Cersei_Lannister",
                        "target": "Lancel_Lannister",
                        "relation": "野火杀害",
                        "type": "relation"
            },
            {
                        "source": "High_Sparrow",
                        "target": "Cersei_Lannister",
                        "relation": "审判/羞辱",
                        "type": "relation"
            },
            {
                        "source": "Varys",
                        "target": "Daenerys_Targaryen",
                        "relation": "辅佐/背叛",
                        "type": "relation"
            },
            {
                        "source": "Daenerys_Targaryen",
                        "target": "Varys",
                        "relation": "龙焰处决",
                        "type": "relation"
            },
            {
                        "source": "Samwell_Tarly",
                        "target": "Jon_Snow",
                        "relation": "挚友/揭示身世",
                        "type": "relation"
            },
            {
                        "source": "Jorah_Mormont",
                        "target": "Daenerys_Targaryen",
                        "relation": "守护/效忠",
                        "type": "relation"
            },
            {
                        "source": "Robert_Baratheon",
                        "target": "Rhaegar_Targaryen",
                        "relation": "击杀",
                        "type": "relation"
            },
            {
                        "source": "Aerys_II",
                        "target": "Rickard_Stark",
                        "relation": "处死",
                        "type": "relation"
            },
            {
                        "source": "Aerys_II",
                        "target": "Brandon_Stark",
                        "relation": "处死",
                        "type": "relation"
            }
]);
        Object.assign(characterStories, {
            "Eddard_Stark": {
                        "story": "<p>艾德·史塔克（奈德）是临冬城公爵、北境守护。他在劳勃叛乱后收养妹妹莱安娜的遗孤琼恩，并以“私生子”之名保护其真实身份。</p><p>入君临任国王之手后，他发现乔佛里、弥赛菈、托曼并非劳勃亲生，而是瑟曦与詹姆所生。奈德不愿用阴谋换取胜利，最终被乔佛里下令、伊林·派恩处决。他的死直接点燃五王之战，也让史塔克子女踏上各自的复仇与成长之路。</p>",
                        "quote": "The man who passes the sentence should swing the sword."
            },
            "Cersei_Lannister": {
                        "story": "<p>瑟曦是泰温之女、詹姆的孪生姐姐，也是乔佛里、弥赛菈、托曼真正的母亲。她与劳勃的婚姻名存实亡，而三个孩子的身世秘密成为王国崩裂的核心导火索。</p><p>她利用野火炸毁贝勒大圣堂，杀死玛格丽、洛拉斯、梅斯、凯冯、蓝赛尔、大麻雀等政敌与亲族，随后登上铁王座。君临陷落时，她与詹姆在红堡地窖中被坍塌碎石掩埋而死。</p>",
                        "quote": "When you play the game of thrones, you win or you die."
            },
            "Jaime_Lannister": {
                        "story": "<p>詹姆曾亲手杀死疯王伊里斯，阻止其用野火焚毁君临，却因此背负“弑君者”污名。他与瑟曦的禁忌关系孕育了乔佛里、弥赛菈和托曼。</p><p>被俘并失去右手后，他在布蕾妮影响下重新审视骑士荣誉。长夜之战前他北上参战，但最终仍回到瑟曦身边，与她一同死于红堡废墟。</p>",
                        "quote": "The things I do for love."
            },
            "Tyrion_Lannister": {
                        "story": "<p>提利昂是泰温幼子，曾在黑水河之战中守住君临，却始终被父亲与姐姐轻视。乔佛里中毒后，他被诬陷弑君，在审判比武中因奥柏伦战败而被判死。</p><p>逃亡前，他以十字弓杀死父亲泰温，并离开维斯特洛辅佐丹妮莉丝。君临焚城后，他劝琼恩阻止丹妮莉丝，最终推举布兰为王并再度担任国王之手。</p>",
                        "quote": "I drink and I know things."
            },
            "Arya_Stark": {
                        "story": "<p>艾莉亚亲眼见父亲奈德被处决，此后在河间地、赫伦堡与布拉佛斯流亡训练。她杀死梅林·特兰特，回到维斯特洛后灭掉瓦德·佛雷及其家族，为血色婚礼复仇。</p><p>临冬城大战中，她用瓦雷利亚钢匕首刺杀夜王，终结长夜威胁。战争结束后，她没有选择权位，而是向维斯特洛以西的未知世界启航。</p>",
                        "quote": "Not today."
            },
            "Sansa_Stark": {
                        "story": "<p>珊莎从憧憬王子与宫廷的少女，被乔佛里羞辱、被小指头利用、被迫嫁给提利昂与拉姆斯。她在创伤中学会权谋，也学会识破披着善意外衣的操控。</p><p>她与琼恩重夺临冬城，后来在艾莉亚与布兰协助下揭穿并处决小指头。终局议会中，她坚持北境独立，成为北境女王。</p>",
                        "quote": "The North is free."
            },
            "Daenerys_Targaryen": {
                        "story": "<p>丹妮莉丝从流亡公主成为龙之母，解放奴隶湾，获得无垢者、多斯拉克人与三条龙。乔拉、弥桑黛、灰虫、提利昂、瓦里斯等人先后辅佐她。</p><p>她在长夜之战中失去乔拉，又在南下途中失去雷戈与弥桑黛。君临投降钟声响起后，她仍骑卓耿焚城；之后在铁王座前被琼恩刺杀，卓耿熔毁铁王座并带走她的遗体。</p>",
                        "quote": "Dracarys."
            },
            "Jon_Snow": {
                        "story": "<p>琼恩以奈德私生子身份长大，实为雷加·坦格利安与莱安娜·史塔克之子。他在守夜人中结识山姆，在野人中爱上耶哥蕊特，并因接纳自由民遭守夜人叛徒刺杀，后被梅丽珊卓复活。</p><p>他与珊莎夺回临冬城，被拥为北境之王；后来刺杀焚毁君临的丹妮莉丝，承担终结暴政的代价。终局中他被放逐至长城，并随自由民北上。</p>",
                        "quote": "You know nothing, Jon Snow."
            },
            "Robb_Stark": {
                        "story": "<p>罗柏在奈德死后被北境与河间地拥立为“北境之王”。他战场上多次击败兰尼斯特军，并俘虏詹姆。</p><p>因违背与佛雷家的婚约，他在孪河城的血色婚礼中被卢斯·波顿刺杀；妻子塔丽莎与母亲凯特琳也同时遇害。这场背叛摧毁了北境反攻的核心。</p>",
                        "quote": "The King in the North!"
            },
            "Margaery_Tyrell": {
                        "story": "<p>玛格丽是梅斯之女、奥莲娜的孙女，善于利用温柔形象赢得民心。她先后嫁给蓝礼、乔佛里（婚礼上乔佛里被奥莲娜毒杀）和托曼。</p><p>她看穿瑟曦与教会局势的危险，却没能逃出贝勒大圣堂。瑟曦引爆野火时，玛格丽与洛拉斯、梅斯、大麻雀等人同死。</p>",
                        "quote": "Sometimes the severity of the punishment depends on the imagination of the punisher."
            },
            "Olenna_Tyrell": {
                        "story": "<p>奥莲娜·提利尔，人称“荆棘女王”或“老玫瑰”，是玛格丽与洛拉斯的祖母，也是提利尔家真正最锋利的头脑。</p><p>她与小指头合谋在紫色婚礼毒杀乔佛里，以保护玛格丽不落入暴君手中。提利尔家被瑟曦野火摧毁后，她投向丹妮莉丝阵营；高庭陷落时，她饮下詹姆递来的毒酒，并在死前坦白“是我杀了乔佛里”。</p>",
                        "quote": "Tell Cersei. I want her to know it was me."
            },
            "Petyr_Baelish": {
                        "story": "<p>培提尔·贝里席“小指头”出身卑微，却以金钱、情报和混乱攀上权力阶梯。他迷恋凯特琳，操控莱莎毒杀琼恩·艾林，又嫁给莱莎后将其推下月门。</p><p>他将珊莎带离君临，又把她推入拉姆斯婚姻，试图借史塔克继承权染指北境。最终在临冬城被珊莎、艾莉亚、布兰联手审判，由艾莉亚割喉处死。</p>",
                        "quote": "Chaos is a ladder."
            },
            "Ramsay_Bolton": {
                        "story": "<p>拉姆斯·波顿是卢斯·波顿的私生子，以酷刑和心理摧毁闻名。他折磨席恩，将其变成“臭佬”，又强娶并虐待珊莎。</p><p>私生子之战前，他射杀瑞肯以激怒琼恩。战败后，珊莎将他关入犬舍，让他被自己饿养的猎犬吞噬。</p>",
                        "quote": "If you think this has a happy ending, you haven't been paying attention."
            },
            "Theon_Greyjoy": {
                        "story": "<p>席恩是巴隆·葛雷乔伊之子，自幼作为质子在临冬城长大，与史塔克子女既像家人又隔着身份裂缝。他背叛罗柏夺取临冬城，却被拉姆斯俘虏并折磨成“臭佬”。</p><p>他后来救出珊莎，并在长夜之战中守护布兰。面对夜王时，他选择冲锋赴死，终于以牺牲完成自我救赎。</p>",
                        "quote": "You're a good man. Thank you."
            },
            "Night_King": {
                        "story": "<p>夜王是森林之子创造出的异鬼之王，能复活死者并指挥尸鬼大军。他在越墙远征中用冰矛击落韦赛利昂，并将其复活为尸龙，借此摧毁长城。</p><p>临冬城大战中，他逼近布兰，却被艾莉亚用瓦雷利亚钢匕首刺杀，异鬼与尸鬼军团随之崩解。</p>",
                        "quote": ""
            },
            "Brienne_Tarth": {
                        "story": "<p>布蕾妮效忠蓝礼，蓝礼死后又守护凯特琳与史塔克姐妹。她与詹姆互相改变，对方让她获得真正的骑士承认。</p><p>她处决斯坦尼斯，为蓝礼复仇；后来保护珊莎，并在长夜之战前被詹姆册封为七国骑士。</p>",
                        "quote": "Nothing's more hateful than failing to protect the one you love."
            },
            "Varys": {
                        "story": "<p>瓦里斯“八爪蜘蛛”以情报网左右王国命运。他声称效忠的是“王国的百姓”，曾辅佐劳勃、提利昂，也暗中推动坦格利安复辟。</p><p>当他判断丹妮莉丝可能成为暴君后，试图转而支持琼恩的血统宣称。阴谋败露后，他被丹妮莉丝以龙焰处决。</p>",
                        "quote": "I serve the realm."
            },
            "Samwell_Tarly": {
                        "story": "<p>山姆是琼恩在守夜人的挚友，胆怯却善良、博学且坚韧。他杀死异鬼，照顾吉莉，并在旧镇学习成为学士。</p><p>他与布兰共同揭示琼恩真实身世：琼恩并非奈德私生子，而是雷加与莱安娜合法婚姻所生的伊耿·坦格利安。</p>",
                        "quote": "I read it in a book."
            },
            "Jorah_Mormont": {
                        "story": "<p>乔拉·莫尔蒙是被流放的北境骑士，最初替瓦里斯监视丹妮莉丝，后来真心爱慕并效忠她。</p><p>他多次救丹妮莉丝于危难，也因灰鳞病几乎失去一切。临冬城长夜之战中，他为保护丹妮莉丝战死，完成骑士最后的守护。</p>",
                        "quote": "Khaleesi, please."
            }
});

        const nodeMap = new Map();
        nodesData.forEach(node => {
            if (!nodeMap.has(node.id)) {
                nodeMap.set(node.id, node);
            }
        });
        const uniqueNodes = Array.from(nodeMap.values());
