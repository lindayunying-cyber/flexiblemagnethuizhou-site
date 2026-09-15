# Flexible Magnet (Huizhou) 上线后 SEO、GA4、案例与 CRO 审核

审计范围：
- 本地源码：`E:\7-Accio文件\Flexible Magnet Team\flexiblemagnethuizhou_site`
- 正式域名：`https://www.flexiblemagnethuizhou.com`
- Sitemap：`https://www.flexiblemagnethuizhou.com/sitemap.xml`
- 本次仅做只读审计和方案整理，没有修改代码、DNS、GSC、Bing 或 GA4 账号。

## 一、Google Search Console（GSC）

### 推荐绑定方式：Domain property

1. 打开 Google Search Console：
   `https://search.google.com/search-console/about`
2. 点击添加资源。
3. 选择 **Domain**，输入：
   `flexiblemagnethuizhou.com`
   不要输入 `https://`。
4. GSC 会生成一条 DNS TXT 验证记录。
5. 登录 Cloudflare，进入：
   `Websites → flexiblemagnethuizhou.com → DNS → Records`
6. 新增 Google 提供的 TXT 记录。
7. 回到 GSC，点击 Verify。

只新增 Google 提供的 TXT 记录。不要删除现有 MX/TXT 邮箱记录，也不要修改 Nameserver。

### 提交 Sitemap

验证成功后：

1. 在 GSC 左侧打开 **Sitemaps**。
2. 在 Add a new sitemap 中填写：
   `sitemap.xml`
3. 点击 Submit。
4. 等待状态显示 Submitted/Success。

### 请求抓取和索引

在 GSC 左侧打开 **URL Inspection**，逐条检查：

1. `https://www.flexiblemagnethuizhou.com/`
2. `https://www.flexiblemagnethuizhou.com/products.html`
3. `https://www.flexiblemagnethuizhou.com/about.html`
4. `https://www.flexiblemagnethuizhou.com/customization.html`
5. `https://www.flexiblemagnethuizhou.com/industries.html`
6. `https://www.flexiblemagnethuizhou.com/contact.html`
7. `https://www.flexiblemagnethuizhou.com/cases.html`

对每个 URL：

1. 输入 URL。
2. 点击 Test Live URL。
3. 确认可访问且未被 robots 阻止。
4. 点击 Request Indexing。

Google 的 URL Inspection 可检查当前索引版本和可抓取性；请求索引不保证立即收录，重复提交不会加快处理。

官方资料：
- `https://support.google.com/webmasters/answer/9008080?hl=en`
- `https://support.google.com/webmasters/answer/7451001?hl=en`
- `https://support.google.com/webmasters/answer/9012289?hl=en`

## 二、Bing Webmaster Tools

### 推荐方式：从 GSC 导入

1. 打开 Bing Webmaster Tools：
   `https://www.bing.com/webmasters/about`
2. 登录 Microsoft 账号。
3. 选择 **Import from Google Search Console**（如果界面提供）。
4. 授权同一 Google 账号。
5. 选择 `flexiblemagnethuizhou.com` 并完成导入。

### 手动验证方式

如果无法从 GSC 导入：

1. 选择 Add a site。
2. 输入：
   `https://www.flexiblemagnethuizhou.com`
3. 使用 Bing 提供的 XML 文件、Meta 标签或 DNS 验证方式。
4. 如果使用 DNS 验证，只新增 Bing 提供的记录。
5. 在 Sitemaps 中提交完整地址：
   `https://www.flexiblemagnethuizhou.com/sitemap.xml`
6. 使用 URL Inspection 检查首页和重点页面。

Bing 官方资料：
- `https://www.bing.com/webmasters/help/refreshed-webmaster-tools-7c7d2533`
- `https://www.bing.com/webmasters/help/URL-Submission-62f2860b`
- `https://www.bing.com/webmasters/help/url-inspection-55a30305`

## 三、GA4 审核结果

### 当前状态

源码中未发现以下 GA4/GTM 标记：

- `gtag()`
- `G-XXXXXXXXXX`
- `googletagmanager`
- `analytics.js`
- Universal Analytics ID

