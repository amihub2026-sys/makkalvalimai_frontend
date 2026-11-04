/** These are *API schema values*, not hardcoded published content.
 * The supplied unchanged backend validates News.kind against this exact enum.
 * It has no GET/PUT /admin/categories routes; category editing is unavailable.
 */
export const SERVER_ARTICLE_KINDS = [
    { slug: 'madurai', name: { ta: 'மதுரை செய்திகள்', en: 'Madurai News' }, active: true, showInMenu: true, sortOrder: 1, requiresVerifiedSource: false },
    { slug: 'crime', name: { ta: 'குற்றச் செய்திகள்', en: 'Crime News' }, active: true, showInMenu: true, sortOrder: 2, requiresVerifiedSource: true },
    { slug: 'health', name: { ta: 'சுகாதாரம்', en: 'Health & Awareness' }, active: true, showInMenu: true, sortOrder: 3, requiresVerifiedSource: false },
    { slug: 'story', name: { ta: 'உரையாடல் கதைகள்', en: 'Dialogue Stories' }, active: true, showInMenu: true, sortOrder: 4, requiresVerifiedSource: false },
    { slug: 'kids', name: { ta: 'சிறுவர் பகுதி', en: "Kids' Corner" }, active: true, showInMenu: true, sortOrder: 5, requiresVerifiedSource: false },
    { slug: 'gallery', name: { ta: 'புகைப்படங்கள் / வீடியோக்கள்', en: 'Gallery' }, active: true, showInMenu: true, sortOrder: 6, requiresVerifiedSource: false },
    { slug: 'achievement', name: { ta: 'சாதனையாளர்கள்', en: 'Achievements' }, active: true, showInMenu: true, sortOrder: 7, requiresVerifiedSource: false }
];
//# sourceMappingURL=article-categories.js.map