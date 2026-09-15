# Flexible Magnet (Huizhou) 网站上线后 SEO、CRO 与内容计划

## 1. 当前核验结果

核验日期：2026-07-29

正式网站：<https://www.flexiblemagnethuizhou.com>

### SEO 文件

- `robots.txt`：线上可访问，并包含 sitemap 指向：
  `https://flexiblemagnethuizhou.com/sitemap.xml`
- `sitemap.xml`：线上可访问，当前包含首页、About、Products、Contact、Customization、Industries、Cases 等公开页面。
- 正式首页：线上可访问。

### GA4

当前源码中未发现：

- `gtag()`
- `G-XXXXXXXXXX`
- Google Tag Manager
- `analytics.js`
- Universal Analytics ID

结论：GA4 尚未嵌入。

### CRO 入口

已确认的入口：

- 产品卡片 `Request Quote`：指向 WhatsApp，号码为 `+86 13129581959`。
- Contact 页 Email：`sales08@flexiblemagnetchina.com`。
- Contact 页 WhatsApp：`https://wa.me/8613129581959?...`
- Contact 页表单：使用浏览器 `mailto:` 打开用户本地邮件客户端。
- 全站 WhatsApp 悬浮按钮：由 `assets/js/main.js` 注入。

重要限制：当前 Inquiry Form 不是服务器端表单。它依赖访客电脑上的邮件客户端；如果访客没有配置 Outlook、Apple Mail 或其他默认邮件客户端，提交可能不会真正发出。文件附件也不会通过 `mailto:` 自动发送。

建议后续使用正式表单服务或自有后端接收询盘。任何可能收费的表单服务、邮件服务或 API 接入，必须先确认费用后再配置。

## 2. GSC 提交步骤

Google Search Console 官方入口：<https://search.google.com/search-console/about>

### 推荐验证方式

优先选择 **Domain property**：

1. 登录 Google Search Console。
2. 点击添加资源。
3. 选择 `Domain`。
4. 输入：`flexiblemagnethuizhou.com`，不要输入 `https://`。
5. Google 会提供 TXT 验证记录。
6. 在 Cloudflare DNS 中新增 Google 提供的 TXT 记录。
7. 回到 GSC 点击 Verify。

不要删除现有 MX/TXT 邮箱记录。只新增 Google 提供的 TXT 记录。

### 提交 sitemap

验证成功后：

1. 左侧选择 Sitemaps。
2. 输入：`sitemap.xml`。
3. 点击 Submit。
4. 确认状态为 Submitted 或 Success。

### 请求首页抓取

1. 打开 URL Inspection。
2. 输入：`https://www.flexiblemagnethuizhou.com/`。
3. 点击 Test Live URL。
4. 确认页面可访问后点击 Request Indexing。

Google 官方说明：请求抓取不保证立即收录；单 URL 重复请求不会加快抓取，大量 URL 应使用 sitemap。

## 3. Bing Webmaster Tools 步骤

Bing Webmaster Tools：<https://www.bing.com/webmasters/about>

### 推荐方式：从 GSC 导入

1. 登录 Bing Webmaster Tools。
2. 选择 Import from Google Search Console（如果界面提供）。
3. 授权同一 Google 账号。
4. 选择 `flexiblemagnethuizhou.com`。
5. 完成导入和验证。

### 手动验证方式

如果不能从 GSC 导入：

1. Add a site。
2. 输入：`https://www.flexiblemagnethuizhou.com`。
3. 使用 Bing 提供的 XML 文件、Meta 标签或 DNS CNAME/TXT 方式验证。
4. 如果使用 DNS 验证，只新增记录，不删除 MX/TXT。
5. 在 Sitemaps 中提交：
   `https://www.flexiblemagnethuizhou.com/sitemap.xml`

Bing 还可以在 URL Inspection 中检查首页，并在需要时提交 URL。

## 4. GA4 配置计划

### 当前状态

GA4 尚未嵌入。需要先在 Google Analytics 中创建一个 Web data stream，获得 Measurement ID，格式通常为：

```text
G-XXXXXXXXXX
```

这个 ID 必须由用户在 Google Analytics 账户中生成，不能猜测或伪造。

### 放置位置

GA4 基础代码应放在每个公开 HTML 页面的 `<head>` 内，紧接 `<meta name="viewport">` 之后或其他 meta 标签附近：

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

必须将 `G-XXXXXXXXXX` 替换为用户 Google Analytics 实际生成的 Measurement ID。不要把 Google 账号密码、OAuth token 或 API key 写入网页。

### 建议事件

在获得 Measurement ID 并确认后，可追踪：

- `request_quote_click`
- `whatsapp_click`
- `email_click`
- `inquiry_form_start`
- `inquiry_form_submit`
- `product_view`
- `file_upload_start`

