# SPRINT 02 --- Home Page Complete Redesign & Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` controls the one-run build. Home shows up to six projects as a preview with View All; it does **not** paginate the entire projects dataset. There is no existing app. Use this file only for unresolved Home design details.

## 1. Sprint Goal

إعادة تصميم وتنفيذ صفحة **Home** الخاصة بـ **SAINTRA** بشكل كامل لتكون
الواجهة الرئيسية الحديثة للبورتفوليو وتعكس هوية الشركة كشركة برمجيات
وحلول رقمية.

النتيجة المطلوبة:

-   Modern.
-   Professional.
-   Software-focused.
-   Visually engaging without exaggeration.
-   Clear and easy to navigate.
-   Data-driven.
-   Responsive.
-   Accessible.
-   Performant.
-   Consistent with Sprint 01 Foundation.
-   Ready for English/Arabic and LTR/RTL integration without duplicating
    the page.

المبدأ الأساسي:

> Home يجب أن تعطي انطباعًا قويًا وحديثًا عن SAINTRA، لكن المحتوى وسهولة
> الاستخدام والأداء تبقى أهم من كمية المؤثرات.

------------------------------------------------------------------------

## 2. Approved Home Structure

الترتيب النهائي المعتمد:

1.  Navbar / Home Integration.
2.  Hero.
3.  About Preview.
4.  Services Preview.
5.  Projects Preview.
6.  Why Choose Us.
7.  Closing Contact CTA.
8.  Footer.

لا يتم إضافة Section رئيسي جديد أو حذف Section معتمد دون Proposal
وموافقة المستخدم.

------------------------------------------------------------------------

# 3. Navbar / Home Integration

Navbar يبقى Shared Component ولا يتم إنشاء Navbar خاص بالـHome.

يسمح Sprint 02 فقط بالتعديلات اللازمة لدمجه بصريًا مع Hero.

يمكن عند أعلى Home استخدام معالجة مثل:

-   Transparent.
-   Semi-transparent.
-   Glass-like.

وعند Scroll يمكن الانتقال إلى حالة أكثر وضوحًا إذا كان ذلك مناسبًا
للتصميم.

المتطلبات:

-   Navbar يبقى مقروءًا فوق Hero.
-   لا يوجد flicker أو layout shift مزعج.
-   لا يختفي المحتوى خلفه بشكل خاطئ.
-   يعمل بالKeyboard.
-   Motion خفيف ويحترم reduced motion.
-   لا يتم تنفيذ Global Navbar redesign الخاص بـSprint 09 هنا.
-   أي تعديل Shared يؤثر على الصفحات الأخرى يجب شرحه في Proposal قبل
    التنفيذ.

------------------------------------------------------------------------

# 4. Hero --- Purpose

Hero هو أقوى نقطة بصرية في Home.

يجب أن يوضح بسرعة:

-   هوية SAINTRA.
-   طبيعتها كشركة Software / Digital Solutions.
-   القيمة العامة التي تقدمها.
-   الطريق الأساسي للتواصل.
-   الطريق الأساسي لاستكشاف المشاريع.

------------------------------------------------------------------------

# 5. Hero --- Approved Content

## English Heading

**We build software that moves ideas forward.**

## English Supporting Copy

**SAINTRA creates thoughtful digital solutions designed to solve real
problems and help businesses grow.**

## Primary CTA

**Contact us**

Route:

`/contact`

## Secondary CTA

**View projects**

Route:

`/projects`

المحتوى العربي النهائي يجب أن يحافظ على نفس المعنى بصورة طبيعية وغير
حرفية عند تنفيذ الترجمة.

لا يتم اختراع claims أو أرقام أو جوائز أو عملاء غير معتمدين.

------------------------------------------------------------------------

# 6. Hero --- Visual Direction

الاتجاه البصري المعتمد:

**Software Interface Composition + Network Connections + Subtle
Depth/Motion**

بدل صورة Stock أو 3D object لا يحمل معنى، يتم إنشاء Visual تقني يوحي
بالبرمجيات والأنظمة والمنتجات الرقمية.

يمكن أن يتضمن بشكل انتقائي:

-   Abstract software/interface layers.
-   Technical panels.
-   Network nodes and connections.
-   System-inspired geometry.
-   SVG elements.
-   CSS layers.
-   Subtle perspective/depth.
-   Lightweight pointer response.
-   Technical lines/grid.

الـVisual يجب أن يكون تجريديًا بما يكفي حتى لا يحصر SAINTRA بنوع منتج أو
خدمة واحدة.

------------------------------------------------------------------------

# 7. Hero --- 3D & Motion

لا يوجد Requirement لاستخدام Three.js أو WebGL.

