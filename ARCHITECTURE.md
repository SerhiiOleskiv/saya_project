# ARCHITECTURE — Saya Holistic Spa Website
**Источник:** Полный анализ design_example/1.png → 16.png  
**Статус:** Детальный разбор каждого экрана → точные паттерны → архитектурный план

---

## АНАЛИЗ ДИЗАЙН-РЕФЕРЕНСОВ (по файлам)

### 1.png — HERO
```
┌─────────────────────────────────────────────────────┐
│ The Spa Experience  Rituals & Treatments  [saya]  Results & Stories  Book Now │
│─────────────────────────────────────────────────────│
│                                                     │
│           (full-bleed B&W photo)                   │
│                                                     │
│    Transformative Experience. Rejuvenating Touch.   │
│                             (centered, italic)      │
│                                                     │
│                              [START YOUR JOURNEY →] │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Nav: 3-column grid — left(2 links) | center(logo+sub) | right(2 links)
- Hero text: центр по горизонтали, нижняя треть по вертикали (не строго по центру)
- CTA: outline border, bottom-right, uppercase, маленький шрифт
- Фото: полностью чёрно-белое, тёмное
- НИКАКИХ декоративных элементов, только чистота

---

### 2.png — SERVICES GRID
```
┌─────────────────────────────────────────────────────┐
│                                      BOOK NOW →     │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│  │ img  │  │ img  │  │ img  │  │ img  │           │
│  │      │  │      │  │      │  │      │           │
│  │      │  │      │  │      │  │      │           │
│  └──────┘  └──────┘  └──────┘  └──────┘           │
│  DMK SKIN  SAYA SIG  JR RELEASE  ADVANCED          │
│  REVISION→ FACE MAS→ REBALANCE→  SKIN SCAN→        │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- "BOOK NOW →" — правый верх как text link, НЕ кнопка
- 4 колонки, portrait aspect-ratio (~3:4)
- Карточки БЕЗ border/shadow/box
- Labels: ALL CAPS, мелкий шрифт, стрелка →, под фото
- Нет hover-overlay с текстом — текст всегда виден под фото

---

### 3.png — DMK EDUCATION HEADER
```
┌─────────────────────────────────────────────────────┐
│ WHAT TO EXPECT: BEFORE, DURING,                saya │
│ AFTER DMK ENZYME THERAPY                           │
│                                                     │
│ If you're considering DMK Enzyme Therapy...         │
│ (body paragraph, left-aligned)                     │
│                                                     │
│         (full-width background photo)               │
│─────────────────────────────────────────────────────│
│ WHAT IS    BENEFITS OF   PREPARING FOR  DURING YOUR │
│ ENZYME TH  ENZYME TH     ENZYME TH      TREATMENT   │
│─────────────────────────────────────────────────────│
│        WHAT TO EXPECT AFTER YOUR ENZYME TREATMENT   │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Section header: H1 left, logo monogram top-right
- Горизонтальные tab-links СНИЗУ секции (не сверху)
- Финальный CTA-текст по центру внизу
- Background photo — warm tones (skin texture), не B&W

---

### 4.png — WHAT IS ENZYME THERAPY (Split Layout)
```
┌─────────────────────────────────────────────────────┐
│ WHAT IS ENZYME THERAPY                              │
│─────────────────────────────────────────────────────│
│  ┌────────────┐   DMK's famous Enzyme Therapy and  │
│  │            │   skin health revision will give    │
│  │   photo    │   you instant plumping...           │
│  │ (portrait) │                                     │
│  │            │   Detoxifies, purifies...           │
│  │            │                                     │
│  └────────────┘   This facial treatment is         │
│                   paramedical focused...            │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Section title: uppercase, left-aligned, над всем контентом
- Split: ~40% фото слева, ~60% текст справа
- Фото: portrait/tall format
- Текст: обычный вес, несколько параграфов, без subtitle
- БЕЗ CTA кнопки внутри этой секции

---

