# Founders Section Specification

## Overview
Add a dedicated section to showcase the two founders of Purix: Bruce and Jeff.

## Requirements

### Information Needed

#### For Each Founder:
1. **Basic Information**
   - Full name
   - Title/Role (e.g., Co-founder & CEO, Co-founder & CTO)
   - Professional headshot photo (high-quality, consistent style)

2. **Professional Background**
   - Years of experience
   - Areas of expertise
   - Previous companies/roles (2-3 key positions)
   - Educational background (degrees, institutions)
   - Notable achievements or recognitions

3. **Personal Touch**
   - Brief personal story or motivation for founding Purix
   - Connection to education/parenting (since both are fathers)
   - Vision for Wonderix and educational gaming

4. **Social/Professional Links** (optional)
   - LinkedIn profile
   - Twitter/X handle
   - Personal website/blog
   - Email (if appropriate)

### Design Requirements

1. **Layout Options**
   - Side-by-side cards (desktop)
   - Stacked cards (mobile)
   - Include photo, name, title, bio
   - Consistent styling with existing site design

2. **Placement Options**
   - Option A: New dedicated section on homepage (after Features or HowItWorks)
   - Option B: Enhanced About page with detailed founder profiles
   - Option C: Both - brief section on homepage, detailed on About page

3. **Visual Elements**
   - Professional headshots (circular or rounded square)
   - Subtle animation on scroll/hover
   - Consistent with purple/blue gradient theme
   - Mobile-responsive design

### Content Guidelines

1. **Tone**
   - Professional yet approachable
   - Emphasize expertise and parental perspective
   - Focus on mission to revolutionize educational gaming

2. **Length**
   - Homepage: 50-75 words per founder
   - About page: 150-200 words per founder

3. **Key Messages**
   - Technical expertise combined with parental insight
   - Commitment to making learning fun and accessible
   - Vision for AI-powered education tools

## Resources Required

### Images
- [ ] Bruce's professional headshot (min 500x500px, .jpg/.png)
- [ ] Jeff's professional headshot (min 500x500px, .jpg/.png)

### Content
- [ ] Bruce's bio (short and long versions)
- [ ] Jeff's bio (short and long versions)
- [ ] Founders' story (how they met, why they started Purix)
- [ ] Company mission statement from founders' perspective

### Technical Assets
- [ ] Social media links for each founder
- [ ] Professional titles/roles
- [ ] Any relevant logos (previous companies, universities)

## Implementation Notes

### File Updates Required
1. **New Component**: `src/components/Founders.jsx`
2. **Update About Page**: `src/pages/About.jsx` (enhance existing content)
3. **Translations**: Update `en-US.json` and `zh-TW.json`
4. **Images**: Add to `public/images/founders/`
5. **Tests**: Add component tests

### Existing Information (from CLAUDE.md)
- Bruce: AI applications expert (10+ years)
- Jeff: Experienced product engineer
- Both are technical founders and fathers
- Backed by educator consultants

## Questions to Answer

1. **Specific Titles**: What are Bruce and Jeff's exact titles?
2. **Photo Style**: Formal headshots or more casual/approachable?
3. **Homepage Inclusion**: Should founders appear on homepage or just About page?
4. **Order**: Who should appear first? Alphabetical, by role, or other?
5. **Additional Team**: Should we mention educator consultants or other team members?
6. **Contact Info**: Should individual contact information be displayed?

## Success Criteria

- [ ] Founders section builds trust and credibility
- [ ] Personal connection with target audience (teachers/parents)
- [ ] Mobile-responsive and accessible
- [ ] Consistent with brand identity
- [ ] SEO-optimized with structured data for founders
- [ ] Loads quickly with optimized images

## Timeline Estimate

- Content gathering: 1-2 days
- Design mockups: 1 day
- Implementation: 1-2 days
- Testing & refinement: 1 day

**Total: 4-6 days**