الأولوية:

1.  CSS.
2.  SVG.
3.  Layered elements.
4.  Gradients.
5.  Perspective/transforms.
6.  Lightweight interaction.

يمكن استخدام:

-   Controlled entrance.
-   Slow ambient motion.
-   Subtle depth.
-   Gentle connection/node movement.
-   Small pointer response على الأجهزة المناسبة.

يمنع:

-   Excessive particles.
-   Strong parallax.
-   Fast continuous rotation.
-   Aggressive mouse-follow.
-   Motion يعيق قراءة النص.
-   Heavy dependency بدون موافقة.

أي مكتبة 3D/Animation جديدة تحتاج Proposal يوضح القيمة والأثر على الأداء
والحجم والموبايل وReduced Motion والFallback.

------------------------------------------------------------------------

# 8. Hero --- Responsive Behavior

على Mobile:

-   النص والـCTA لهما الأولوية.
-   Technical visual يبسط عند الحاجة.
-   لا يوجد horizontal overflow.
-   لا يدفع الـVisual المحتوى الأساسي بعيدًا.
-   لا يعتمد الاستخدام على Pointer/Hover.
-   يمكن تقليل أو تعطيل effects الثقيلة.
-   يجب أن يبقى Hero واضحًا حتى بدون Motion.

------------------------------------------------------------------------

# 9. About Preview --- Purpose

وظيفة القسم هي الإجابة بسرعة:

-   من هي SAINTRA؟
-   ما طبيعة الشركة بشكل عام؟

هذا القسم **ليس** قائمة خدمات، وليس نسخة مصغرة كاملة من About Page.

------------------------------------------------------------------------

# 10. About Preview --- Approved Content Direction

## English Heading

**Building digital solutions around real needs.**

## Arabic Heading

**نبني حلولًا رقمية انطلاقًا من احتياجات حقيقية.**

## English Description

**SAINTRA designs and develops thoughtful digital products, turning
ideas and real-world needs into practical software solutions.**

## Arabic Description

**تصمم SAINTRA وتطوّر منتجات رقمية مدروسة، وتحول الأفكار والاحتياجات
الحقيقية إلى حلول برمجية عملية.**

## Action

English:

**About us**

Arabic:

**من نحن**

Route:

`/about`

------------------------------------------------------------------------

# 11. About Preview --- Visual & Behavior

القسم يجب أن يكون أبسط وأهدأ من Hero.

يمكن استخدام:

-   Abstract technical visual.
-   Grid.
-   Lines.
-   Nodes.
-   Layers.
-   Visual details من نفس لغة الموقع.

لكن بدون أسماء خدمات مثل:

`Web / Mobile / AI / UI/UX`

لأن ذلك قد يوحي بأن الشركة محصورة بهذه المجالات.

لا يحتوي القسم على:

-   Statistics.
-   Service list.
-   Stock team/programmer image.
-   Full company story.
-   Unsupported achievements.
-   Heavy 3D.

Motion:

-   Subtle text reveal.
-   Light visual reveal/movement.
-   No exaggerated animation.

------------------------------------------------------------------------

# 12. Services Preview --- Purpose

إعطاء الزائر Preview سريع عن خدمات SAINTRA مع إمكانية:

-   استعراض الخدمات من Home.
-   فتح تفاصيل أي Service.
-   الانتقال إلى صفحة جميع الخدمات.

Home لا يعرض Catalogue الخدمات كاملًا.

------------------------------------------------------------------------

# 13. Services Preview --- Content

عنوان مقترح:

## English

**What we can help you build**

## Arabic

**ما الذي يمكننا مساعدتك في بنائه؟**

يمكن إضافة Supporting sentence قصيرة عند الحاجة.

أسماء الخدمات نفسها لا يتم Hardcode داخل Home، بل تأتي من Shared
Services Data.

------------------------------------------------------------------------

# 14. Services Preview --- Service Card

كل Card تحتوي بشكل مختصر على:

-   Professional service icon.
-   Service name.
-   Short description.
-   Clear interactive indication.

**الـCard كاملة Clickable** وتفتح:

`/services/:id`

لا يعتمد الدخول على سهم صغير فقط.

التفاصيل الكاملة تبقى في Service Details.

------------------------------------------------------------------------

# 15. Services Preview --- Visible Cards & Carousel

على Desktop/Large screens:

**3 Service Cards ظاهرة بنفس الوقت.**

إذا كان عدد الخدمات أكبر من 3، يتم استخدام Carousel.

Responsive target:

-   Large Desktop → 3 visible.
-   Desktop/Laptop → 3 visible.
-   Tablet → 2 visible.
-   Mobile → 1 visible.

