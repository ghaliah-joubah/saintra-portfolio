[2026/09/23 4:45 PM] Ghaliah Joubah: 1-Home Hero + Navbar Unified Background & Scroll Behavior
تعديل الـNavbar والـHero في صفحة **Home فقط** بحيث تكون النتيجة مطابقة للمبدأ البصري والحركي الظاهر في الصور المرجعية الثانية والثالثة.
**Initial State — Top of Home Page**
عند فتح الصفحة والمستخدم موجود في أعلى الصفحة (`scrollY = 0`)، يجب ألا تظهر الـNavbar كشريط أبيض منفصل عن الـHero.
يجب أن تبدو الـNavbar والـHero كأنهما **جزء من مشهد بصري واحد Continuous Visual Section**.
خلفية الـHero ذات التدرج الأبيض/السماوي والعنصر التقني الموجود في الجهة اليمنى يجب أن تمتد بصريًا خلف منطقة الـNavbar أيضًا.
لا تضف فاصلًا واضحًا أو Background أبيض مستقل بين Navbar وHero في هذه الحالة.
يمكن استخدام طبقة شفافة أو Glass خفيفة جدًا خلف محتوى الـNavbar فقط إذا كانت ضرورية للقراءة، لكن يجب أن تبقى خلفية الـHero ظاهرة من خلالها.
**Hero Technical Visual**
الحفاظ على نفس فكرة الشكل التقني الموجود في الصورة المرجعية: شبكة/مجسم هندسي تقني مكوّن من Nodes وخطوط مترابطة، موجود بشكل أساسي في الجهة اليمنى من الـHero.
يجب أن يكون الشكل جزءًا من خلفية/تكوين الـHero وليس Card أو صورة مستطيلة منفصلة.
يكون مدموجًا مع الـwhite-to-light-blue gradient بشكل ناعم.
الحفاظ على مظهر Software / Technology احترافي، Minimal وهادئ.
عدم استبداله بمربع Gradient أو Placeholder أو Illustration مختلفة جذريًا.
**Motion**
الشكل التقني يجب ألا يكون Static.
طبّق عليه حركة بطيئة وناعمة مشابهة للسلوك الموجود في المرجع: حركة subtle للـnetwork/nodes/lines أو للمجسم ككل تعطي إحساسًا خفيفًا بالـ3D/depth.
يمكن استخدام subtle translate / rotate / parallax / perspective movement حسب التقنية الأنسب، لكن بدون حركة قوية أو مشتتة.
أثناء الـscroll يمكن أن يتغير موضع الشكل بشكل خفيف لإعطاء إحساس بالـdepth/parallax، كما يظهر من اختلاف موضعه بين الصور المرجعية.
الحركة يجب أن تبقى Smooth، Performance-friendly، ولا تؤثر على النص أو تسبب Layout Shift.
دعم `prefers-reduced-motion`.
**Navbar Scroll State**
عند تجاوز المستخدم Scroll Threshold مناسب:
تتحول الـNavbar تدريجيًا إلى خلفية `white / near-white`.
يظهر تحتها `subtle box-shadow` و/أو border خفيف.
تصبح Navbar واضحة كطبقة مستقلة فوق الصفحة.
الانتقال بين الحالتين يجب أن يكون Smooth وليس تغييرًا مفاجئًا.
حافظ على Navbar sticky/fixed حسب البنية الحالية للمشروع.
السلوك المطلوب:


```
TOP OF HOME

┌──────────────────────────────────────────────┐
│ Navbar                                       │
│        نفس خلفية ومشهد الـHero               │
│                                              │
│ Hero text             Animated Tech Visual  │
│                       Nodes + Lines + Depth  │
│                                              │
└──────────────────────────────────────────────┘

                   ↓ Scroll

┌──────────────────────────────────────────────┐
│ White Navbar + subtle shadow                 │
└──────────────────────────────────────────────┘
│                                              │
│ Hero / remaining page content                │
│                                              │
```