结论：**当前没有嵌入 GA4。**

### 创建 Measurement ID

1. 登录 Google Analytics。
2. 创建或选择 GA4 Property。
3. 进入 Data streams。
4. 添加 Web stream。
5. 输入：
   `https://www.flexiblemagnethuizhou.com`
6. 获取真实 Measurement ID，格式类似：
   `G-XXXXXXXXXX`

不能猜测、伪造或使用其他网站的 Measurement ID。

### GA4 代码放置位置

将以下代码放入每个公开 HTML 页面 `<head>` 内，替换真实 ID：

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

建议统一放入：

- `index.html`
- `about.html`
- `products.html`
- `product.html`
- `contact.html`
- `customization.html`
- `industries.html`
- `cases.html`

### 建议事件

建议事件名称：

- `whatsapp_click`
- `email_click`
- `request_quote_click`
- `inquiry_form_start`
- `inquiry_form_submit`
- `product_view`

示例：

```html
<script>
document.addEventListener('click', function (event) {
  const link = event.target.closest('a');
  if (!link || typeof gtag !== 'function') return;

  if (link.href.startsWith('https://wa.me/')) {
    gtag('event', 'whatsapp_click', { link_url: link.href });
  }

  if (link.href.startsWith('mailto:')) {
    gtag('event', 'email_click');
  }

  if (link.classList.contains('btn-quote')) {
    gtag('event', 'request_quote_click');
  }
});
</script>
```

不要向 GA4 发送客户姓名、邮箱、电话、询盘正文或其他个人信息。

### 转化事件设置

GA4 事件首次触发后，在 GA4：

1. 打开 Admin。
2. 进入 Events。
3. 找到 `whatsapp_click`、`email_click`、`request_quote_click`、`inquiry_form_submit`。
4. 标记为 Key event（关键事件）。

当前不建议把 `inquiry_form_submit` 解释为“邮件已送达”，因为现有表单只触发本地邮件客户端，不能确认销售邮箱实际收到邮件。

## 四、Contact 表单审计

### 当前代码位置

- 表单：`contact.html:71-215`
- Contact 内联提交处理：`contact.html:285-296`
- main.js 表单处理：`assets/js/main.js:264-309`
- 产品 Request Quote：`assets/js/main.js:91-93`
- WhatsApp 悬浮按钮：`assets/js/main.js:318-335`

### 当前优点

- Email 链接正确指向：`sales08@flexiblemagnetchina.com`
- WhatsApp 链接使用：`https://wa.me/8613129581959`
- 产品卡片 Request Quote 有预填产品名称。
- Contact 表单有姓名、公司、邮箱、电话、市场、产品、数量、尺寸、留言和文件选择。

### 当前问题

1. Contact 页面有自己的 inline submit listener，同时 `main.js` 还会在 DOMContentLoaded 后运行 `setupInquiryForm()`。
2. 两套处理逻辑使用的字段名不一致：
   - Contact 表单使用 `target_market`、`target_date`、`product_type`、`quantity`、`material`、`logo_placement`、`size`、`message`。
   - `main.js` 读取 `country`、`product`、`price`、`launch` 等字段。
3. 表单提交使用 `mailto:`，依赖访客本机配置默认邮件客户端。
4. 文件选择只显示文件名；附件不会被编码进 mailto，也不会自动上传给销售。
5. 页面显示“Your email app should be opening now”，这不是服务器端成功回执。

### 建议的修复方式

推荐二选一，不要保留两套提交监听：

**方案 A：短期低成本**

- 保留 Contact 页面自己的 inline handler；
- 删除或禁用 `main.js` 中对 Contact 表单的重复处理；
- 提交后明确提示："Your email client should open. If it does not, email us directly."；
- 在表单旁边同时显示 WhatsApp 备用入口。

**方案 B：长期稳定**

- 使用自有后端或表单服务接收表单和附件；
- 返回明确的 server-side success 状态；
- 将询盘转发到 `sales08@flexiblemagnetchina.com`；
- 接入 GA4 `inquiry_form_submit` 只记录提交事件，不发送个人信息。