المتطلبات:

-   Previous / Next.
-   كل خطوة تحرك Card واحدة.
-   No infinite wrap.
-   No autoplay.
-   Previous غير متاح عند البداية.
-   Next غير متاح عند النهاية.
-   Controls لا تظهر إذا لم تكن مطلوبة.
-   Resize لا يترك index غير صالح.
-   Touch behavior عملي.
-   Keyboard interaction مدعوم.
-   RTL/LTR يؤخذان بالحسبان، بما في ذلك معنى واتجاه Navigation controls.

------------------------------------------------------------------------

# 16. Services Preview --- Hover & Icon Motion

عند Hover/Focus يمكن:

-   رفع Card بشكل خفيف جدًا.
-   إضافة subtle depth أو border/shadow feedback.
-   تحريك الـIcon بطريقة صغيرة ومدروسة.
-   تحريك interaction indicator/small arrow بشكل بسيط.

الـIcon motion يفضل أن يكون مرتبطًا بطبيعة الأيقونة إذا أمكن بدل استخدام
دوران موحد وعشوائي لكل Icons.

لا نريد:

-   Strong 3D rotation.
-   Large movement.
-   Excessive shadows.
-   Hover-only essential information.

على Mobile تبقى Card كاملة قابلة للضغط بدون الحاجة إلى Hover.

------------------------------------------------------------------------

# 17. Services Preview --- View All

يوجد Action واضح دائمًا:

## English

**View All Services**

## Arabic

**عرض جميع الخدمات**

Route:

`/services`

Carousel هو Preview فقط ولا يلغي صفحة Services الكاملة.

------------------------------------------------------------------------

# 18. Services Preview --- Edge States

يجب دعم:

-   Zero services.
-   One service.
-   Fewer than current visible capacity.
-   More than current visible capacity.

إذا لم توجد Services:

-   لا يتم إنشاء Cards وهمية.
-   لا تظهر Carousel controls غير صالحة.
-   يظهر Empty State مناسب إذا كان وجود القسم ما زال منطقيًا، أو يتم
    التعامل معه وفق Proposal المعتمد دون كسر Layout.

------------------------------------------------------------------------

# 19. Projects Preview --- Purpose

عرض حد أقصى ستة مشاريع على Home بصورة مختصرة، مع فتح التفاصيل أو
الانتقال إلى Projects Page لرؤية جميع المشاريع.

------------------------------------------------------------------------

# 20. Projects Preview --- Card Content

كل Project Card تحتوي على:

-   Project image.
-   Project name.
-   Project type.
-   Very short description.
-   Clear interactive indication.

Project status/state لا يعرض.

**الـCard كاملة Clickable** وتفتح:

`/projects/:id`

يجب أن تكون Cards:

-   Equal in visual hierarchy.
-   Compact/moderate in size.
-   غير ضخمة.
-   قابلة للاستخدام بالKeyboard وTouch.

------------------------------------------------------------------------

# 21. Projects Preview --- Approved Layout

على الشاشات الواسعة:

**3 Project Cards متساوية بجانب بعضها.**

لا يوجد Featured Project أكبر من الآخرين.

على الشاشات الضيقة:

-   تصبح Cards واحدة بكل Row عند الحاجة.
-   لا يتم ضغط 3 Cards ضمن عرض ضيق.

لكن Responsive layout لا يغير عدد العناصر المنطقي في صفحة الـPagination.

------------------------------------------------------------------------

# 22. Projects Preview --- Six-Item Limit

Home تعرض حتى ستة مشاريع فقط من بيانات المشاريع المحلية. يجوز ترتيبها
بحسب حقل ترتيب معتمد، من دون اختلاق مشاريع أو إخفاء جميع المشاريع عن
صفحة `/projects`. على الشاشات الواسعة يمكن توزيع الستة على صفّين من
ثلاث بطاقات؛ وعلى الجوال تتراص البطاقات. لا توجد Pagination داخل Home.
زر View All Projects يفتح فهرس `/projects` الكامل.

------------------------------------------------------------------------

# 23. Projects Preview --- Hover Interaction

التأثير المعتمد يكون restrained.

يمكن الجمع بصورة خفيفة بين:

-   Small image zoom داخل حدود الصورة.
-   Very small card elevation.
-   Soft shadow/depth change.
-   Small movement للinteraction indicator.

لا نريد:

-   Large scale.
-   Strong tilt.
-   Heavy 3D.
-   Content يظهر فقط على Hover.

Keyboard Focus يجب أن يعطي Feedback مناسبًا، وMobile لا يعتمد على Hover.

------------------------------------------------------------------------