[2026/09/23 4:45 PM] Ghaliah Joubah: **Important:** لا تجعل الـNavbar والـHero مجرد عنصرين لهما لون خلفية متشابه. المطلوب أن يبدوا في أعلى Home وكأنهما **مشهد واحد متصل فعليًا بصريًا**، مثل الصورة المرجعية الثانية، ثم تتحول الـNavbar أثناء الـscroll إلى الشريط الأبيض المستقل الظاهر في الصورة المرجعية الثالثة.
**Other Pages**
هذا السلوك خاص بصفحة Home فقط.
في:
About
Services
Service Details
Projects
Project Details
Contact
تبقى الـNavbar من البداية بخلفية بيضاء/فاتحة مع Shadow خفيف، ولا تستخدم Home Hero background.
**Do not change the Hero copy/layout as part of this requirement unless necessary for implementing the shared background and motion.**
Preserve the current technical network visual and its existing animation from the approved Home Hero implementation. The requested change is primarily to integrate the Navbar into that same Hero visual/background at the top of the page and switch the Navbar to white with shadow after scrolling. Do not replace the approved network visual with a new illustration.
2-بدي هامش بأعلى كل صفحة بين اول قسم بالصفحة والنافبار بس شي مناسب ما يكون الهامش كبير ولا يكون صغير...
3-حذف كلمة المشاريع من بداية صفحة المشاريع..
4-بصفحة about us باول قسم لازم ضيف موقع الشركة بالتناظر مع سنة التاسيس عنفس السطر واحد عاليمين وواحد عاليسار...
5-اول قسم بصفحة تفاصيل الخدمة بدي كل هدون **Web Engineering**
Web Development & Cloud Platforms
**Get in Touchsvg**
نظرة عامة / Overview
**We build enterprise web platforms leveraging cutting-edge stacks (Vue.js, Node.js, TypeScript). Our approach emphasizes clean architecture, robust security, SEO optimization, and seamless horizontal scaling.مع الزر ومع صورة صغيرة للخدمة كلون بنفس القسم ما كل واحد بزاوية يبينو تابعين لنفس القسم يكون الن نفس الخلفية...**
6-قسم معرض الصور بصفحة تفاصيل المشروع السلايد
[2026/09/23 4:49 PM] Ghaliah Joubah: Project Gallery — Stripe-Style Expanding Carousel
Implement the Project Gallery interaction based specifically on the carousel behavior in Stripe's **“What's happening — See the latest from Stripe”** section:
`https://stripe.com/en-ch`
**Do not implement a standard equal-width carousel.**
The required behavior is an **interactive expanding/focused carousel** where one slide is active and significantly wider than the neighboring slides.
Desktop behavior
Display several project images horizontally in the same carousel viewport.
Only **one image is the active/focused slide** at a time.
The active image occupies the largest width.
The next inactive images remain visible but use a noticeably narrower/collapsed width.
The images must remain next to each other as one continuous horizontal composition, not separate carousel pages.
Example initial state:


```
┌───────────────────────────────────────────────────────┐
│                                                      │
│   [      IMAGE 1 ACTIVE      ][ IMG 2 ][ IMG 3 ]    │
│                                                      │
└───────────────────────────────────────────────────────┘
```


When the user clicks **Image 2**, do not simply replace Image 1.
Instead:
Image 1 smoothly collapses/reduces its width.
The horizontal track/layout shifts toward the left.
Image 2 smoothly expands and takes the main active width.
Image 3 remains visible in a narrower state.


```
Before:

[         IMAGE 1         ][ IMG 2 ][ IMG 3 ]
            ACTIVE

                    ↓ click IMAGE 2

After:

[ IMG 1 ][         IMAGE 2         ][ IMG 3 ]
                        ACTIVE
```


When the user clicks Image 3:


```
[ IMG 1 ][         IMAGE 2         ][ IMG 3 ]

                        ↓ click IMAGE 3

track shifts left →

[ IMG 2 ][         IMAGE 3         ][ IMG 4 ]
                        ACTIVE
```


The important effect is that **the newly selected image grows into the main viewing area while the previously active image collapses and is pushed toward/out of the left side of the carousel**.
Do not implement the transition as:
fade between images;
instant image replacement;
equal-width cards sliding one full page;
standard pagination carousel;
one large image with thumbnails underneath.
It must visually feel like the **available horizontal space is being transferred from the previous active slide to the newly selected slide**.
Clickable slides
The user must be able to click any visible collapsed/inactive image to activate it.
The clicked image should:
expand smoothly;
become the main slide;
move into the appropriate focused position;
cause surrounding slides to collapse/reposition smoothly.
Use a coordinated animation for:
`width` / `flex-basis`;
track translation when necessary;
neighboring slide positioning.
The transition should feel like **one continuous layout transformation**, not multiple disconnected animations.
Navigation arrows
Add **Previous / Next arrow controls above the images**, aligned with the gallery header/upper area.
Clicking Next should activate the next image using exactly the same expanding/collapsing transition as clicking the image itself.
Clicking Previous should activate the previous image using the reverse transition.
Do not create a second animation system for the arrows. Both interactions must update the same `activeIndex` and use the same transition logic.
Images only
Unlike Stripe's original content cards, SAINTRA's version is strictly a **Project Image Gallery**.
Each slide contains only the project image.
Do not add:
title below image;
description;
category;
Read More;
text overlay unless technically necessary.
Image presentation
All slides should maintain a consistent gallery height.
Use appropriate `object-fit` behavior so project screenshots are not distorted.
Apply a clean professional border radius.
Do not crop important project UI unnecessarily.
Mobile
Preserve the same active-slide concept on smaller screens, but adapt dimensions appropriately.
Support:
touch/swipe;
previous/next controls;
clicking/tapping partially visible neighboring slides.
Do not force the desktop widths onto mobile.
Edge cases
[2026/09/23 4:49 PM] Ghaliah Joubah: `0 images` → do not render Project Gallery.
`1 image` → show one image without unnecessary carousel navigation.
`2+ images` → enable expanding carousel behavior.
Animation requirement
Use a smooth premium transition approximately in the `400–700ms` range with an appropriate easing curve. Avoid abrupt width changes and layout jumps.
Respect `prefers-reduced-motion`.
Critical acceptance criterion
The implementation is **not accepted as a normal slider merely because images move horizontally**.
The defining interaction is:
**clicking a narrower neighboring image causes that image to expand into the primary slide while the previously active image contracts and the entire horizontal composition reflows/shifts to make room — matching the interaction concept of Stripe's “What's happening” carousel.**
Preserve SAINTRA's own colors, spacing, images and visual identity; reproduce the **interaction behavior**, not Stripe's branding or content.
Do not implement a standard equal-width carousel. The active slide must expand by taking horizontal space from the neighboring slides, while the previous active slide contracts and the track repositions smoothly.