### 5.png — SKIN CONSULTATION (Text-only section)
```
┌─────────────────────────────────────────────────────┐
│ SKIN CONSULTATION                                   │
│                                                     │
│ Every in-clinic consultation with our expert       │
│ facialists is $160 and includes an LED treatment.  │
│ This is far more than a quick chat...              │
│                                                     │
│ Here's what you can expect:                        │
│                                                     │
│ EXPERT SKIN DIAGNOSIS & GENTLE CLEANSE             │
│ We begin by thoroughly cleansing your skin...      │
│                                                     │
│ TAILORED TREATMENT PLAN                            │
│ Based on your skin analysis...                     │
│                                                     │
│ PROFESSIONAL PRODUCT RECOMMENDATIONS               │
│ We'll guide you...                                 │
│                                                     │
│ LED LIGHT THERAPY SESSION                          │
│ A relaxing LED treatment...                        │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Белый фон, ТОЛЬКО текст
- H1: uppercase, крупный, left-aligned
- Intro: 2 строки обычного текста
- "Here's what you can expect:" — lead-in фраза
- 4 items: **BOLD UPPERCASE TITLE** + paragraph ниже
- Никаких иконок, никаких borders, никаких images

---

### 6.png — DURING YOUR TREATMENT (Annotation layout)
```
┌─────────────────────────────────────────────────────┐
│ DURING YOUR TREATMENT                    [S logo]   │
│─────────────────────────────────────────────────────│
│  WHAT TO EXPECT WHILE                              │
│  YOUR ENZYME MASQUE IS ON                          │
│                                                     │
│  ┌─────────────────────┐  While your Enzyme Therapy│
│  │ photo with callout  │  is taking place, you can │
│  │ annotations:        │  lay back and relax...    │
│  │ • thick cool masque │                           │
│  │ • pulsating feeling │                           │
│  │ • hardening         │                           │
│  │ • cracking          │                           │
│  │ • puckering         │                           │
│  └─────────────────────┘                           │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Вторичный логотип: монограмма "S" top-right (не полное "saya")
- Аннотированная фотография — уникальный инфографический элемент
- Split layout снова, но с аннотацией на фото
- Warm/dark tones

---

### 7.png — TREATMENT MENU (Left-title layout)
```
┌─────────────────────────────────────────────────────┐
│ DMK SKIN REVISION                              saya │
│─────────────────────────────────────────────────────│
│ SIGNATURE DMK FACIALS  AGE-DEFYING  BRIGHTENING    │
│ ─────────────────                                   │  ← underline accent
│                                                     │
│  ┌──────────────────────────┐  ┌─────────────────┐ │
│  │ DMK BIOCHAKING ENZYME  › │  │ DMK BIOCHAKING  │ │
│  ├──────────────────────────┤  │ ENZYME THERAPY  │ │
│  │ DMK LYMPHATIC DETOX    › │  │                 │ │
│  └──────────────────────────┘  │ Detox, strength │ │
│                                │ & glow. A rev.. │ │
│                                │                 │ │
│                                │ Suitable for    │ │
│                                │ all skin types. │ │
│                                │        BOOK NOW→│ │
│                                └─────────────────┘ │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Заголовок секции: LEFT top + logo RIGHT top (противоположные углы)
- Tabs: горизонтальный список, active = underline accent (тёплый коричнево-красный цвет ~#c4956a или #b8926a)
- List panel: bordered box items, full-width, arrow › right
- Detail panel: NO border, просто текст в контейнере
- Detail: bold title → description → "Suitable for X" → BOOK NOW →
- "BOOK NOW →" — text link, НЕ кнопка с background

---

### 8.png — DMK METHODOLOGY BANNER
```
┌─────────────────────────────────────────────────────┐
│          (dark photo — skin/treatment texture)      │
│                                                     │
│  With DMK's unique approach of REMOVE, REBUILD,    │
│  PROTECT, and MAINTAIN, our therapists are         │
│  equipped to deliver long-lasting, visible results. │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Full-width, тёмное фото (warm tones — кожа после treatment)
- Текст: белый, centered, нижняя часть секции
- REMOVE/REBUILD/PROTECT/MAINTAIN — bold или caps внутри текста
- Нет отдельных pillar-элементов — просто inline в тексте

---