# 24. Projects Preview --- Zero Projects

إذا لم توجد Projects:

-   لا تعرض fake projects.
-   لا تعرض broken cards.
-   لا تعرض Pagination.
-   يظهر Empty State مرتب.

مثال English:

**No projects to show yet.**

مثال Arabic:

**لا توجد مشاريع لعرضها حاليًا.**

يمكن تحسين الصياغة لاحقًا مع الحفاظ على المعنى.

------------------------------------------------------------------------

# 25. Projects Preview --- View All

يوجد زر واضح:

## English

**View All Projects**

## Arabic

**عرض جميع المشاريع**

Route:

`/projects`

يبقى الزر موجودًا أيضًا عندما لا توجد مشاريع حاليًا، لأن `/projects` هي
الصفحة الرسمية لاستكشاف المشاريع وحالتها.

------------------------------------------------------------------------

# 26. Why Choose Us --- Purpose

القسم يجيب:

**لماذا يعمل العميل مع SAINTRA؟**

لكن من خلال طريقة التفكير والعمل، وليس عبر claims تسويقية غير مثبتة.

لا يكرر Services ولا Statistics.

------------------------------------------------------------------------

# 27. Why Choose Us --- Heading

## English

**Why work with SAINTRA?**

## Arabic

**لماذا تعمل مع SAINTRA؟**

Supporting idea:

### English

**We focus on understanding the problem, building the right solution,
and creating software made to last.**

### Arabic

**نركز على فهم المشكلة، وبناء الحل المناسب، وتطوير برمجيات مصممة
لتدوم.**

------------------------------------------------------------------------

# 28. Why Choose Us --- Four Principles

يعرض القسم 4 مبادئ أساسية:

## 01 --- Understand before building

**نفهم قبل أن نبدأ بالبناء**

الفكرة:

فهم المشكلة والاحتياج الحقيقي قبل اتخاذ قرارات التصميم والتطوير.

## 02 --- Thoughtful solutions

**حلول مدروسة**

الفكرة:

عدم إضافة Features أو تعقيد بلا سبب؛ كل قرار يجب أن يخدم المنتج
والمستخدم.

## 03 --- Built with quality in mind

**الجودة جزء من عملية البناء**

الفكرة:

الاهتمام بتجربة الاستخدام وجودة التنفيذ والResponsive Design وقابلية
تطوير الحل لاحقًا.

## 04 --- From idea to product

**من الفكرة إلى المنتج**

الفكرة:

التعامل مع المشروع كمنتج متكامل من فهم الفكرة وتجربة المستخدم إلى
التنفيذ البرمجي.

الصياغة النصية النهائية يمكن تنقيحها أثناء Content Review، لكن لا يتم
تغيير المعنى دون موافقة.

------------------------------------------------------------------------

# 29. Why Choose Us --- Visual Direction

لا نريد تكرار Service/Project Cards.

يفضل Visual treatment مختلف مثل:

-   Numbered principles `01–04`.
-   Structured rows.
-   2×2 composition on suitable screens.
-   Dividers/lines.
-   Typography-driven layout.

على Mobile:

-   يمكن ترتيب المبادئ واحدة تحت الأخرى.

يمكن عند Hover/Focus:

-   تحريك الرقم قليلًا.
-   امتداد line/border.
-   تغير background/depth خفيف.
-   حركة نص صغيرة جدًا.

عند دخول القسم يمكن استخدام subtle stagger.

لا يتم تحويله إلى Animation showcase.

------------------------------------------------------------------------

# 30. Closing Contact CTA --- Purpose

هذا آخر Section قبل Footer.

بعد أن يعرف الزائر:

-   من هي SAINTRA.
-   ماذا تقدم.
-   بعض مشاريعها.
-   كيف تفكر وتعمل.

يتم إعطاؤه خطوة واضحة للتواصل.

------------------------------------------------------------------------

# 31. Closing Contact CTA --- Content

## Preferred English Heading

**Have an idea? Let's build something meaningful.**

## Preferred Arabic Heading

**لديك فكرة؟ لنحوّلها إلى شيء حقيقي.**

## English Supporting Copy

**Tell us about your idea, project, or challenge, and let's explore how
we can help.**

## Arabic Supporting Copy

**أخبرنا عن فكرتك أو مشروعك أو التحدي الذي تواجهه، ولنكتشف كيف يمكننا
مساعدتك.**

## CTA

English:

**Contact us**

Arabic:

**تواصل معنا**

Route:

`/contact`

------------------------------------------------------------------------

# 32. Closing CTA --- Visual Direction

القسم يجب أن يكون Focused وبسيطًا.

يحتوي فقط على:

