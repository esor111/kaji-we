# Language Toggle Implementation Guide

## ✅ What's Been Implemented

### 1. Language System (Context + Hook)
- **LanguageContext** (`src/contexts/LanguageContext.jsx`) - Manages language state globally
- **useTranslation hook** (`src/hooks/useTranslation.js`) - Easy access to translations
- **translations.json** (`src/data/translations.json`) - All text content in both languages
- Persists language choice in localStorage
- Sets HTML lang attribute automatically

### 2. Language Toggle Button
- **LanguageToggle component** (`src/components/common/LanguageToggle/`)
- Clean "ने / EN" toggle in header
- Smooth transitions
- Works on both light and dark backgrounds

### 3. Updated Components
✅ Hero section - fully translated
✅ Services section - fully translated  
✅ HonestService section - fully translated
✅ Header - includes language toggle button

### 4. New Team Page
✅ `/team` route created
✅ Responsive team member grid
✅ Bilingual content
✅ Professional layout

## 🎯 How It Works

### Using Translations in Components

```jsx
import { useTranslation } from '../hooks/useTranslation';

function MyComponent() {
  const { t, language } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{language === 'ne' ? 'नेपाली' : 'English'}</p>
    </div>
  );
}
```

### Adding New Translations

Edit `src/data/translations.json`:

```json
{
  "ne": {
    "newSection": {
      "title": "नयाँ शीर्षक",
      "description": "विवरण यहाँ"
    }
  },
  "en": {
    "newSection": {
      "title": "New Title",
      "description": "Description here"
    }
  }
}
```

## 📋 What Still Needs Translation

### Components to Update:
- [ ] Process section
- [ ] Reviews section
- [ ] About section
- [ ] Offers section
- [ ] Trusted section
- [ ] FAQ section (already has Nepali in JSON, just needs hook integration)
- [ ] Blog section
- [ ] Contact section
- [ ] Footer
- [ ] MobileBottomBar

### Data Files to Translate:
- [ ] `services.json` - Add English descriptions
- [ ] `blog.json` - Add English content
- [ ] `process.json` - Add English steps
- [ ] `locations.json` - Add English names

## 🚀 Quick Implementation for Remaining Sections

### Example: Update Process Section

1. Add translations to `translations.json`:
```json
{
  "ne": {
    "process": {
      "label": "हाम्रो प्रक्रिया",
      "title": "कसरी काम गर्छौं"
    }
  },
  "en": {
    "process": {
      "label": "Our Process",
      "title": "How We Work"
    }
  }
}
```

2. Update component:
```jsx
import { useTranslation } from '../../../hooks/useTranslation';

export default function Process() {
  const { t } = useTranslation();
  
  return (
    <section>
      <h2>{t('process.title')}</h2>
      {/* rest of component */}
    </section>
  );
}
```

## 🎨 Styling Notes

The language toggle automatically adapts to:
- Transparent header (white text)
- Scrolled header (dark text)
- Mobile responsive

## 📱 Mobile Considerations

- Language toggle is visible on mobile in header
- Consider adding to mobile menu as well if needed
- Text wrapping handled for both languages

## 🔧 Technical Details

### Language Detection Priority:
1. localStorage (user's previous choice)
2. Default: Nepali ('ne')

### State Management:
- React Context API (no external dependencies)
- Lightweight and performant
- No prop drilling needed

### Performance:
- Translations loaded once at app start
- No API calls or dynamic imports
- Instant language switching

## 📊 Critical Pages Status

Based on your needs, here's what's essential:

### ✅ Complete:
- Home page (Hero, Services, HonestService translated)
- Team page (fully bilingual)
- Language toggle system

### 🔄 Partially Complete:
- Home page (other sections need translation)
- Header (translated, but nav items could be dynamic)

### ❌ Not Started:
- Individual service pages (if needed)
- Blog post pages (if needed)
- Legal pages (privacy, terms)

## 💡 Recommendations

### For MVP (Do These First):
1. ✅ Language toggle - DONE
2. ✅ Hero section - DONE
3. ✅ Services section - DONE
4. ✅ Team page - DONE
5. [ ] Contact section - Add translations
6. [ ] FAQ section - Connect existing Nepali data
7. [ ] Footer - Add translations

### Can Wait:
- Blog translations (unless you're actively blogging)
- Individual service pages (can use same template)
- About section details
- Process section (visual, less text-heavy)

## 🎯 Next Steps

1. **Test the current implementation:**
   - Visit http://localhost:5173
   - Click language toggle in header
   - Check Hero, Services, HonestService sections
   - Visit /team page

2. **Add remaining translations:**
   - Start with Contact section (high priority)
   - Then FAQ (data already exists)
   - Then Footer

3. **Update data files:**
   - Add English versions to JSON files
   - Or keep mixed language (common in Nepal)

## 🌐 Language Strategy

### Option 1: Full Translation (Recommended for Professional Sites)
- Every piece of text in both languages
- Better for international audience
- More work upfront

### Option 2: Strategic Translation (Faster MVP)
- Key sections translated (Hero, Services, Contact)
- Technical terms stay in English
- Common in Nepal market
- Less work, still professional

### Option 3: Hybrid (What You Have Now)
- Mix of Nepali and English naturally
- Reflects how people actually speak
- Authentic to Nepal market
- Easiest to maintain

## 📞 Support

The system is designed to be simple:
- Add text to `translations.json`
- Use `t('key.path')` in components
- Language persists automatically
- No complex setup needed

---

**Bottom Line:** Language toggle is live and working! Hero, Services, HonestService, and Team page are fully bilingual. Add translations for remaining sections as needed based on priority.