### 9.png — TREATMENT MENU (Center-title layout)
```
┌─────────────────────────────────────────────────────┐
│              DMK SKIN REVISION                      │  ← centered!
│─────────────────────────────────────────────────────│
│ SIGNATURE DMK FACIALS  AGE-DEFYING  BRIGHTENING    │
│ ─────────────────                                   │
│  [same list+detail layout as 7.png]                │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Альтернативный вариант: заголовок по центру
- Всё остальное то же самое что в 7.png

---

### 15.png / 16.png — CATEGORY NAV + GRID
```
┌─────────────────────────────────────────────────────┐
│                                                  R  │  ← monogram
│ DMK Skin Revision  Holistic Facial  Signature       │
│ Facials            & Face Massage   Massage Exp     │
│                    Therapies                        │
│ Therapeutic Face   Enhancements     Packages        │
│ & Body Rituals     & Add-Ons                        │
│─────────────────────────────────────────────────────│
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────────────┐   │
│  │ img  │  │ img  │  │ img  │  │              │   │
│  │      │  │      │  │      │  │   BOOK NOW   │   │
│  │      │  │      │  │      │  │              │   │
│  └──────┘  └──────┘  └──────┘  └──────────────┘   │
│  DMK       SAYA SIG  JR REL    BOOK NOW →          │
│  ENZYME→   FACE MAS→ REBALANCE→                     │
└─────────────────────────────────────────────────────┘
```
**Извлечённые паттерны:**
- Category nav: text links, multi-row wrapping, normal case (не uppercase!)
- Active category: pill/outline box (border появляется на активном)
- Monogram: "R" или "S" — маленький, top-right
- 4-й card: вместо фото — просто "BOOK NOW" текст (bookmarks card)
- Это ДРУГАЯ секция от Treatment Menu — это navigation hub

---

## КЛЮЧЕВЫЕ ДИЗАЙН-ТОКЕНЫ (из анализа)

### Типографика
```
Шрифт: Helvetica, Arial, sans-serif — ВСЁ
Логотип: lowercase italic "saya" — ТОЛЬКО исключение

UPPERCASE используется для:
  - Nav links
  - Section titles (H1/H2)
  - Card labels
  - Tab labels
  - List items (treatment names)
  - CTA links ("BOOK NOW →", "START YOUR JOURNEY →")
  - Bold sub-headers внутри текста

Normal case используется для:
  - Body paragraphs
  - Category nav (15.png) — исключение из uppercase-правила
  - Detail panel descriptions

Размеры (приблизительно из визуала):
  Section H1:    ~28-36px, weight 400, letter-spacing ~0.05em
  Card labels:   ~11-12px, weight 400, letter-spacing ~0.15em
  Nav links:     ~11px, weight 400, letter-spacing ~0.18em
  Body text:     ~14-15px, weight 400, line-height ~1.7
  Detail title:  ~18-20px, weight 700 (bold)
  Tab labels:    ~11px, weight 400, letter-spacing ~0.2em
```

### Цвета
```
Background:       #ffffff (белый — доминирующий)
Text:             #2c2c2c (тёмный чаркол)
Secondary text:   ~#666666 (body paragraphs)
Tab accent:       ~#b8926a или #c4956a (тёплый терракотовый — underline active tab)
Borders:          ~#e0ddd8 (светло-серый для list items)
Photo overlays:   rgba(0,0,0,0.35-0.5)
CTA buttons:      transparent + white border (on dark) / transparent + dark border (on light)
```

### Spacing паттерны
```
Section padding:     80-120px vertical, 40-60px horizontal
Card gap:            16-24px
List item height:    ~56-64px
Detail panel:        ~40-48px internal padding
Nav height:          ~60-70px
```

### Компонент-специфика
```
Service card:     NO border, NO shadow, NO radius
                  Image → label (margin-top ~16px)
                  Label: uppercase + → arrow, inline

List item:        Full-width bordered box
                  Text left, "›" right
                  Border: 1px solid ~#e0ddd8
                  Hover: slight background tint

Tab underline:    1px, ~terracotta color, bottom of tab text
                  NOT full-width — only under text width

Logo:             "saya" lowercase italic
                  Subtitle: "holistic spa · new york" — tiny, uppercase, spaced