-   Heading.
-   Short supporting copy.
-   One primary CTA.

لا يحتوي:

-   Contact form.
-   Phone.
-   Email.
-   Social links.
-   Services list.
-   Multiple competing buttons.

يمكن استخدام Visual callback للـHero، مثل:

-   Technical lines.
-   Small network elements.
-   Grid.
-   Few nodes.
-   Subtle background depth.

الهدف ربط بداية الصفحة بنهايتها بصريًا، لكن بدون إنشاء Hero ثاني.

------------------------------------------------------------------------

# 33. Closing CTA --- Motion

يمكن استخدام:

-   Heading reveal.
-   Button micro-interaction.
-   Very subtle ambient technical background movement.

لا يستخدم:

-   Heavy 3D.
-   Strong continuous animation.
-   Effects تنافس Hero.

------------------------------------------------------------------------

# 34. Home Motion Hierarchy

Motion intensity يجب ألا تكون متساوية في كل الأقسام.

الترتيب المقترح:

**Hero** - أغنى Motion بالصفحة، لكن restrained.

**About Preview** - هادئ جدًا.

**Services Preview** - Carousel + Card/Icon micro-interactions.

**Projects Preview** - restrained image/card hover; no Home pagination.

**Why Choose Us** - Typography/line/number interaction + subtle stagger.

**Closing CTA** - Simple reveal + ambient callback.

هذا التنوع يمنع الصفحة من أن تبدو كأن كل Section يكرر نفس Animation.

------------------------------------------------------------------------

# 35. Reduced Motion

عند:

`prefers-reduced-motion`

يجب:

-   إيقاف أو تبسيط decorative motion.
-   عدم إخفاء المحتوى بانتظار Animation.
-   Hero يبقى كاملًا ومفهومًا.
-   Services Carousel يبقى Functional.
-   Projects Pagination تبقى Functional.
-   Hover/Focus feedback يبقى مفهومًا بدون حركة قوية.
-   لا يتم إجبار المستخدم على smooth/continuous animation.

------------------------------------------------------------------------

# 36. Responsive Requirements

يتم التحقق على الأقل حول:

-   1440px.
-   1024px.
-   768px.
-   390px.
-   320px.

راجع:

-   Navbar integration.
-   Hero typography.
-   Hero CTAs.
-   Hero technical visual.
-   About Preview.
-   Services visible-card capacity.
-   Services carousel controls.
-   Projects 3-item pagination behavior.
-   Project card stacking.
-   Why Choose Us layout.
-   Closing CTA.
-   Text wrapping.
-   Touch targets.
-   Motion.
-   No horizontal overflow.

هذه نقاط تحقق وليست Designs منفصلة جامدة.

------------------------------------------------------------------------

# 37. English / Arabic Readiness

Home يجب أن تكون مصممة لتعمل باللغتين.

يجب مراعاة:

-   English → LTR.
-   Arabic → RTL.
-   اختلاف طول النص.
-   Navigation arrows/direction.
-   Card layout.
-   Pagination.
-   Carousel behavior.
-   Icons التي تحمل معنى اتجاهي.
-   Alignment.
-   Text wrapping.

لا يتم إنشاء نسختين منفصلتين من Home.

تنفيذ Global Internationalization النهائي يبقى ضمن Sprint 09، لكن Sprint
02 لا يبني Layout يمنع الترجمة لاحقًا.

------------------------------------------------------------------------

# 38. Data-Driven Architecture

المصدر الحالي للبيانات يمكن أن يبقى `src/data` حسب المشروع الحالي.

لكن Home يجب أن تعتمد على Shared Data Shape وليس على كون المصدر Local
دائمًا.

لا يتم:

-   Hardcode services كنسخة منفصلة داخل Home.
-   Hardcode projects كنسخة منفصلة.
-   افتراض أن عدد الخدمات أو المشاريع ثابت.
-   إنشاء duplicate relationship/data source بلا حاجة.

قرار API / Backend / CMS / Dashboard / Data Provider النهائي خارج Scope
هذا Sprint.

------------------------------------------------------------------------

# 39. Missing Data & Edge States

يجب التحقق من:

## Services

-   0.  
-   1.  
-   2.  
-   3.  
-   More than 3.

## Projects

-   0.  
-   1.  
-   2.  
-   3.  
-   4+.
-   Multiple pagination pages.

## Images

-   Valid image.
-   Missing image.
-   Approved temporary placeholder where applicable.

## Text

-   Short title.
-   Longer translated title.
-   Short description.
-   Longer translated description.

لا يتم اختراع Records فقط لملء Layout.

------------------------------------------------------------------------

# 40. Assets

