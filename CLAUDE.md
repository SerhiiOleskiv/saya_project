# CLAUDE.md — Saya Holistic Spa Website
> Читай это в начале каждой сессии. Здесь всё что нужно знать чтобы работать эффективно.

---

## Проект

Одностраничный сайт для **Saya Holistic Spa** — premium medical-grade спа, Нью-Йорк.  
Специализация: DMK Enzyme Therapy, Signature Face Massage, Celluma LED Therapy, Advanced Skin Analysis.

**Стек:** HTML5 + CSS3 + Vanilla JS. Без фреймворков, без зависимостей, без CDN.

---

## Структура файлов

```
saya_project/
├── index.html          ← единственная страница
├── css/style.css       ← все стили, mobile-first BEM
├── js/main.js          ← IIFE, Vanilla JS, без библиотек
├── img/                ← только оптимизированные JPG
│   ├── hero.jpg        ← 1920px, hero background
│   ├── logo.png        ← белый логотип на прозрачном фоне (1080×1080)
│   ├── card-dmk.jpg    ← 900px, DMK facial treatment
│   ├── card-massage.jpg← 900px, face massage gua sha
│   ├── card-restore.jpg← JR Release therapy
│   ├── card-scan.jpg   ← lifestyle / skin scan
│   ├── banner.jpg      ← DMK methodology banner BG (маленький, 49KB)
│   └── enzyme.jpg      ← 1200px, enzyme brush application
├── design_example/     ← референсные PNG (1.png–15.png) — не трогать
├── saya_website_layouts/ ← оригинальные фото клиента — не трогать
├── PRD.md              ← полный Product Requirements Document v2.0
├── RESEARCH.md         ← исследование best practices luxury spa сайтов
└── ARCHITECTURE.md     ← архитектурный план с wireframes
```

---

## Дизайн-система (НЕ менять без запроса пользователя)

### Цвета
```css
--c-brand:     #2c2c2c   /* основной тёмный, текст, фон footer */
--c-white:     #ffffff
--c-off-white: #f7f6f3   /* фон чередующихся секций */
--c-light:     #e5e3de   /* borders, разделители */
--c-mid:       #9b9890   /* вторичный текст, labels */
--c-body:      #5a5856   /* body paragraphs */
--c-accent:    #b8926a   /* терракотовый — ТОЛЬКО для underline активного таба */
```

### Шрифт
```css
--font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```
- **Единственный шрифт на всём сайте** — никаких Google Fonts, никаких serif
- Порядок важен: Helvetica Neue первым — у неё есть настоящий italic (иначе браузер синтезирует)
- Italic используется только в: hero headline, testimonials quote
- Явно прописан `font-family: var(--font)` на `.hero__headline` и `.testi-slide__quote`

### Логотип
- Файл: `img/logo.png` — белый на прозрачном фоне
- В nav: `filter: brightness(0) invert(1)` = белый; при `.nav--solid`: `filter: brightness(0)` = чёрный
- В footer: `filter: brightness(0) invert(1)` = белый (фон тёмный)
- Размеры адаптивные: 40px mobile → 48px → 56px → 72px desktop → 80px large

### Spacing
```css
--px: 24px   /* mobile padding */   → 40 → 48 → 60 → 80px
--py: 72px   /* section padding */  → 110 → 130px
--nav-h: 64px /* nav height */      → 72 → 80 → 96 → 104px
```

---

## Правила компонентов (строго соблюдать)

| Компонент | Правило |
|-----------|---------|
| Service cards | Без border, shadow, radius. Label ВСЕГДА виден под фото (не hover-overlay) |
| Tab underline | `#b8926a`, только под текстом (scaleX 0→1 через `::after`) |
| Treatment list | Bordered items с "›" справа; detail panel справа на desktop |
| DMK Banner | REMOVE/REBUILD/PROTECT/MAINTAIN — **inline bold в тексте**, НЕ отдельные блоки |
| Skin Consultation | Только текст, без фото (точно как design_example/5.png) |
| CTA "Book Now" | В detail panel — text link. Главная CTA внизу страницы — outline button |
| Nav | 3-column grid: `1fr auto 1fr`. Logo строго по центру. `align-items: stretch` на grid |