Monogram:         "S" — used as secondary brand mark (top-right on sub-sections)
```

---

## АРХИТЕКТУРНЫЙ ПЛАН СТРАНИЦЫ

### Уточнённая структура секций

```
index.html
│
├── <nav>          NAVIGATION
│   ├── .nav-left  [The Spa Experience] [Rituals & Treatments]
│   ├── .nav-logo  [saya + holistic spa · new york]
│   └── .nav-right [Results & Stories] [Book Now]
│
├── <section #hero>          HERO (1.png)
│   ├── .hero-bg             full-bleed photo
│   ├── .hero-overlay        dark gradient
│   ├── .hero-headline       centered, italic, lower 40%
│   └── .hero-cta            "START YOUR JOURNEY →" bottom-right
│
├── <section #services>      SERVICES GRID (2.png)
│   ├── .services-top        "BOOK NOW →" right-aligned text link
│   └── .services-grid       4 cards
│       └── .svc-card ×4     img → label → arrow
│
├── <section #methodology>   DMK BANNER (8.png)
│   ├── .banner-bg           dark photo (full-width)
│   └── .banner-text         centered quote, bottom-positioned
│
├── <section #enzyme>        WHAT IS ENZYME THERAPY (4.png)
│   ├── .split-title         "WHAT IS ENZYME THERAPY"
│   ├── .split-image         portrait photo, left
│   └── .split-content       3 paragraphs, right
│
├── <section #treatments>    TREATMENT MENU (7.png + 9.png)
│   ├── .treatments-title    "DMK SKIN REVISION" centered
│   ├── .treatments-logo     "saya" monogram top-right
│   ├── .tabs-bar            5 tabs with terracotta underline
│   └── .tab-panel ×5        [active panel]
│       ├── .t-list          bordered list items with ›
│       └── .t-detail        title + desc + meta + BOOK NOW →
│
├── <section #consult>       SKIN CONSULTATION (5.png)
│   ├── .consult-title       "SKIN CONSULTATION" large uppercase
│   ├── .consult-intro       2-line intro + "Here's what you can expect:"
│   └── .consult-items ×4   BOLD TITLE + paragraph
│       (no images, no borders, pure text on white)
│
├── <section #process>       WHAT TO EXPECT (6.png adapted)
│   ├── .process-title       "DURING YOUR TREATMENT"
│   └── .process-steps       3 numbered steps (adapted from annotation layout)
│
├── <section #testimonials>  TESTIMONIALS
│   ├── .testi-title
│   ├── .testi-track         carousel
│   └── .testi-dots
│
├── <section #booking>       BOOKING CTA
│   ├── heading
│   ├── subtext
│   └── .cta-btn
│
└── <footer>                 FOOTER
    ├── .footer-grid         4 columns
    └── .footer-bottom       copyright + social
```

---

## ЧТО ИЗМЕНИТЬ В PRD (дельта от дизайн-анализа)

### ❌ УБРАТЬ из PRD:
1. **Serif шрифт (Cormorant Garamond)** — дизайн не использует serif вообще. Всё Helvetica.
2. **Colored section backgrounds** — дизайн почти полностью белый. Off-white и тёмные — только для баннеров.
3. **Hero eyebrow text** ("Holistic Spa · New York") — в 1.png этого нет над заголовком.
4. **Иконки и декоративные элементы** — дизайн абсолютно без иконок.
5. **Scroll indicator bottom-left** — в 1.png этого нет.
6. **Card hover overlay с текстом** — label всегда под картой, не оверлей.
7. **Philosophy section как отдельная тёмная секция** — дизайн не показывает отдельный тёмный блок с pillars.
8. **Pillar cards (Remove/Rebuild/Protect/Maintain)** — в 8.png это просто inline-текст в баннере.

### ✅ ДОБАВИТЬ / УТОЧНИТЬ в PRD:
1. **Tab accent color: ~#b8926a** (тёплый терракотовый underline для активного таба)
2. **List items в treatment menu: bordered boxes** (не просто текст accordion)
3. **"BOOK NOW →" как TEXT LINK** в detail panel, не кнопка с background
4. **Skin Consultation секция: ТОЛЬКО текст**, без фото (5.png — белый экран, только типографика)
5. **Monogram "S"** как вторичный бренд-элемент в section headers (top-right)
6. **"BOOK NOW →" как 4-й card** в сервис-гриде (без фото, только текст) — из 15.png
7. **Category nav над grid** — горизонтальная категоризация услуг (15.png/16.png)
8. **Section title alignment:** заголовок секции LEFT + logo RIGHT (7.png) vs centered (9.png) — используем centered
9. **Skin Consultation intro:** включить цену "$160 and includes LED treatment"
10. **Консультация: Lead-in:** "Here's what you can expect:" перед списком пунктов

---

## CSS АРХИТЕКТУРА

### Файловая структура (inline в HTML)
```
<style>
  /* 1. Reset & CSS Custom Properties */
  /* 2. Typography scale */
  /* 3. Layout utilities */
  /* 4. Navigation */
  /* 5. Hero */
  /* 6. Services Grid */
  /* 7. DMK Banner */
  /* 8. Split Section (reusable) */
  /* 9. Treatment Menu (tabs + list + detail) */
  /* 10. Skin Consultation */
  /* 11. Process Steps */
  /* 12. Testimonials */
  /* 13. Booking CTA */
  /* 14. Footer */
  /* 15. Animations & transitions */
  /* 16. Responsive (mobile-first overrides) */