لا توجد Final Branding Assets معتمدة بعد.

لذلك:

-   استخدم replaceable assets/placeholders.
-   لا تخترع صور مشاريع حقيقية.
-   لا تعتبر placeholder Production asset.
-   لا تضف external image/font/icon source دون Proposal إذا كان يحتاج
    Dependency أو مصدر خارجي.
-   حافظ على استبدال الأصول لاحقًا بسهولة.

------------------------------------------------------------------------

# 41. Performance

Home تحتوي أكبر مستوى Motion/Visual complexity في Portfolio، لذلك الأداء
Requirement أساسي.

يجب:

-   Prefer transform/opacity.
-   تجنب expensive repeated scroll calculations.
-   Cleanup observers/listeners.
-   تجنب layout shifts.
-   Optimize image loading.
-   عدم تحميل heavy 3D library بلا حاجة.
-   عدم تشغيل decorative animation غير ضرورية على Mobile.
-   عدم استخدام autoplay media.
-   عدم التضحية بالاستجابة من أجل effect بصري.

أي Effect يسبب jank واضح يجب تبسيطه أو إزالته.

------------------------------------------------------------------------

# 42. Accessibility

يجب التحقق من:

-   One clear H1.
-   Logical heading hierarchy.
-   Semantic sections.
-   Accessible links/buttons.
-   Full-card links implemented semantically.
-   Visible focus states.
-   Keyboard access.
-   Touch-friendly controls.
-   Accessible carousel controls.
-   Accessible pagination.
-   Disabled states understandable.
-   Meaningful alt text.
-   Decorative visual handled appropriately.
-   Contrast.
-   Reduced-motion support.
-   No essential hover-only information.

------------------------------------------------------------------------

# 43. Shared Components

قبل إنشاء Component جديد، يجب مراجعة الموجود مثل:

-   Navbar.
-   Footer.
-   SectionHeading.
-   ServiceCard.
-   ProjectCard.
-   AppIcon.
-   BrandMark.
-   Pagination.
-   Shared buttons.

Reuse عندما يكون منطقيًا.

إذا احتاج Shared Component تعديلًا، يجب توضيح:

-   لماذا.
-   ما الصفحات المتأثرة.
-   ما الملفات المتأثرة.
-   هل التغيير متوافق مع باقي Sprints.

ثم انتظار الموافقة إذا لم يكن ضمن Proposal المعتمد.

------------------------------------------------------------------------

# 44. Out of Scope

Sprint 02 لا يشمل:

-   Full About Page redesign.
-   About Statistics implementation.
-   Full Services Page implementation.
-   Service Details redesign.
-   Full Projects Page redesign.
-   Project Details redesign/gallery.
-   Contact Page redesign.
-   Final global Navbar/Footer redesign.
-   Full Portfolio i18n implementation.
-   Global Back-to-Top.
-   Dashboard.
-   Backend.
-   Database.
-   API integration.
-   CMS.
-   Final logo.
-   Final brand identity.
-   Final project imagery.
-   Heavy unapproved animation/3D dependency.
-   New Home sections غير معتمدة.

------------------------------------------------------------------------

# 45. Mandatory Pre-Implementation Inspection

قبل أي Source Code modification، يجب فحص المشروع الحالي لأن Home قد
تحتوي Implementation أو Partial Sprint Work سابق.

يجب تحديد:

-   Current Home structure.
-   Existing Hero.
-   Existing About Preview.
-   Existing Services Preview.
-   Existing Projects Preview.
-   Existing Why Choose Us.
-   Existing Closing CTA.
-   Navbar/Home behavior.
-   Existing motion.
-   Existing CSS/SVG/3D work.
-   Current shared components.
-   Current data.
-   Current routes.
-   Current dependencies.
-   Current Git status.
-   Modified/untracked files المتعلقة بالSprint.

لا يتم افتراض أن التنفيذ يبدأ تقنيًا من الصفر.

------------------------------------------------------------------------

# 46. Mandatory Proposal Before Editing

قبل التعديل، قدم:

## Current State

وصف دقيق لما هو موجود.

## Proposed Changes

لكل تغيير:

-   What.
-   Why.
-   Expected behavior.
-   Visual intent.
-   Responsive impact.
-   Accessibility impact.
-   Performance impact.
-   Shared impact.

## Exact File List

قسمها:

-   CREATE.
-   MODIFY.
-   DELETE.

ولكل ملف:

-   Full path.
-   Reason.
-   Expected impact.

لا يتم تعديل ملف غير معتمد دون Proposal جديد.

------------------------------------------------------------------------

# 47. Deletion / Replacement Rule

أي حذف أو استبدال يحتاج قبل التنفيذ:

