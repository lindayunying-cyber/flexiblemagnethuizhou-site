# FlexiMagCreative.com — 静态站源码 v2.0

> 磁性文创独立站 · **暖橙 #E07A3C + 奶白 #FFF9F2 + 深咖 #2D2418** · 故事叙事型布局 · Poppins + Inter

---

## 🎨 v2.0 更新（2026-05-25）

| 维度 | v1（旧） | v2（新） |
|---|---|---|
| **配色** | 深蓝 #2C3E5D + 烫金 #C9A961 | **暖橙 #E07A3C + 奶白 #FFF9F2 + 深咖 #2D2418** |
| **字体** | Playfair Display 衬线 + Inter | **Poppins 几何圆体 + Inter** |
| **布局** | 标准电商首页（Hero/类目/精选/优势） | **故事叙事型**（3 段 Origin/Craft/Buyers + 类目 + 精选 + Why） |
| **类目体系** | 8 个并列类目（编造） | **3 主类 + 12 冰箱贴细分**（按对照表）|
| **产品数据** | 8 款占位 SKU | **22 款真实 SKU**（12 冰箱贴 + 5 玩具 + 5 文具）|
| **首页类目卡** | 渐变 + 标题 | **大圆角彩色块 + 首字母大图 + 数量徽章** |
| **Hero 视觉** | 静态 | **4 张倾斜磁贴卡片拼贴**（hover 复位）|
| **风格参照** | LuxoPack（深蓝高端） | **Etsy / MOO / Aesop**（暖色文创品牌）|

---

## 📁 文件结构

```
FlexiMagCreative_site/
├── index.html              # 首页（Hero + 3 段故事 + 类目 + 精选 + Why Us + CTA）
├── products.html           # 产品列表（主类筛选 + 冰箱贴二级筛选）
├── product.html            # 产品详情（URL: product.html?p=<slug>）
├── contact.html            # 询价表单（mailto 提交，零后端）
├── about.html              # 关于我们（Origin/Factory/Certs + 5 步流程）
├── README.md               # 本说明文件
└── assets/
    ├── css/style.css       # 全局样式（24 KB，CSS 变量驱动，故事型组件）
    ├── js/products.js      # 22 款产品 + 3 主类 + 12 子类（按对照表组织）
    └── js/main.js          # 渲染逻辑（类目/列表/详情/筛选/表单）
```

---

## 🎯 类目结构（对照对照表）

### 3 大主类（Top Nav + 首页类目卡）
| Slug | 名称 | 数量 |
|---|---|---|
| `fridge-magnet` | Fridge Magnets / 冰箱贴 | 12 款 |
| `magnetic-toys` | Magnetic Toys / 磁性玩具 | 5 款 |
| `magnetic-stationery` | Magnetic Stationery / 磁性文具 | 5 款 |

### 12 个冰箱贴细分（products.html?cat=fridge-magnet 显示二级筛选）
soft-pvc / acrylic / epoxy-glass / metal / wooden / flat / souvenir / writing-board / business-card / photo-frame / calendar / car-dishwasher

### 22 款 SKU
**冰箱贴 12 款：** MAG-001 ~ MAG-012  
**磁性玩具 5 款：** MAG-101 ~ MAG-105  
**磁性文具 5 款：** MAG-201 ~ MAG-205

---

## 🚀 本地预览

**方法 1（最快）：** 双击 `index.html`，浏览器直接打开。

