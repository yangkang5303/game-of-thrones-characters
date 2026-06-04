// ==================== 全局状态 ====================
        
        let showEdgeLabels = true;
        let highlightedNodeId = null;
        let activeHouses = new Set(Object.keys(houseColors));

        const portraitPalette = {
            stark: { bg: '#3f5261', hair: '#2b241f', cloak: '#7d8588' },
            lannister: { bg: '#7f3f16', hair: '#e8c96b', cloak: '#8f1d19' },
            targaryen: { bg: '#5f2834', hair: '#f1ece2', cloak: '#1f1f26' },
            baratheon: { bg: '#2d5f78', hair: '#241c16', cloak: '#c79f39' },
            tully: { bg: '#2b6b63', hair: '#8b4b2a', cloak: '#2f7789' },
            martell: { bg: '#8f541b', hair: '#1f1713', cloak: '#c57433' },
            tyrell: { bg: '#637a2f', hair: '#6b4427', cloak: '#7d993c' },
            others: { bg: '#4c5661', hair: '#2b2d32', cloak: '#7f8790' }
        };

        const characterPortraits = {
            Daenerys_Targaryen: 'assets/portraits/Daenerys_Targaryen.jpg',
            Jon_Snow: 'assets/portraits/Jon_Snow.jpg',
            Arya_Stark: 'assets/portraits/Arya_Stark.jpg',
            Sansa_Stark: 'assets/portraits/Sansa_Stark.jpeg',
            Brandon_Stark_II: 'assets/portraits/Brandon_Stark_II.jpg',
            Eddard_Stark: 'assets/portraits/Eddard_Stark.jpg',
            Robert_Baratheon: 'assets/portraits/Robert_Baratheon.jpg',
            Stannis_Baratheon: 'assets/portraits/Stannis_Baratheon.jpg',
            Catelyn_Tully: 'assets/portraits/Catelyn_Tully.jpg',
            Robb_Stark: 'assets/portraits/Robb_Stark.jpg',
            Rickon_Stark: 'assets/portraits/Rickon_Stark.jpg',
            Tywin_Lannister: 'assets/portraits/Tywin_Lannister.jpg',
            Cersei_Lannister: 'assets/portraits/Cersei_Lannister.jpg',
            Jaime_Lannister: 'assets/portraits/Jaime_Lannister.jpg',
            Tyrion_Lannister: 'assets/portraits/Tyrion_Lannister.jpg',
            Joffrey_Baratheon: 'assets/portraits/Joffrey_Baratheon.jpg',
            Tommen_Baratheon: 'assets/portraits/Tommen_Baratheon.jpg',
            Viserys_Targaryen: 'assets/portraits/Viserys_Targaryen.jpg',
            Gendry: 'assets/portraits/Gendry.jpg',
            Oberyn_Martell: 'assets/portraits/Oberyn_Martell.jpg',
            Margaery_Tyrell: 'assets/portraits/Margaery_Tyrell.jpg',
            Ygritte: 'assets/portraits/Ygritte.jpg',
            Missandei: 'assets/portraits/Missandei.jpeg',
            Grey_Worm: 'assets/portraits/Grey_Worm.jpg',
            Rickard_Stark: 'assets/portraits/Rickard_Stark.png',
            Lyanna_Stark: 'assets/portraits/Lyanna_Stark.jpg',
            Brandon_Stark: 'assets/portraits/Brandon_Stark.png',
            Benjen_Stark: 'assets/portraits/Benjen_Stark.png',
            Joanna_Lannister: 'assets/portraits/Joanna_Lannister.svg',
            Kevan_Lannister: 'assets/portraits/Kevan_Lannister.png',
            Lancel_Lannister: 'assets/portraits/Lancel_Lannister.jpg',
            Myrcella_Baratheon: 'assets/portraits/Myrcella_Baratheon.jpg',
            Aerys_II: 'assets/portraits/Aerys_II.jpg',
            Rhaella_Targaryen: 'assets/portraits/Rhaella_Targaryen.png',
            Rhaegar_Targaryen: 'assets/portraits/Rhaegar_Targaryen.png',
            Rhaenys_Targaryen: 'assets/portraits/Rhaenys_Targaryen.jpg',
            Drogon: 'assets/portraits/Drogon.png',
            Rhaegal_Dragon: 'assets/portraits/Rhaegal_Dragon.png',
            Viserion_Dragon: 'assets/portraits/Viserion_Dragon.png',
            Steffon_Baratheon: 'assets/portraits/Steffon_Baratheon.png',
            Renly_Baratheon: 'assets/portraits/Renly_Baratheon.png',
            Selyse_Florent: 'assets/portraits/Selyse_Florent.png',
            Shireen_Baratheon: 'assets/portraits/Shireen_Baratheon.jpg',
            Hoster_Tully: 'assets/portraits/Hoster_Tully.png',
            Edmure_Tully: 'assets/portraits/Edmure_Tully.png',
            Lysa_Tully: 'assets/portraits/Lysa_Tully.png',
            Doran_Martell: 'assets/portraits/Doran_Martell.png',
            Elia_Martell: 'assets/portraits/Elia_Martell.png',
            Mace_Tyrell: 'assets/portraits/Mace_Tyrell.png',
            Loras_Tyrell: 'assets/portraits/Loras_Tyrell.png',
            Olenna_Tyrell: 'assets/portraits/Olenna_Tyrell.jpg',
            Petyr_Baelish: 'assets/portraits/Petyr_Baelish.jpg',
            Varys: 'assets/portraits/Varys.jpg',
            Brienne_Tarth: 'assets/portraits/Brienne_Tarth.jpeg',
            Theon_Greyjoy: 'assets/portraits/Theon_Greyjoy.jpg',
            Ramsay_Bolton: 'assets/portraits/Ramsay_Bolton.jpg',
            Night_King: 'assets/portraits/Night_King.jpg',
            Samwell_Tarly: 'assets/portraits/Samwell_Tarly.jpg',
            Jorah_Mormont: 'assets/portraits/Jorah_Mormont.jpg',
            High_Sparrow: 'assets/portraits/High_Sparrow.jpg'
        };

        function nodeRadius(d) {
            const connectionCount = linksData.filter(l => {
                const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                return sourceId === d.id || targetId === d.id;
            }).length;
            return Math.max(18, Math.min(30, 15 + connectionCount * 2));
        }

        function safeSvgId(id) {
            return String(id).replace(/[^a-zA-Z0-9_-]/g, '-');
        }

        function escapeSvgText(text) {
            return String(text)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        function characterInitial(name) {
            return String(name || '?').trim().charAt(0).toUpperCase();
        }

        function avatarSvg(d) {
            const colors = portraitPalette[d.house] || portraitPalette.others;
            const houseColor = houseColors[d.house] || houseColors.others;
            const initial = escapeSvgText(characterInitial(d.name));
            const isDragon = /dragon|Drogon|Rhaegal|Viserion/i.test(d.id);

            if (isDragon) {
                return `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                        <rect width="80" height="80" fill="${colors.bg}"/>
                        <path d="M13 56C23 25 48 15 67 30C55 31 49 39 46 51C36 45 25 48 13 56Z" fill="${houseColor}"/>
                        <path d="M23 46L10 29L33 37L41 19L48 39L68 43L50 51L44 68L35 52Z" fill="${colors.cloak}" opacity=".85"/>
                        <circle cx="52" cy="34" r="3" fill="#f6d365"/>
                        <text x="40" y="69" text-anchor="middle" font-size="22" font-family="Arial, sans-serif" font-weight="700" fill="#fff">${initial}</text>
                    </svg>`;
            }

            return `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                    <defs>
                        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0" stop-color="${colors.bg}"/>
                            <stop offset="1" stop-color="${houseColor}"/>
                        </linearGradient>
                    </defs>
                    <rect width="80" height="80" fill="url(#bg)"/>
                    <path d="M14 76C17 57 29 48 40 48C51 48 63 57 66 76Z" fill="${colors.cloak}"/>
                    <circle cx="40" cy="34" r="18" fill="#d9a06f"/>
                    <path d="M22 33C23 16 35 10 48 16C58 20 61 30 57 42C53 29 43 25 24 31Z" fill="${colors.hair}"/>
                    <circle cx="33" cy="35" r="2.3" fill="#231914"/>
                    <circle cx="47" cy="35" r="2.3" fill="#231914"/>
                    <path d="M34 45C38 48 43 48 47 45" fill="none" stroke="#7a3d2b" stroke-width="2" stroke-linecap="round"/>
                    <text x="40" y="70" text-anchor="middle" font-size="21" font-family="Arial, sans-serif" font-weight="700" fill="#fff">${initial}</text>
                </svg>`;
        }

        function avatarDataUri(d) {
            return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(avatarSvg(d).replace(/\s+/g, ' ').trim())}`;
        }

        function characterPortraitUrl(d) {
            return characterPortraits[d.id] || avatarDataUri(d);
        }

        // ==================== 初始化 SVG ====================
        
        const container = document.getElementById('graph-container');
        const width = container.clientWidth;
        const height = container.clientHeight;

        const svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [0, 0, width, height]);

        // 定义发光滤镜
        const defs = svg.append('defs');

        const filter = defs.append('filter')
            .attr('id', 'glow')
            .attr('x', '-50%')
            .attr('y', '-50%')
            .attr('width', '200%')
            .attr('height', '200%');

        filter.append('feGaussianBlur')
            .attr('stdDeviation', '3')
            .attr('result', 'coloredBlur');

        const feMerge = filter.append('feMerge');
        feMerge.append('feMergeNode').attr('in', 'coloredBlur');
        feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

        // 创建箭头标记
        defs.append('marker')
            .attr('id', 'arrow-parent-child')
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 35)
            .attr('refY', 0)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', 'rgba(76, 175, 80, 0.6)');

        // 创建分组
        const g = svg.append('g');

        // ==================== 缩放行为 ====================
        
        const zoom = d3.zoom()
            .scaleExtent([0.2, 5])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });

        svg.call(zoom);

        // 双击空白处重置视图
        svg.on('dblclick', function(event) {
            if (event.target === this || event.target.tagName === 'rect') {
                resetView();
            }
        });

        // ==================== 力导向模拟 ====================
        
        const simulation = d3.forceSimulation(uniqueNodes)
            .force('link', d3.forceLink(linksData).id(d => d.id).distance(d => d.type === 'spouse' ? 120 : 160))
            .force('charge', d3.forceManyBody().strength(-600))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(50))
            .force('x', d3.forceX(width / 2).strength(0.03))
            .force('y', d3.forceY(height / 2).strength(0.03));

        // ==================== 绘制边 ====================
        
        const link = g.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(linksData)
            .join('line')
            .attr('class', d => `link ${d.type}`)
            .attr('marker-end', d => d.type === 'parent-child' ? 'url(#arrow-parent-child)' : null);

        // ==================== 绘制边标签 ====================
        
        const edgeLabel = g.append('g')
            .attr('class', 'edge-labels')
            .selectAll('text')
            .data(linksData)
            .join('text')
            .attr('class', 'edge-label')
            .text(d => d.relation)
    .attr('fill', d => {
        if (d.type === 'parent-child') return 'rgba(76, 175, 80, 0.7)';
        if (d.type === 'relation') return 'rgba(255, 193, 7, 0.75)';
        return 'rgba(233, 30, 99, 0.7)';
    });

        // ==================== 绘制节点 ====================
        
        const node = g.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(uniqueNodes)
            .join('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', dragStarted)
                .on('drag', dragged)
                .on('end', dragEnded));

        defs.selectAll('clipPath.avatar-clip')
            .data(uniqueNodes)
            .join('clipPath')
            .attr('class', 'avatar-clip')
            .attr('id', d => `avatar-clip-${safeSvgId(d.id)}`)
            .append('circle')
            .attr('r', d => Math.max(1, nodeRadius(d) - 4));

        // 节点圆形
        node.append('circle')
            .attr('class', 'node-ring')
            .attr('r', d => nodeRadius(d))
            .attr('fill', d => houseColors[d.house] || houseColors.others)
            .attr('stroke', '#fff')
            .attr('filter', 'url(#glow)');

        node.append('image')
            .attr('class', 'avatar-image')
            .attr('href', d => characterPortraitUrl(d))
            .attr('preserveAspectRatio', 'xMidYMid slice')
            .attr('x', d => -(nodeRadius(d) - 4))
            .attr('y', d => -(nodeRadius(d) - 4))
            .attr('width', d => (nodeRadius(d) - 4) * 2)
            .attr('height', d => (nodeRadius(d) - 4) * 2)
            .attr('clip-path', d => `url(#avatar-clip-${safeSvgId(d.id)})`)
            .on('error', function(event, d) {
                d3.select(this).attr('href', avatarDataUri(d));
            });

        // 节点标签
        node.append('text')
            .text(d => d.name)
            .attr('dx', 0)
            .attr('dy', d => nodeRadius(d) + 15)
            .attr('text-anchor', 'middle')
            .attr('fill', '#fff');

        // ==================== 节点交互 ====================
        
        // 模态框元素
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const modalAvatar = document.getElementById('modalAvatar');
        const modalName = document.getElementById('modalName');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        // 打开模态框显示角色故事
        function openModal(d) {
            const storyData = characterStories[d.id];
            const houseNames = {
                stark: "史塔克家族",
                lannister: "兰尼斯特家族",
                targaryen: "坦格利安家族",
                baratheon: "拜拉席恩家族",
                tully: "徒利家族",
                martell: "马泰尔家族",
                tyrell: "提利尔家族",
                others: "其他"
            };
            
            // 设置头像
            modalAvatar.style.backgroundColor = houseColors[d.house] || houseColors.others;
            modalAvatar.style.backgroundImage = `url("${characterPortraitUrl(d)}")`;
            modalAvatar.textContent = characterPortraits[d.id] ? '' : d.name.charAt(0);
            
            // 设置名称和标题
            modalName.textContent = d.name;
            modalTitle.textContent = `${d.title || ''} · ${houseNames[d.house] || '其他'}`;
            
            // 设置故事内容
            if (storyData) {
                let bodyHTML = storyData.story;
                if (storyData.quote) {
                    bodyHTML += `<div class="modal-quote">"${storyData.quote}"</div>`;
                }
                modalBody.innerHTML = bodyHTML;
            } else {
                modalBody.innerHTML = '<p>暂无该角色的详细信息。</p>';
            }
            
            // 显示模态框
            modalOverlay.classList.add('active');
        }

        // 关闭模态框
        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        // 模态框关闭按钮
        modalClose.addEventListener('click', closeModal);
        
        // 点击遮罩关闭
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal();
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // 鼠标悬停高亮
        node.on('mouseover', function(event, d) {
            highlightedNodeId = d.id;
            highlightNode(d);
            showTooltip(event, d);
        })
        .on('mouseout', function() {
            highlightedNodeId = null;
            resetHighlight();
            hideTooltip();
        })
        .on('mousemove', function(event) {
            moveTooltip(event);
        })
        .on('click', function(event, d) {
            // 单击打开模态框
            event.stopPropagation();
            openModal(d);
        })
        .on('dblclick', function(event, d) {
            // 双击固定/解除固定节点
            event.stopPropagation();
            d.fx = d.fx ? null : d.x;
            d.fy = d.fy ? null : d.y;
            
            // 视觉反馈：固定节点显示特殊边框
            d3.select(this).select('circle')
                .attr('stroke', d.fx ? '#ffd740' : '#fff')
                .attr('stroke-width', d.fx ? 4 : 2);
        });

        // ==================== 高亮功能 ====================
        
        function highlightNode(d) {
            // 找到相邻节点
            const neighborIds = new Set();
            neighborIds.add(d.id);
            
            linksData.forEach(l => {
                const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                if (sourceId === d.id) neighborIds.add(targetId);
                if (targetId === d.id) neighborIds.add(sourceId);
            });
            
            // 更新节点颜色
            node.select('circle')
                .transition()
                .duration(200)
                .attr('fill', n => {
                    if (n.id === d.id) return '#ffd740';
                    if (neighborIds.has(n.id)) return '#ff9800';
                    return 'rgba(255, 255, 255, 0.15)';
                })
                .attr('r', n => {
                    const baseR = nodeRadius(n);
                    return n.id === d.id ? baseR + 5 : baseR;
                });

            node.select('image')
                .transition()
                .duration(200)
                .attr('opacity', n => neighborIds.has(n.id) ? 1 : 0.25)
                .attr('x', n => -(nodeRadius(n) - 4 + (n.id === d.id ? 5 : 0)))
                .attr('y', n => -(nodeRadius(n) - 4 + (n.id === d.id ? 5 : 0)))
                .attr('width', n => (nodeRadius(n) - 4 + (n.id === d.id ? 5 : 0)) * 2)
                .attr('height', n => (nodeRadius(n) - 4 + (n.id === d.id ? 5 : 0)) * 2);
            
            // 更新边的样式
            link.transition()
                .duration(200)
                .attr('class', l => {
                    const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                    const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                    if (sourceId === d.id || targetId === d.id) return 'link highlighted';
                    return 'link dimmed';
                });
            
            // 更新边标签
            edgeLabel.transition()
                .duration(200)
                .attr('opacity', l => {
                    const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                    const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                    return (sourceId === d.id || targetId === d.id) ? 1 : 0.05;
                });
            
            // 更新节点标签
            node.select('text')
                .transition()
                .duration(200)
                .attr('opacity', n => neighborIds.has(n.id) ? 1 : 0.15);
        }

        function resetHighlight() {
            // 恢复节点颜色
            node.select('circle')
                .transition()
                .duration(200)
                .attr('fill', d => houseColors[d.house] || houseColors.others)
                .attr('r', d => nodeRadius(d));

            node.select('image')
                .transition()
                .duration(200)
                .attr('opacity', 1)
                .attr('x', d => -(nodeRadius(d) - 4))
                .attr('y', d => -(nodeRadius(d) - 4))
                .attr('width', d => (nodeRadius(d) - 4) * 2)
                .attr('height', d => (nodeRadius(d) - 4) * 2);
            
            // 恢复边样式
            link.transition()
                .duration(200)
                .attr('class', d => `link ${d.type}`);
            
            // 恢复边标签
            edgeLabel.transition()
                .duration(200)
                .attr('opacity', showEdgeLabels ? 1 : 0);
            
            // 恢复节点标签
            node.select('text')
                .transition()
                .duration(200)
                .attr('opacity', 1);
        }

        // ==================== Tooltip ====================
        
        const tooltip = document.getElementById('tooltip');

        function showTooltip(event, d) {
            // 收集关系信息
            const parents = [];
            const children = [];
            const spouses = [];
    const relations = [];
            
            linksData.forEach(l => {
                const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
                const targetId = typeof l.target === 'object' ? l.target.id : l.target;
                const sourceNode = uniqueNodes.find(n => n.id === sourceId);
                const targetNode = uniqueNodes.find(n => n.id === targetId);
                
                if (sourceId === d.id) {
                    if (l.type === 'parent-child' && l.relation.includes('子')) {
                        children.push(`${targetNode?.name || targetId} (${l.relation})`);
                    } else if (l.type === 'parent-child' && l.relation.includes('女')) {
                        children.push(`${targetNode?.name || targetId} (${l.relation})`);
                    } else if (l.type === 'spouse') {
                        spouses.push(`${targetNode?.name || targetId} (${l.relation})`);
            } else if (l.type === 'relation') {
                relations.push(`${targetNode?.name || targetId} (${l.relation})`);
                    }
                } else if (targetId === d.id) {
                    if (l.type === 'parent-child') {
                        parents.push(`${sourceNode?.name || sourceId} (${l.relation})`);
                    } else if (l.type === 'spouse') {
                        spouses.push(`${sourceNode?.name || sourceId} (${l.relation})`);
            } else if (l.type === 'relation') {
                relations.push(`${sourceNode?.name || sourceId} (${l.relation})`);
                    }
                }
            });
            
            const houseNames = {
                stark: "史塔克家族",
                lannister: "兰尼斯特家族",
                targaryen: "坦格利安家族",
                baratheon: "拜拉席恩家族",
                tully: "徒利家族",
                martell: "马泰尔家族",
                tyrell: "提利尔家族",
                others: "其他"
            };
            
            tooltip.innerHTML = `
                <div class="tooltip-name">${d.name}</div>
                <div class="tooltip-house">${d.title || ''} · ${houseNames[d.house] || '其他'}</div>
                <div class="tooltip-connections">
                    ${parents.length > 0 ? `<strong>父母:</strong><br>${parents.join('<br>')}<br><br>` : ''}
                    ${spouses.length > 0 ? `<strong>伴侣:</strong><br>${spouses.join('<br>')}<br><br>` : ''}
                ${children.length > 0 ? `<strong>子女:</strong><br>${children.join('<br>')}<br><br>` : ''}
                ${relations.length > 0 ? `<strong>关键关系:</strong><br>${relations.join('<br>')}` : ''}
                </div>
            `;
            tooltip.classList.add('visible');
            moveTooltip(event);
        }

        function moveTooltip(event) {
            const containerRect = container.getBoundingClientRect();
            let x = event.clientX - containerRect.left + 15;
            let y = event.clientY - containerRect.top - 10;
            
            // 防止溢出
            if (x + 300 > width) x = x - 310;
            if (y + 200 > height) y = y - 200;
            
            tooltip.style.left = x + 'px';
            tooltip.style.top = y + 'px';
        }

        function hideTooltip() {
            tooltip.classList.remove('visible');
        }

        // ==================== 拖拽功能 ====================
        
        function dragStarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragEnded(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            if (!d.fixed) {
                d.fx = null;
                d.fy = null;
            }
        }

        // ==================== 模拟 tick 更新 ====================
        
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            edgeLabel
                .attr('x', d => (d.source.x + d.target.x) / 2)
                .attr('y', d => (d.source.y + d.target.y) / 2 - 8)
                .attr('text-anchor', 'middle');
            
            node.attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // ==================== 按钮功能 ====================
        
        // 重置视图
        function resetView() {
            svg.transition()
                .duration(750)
                .call(zoom.transform, d3.zoomIdentity);
            
            // 重置模拟位置
            simulation.alpha(0.5).restart();
        }

        document.getElementById('resetBtn').addEventListener('click', resetView);

        // 放大
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            svg.transition()
                .duration(300)
                .call(zoom.scaleBy, 1.5);
        });

        // 缩小
        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            svg.transition()
                .duration(300)
                .call(zoom.scaleBy, 0.67);
        });

        // 切换边标签
        document.getElementById('toggleLabelsBtn').addEventListener('click', () => {
            showEdgeLabels = !showEdgeLabels;
            edgeLabel.transition()
                .duration(200)
                .attr('opacity', showEdgeLabels ? 1 : 0);
        });

        const fullscreenBtn = document.getElementById('fullscreenBtn');
        const fullscreenLabel = '⛶ 全屏';
        const exitFullscreenLabel = '⛶ 退出全屏';

        function resizeGraph() {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            
            svg.attr('width', newWidth).attr('height', newHeight);
            svg.attr('viewBox', [0, 0, newWidth, newHeight]);
            
            simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
            simulation.force('x', d3.forceX(newWidth / 2).strength(0.03));
            simulation.force('y', d3.forceY(newHeight / 2).strength(0.03));
            simulation.alpha(0.3).restart();
        }

        fullscreenBtn.addEventListener('click', async () => {
            try {
                if (document.fullscreenElement === container) {
                    await document.exitFullscreen();
                } else {
                    await container.requestFullscreen();
                }
            } catch (error) {
                console.warn('全屏模式不可用:', error);
            }
        });

        document.addEventListener('fullscreenchange', () => {
            const isGraphFullscreen = document.fullscreenElement === container;
            document.body.classList.toggle('graph-fullscreen', isGraphFullscreen);
            fullscreenBtn.textContent = isGraphFullscreen ? exitFullscreenLabel : fullscreenLabel;
            fullscreenBtn.title = isGraphFullscreen ? '退出全屏' : '全屏查看关系图';
            setTimeout(resizeGraph, 100);
        });

        // ==================== 家族筛选功能 ====================
        
        document.querySelectorAll('#houseFilter input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const house = this.dataset.house;
                if (this.checked) {
                    activeHouses.add(house);
                } else {
                    activeHouses.delete(house);
                }
                filterByHouse();
            });
        });

        function filterByHouse() {
            // 显示/隐藏节点
            node.transition().duration(300)
                .attr('opacity', d => activeHouses.has(d.house) ? 1 : 0.05)
                .style('pointer-events', d => activeHouses.has(d.house) ? 'all' : 'none');
            
            // 显示/隐藏边
            link.transition().duration(300)
                .attr('opacity', d => {
                    const sourceHouse = typeof d.source === 'object' ? d.source.house : 
                        uniqueNodes.find(n => n.id === d.source)?.house;
                    const targetHouse = typeof d.target === 'object' ? d.target.house : 
                        uniqueNodes.find(n => n.id === d.target)?.house;
                    return (activeHouses.has(sourceHouse) && activeHouses.has(targetHouse)) ? 1 : 0.05;
                });
            
            // 显示/隐藏边标签
            edgeLabel.transition().duration(300)
                .attr('opacity', d => {
                    const sourceHouse = typeof d.source === 'object' ? d.source.house : 
                        uniqueNodes.find(n => n.id === d.source)?.house;
                    const targetHouse = typeof d.target === 'object' ? d.target.house : 
                        uniqueNodes.find(n => n.id === d.target)?.house;
                    return (activeHouses.has(sourceHouse) && activeHouses.has(targetHouse) && showEdgeLabels) ? 1 : 0;
                });
        }

        // ==================== 窗口自适应 ====================
        
        window.addEventListener('resize', resizeGraph);

        // ==================== 初始化 ====================
        
        console.log('权力的游戏 - 人物家族关系图已加载');
        console.log(`节点数: ${uniqueNodes.length}, 边数: ${linksData.length}`);