方案 B 可能涉及第三方费用或外部服务，执行前必须确认费用和服务商。

### 手动 CRO 测试清单

在正式网站上测试：

1. Products → 任意产品 → Request Quote：是否打开 WhatsApp。
2. Contact → Email Us：是否打开邮件客户端。
3. Contact → WhatsApp：是否打开正确号码。
4. Contact → 填写必填字段 → 提交：是否打开 mailto。
5. 不配置默认邮件客户端的浏览器：是否显示备用邮箱提示。
6. 选择文件后提交：明确说明当前附件不会自动发送。

## 五、Cases 页面占位符与英文文案建议

当前源码仍可见 `[Linda to fill]` 和 `[Placeholder...]`，例如：

- `cases.html:67-72`
- `cases.html:91-96`
- `cases.html:115-120`

以下是基于已有背景的**待确认草稿**。在确认订单数量、实际周期、测试文件和客户授权前，不应直接写成已验证事实。

### Case 1 — Portuguese Museum Gift Retail Program

**Title**

`Portuguese Museum Gift Retail Program`

**Subtitle**

`Portugal · Cultural souvenir retail`

**Challenge**

`The buyer needed a coordinated collection of epoxy souvenir magnets for museum-style retail, with artwork consistency across multiple landmark designs and presentation-ready packaging.`

**Solution**

`We reviewed the artwork, matched the suitable epoxy magnet format, coordinated the set layout, and prepared a retail-oriented transparent box presentation.`

**Outcome**

`The program was structured as an anonymized cultural-souvenir project. Exact order volumes, final artwork and client references remain confidential under NDA.`

**Tags**

`Museum & Gift Shop` · `Epoxy Magnet Sets` · `Custom Packaging`

### Case 2 — Indian Stationery Brand

**Title**

`Indian Stationery Brand — Educational Magnetic Range`

**Subtitle**

`India · Children's educational stationery`

**Challenge**

`The brand needed magnetic learning products with clear material information and documentation suitable for its target market and product review process.`

**Solution**

`We reviewed the product structure, discussed the applicable EN71-3 documentation requirements, and aligned the product format, artwork and packaging with the brand's launch plan.`

**Outcome**

`The project demonstrates a documentation-led approach to educational magnetic products. Final test scope and shipment details should be confirmed from the available project records before publication.`

**Tags**

`Stationery Brand` · `EN71-3 Documentation` · `Educational Magnets`

> 注意：如果公司拥有针对该项目的有效 EN71-3 报告，可将 “documentation requirements” 改为 “EN71-3 test documentation”. 不建议写成泛化的 “certified” 或美国认证声明，除非有对应文件。

### Case 3 — Australian Promotional Agency

**Title**

`Australian Promotional Agency — Branded Magnetic Merchandise`

**Subtitle**

`Australia · Corporate gifting and brand activations`

**Challenge**

`The agency needed branded magnetic merchandise for a promotional program, with clear artwork coordination, dependable packaging and a practical production plan.`

**Solution**

`We reviewed the product concept, aligned the artwork and material route, and prepared the project for factory-direct production and export coordination.`

**Outcome**

`The case represents an anonymized promotional merchandise program. Delivery method, order volume and final customer details should be published only after internal confirmation.`

**Tags**

`Promotional Agency` · `Brand Merchandise` · `White Label`

## 六、推荐下一步顺序

1. 用户完成 GSC Domain property 验证。
2. 提交 `sitemap.xml`，逐个 Request Indexing 重点页面。
3. 用户完成 Bing 验证或从 GSC 导入。
4. 用户创建 GA4 Web stream 并提供真实 Measurement ID。
5. 确认后统一嵌入 GA4 代码。
6. 先修复 Contact 表单双重 listener，再设置 GA4 转化事件。
7. 确认三条案例的真实数量、交期、检测文件和客户授权后，再替换占位文案。

## 费用与权限提醒

GSC、Bing 和 GA4 需要用户账号登录与授权。任何表单服务、邮件自动化、第三方 API 或付费工具，如果可能产生费用，必须先确认后执行。