**方法 2（推荐 — 支持 URL 参数路由）：**
```bash
cd "E:/7-Accio文件/Alibaba Team/FlexiMagCreative_site"
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

> ⚠️ 如果用方法 1，`product.html?p=mag-001-soft-pvc-3d-souvenir` 的 URL 参数读取仍然能正常工作（现代浏览器支持 file:// 读取 URLSearchParams）。

---

## ✏️ 如何修改

### 改产品数据 → `assets/js/products.js`
- 增删产品：在 `PRODUCTS` 数组里加/减对象
- 改价格档：编辑产品对象的 `tiers` 字段
- 改规格表：编辑产品对象的 `specs` 字段
- 改卖点：编辑产品对象的 `features` 字段
- 增删类目：在 `CATEGORIES` 数组里改

### 改配色 → `assets/css/style.css` 第 8–28 行
```css
:root {
  --c-orange: #E07A3C;        /* 主色，改这一行就全站换色 */
  --c-orange-dark: #C25E1F;
  --c-orange-light: #F4A876;
  --c-orange-soft: #FCE8D5;
  --c-cream: #FFF9F2;          /* 背景米白 */
  --c-coffee: #2D2418;         /* 文字深咖 */
  ...
}
```

### 改字体 → `style.css` 第 22–23 行 + 各 HTML 的 `<link>`
```css
--font-display: 'Poppins', ...;   /* 标题字体，可换 Manrope / Quicksand / DM Sans */
--font-body: 'Inter', ...;        /* 正文字体 */
```

### 改首页故事文案 → `index.html` 第 70-135 行（三段 `.story-row`）
- 第 1 段 Our Story：工厂起源
- 第 2 段 Our Craft：六种材料
- 第 3 段 Who We Serve：四类客户

---

## ✅ 上线前清单

### 必改占位符（用 Ctrl+F 全局搜索替换）
- [ ] `sales@fleximagcreative.com` → 真实邮箱
- [ ] `Fleximag Creative (Guangdong) Co., Ltd.` → 真实公司名
- [ ] `Guangdong, China` → 详细地址
- [ ] `15,000 m² Factory` → 真实工厂面积
- [ ] `800+ Repeat Buyers` → 真实客户数
- [ ] `15+ Years Crafting` → 真实成立年数
- [ ] `120+ skilled workers` → 真实员工数
- [ ] `2M+ monthly capacity` → 真实月产能

### 产品图替换（当前是文字占位）
- 准备好图后，告诉我，我帮你批量改 `main.js` 的 `productCardHTML` 和 `renderProductDetail` 函数
- 把 `<div class="product-card-img">${p.name}</div>` 改成 `<img src="assets/img/${p.slug}.jpg" alt="${p.name}">`
- 图片放到 `assets/img/` 目录，命名 = SKU slug

### 产品数据替换
- 当前 22 款是按对照表整理的"产品线模板"
- 把您国际站真实 20 款产品的数据（SKU/名称/价格/MOQ/规格）填进 `products.js` 即可

### 域名 + 部署
- 见下方"Cloudflare Pages 部署"章节（等域名买好后给详细步骤）

---

## 🌐 Cloudflare Pages 部署（域名买好后）

1. 把 `FlexiMagCreative_site/` 目录拖到 [Cloudflare Pages](https://pages.cloudflare.com/) 创建项目
2. 项目设置里：
   - Framework preset: **None**
   - Build command: 留空
   - Build output directory: `/`
3. 部署完成后会得到 `xxx.pages.dev` 的临时网址
4. 在 Cloudflare 里绑定 Custom Domain → `fleximagcreative.com`
5. 在 Namecheap 把域名 Nameserver 改成 Cloudflare 给的两个
6. 等待 15 分钟 DNS 生效，自动 HTTPS

**Email Routing 配置（免费转发）：**
1. Cloudflare → 你的域名 → Email → Email Routing → Enable
2. 添加规则：`sales@fleximagcreative.com` → 转发到 Gmail
3. 通过验证后立即生效，零月费

---

## 💼 中期升级路径（询盘 ≥ 20 单/月时）

| 优先级 | 升级项 | 估算成本 |
|---|---|---|
| ⭐⭐⭐ | mailto 换 Formspree（真后端收询盘） | 免费 50 条/月，$10/月无限 |
| ⭐⭐⭐ | Google Analytics 4 + Search Console | 免费 |
| ⭐⭐ | SEO 优化（hreflang / structured data / sitemap.xml） | 0 |
| ⭐⭐ | 加入产品真实图（白底 + 场景 + 细节） | 内部生产 |
| ⭐ | Blog 板块（内容营销） | 0 |
| ⭐ | 多语言（西/法/德/俄）| 翻译成本 |

---

## 📞 联系

如需调整任何部分（配色微调、布局重排、新增页面、修改产品数据），随时找生意助手 Agent 协作。

— 国际站生意助手 · 2026-05-25 v2.0