</style>
```

### CSS Custom Properties
```css
:root {
  /* Brand */
  --brand:        #2c2c2c;
  --white:        #ffffff;
  --off-white:    #f7f6f3;
  --light-gray:   #e5e3de;
  --mid-gray:     #9b9890;
  --text-body:    #5a5856;
  --tab-accent:   #b8926a;  /* ← NEW: терракотовый underline для tabs */

  /* Typography */
  --font:         Helvetica, 'Helvetica Neue', Arial, sans-serif;

  /* Spacing */
  --section-py:   120px;
  --section-px:   60px;
  --nav-h:        70px;

  /* Animation */
  --ease:         cubic-bezier(0.22, 1, 0.36, 1);
  --dur-slow:     0.9s;
  --dur-med:      0.5s;
  --dur-fast:     0.25s;
}
```

### JavaScript модули (всё inline)
```js
// 1. Nav — scroll solid state
// 2. Mobile hamburger menu
// 3. Hero entrance animation (onload)
// 4. IntersectionObserver — scroll reveals
// 5. Tabs switcher (treatment menu)
// 6. Treatment list → detail panel
// 7. Testimonials auto-carousel + dots
// 8. Smooth scroll for anchor links
```

---

## ASSET MAPPING (фото → секция)

| Файл | Секция | Использование |
|------|--------|---------------|
| `background_hero_saya.jpg` | Hero | Full-screen background |
| `DSCF4932.jpg` | Services Grid card 1 | DMK Skin Revision |
| `IMG_0707.JPG` | Services Grid card 2 | Signature Face Massage |
| `IMG_5276.JPG` | Services Grid card 3 | JR Release & Restore |
| `006d734c...jpg` | Services Grid card 4 | Advanced Skin Scan |
| `IMG_1264 2.jpg` | Enzyme Therapy split | Left image |
| `0297ded...jpg` | (убрать из Consultation — секция text-only) | Не используется |
| `7b256690...jpg` | (резерв) | Возможно banner или background |
| `bc799da9...jpg` | DMK Banner | Skin texture — full-bleed dark |
| `743b92b8...jpg` | (резерв) | Lifestyle |
| `DDB8B89D...jpg` | (нужно проверить) | — |

---

## ПРИОРИТЕТ РЕАЛИЗАЦИИ (уточнённый)

| # | Блок | Сложность | Приоритет |
|---|------|-----------|-----------|
| 1 | Nav (split 3-col) | Medium | P0 |
| 2 | Hero (photo + centered text + CTA br) | Low | P0 |
| 3 | Services Grid (4 cards, text below) | Low | P0 |
| 4 | DMK Banner (full-width dark) | Low | P0 |
| 5 | Treatment Menu (tabs + list + detail) | **High** | P1 |
| 6 | Enzyme Therapy (split layout) | Low | P1 |
| 7 | Skin Consultation (text-only) | Low | P1 |
| 8 | Process Steps | Low | P1 |
| 9 | Testimonials (carousel) | Medium | P2 |
| 10 | Booking CTA | Low | P2 |
| 11 | Footer | Low | P2 |
| 12 | Mobile responsive | Medium | P1 |
| 13 | Scroll animations | Low | P3 |