当前不建议直接把邮箱地址、客户姓名、电话号码或询盘正文发送给 Analytics，避免发送个人信息。

## 5. CRO 优化建议

### 当前优点

- 产品卡片有 `Request Quote`。
- WhatsApp 悬浮按钮覆盖全站。
- Contact 页同时提供 Email、WhatsApp/WeChat 和表单。
- 产品跳转能够把产品名称带入询盘流程的既有逻辑。

### 当前风险

- `mailto:` 不是可靠的服务器端表单提交方式。
- 附件不会随 `mailto:` 自动发送。
- 不能在现有静态页面中确认销售端是否真正收到询盘。

### 推荐改进顺序

1. 先用 GA4 追踪按钮点击，不收集个人信息。
2. 增加提交成功后的明确页面提示。
3. 明确显示“Email is used for detailed files; WhatsApp is for quick questions”。
4. 后续选择表单接收方案；如果产生费用，先确认。
5. 通过真实测试提交一条不含敏感信息的测试询盘，确认销售邮箱可收到。

## 6. 下一阶段内容与推广主题

以下主题可按每周 1 篇或每两周 1 篇执行。所有技术数字、认证、性能承诺需有内部资料支持。

| 优先级 | 文章主题 | 关键词方向 | 对应页面 | CTA |
|---:|---|---|---|---|
| 1 | Flexible Magnetic Sheets: Material Selection Guide | printable magnetic sheets, flexible magnet material | Products / Customization | Request a material recommendation |
| 2 | Custom Printed Magnet Options for Retail and Promotions | custom printed magnets, promotional magnets | Products / Industries | Request a quote |
| 3 | Synthetic Paper vs Coated Paper for Magnetic Products | synthetic paper magnet, waterproof printed magnet | Customization | Send your artwork |
| 4 | How to Choose Acrylic Magnet Thickness | 3mm acrylic magnet, 5mm acrylic magnet, 6mm acrylic magnet | Acrylic Magnets | Compare acrylic options |
| 5 | Laser-Cut vs CNC-Finished Acrylic Magnets | laser cut acrylic magnet, CNC acrylic magnet | Customization | Request a process recommendation |
| 6 | Epoxy Magnet Sets for Museum Gift Shops | epoxy magnet set, museum souvenir magnets | Industries / Epoxy & Crystal | Discuss a set collection |
| 7 | Mini, Slim, Thick and Giant Magnet Box Formats | magnet gift box set, custom epoxy magnet packaging | Epoxy & Crystal | Request set packaging details |
| 8 | Custom Magnetic Vehicle Signage: Application and Care | magnetic vehicle signs, removable car magnets | Products / Industries | Request vehicle signage pricing |
| 9 | Custom Magnetic Business Cards for Local Brands | custom magnetic business cards | Products / Promotional | Request a promotional quote |
| 10 | Dry-Erase Magnetic Planners for Offices and Teams | magnetic dry erase planner, magnetic monthly planner | Office & Planning | Request an office product quote |
| 11 | Magnetic Alphabet Learning Aids: Material and Safety Questions | magnetic alphabet letters, educational magnets | Education | Request applicable test documents |
| 12 | Custom 3D Soft PVC Magnets for Mascots and Landmarks | custom 3D PVC magnets, mascot fridge magnets | 3D Magnets | Submit a sketch |
| 13 | Resin Souvenir Magnets: Artwork, Molding and Assembly | hand-painted resin magnets, resin souvenir magnets | Creative Magnets | Discuss a custom mold |
| 14 | How to Prepare Artwork for Custom Magnet Production | magnet artwork requirements, custom magnet template | Customization | Upload artwork |
| 15 | MOQ, Sampling and Lead Time for Custom Magnetic Products | custom magnet MOQ, custom magnet lead time | Contact / Products | Request a project review |
| 16 | Packaging Options for Retail-Ready Magnetic Sets | custom magnet packaging, retail-ready magnet sets | Customization / Cases | Request packaging options |

## 7. 建议执行顺序

```text
1. 在 GSC 添加并验证 Domain property
2. 提交 sitemap.xml
3. 检查首页并 Request Indexing
4. 在 Bing 导入 GSC 或完成站点验证
5. 创建 GA4 Web data stream
6. 提供 Measurement ID 后嵌入 GA4
7. 先追踪 WhatsApp / Email / Quote 点击
8. 再修复 mailto 表单的服务器端接收能力
9. 每两周发布一篇技术或采购文章
```

## 8. 费用与权限边界

GSC、Bing Webmaster Tools 和基础 GA4 通常涉及用户账号登录与授权；任何第三方表单、邮件自动化、营销平台或付费 API，在发现可能产生费用时必须先向用户确认。