-   Exact target.
-   Current location.
-   Current usage.
-   Why.
-   Replacement.
-   Impact.

ثم موافقة صريحة.

لا يتم الاحتفاظ بنسخ ضخمة من الكود القديم كComments؛ Git هو rollback
mechanism.

------------------------------------------------------------------------

# 48. Mandatory Workflow

Inspect\
→ Proposal\
→ User Approval\
→ Git Checkpoint\
→ Apply Approved Changes\
→ Validate\
→ User Visual Review\
→ Adjust / Accept / Roll Back\
→ Final Verification\
→ TEST02\
→ REPORT02\
→ Git Review\
→ User Approval\
→ Commit / Push

هذا Sprint file لا يعتبر موافقة تلقائية على تعديل Source Code.

------------------------------------------------------------------------

# 49. Visual Review Gate

قبل إغلاق Sprint، المستخدم يراجع Home فعليًا.

على الأقل:

-   1440. 
-   1024. 
-   768. 
-   390. 
-   320. 

راجع بصريًا:

-   Hero.
-   Motion intensity.
-   Technical visual.
-   Navbar integration.
-   About Preview.
-   Services Carousel.
-   Service hover/icon motion.
-   Projects Preview.
-   Pagination.
-   Project hover/image zoom.
-   Why Choose Us.
-   Closing CTA.
-   Overall visual rhythm.
-   English readiness.
-   Arabic/RTL readiness where available.
-   No horizontal overflow.

إذا كانت Motion/3D مبالغًا فيها، يتم تخفيفها.

------------------------------------------------------------------------

# 50. Functional Verification

اختبر فعليًا:

-   `/` loads.
-   Contact us → `/contact`.
-   View projects → `/projects`.
-   About us → `/about`.
-   Service Card full click → `/services/:id`.
-   Services Previous.
-   Services Next.
-   No infinite wrap.
-   Correct boundary states.
-   Correct responsive visible cards.
-   View All Services → `/services`.
-   Project Card full click → `/projects/:id`.
-   Projects pagination uses 3 items/page.
-   Pagination hidden for 0--3.
-   Pagination works for 4+.
-   Responsive project stacking does not alter logical page size.
-   View All Projects → `/projects`.
-   Zero-project state.
-   Closing Contact CTA → `/contact`.
-   Keyboard.
-   Focus.
-   Touch.
-   Reduced motion.
-   Data edge states.
-   No blocking console/runtime errors.
-   No horizontal overflow.

------------------------------------------------------------------------

# 51. Build Verification

شغّل فعليًا:

`npm run build`

وسجل النتيجة.

لا تدعي نجاح Build إذا لم يتم تشغيله.

إذا فشل:

-   حدد السبب.
-   ميز بين pre-existing failure وSprint regression.
-   لا توسع Scope دون موافقة.

------------------------------------------------------------------------

# 52. TEST02.md

بعد التنفيذ والاختبارات، أنشئ:

`documents/sprints/TEST02.md`

يوثق:

-   Environment.
-   Tested scope.
-   Build result.
-   Home route.
-   Hero.
-   Hero CTAs.
-   About navigation.
-   Services full-card navigation.
-   Services carousel.
-   Carousel boundaries.
-   Responsive service capacity.
-   Service hover/focus/icon interaction.
-   Projects navigation.
-   3-item pagination.
-   Pagination boundaries.
-   Responsive project stacking.
-   Zero-project state.
-   View All actions.
-   Why Choose Us smoke check.
-   Closing CTA.
-   Keyboard.
-   Focus.
-   Touch.
-   Reduced motion.
-   Responsive widths.
-   Edge states.
-   Console/runtime result.
-   PASS / FAIL / BLOCKED.
-   Known limitations.

لا يتم توثيق اختبار على أنه PASS إذا لم يتم تشغيله فعليًا.

------------------------------------------------------------------------

# 53. REPORT02.md

بعد التنفيذ والاختبار والVisual Approval، أنشئ:

`documents/sprints/REPORT02.md`

يوثق:

-   Sprint goal.
-   Initial state.
-   Approved proposal.
-   Files created/modified/deleted.
-   Hero implementation.
-   Technical visual decision.
-   Actual motion strategy.
-   About Preview.
-   Services Preview.
-   Carousel behavior.
-   Service hover/icon behavior.
-   Projects Preview.
-   Pagination behavior.
-   Project hover behavior.
-   Zero-project handling.
-   Why Choose Us.
-   Closing CTA.
-   Shared component changes.
-   Data changes.
-   Dependency changes.
-   Responsive result.
-   Accessibility result.
-   Reduced-motion result.
-   Performance considerations.
-   Build result.
-   Test result.
-   Visual Review result.
-   Known limitations.
-   Deferred work.
-   Final status.

