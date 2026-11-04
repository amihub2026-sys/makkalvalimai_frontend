// MAIN NAVIGATION
export const NAV = [
    {
        path: '/',
        section: 'home',
        name: {
            ta: 'முகப்பு',
            en: 'Home'
        }
    },
    {
        path: '/public-issues',
        section: 'issues',
        name: {
            ta: 'மக்கள் பிரச்சினைகள்',
            en: 'Public Issues'
        }
    },
    {
        path: '/report-problem',
        section: 'report',
        name: {
            ta: 'புகார் தெரிவிக்க',
            en: 'Report a Problem'
        }
    },
    {
        path: '/problems-solved',
        section: 'solved',
        name: {
            ta: 'தீர்வு கண்டவை',
            en: 'Problems Solved'
        }
    },
    {
        path: '/madurai-news',
        section: 'madurai',
        name: {
            ta: 'மதுரை செய்திகள்',
            en: 'Madurai News'
        }
    },
    {
        path: '/crime-news',
        section: 'crime',
        name: {
            ta: 'குற்றச் செய்திகள்',
            en: 'Crime News'
        }
    }
];
// MORE MENU
export const MORE = [
    {
        path: '/about-contact',
        section: 'about',
        name: {
            ta: 'எங்களைப் பற்றி / தொடர்பு',
            en: 'About & Contact'
        }
    },
    {
        path: '/health-awareness',
        section: 'health',
        name: {
            ta: 'ஆரோக்கியம் மற்றும் விழிப்புணர்வு',
            en: 'Health & Awareness'
        }
    },
    {
        path: '/dialogue-stories',
        section: 'stories',
        name: {
            ta: 'உரையாடல் கதைகள்',
            en: 'Dialogue Stories'
        }
    },
    {
        path: '/kids-corner',
        section: 'kids',
        name: {
            ta: 'சிறுவர் பகுதி',
            en: "Kids' Corner"
        }
    },
    {
        path: '/gallery',
        section: 'gallery',
        name: {
            ta: 'புகைப்படங்கள் / வீடியோக்கள்',
            en: 'Photo & Video Gallery'
        }
    }
];
// ALL EXISTING SECTIONS
export const SECTIONS = [
    ...NAV,
    ...MORE,
    {
        path: '/opinion-polls',
        section: 'polls',
        name: {
            ta: 'மக்கள் கருத்துக்கணிப்பு',
            en: 'Opinion Polls'
        }
    },
    {
        path: '/public-alerts',
        section: 'alerts',
        name: {
            ta: 'மதுரை பொது அறிவிப்புகள்',
            en: 'Madurai Public Alerts'
        }
    },
    {
        path: '/achievements',
        section: 'achievements',
        name: {
            ta: 'மதுரை சாதனையாளர்கள்',
            en: "Madurai People's Achievements"
        }
    }
];
// Existing public issue categories
export const ISSUE_CATEGORIES = [
    'Roads',
    'Water',
    'Drainage',
    'Garbage',
    'Streetlights',
    'Traffic',
    'Other'
];
// INDIA STANDARD TIME DATE
export function istDay(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date(date));
}
// UNIQUE ID GENERATOR
export function uid(prefix = 'item') {
    return `${prefix}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}
// NEWS URL SLUG GENERATOR
export function slugify(value) {
    return (value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\u0B80-\u0BFF]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 88) || uid('story'));
}
//# sourceMappingURL=models.js.map