---

## Nav — важные детали

- `align-items: stretch` на `.nav` (не `center`) + `height: 100%` на `.nav__links` и `.nav__logo`
- Это гарантирует что ссылки и логотип всегда на одной горизонтали
- `.nav--solid` добавляется JS при `scrollY > 50` → белый фон + тёмные ссылки
- Mobile: только логотип + hamburger. Desktop (1024px+): полный nav

---

## JS — архитектура (js/main.js)

Один IIFE `(function() { 'use strict'; ... }())`, 8 модулей:
1. **Nav scroll** — `nav--solid` класс при скролле + sticky bar
2. **Mobile menu** — hamburger toggle, закрытие по ESC и по клику ссылки
3. **Hero entrance** — scale BG + fade-in headline + CTA при `window.load`
4. **Scroll reveals** — IntersectionObserver на `.reveal`, `unobserve` после показа
5. **Treatment tabs** — переключение панелей по `aria-controls`
6. **Treatment list → detail** — клик на `.t-list__btn` показывает нужный `.t-detail`
7. **Testimonials carousel** — autoplay 5s, pause через IntersectionObserver
8. **Smooth scroll** — offset на `--nav-h` для всех `a[href^="#"]`

Все scroll listeners: `{ passive: true }`.

---

## Изображения

- WebP не поддерживается `sips` на этой macOS → используем оптимизированные JPG
- Оригиналы в `saya_website_layouts/` (не трогать)
- Hero: `loading="eager"` + `<link rel="preload">` в head. Остальные: `loading="lazy" decoding="async"`
- Banner bg (`banner.jpg`) маленький (49KB, 564×751px) — нормально т.к. тёмный overlay 0.65 скрывает качество

---

## SEO (уже реализовано)

- Schema.org JSON-LD: `LocalBusiness` + `HealthAndBeautyBusiness` + 4 `Service` оффера
- Open Graph теги + Twitter Card
- `robots: index, follow`
- Heading hierarchy: один H1 → секционные H2 → H3 внутри секций
- Alt-тексты на всех изображениях

---

## Секции страницы (порядок)

1. **Nav** — fixed, 3-column, прозрачный → белый при скролле
2. **Hero** — full-viewport, hero.jpg, centered italic headline, CTA bottom-right
3. **Services** — 4 карточки (2×2 mobile, 4-col desktop)
4. **Banner** — DMK Methodology, dark overlay, centered text
5. **Enzyme** — "What Is Enzyme Therapy", split 42/60 на desktop
6. **Treatments** — 5 табов + list + detail panel
7. **Consultation** — только текст, 4 пункта с border-dividers
8. **Process** — 3 numbered steps (01/02/03)
9. **Testimonials** — carousel, 4 цитаты, auto 5s
10. **Booking CTA** — centered, outline button
11. **Footer** — 4 columns, dark #2c2c2c
12. **Sticky bar** — mobile only, появляется после hero

---

## Что не делать

- ❌ Не добавлять Google Fonts или любые внешние шрифты
- ❌ Не добавлять serif шрифты (даже для логотипа — теперь это PNG)
- ❌ Не использовать `!important` кроме существующих в `.nav__book`
- ❌ Не менять цвета бренда без запроса
- ❌ Не трогать папки `design_example/` и `saya_website_layouts/`
- ❌ Не добавлять JS-библиотеки или npm пакеты
- ❌ Не создавать отдельные страницы (это one-page сайт)

---

## Контекст пользователя

- Проект для показа руководителю (CEO pitch)
- Пользователь работает в VS Code на macOS
- GitHub деплой через VS Code Source Control (Publish Branch)
- После пуша включить GitHub Pages: Settings → Pages → Branch: main
