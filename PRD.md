# PRD — Saya Holistic Spa Website
**Version:** 2.0 (обновлён после анализа design_example/)  
**Date:** June 2026  
**Источники:** RESEARCH.md + ARCHITECTURE.md (полный разбор дизайн-референсов)

---

## 1. ЦЕЛЬ ПРОЕКТА

Создать одностраничный сайт для Saya Holistic Spa, точно воспроизводящий дизайн из `design_example/`, который:
- Позиционирует бренд как **premium / medical-grade** (paramedical, не spa-релакс)
- Конвертирует посетителей в **booking** (целевой CR 3–7%)
- Работает безупречно на **mobile** (70%+ трафика — RESEARCH.md)
- Реализован на **HTML / CSS / Vanilla JS** — без фреймворков

---

## 2. СТЕК И ОГРАНИЧЕНИЯ

| Параметр | Значение |
|----------|----------|
| HTML | Семантический HTML5, один файл `index.html` |
| CSS | Inline `<style>`, CSS Grid + Flexbox, Custom Properties |
| JS | Inline `<script>`, Vanilla ES5+ |
| Шрифты | **Helvetica, 'Helvetica Neue', Arial** — только системные, без Google Fonts |
| Изображения | Из `saya_website_layouts/`, `loading="lazy"` кроме hero |
| Зависимости | **Никаких** внешних библиотек |

---

## 3. ДИЗАЙН-СИСТЕМА (из design_example/)

### 3.1 Цветовая палитра
```
--brand:        #2c2c2c   /* основной тёмный, текст */
--white:        #ffffff   /* фон большинства секций */
--off-white:    #f7f6f3   /* альтернативный фон */
--light-gray:   #e5e3de   /* borders, разделители */
--mid-gray:     #9b9890   /* вторичный текст, labels */
--text-body:    #5a5856   /* body paragraphs */
--tab-accent:   #b8926a   /* тёплый терракотовый — underline активного таба */
```

### 3.2 Типографика
```
Шрифт: Helvetica, 'Helvetica Neue', Arial, sans-serif — ВЕСЬ САЙТ
Логотип: lowercase italic "saya" — ЕДИНСТВЕННОЕ исключение

UPPERCASE применяется к:
  • Nav ссылки
  • Section titles (H1, H2)
  • Card labels
  • Tab labels
  • List items (названия процедур)
  • CTA ("BOOK NOW →", "START YOUR JOURNEY →")
  • Bold sub-headers в тексте (EXPERT SKIN DIAGNOSIS...)

Normal case:
  • Body paragraphs
  • Category nav (мягкое исключение)
  • Detail panel описания

Размеры:
  Section H1:    28–34px,  weight 400, letter-spacing 0.05em
  Card labels:   11–12px,  weight 400, letter-spacing 0.15em
  Nav links:     11px,     weight 400, letter-spacing 0.18em
  Body text:     14–15px,  weight 400, line-height 1.75
  Detail title:  18–20px,  weight 700
  Tab labels:    11px,     weight 400, letter-spacing 0.2em
  Logo "saya":   28–32px,  weight 300, font-style italic
```

### 3.3 Компонентные правила (из дизайна)
```
Service card:   НЕТ border, НЕТ shadow, НЕТ radius
                Image → gap → label (uppercase, arrow →)
                Hover: только zoom на image, label — всегда виден

List item:      Bordered box (1px solid --light-gray)
                Текст слева, "›" справа
                Hover: light background tint

Tab underline:  1px, цвет --tab-accent (#b8926a)
                Ширина только под текстом (не полная ширина кнопки)

BOOK NOW:       TEXT LINK (не кнопка с background)
                Uppercase, стрелка →, в detail panel
                Исключение: главная CTA внизу — outline-кнопка

Monogram "S":   Вторичный бренд-знак, top-right в section headers

DMK Banner:     REMOVE/REBUILD/PROTECT/MAINTAIN — inline bold в тексте
                НЕ отдельные pillar-блоки
```

---

## 4. СТРУКТУРА СТРАНИЦЫ

### S1 — NAVIGATION (из 1.png)
**Паттерн:** 3-column CSS Grid
```
[The Spa Experience]  [Rituals & Treatments]  ||  saya  ||  [Results & Stories]  [Book Now]
```
- `position: fixed`, высота 70px
- Прозрачная → белая с blur при `scrollY > 40`
- Logo: lowercase italic, subtitle "holistic spa · new york" под ним
- "Book Now": outline border (не filled)
- Mobile (≤1024px): logo center + hamburger right, скрыть все links
- Mobile menu: full-width overlay с вертикальным списком

---

### S2 — HERO (из 1.png)
- Full-viewport, `min-height: 100vh`
- Background: `background_hero_saya.jpg`, cover, center
- Dark overlay: `rgba(0,0,0,0.4)`
- **Заголовок:** "Transformative Experience. Rejuvenating Touch." — italic, centered, нижняя треть
- **CTA:** "START YOUR JOURNEY →" — outline border, bottom-right corner, `position: absolute`
- Entrance animation: hero-bg scale(1.06→1), headline fade-up