REPORT02 يصف التنفيذ الفعلي، وليس الخطة فقط.

------------------------------------------------------------------------

# 54. Acceptance Criteria

Sprint 02 مقبول عندما:

-   Home تتبع الهيكل المعتمد.
-   Hero يعكس SAINTRA كشركة Software/Digital Solutions.
-   Hero copy المعتمد موجود.
-   Hero CTAs تعمل.
-   Hero يستخدم Software Interface Composition + Network direction.
-   Motion/3D restrained.
-   لا توجد heavy dependency غير معتمدة.
-   About Preview لا يعرض Services أو Statistics.
-   About content/action يعمل.
-   Services تستخدم Shared Data.
-   3 Service Cards ظاهرة على Desktop عند توفرها.
-   Carousel يعمل للخدمات الإضافية.
-   Carousel يتحرك Card واحدة.
-   No infinite wrap.
-   No autoplay.
-   Full Service Card clickable.
-   Service hover/focus polished.
-   Icon motion خفيف ومناسب.
-   View All Services يعمل.
-   Projects تستخدم Shared Data.
-   Projects تعرض 3 items per logical pagination page.
-   3 Cards متساوية على Desktop.
-   Responsive يمكن أن يعرض Card واحدة بكل Row دون تغيير page size.
-   Full Project Card clickable.
-   Hover يستخدم restrained image zoom/card depth.
-   Zero-project state موجود.
-   View All Projects يعمل حتى في zero state.
-   Why Choose Us يعرض 4 principles بدون claims غير مثبتة.
-   Closing CTA بسيط ويقود إلى Contact.
-   الصفحة لا تكرر Contact Page.
-   Motion hierarchy متوازن.
-   Reduced motion مدعوم.
-   Keyboard/Focus/Touch صالح.
-   Missing data لا يكسر الصفحة.
-   لا يوجد horizontal overflow.
-   الصفحة قابلة للتكيف مع English/Arabic.
-   لا يتم اختراع Final assets أو records.
-   Build تم تشغيله وتوثيقه.
-   الاختبارات الفعلية موثقة.
-   Visual Review تمت.
-   المستخدم وافق على النتيجة.

------------------------------------------------------------------------

# 55. Definition of Done

Sprint 02 يعتبر DONE فقط عندما:

1.  تم فحص الحالة الحالية.
2.  تم فحص partial/uncommitted work.
3.  تم تقديم Proposal.
4.  تم تقديم Exact File List.
5.  وافق المستخدم.
6.  تم إنشاء rollback/checkpoint مناسب.
7.  لم يتم تعديل ملفات خارج الموافقة.
8.  لم يتم حذف شيء دون موافقة.
9.  Hero مكتمل.
10. About Preview مكتمل.
11. Services Preview مكتمل.
12. Services Carousel مكتمل.
13. Service hover/icon behavior مكتمل.
14. Projects Preview مكتمل.
15. 3-project pagination مكتملة.
16. Zero-project state مكتمل.
17. Why Choose Us مكتمل.
18. Closing CTA مكتمل.
19. Responsive verification مكتمل.
20. Accessibility verification مكتمل.
21. Keyboard/Focus/Touch verification مكتمل.
22. Reduced-motion verification مكتمل.
23. Edge-state verification مكتمل.
24. Performance checks مكتملة.
25. لا يوجد blocking regression معروف.
26. `npm run build` تم تشغيله وتوثيقه.
27. المستخدم أجرى Visual Review.
28. Adjustments المعتمدة أعيد اختبارها.
29. TEST02 يعكس الاختبارات الفعلية.
30. REPORT02 يعكس التنفيذ الفعلي.
31. Git diff تمت مراجعته.
32. لا يوجد Future Sprint work مختلط دون موافقة.
33. المستخدم وافق قبل Commit/Push.
34. Commit/Push تم فقط إذا طلب/وافق المستخدم عليه.

إذا بقي Requirement إلزامي غير مكتمل، يبقى Sprint:

**IN PROGRESS**

------------------------------------------------------------------------

# 56. Final Design Principle

Home لا يجب أن تكون مجرد مجموعة Cards ولا معرض Animations.

التجربة النهائية المطلوبة:

**Hero قوي تقنيًا → About هادئ وواضح → Services تفاعلية → Projects عملية
وقابلة للاستكشاف → Why Choose Us يوضح طريقة التفكير → Closing CTA بسيط
وقوي.**

الهدف النهائي:

**Modern + Technical + Clear + Responsive + Accessible + Performant +
Restrained Motion.**