---

### S3 — SERVICES GRID (из 2.png)
- White background
- Top-right: "BOOK NOW →" text link
- 4-column grid, gap: 16-24px
- **Card:** portrait image (aspect 3:4) + label below
- Label: uppercase, ~11px, letter-spacing 0.15em, arrow →
- Hover: image scale(1.04), arrow появляется
- Responsive: 2×2 tablet, 1-col mobile

**Cards:**
1. DMK SKIN REVISION → (`DSCF4932.jpg`)
2. SAYA SIGNATURE FACE MASSAGE → (`IMG_0707.JPG`)
3. JR RELEASE, REBALANCE & RESTORE THERAPY → (`IMG_5276.JPG`)
4. ADVANCED SKIN SCAN → (`006d734c...jpg`)

---

### S4 — DMK METHODOLOGY BANNER (из 8.png)
- Full-width, `height: 65vh min-height: 400px`
- Background: `bc799da9...jpg` (skin texture), dark overlay ~0.5
- **Text (centered, white):** *"With DMK's unique approach of **REMOVE, REBUILD, PROTECT,** and **MAINTAIN**, our therapists are equipped to deliver long-lasting, visible results."*
- Text позиционирован в нижней части секции (не строго по центру)

---

### S5 — WHAT IS ENZYME THERAPY (из 4.png)
- White background
- **Section title:** "WHAT IS ENZYME THERAPY" — uppercase, left-aligned, над всем
- **Split layout:** 40% фото слева + 60% текст справа
- Фото: `IMG_1264 2.jpg`, portrait format, full-height
- Текст: 3 параграфа, normal case, weight 400
- **БЕЗ CTA** внутри секции (дизайн показывает чисто образовательный блок)
- Mobile: стек вертикально (фото сверху, текст снизу)

---

### S6 — TREATMENT MENU (из 7.png + 9.png)
- White/off-white background
- **Section header:** "DMK SKIN REVISION" — centered uppercase
- **Logo monogram** "saya" — top-right corner (мелкий)
- **Tab bar (горизонтальный):**
  - 5 табов: SIGNATURE DMK FACIALS | AGE-DEFYING & LIFTING | BRIGHTENING & GLOW | DETOXIFYING & ACNE CONTROL | HYDRATION & SKIN BARRIER REPAIR
  - Active tab: underline `1px solid #b8926a` под текстом
  - Border-bottom всей строки: 1px solid --light-gray
- **Двухколоночная панель:**
  - Левая (40%): список bordered items + "›"
  - Правая (60%): detail panel

**Detail panel содержимое:**
```
[BOLD TITLE]
[description paragraph]

[Suitable for X skin types.]          [BOOK NOW →]
```

**Процедуры по табам:**
| Таб | Процедуры |
|-----|-----------|
| Signature DMK | DMK Biochaking Enzyme Therapy, DMK Lymphatic Detox Enzyme Therapy, Age-Defying & Lifting, Brightening & Glow, Acne Control |
| Holistic Massage | Signature Face Massage, JR Release & Restore, Therapeutic Body Massage |
| Celluma LED | Anti-Aging, Acne Control, Pain & Healing |
| Advanced Skin Analysis | OBSERV 560x Imaging, Comprehensive Consultation |
| Body Rituals | Face & Body Ritual, Enhancements & Add-Ons, Packages |

---

### S7 — SKIN CONSULTATION (из 5.png)
- **Белый фон, ТОЛЬКО текст** (без фото — дизайн показывает чисто текстовую страницу)
- **H1:** "SKIN CONSULTATION" — крупный uppercase left
- **Intro:** "Every in-clinic consultation with our expert facialists is $160 and includes an LED treatment. This is far more than a quick chat — it's a deep dive into your skin's health."
- **Lead-in:** "Here's what you can expect:"
- **4 items** (без иконок, без borders):
  - **EXPERT SKIN DIAGNOSIS & GENTLE CLEANSE** + paragraph
  - **TAILORED TREATMENT PLAN** + paragraph
  - **PROFESSIONAL PRODUCT RECOMMENDATIONS** + paragraph
  - **LED LIGHT THERAPY SESSION** + paragraph

---

### S8 — WHAT TO EXPECT / PROCESS (адаптировано из 6.png)
- 3 numbered steps горизонтально
- Крупные серые цифры (01/02/03) как декор
- Title + description для каждого шага
- Mobile: вертикальный стек

Steps:
1. **CONSULTATION & ANALYSIS** — OBSERV 560x, skin mapping
2. **THE RITUAL** — персонализированное лечение
3. **LASTING RESULTS** — накопительный эффект, home care

---

### S9 — TESTIMONIALS
- White background, centered
- 4 цитаты в карусели (auto 5s)
- Format: italic quote + "— Name" below
- Dots navigation
- Анимация: fade + slight translateY

---

### S10 — BOOKING CTA
- Off-white background
- Centered heading + subtext
- **Outline кнопка** (исключение — здесь кнопка с border, не просто text link)
- "BOOK YOUR APPOINTMENT →"

---

### S11 — FOOTER
- Dark background (#2c2c2c)
- 4 columns: Brand | Treatments | Information | Contact
- Logo "saya" italic вверху левой колонки
- Email, телефон, соцсети
- Copyright строка внизу

---

## 5. АНИМАЦИИ (из исследования + дизайна)

```css
/* Easing */
--ease: cubic-bezier(0.22, 1, 0.36, 1);   /* luxury feel */

/* Hero entrance */
hero-bg:       scale(1.06 → 1.0), duration 1.4s
hero-headline: opacity(0→1) + translateY(24px→0), delay 0.25s
hero-cta:      opacity(0→1) + translateY(12px→0), delay 0.5s

/* Scroll reveals (.reveal class) */
All sections:  opacity(0→1) + translateY(32px→0), duration 0.9s
Stagger:       d1=0.1s, d2=0.2s, d3=0.3s, d4=0.4s

/* Cards */
Image hover:   scale(1.0 → 1.05), duration 0.7s ease-out

/* Tab switch */
Active underline: scaleX(0 → 1), duration 0.35s

/* Testimonials */
Slide in:      opacity(0→1) + translateY(12px→0), duration 0.5s
```

---

## 6. RESPONSIVE BREAKPOINTS

```
Desktop:  > 1200px  — 4-col grid, full nav, split layouts 50/50
Laptop:   1024-1200px — same but slightly smaller padding
Tablet:   768-1024px  — 2-col grid, hamburger nav, stack some splits
Mobile:   < 768px   — 1-col, all stacked, sticky bottom "BOOK NOW" bar
```

### Mobile-specific:
- Навигация: logo center + hamburger → full-screen overlay menu
- Services: 1 карточка в ряд
- Treatment menu tabs: горизонтальный scroll без переноса
- Split sections: фото сверху, текст снизу
- Sticky нижняя полоса: "BOOK NOW →" при скролле > hero

---

## 7. ASSET ПЛАН

| Файл | Секция | Примечание |
|------|--------|------------|
| `background_hero_saya.jpg` | S2 Hero | `loading="eager"` |
| `DSCF4932.jpg` | S3 Card 1 | DMK Skin Revision |
| `IMG_0707.JPG` | S3 Card 2 | Face Massage |
| `IMG_5276.JPG` | S3 Card 3 | JR Release |
| `006d734c...jpg` | S3 Card 4 | Skin Scan |
| `bc799da9...jpg` | S4 Banner | Skin texture, dark |
| `IMG_1264 2.jpg` | S5 Split | Enzyme therapy |
| `0297ded...jpg` | Резерв | Consultation (убрана из S7) |

---

## 8. CHECKLIST КАЧЕСТВА

### Performance
- [ ] Hero image eager, все остальные lazy
- [ ] Нет внешних шрифтов, нет CDN зависимостей
- [ ] CSS без неиспользуемых правил
- [ ] Все JS-обработчики с `{ passive: true }` для scroll

### Accessibility
- [ ] `<nav>`, `<main>`, `<section>`, `<footer>` — семантика
- [ ] Alt-тексты на изображениях
- [ ] ARIA-label на hamburger кнопке
- [ ] Keyboard navigation: Tab + Enter работает
- [ ] Контраст WCAG AA (белый текст на тёмном фоне баннеров)

### Design fidelity (из дизайн-файлов)
- [ ] Nav: 3-column split layout точно как в 1.png
- [ ] Tabs: терракотовый underline (#b8926a) точно как в 7.png
- [ ] Treatment list: bordered items с "›" как в 7.png
- [ ] Skin Consultation: ТОЛЬКО текст, без фото, как в 5.png
- [ ] DMK Banner: inline bold keywords, не pillar-blocks, как в 8.png
- [ ] Service cards: label ВСЕГДА виден под фото, не hover-overlay
- [ ] "BOOK NOW →" в detail panel: text link, не кнопка

---

## 9. ГОТОВЫЙ КОНТЕНТ

### Hero
> *Transformative Experience. Rejuvenating Touch.*

### DMK Banner (точно из 8.png)
> With DMK's unique approach of **REMOVE, REBUILD, PROTECT,** and **MAINTAIN,** our therapists are equipped to deliver long-lasting, visible results.

### Skin Consultation intro (из 5.png)
> Every in-clinic consultation with our expert facialists is $160 and includes an LED treatment. This is far more than a quick chat — it's a deep dive into your skin's health with the guidance of our highly experienced team.
> Here's what you can expect:

### Testimonials
1. *"After just one DMK Enzyme session, my skin looked completely transformed. The results lasted weeks — I've never experienced anything like it."* — Emma R.
2. *"Their knowledge of DMK methodology is extraordinary. My decade-long skin concerns were finally addressed with a clinical approach that actually works."* — Olivia M.
3. *"The OBSERV imaging showed me things beneath my skin I had no idea about. My treatment plan has completely changed my complexion."* — Sarah K.
4. *"The JR Release therapy released tension I'd held for years. The atmosphere, the skill, the care — extraordinary."* — Natalie T.
