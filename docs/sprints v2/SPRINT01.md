# Sprint 01 --- Flexible Portfolio Foundation & Temporary Design System

> **Current-scope note:** `../SPRINT_PLAN.md` overrides legacy baseline/workflow here. There is no existing app: scaffold Vue/Vite in the `documents/` directory when implementation is authorized. Establish local-data and AR/EN foundations now. Read this long file only for a specific unresolved foundation detail.

**Status:** Completed --- Implementation, final validation, documentation,
and user visual approval complete; final Git commit/push pending\
**Phase:** Public Portfolio\
**Sprint Type:** Foundation / Audit / Shared System\
**Source of Truth:** `documents/SRS.md` + `documents/RULES.md`

------------------------------------------------------------------------

## 1. Sprint Goal

مراجعة البورتفوليو الحالي وتجهيز Foundation تقني وبصري مشترك ومرن قبل
البدء بإعادة تصميم الصفحات واحدة تلو الأخرى.

هذا السبرنت **لا ينشئ هوية بصرية نهائية للشركة** لأن Logo وBrand
Identity وColors والصور النهائية غير معتمدة حاليًا.

يجب أن يسمح الـFoundation بتغيير:

-   Logo
-   Colors
-   Fonts عند الحاجة
-   Project Images
-   Service Images
-   Other Brand Assets

مستقبلًا دون الحاجة إلى إعادة بناء الصفحات أو المكونات من الصفر.

------------------------------------------------------------------------

## 2. Current Context & Constraints

يجب التعامل مع المشروع على الأساس التالي:

-   المشروع موجود مسبقًا وليس Greenfield.
-   توجد صفحات ومكونات وStyles وAnimations حالية ويجب فحصها قبل اقتراح
    أي تغيير.
-   الأولوية الحالية هي استكمال **Public Portfolio**.
-   الـAdmin Dashboard والBackend والتكامل الكامل موجودة ضمن نطاق
    الـSRS، لكن تنفيذها مؤجل إلى مرحلة لاحقة.
-   البيانات الحالية تأتي من ملفات Data محلية وهي مؤقتة وغير نهائية.
-   مصدر البيانات وطريقة إدارتها مستقبلًا قرار معماري مؤجل؛ قد يتم اعتماد
    Dashboard يدير مصدر البيانات مباشرة، أو API، أو Backend/Database، أو
    CMS/Content Source، أو Managed Service، أو Serverless/BaaS، أو أي
    Approach آخر يتم اعتماده لاحقًا.
-   لا يوجد Logo نهائي معتمد للشركة.
-   لا توجد Brand Identity نهائية معتمدة.
-   لا توجد Color Palette نهائية معتمدة.
-   لا توجد صور نهائية حقيقية لجميع المشاريع.
-   أي Branding أو Assets أو Colors مستخدمة حاليًا تعتبر مؤقتة وقابلة
    للاستبدال.

> **قاعدة أساسية:** تغيير الهوية البصرية مستقبلًا يجب ألا يتطلب إعادة
> بناء الصفحات أو المكونات.

------------------------------------------------------------------------

## 3. Foundation vs Page Redesign

Sprint 01 يجب أن ينشئ **Foundation حقيقيًا وقابلًا للاختبار داخل المشروع،
مع تطبيق الحد الأدنى اللازم للتحقق منه**.

يسمح هذا السبرنت بتعديلات Foundation مشتركة ومحدودة، مثل:

-   تنظيم Design Tokens.
-   تعريف Temporary Colors مركزيًا.
-   تنظيم Typography foundation.
-   تنظيم shared spacing/radius/shadows.
-   تأسيس shared button/motion/icon rules عند الحاجة.
-   تعديلات تقنية محدودة ضرورية للتحقق من أن الـFoundation يعمل.

قد تظهر نتيجة بصرية بسيطة على الموقع نتيجة تغيير Foundation مشترك، مثل
Font أو Color Token أو Hover/Focus مشترك، وهذا مقبول ضمن حدود الـSprint.

لكن **لا يجوز أن يتحول Sprint 01 إلى إعادة تصميم أي صفحة كاملة**.

لا يشمل هذا السبرنت تغيير:

-   Layout كامل لصفحة.
-   ترتيب Sections.
-   Hero النهائي.
-   Cards النهائية الخاصة بصفحة.
-   3D scene نهائية.
-   Page-specific animations النهائية.

يتم اعتماد وتنفيذ التصميم الكامل لكل صفحة في الـSprint المخصص لها.

------------------------------------------------------------------------

## 4. Existing Project Audit

قبل أي Source Code modification، يجب فحص الوضع الحالي للمشروع، بما يشمل
على الأقل:

-   Application structure
-   Vue pages
-   Shared components
-   Router
-   Global CSS
-   Page-specific CSS
-   Current typography
-   Current colors
-   Buttons
-   Cards
-   Icons
-   Social media icons
-   Existing animations
-   Existing 3D-like effects
-   Responsive rules
-   Assets
-   Navbar
-   Footer
-   Local Data files
-   Reusable components

يجب تصنيف العناصر المهمة إلى:

-   Keep
-   Reuse
-   Improve
-   Refactor
-   Replace
-   Remove

أي عنصر مصنف **Replace** أو **Remove** لا يجوز تغييره أو حذفه مباشرة.

يجب شرح السبب والحصول على موافقة المستخدم حسب `documents/RULES.md`.

------------------------------------------------------------------------

## 5. Pre-Implementation File List --- Mandatory

قبل تنفيذ أي تعديل، يجب على Codex عرض قائمة دقيقة بالملفات المقترح
التعامل معها.

يجب تقسيم القائمة إلى:

-   `CREATE`
-   `MODIFY`
-   `DELETE`

ولكل ملف يجب توضيح:

-   المسار الكامل للملف.
-   نوع العملية.
-   ما الذي سيتغير بشكل مختصر.
-   لماذا هذا التغيير مطلوب.
-   تأثير التغيير المتوقع.
-   هل يؤثر على أكثر من صفحة أو Component.

مثال:

``` text
MODIFY
src/assets/main.css
Reason: Centralize temporary design tokens and shared typography variables.
Impact: Shared visual foundation only; no page layout redesign.

CREATE
src/assets/icons/...
Reason: Add approved reusable local SVG icons.

DELETE
None.
```

### قاعدة إلزامية

> لا يجوز لـCodex تعديل أو إنشاء أو حذف أي ملف غير موجود في قائمة
> الملفات التي وافق عليها المستخدم.

إذا اكتشف أثناء التنفيذ أنه يحتاج إلى ملف إضافي:

1.  يتوقف عن هذا الجزء من التنفيذ.
2.  يذكر الملف الجديد.
3.  يشرح سبب الحاجة إليه.
4.  يوضح التأثير.
5.  ينتظر موافقة المستخدم.
6.  لا يعدل الملف حتى تتم الموافقة.

------------------------------------------------------------------------

## 6. Flexible Design Tokens

تنظيم نظام مركزي للقيم البصرية المشتركة بدل نشر قيم ثابتة عشوائيًا داخل
الصفحات.

يشمل عند الحاجة:

-   Primary color
-   Secondary color
-   Accent color
-   Background colors
-   Surface colors
-   Text colors
-   Muted text colors
-   Border colors
-   Success / Error colors
-   Border radius
-   Shadows
-   Container widths
-   Section spacing
-   Component spacing
-   Z-index rules

الألوان المستخدمة حاليًا هي **Temporary Palette** وليست Brand Colors
نهائية.

يجب أن يكون تغييرها مستقبلًا ممكنًا من مكان مركزي قدر الإمكان، مثل CSS
Custom Properties / Design Tokens، بدل تعديل كل صفحة يدويًا.

------------------------------------------------------------------------

## 7. Typography Foundation

مراجعة الخط الحالي وتقييم مدى ملاءمته لبورتفوليو Software Company يدعم:

-   English
-   Arabic
-   LTR
-   RTL
-   Headings
-   Body text
-   Navigation
-   Buttons
-   Responsive typography

إذا كان الخط الحالي مناسبًا يمكن الإبقاء عليه.

إذا كان غير مناسب، يجب على Codex **اقتراح** بديل قبل تغييره، مع توضيح:

-   Current font.
-   Proposed font.
-   Why the change is needed.
-   Arabic support.
-   English support.
-   Readability.
-   Performance impact.
-   Local Font vs Remote Font.
-   How easily it can be replaced later.

يفضل استخدام Local Font داخل المشروع عندما يكون ذلك مناسبًا من ناحية
الترخيص والحجم والأداء.

لا يجوز تنزيل أو إضافة Font جديد قبل موافقة المستخدم.

------------------------------------------------------------------------

## 8. Typography Scale

تحديد hierarchy مشتركة وقابلة لإعادة الاستخدام، مثل:

-   Display / Hero
-   H1
-   H2
-   H3
-   H4
-   Body Large
-   Body
-   Small
-   Caption
-   Eyebrow / Label
-   Button text

يجب أن تكون Responsive ولا تعتمد على أحجام تسبب مشاكل على الشاشات
الصغيرة.

------------------------------------------------------------------------

## 9. Spacing & Layout Foundation

تنظيم قواعد مشتركة لـ:

-   Page containers
-   Section spacing
-   Content gaps
-   Grid gaps
-   Card spacing
-   Mobile spacing
-   Maximum content width

الهدف هو منع كل صفحة من استخدام Spacing System مختلف.

------------------------------------------------------------------------

## 10. Buttons & Interactive Elements

مراجعة نظام الأزرار الحالي واقتراح/تنظيم الأنماط المشتركة، مثل:

-   Primary Button
-   Secondary Button
-   Ghost Button
-   Text Link
-   Icon Button

مع مراعاة:

-   Default
-   Hover
-   Focus
-   Active
-   Disabled
-   Keyboard interaction
-   RTL / LTR
-   Mobile touch size

لا يعني ذلك إعادة تصميم جميع أزرار جميع الصفحات في Sprint 01.

يتم تأسيس النظام المشترك بالحد الأدنى اللازم، بينما التطبيق الكامل على
كل صفحة يتم ضمن Sprint الصفحة الخاصة بها.

------------------------------------------------------------------------

## 11. Icons Strategy

مراجعة طريقة استخدام الأيقونات الحالية، وخاصة Social Media Icons
والأيقونات المبنية على Unicode أو أحرف نصية.

يجب اقتراح استراتيجية Icons موحدة واحترافية.

الأولوية لحل خفيف وقابل لإعادة الاستخدام، مثل:

-   Local SVG icons
-   Reusable icon components
-   Approved lightweight icon solution

يجب تجنب إضافة مكتبة كبيرة إذا لم تكن هناك حاجة حقيقية لها.

إذا احتاج الحل إلى Dependency جديدة، يجب شرح:

-   لماذا نحتاجها.
-   البدائل.
-   تأثيرها على المشروع.
-   حجمها/تكلفتها التقريبية إن أمكن.

ثم انتظار موافقة المستخدم قبل إضافتها.

يجب أن تراعي الاستراتيجية مستقبلًا أيقونات:

-   Social Media
-   Navigation
-   Menu
-   Close
-   Language
-   Arrows
-   External links
-   Gallery controls
-   Other shared controls

------------------------------------------------------------------------

## 12. Motion & Animation Foundation

وضع **Global Motion System** مشترك يناسب Portfolio لشركة برمجيات حديثة مثل
SAINTRA، بحيث يعطي الموقع إحساسًا تقنيًا، حديثًا، واحترافيًا دون أن يصبح
مزدحمًا أو مبالغًا بالحركة.

> **المبدأ الأساسي:** Motion يجب أن يخدم الفهم، الـfeedback، والـvisual
> polish. لا تتم إضافة Animation لمجرد أن العنصر قابل للتحريك.

الهدف ليس جعل كل Section أو Card يتحرك، بل إنشاء Rhythm بصري متوازن يجعل
الموقع حيًا دون تشتيت المستخدم عن المحتوى.

يمكن أن تشمل لغة الحركة المشتركة، عند وجود سبب واضح:

-   Subtle fade / reveal.
-   Small directional entrance.
-   Restrained scale transitions.
-   Button and link micro-interactions.
-   Card hover/focus feedback.
-   Icon micro-interactions.
-   Image interaction.
-   Section entrance عند الحاجة.
-   Light stagger لمجموعة عناصر مترابطة عندما يضيف وضوحًا.
-   Subtle depth / perspective effects.
-   Selective scroll-triggered motion.
-   Selective 3D-like visual depth.

لا يعني وجود هذه الأنواع أنه يجب استخدامها جميعًا أو استخدامها في كل صفحة.

### 12.1 Motion Character

يجب أن تكون شخصية الحركة العامة:

-   Modern.
-   Technical.
-   Clean.
-   Smooth.
-   Purposeful.
-   Restrained.
-   Consistent.

ويجب تجنب:

-   الحركة المستمرة بلا سبب.
-   Bounce أو Elastic effects مبالغ فيها.
-   دوران العناصر بشكل استعراضي.
-   Parallax قوي يشتت القراءة.
-   دخول كل عنصر في الصفحة بحركة مختلفة.
-   Stagger طويل يؤخر ظهور المحتوى.
-   مؤثرات Hover ضرورية لفهم المحتوى.
-   Animations طويلة تجعل الموقع يبدو بطيئًا.
-   تكرار الحركة عند كل Scroll صغير بطريقة مزعجة.
-   مؤثرات تجعل Portfolio يبدو كـDemo للمؤثرات بدل موقع شركة برمجيات.

### 12.2 Motion Hierarchy

الحركة يجب أن تستخدم حسب أهمية العنصر.

يمكن إعطاء اهتمام أكبر لعناصر مثل:

-   Hero visual.
-   Primary CTA feedback.
-   Important section reveals.
-   Interactive cards.
-   Gallery/slider transitions.
-   Navigation state changes.

أما العناصر الثانوية فيفضل أن تكون حركتها أخف أو بدون حركة.

ليس مطلوبًا أن يحتوي كل Section على Animation.

وجود أجزاء ثابتة وهادئة جزء مقصود من التوازن البصري.

### 12.3 Shared Motion Principles

يجب تأسيس مبادئ مشتركة لـ:

-   Duration ranges.
-   Easing.
-   Delay.
-   Motion intensity.
-   Entrance behavior.
-   Hover/focus behavior.
-   Exit behavior عند الحاجة.
-   Scroll-trigger behavior.
-   When animation should be used.
-   When animation should not be used.

لا يجب قفل كل Animation على milliseconds نهائية داخل Sprint 01.

الهدف هو إنشاء System متناسق يسمح لسبرنتات الصفحات باختيار الحركة الأنسب
ضمن نفس اللغة البصرية.

### 12.4 Scroll-Based Motion

يمكن استخدام Scroll-triggered reveals بشكل انتقائي لإضافة حياة للموقع.

لكن:

-   لا يجب إخفاء معظم الصفحة بانتظار Animation.
-   المحتوى الأساسي يجب أن يبقى قابلًا للوصول والفهم.
-   الحركة لا يجب أن تتكرر بصورة مزعجة عند النزول والصعود.
-   يجب تجنب إنشاء observers/listeners مكررة بلا حاجة.
-   يجب تنظيف listeners/observers حسب lifecycle عند الحاجة.
-   يجب مراعاة الأداء على Mobile.

قرار هل الحركة تعمل مرة واحدة أو تتكرر يعتمد على نوع العنصر وتجربة الصفحة،
ويتم تحديده في Sprint الصفحة عند الحاجة.

### 12.5 Micro-Interactions

Micro-interactions مسموحة ومفضلة عندما تعطي Feedback واضحًا.

أمثلة:

-   Button hover/focus/active feedback.
-   Card hover/focus feedback.
-   Icon response.
-   Link/action feedback.
-   Navigation state transition.

يجب أن تكون خفيفة، سريعة، ومفهومة.

أي Interaction يعتمد على Hover يجب أن يبقى مفهومًا وقابلًا للاستخدام على
Touch devices وKeyboard.

### 12.6 Accessibility & Reduced Motion

يجب دعم:

`prefers-reduced-motion`

عند تفضيل Reduced Motion:

-   يتم تعطيل أو تبسيط الحركة غير الضرورية.
-   لا يتم إخفاء محتوى أساسي بسبب تعطيل Animation.
-   لا تصبح Navigation أو Gallery أو Slider غير قابلة للاستخدام.
-   Count-up أو effects مشابهة يجب أن تملك behavior مناسبًا في Sprint
    الخاص بها.
-   Smooth scrolling أو transitions القوية يجب تخفيفها عند الحاجة.

الحركة لا يجوز أن تكون الطريقة الوحيدة لتوضيح State أو Interaction.

### 12.7 Mobile Motion

Desktop motion لا يجب نسخه حرفيًا إلى Mobile إذا كان ذلك يؤثر على:

-   Performance.
-   Readability.
-   Touch interaction.
-   Battery/device resources.
-   Layout stability.

يمكن تقليل أو تبسيط:

-   Depth.
-   Perspective.
-   Number of animated layers.
-   Scroll effects.
-   Decorative motion.

على الشاشات أو الأجهزة الأضعف عند الحاجة.

### 12.8 Performance Rules

يفضل استخدام خصائص مناسبة للأداء مثل:

-   `transform`
-   `opacity`

عندما تحقق نفس الهدف البصري.

يجب تجنب Animations تسبب Layout/Reflow مستمرًا دون حاجة.

لا يجوز إضافة Animation library ثقيلة فقط لتطبيق transitions بسيطة يمكن
تنفيذها بطريقة أخف.

أي Dependency للحركة تحتاج Proposal وموافقة مسبقة.

### 12.9 Page-Specific Motion

Sprint 01 يحدد **لغة الحركة المشتركة** فقط.

كل Page Sprint يقرر أين وكيف تطبق الحركة حسب محتوى الصفحة.

أمثلة:

-   Home يمكن أن يحتوي Visual Motion أغنى نسبيًا.
-   About يمكن أن يستخدم Section reveals وStatistics motion.
-   Services/Projects يمكن أن تستخدم Card/filter/pagination interactions.
-   Details pages يمكن أن تستخدم Gallery/media transitions.
-   Contact يفضل أن يبقى أكثر هدوءًا مع Form feedback واضح.

هذه أمثلة إرشادية وليست إلزامًا بتطبيق Animation في كل موضع.

### 12.10 قابلية المراجعة

قواعد Motion في Sprint 01 هي Foundation وليست قرارًا غير قابل للتغيير.

إذا ظهر أثناء Sprint صفحة لاحقة أن Animation مختلفًا أنسب:

-   يمكن اقتراح تغييره.
-   إذا كان التغيير Page-Specific، يطبق ضمن الصفحة بعد الموافقة.
-   إذا كان التغيير سيعدل Shared Motion System ويؤثر على صفحات أخرى، يجب
    شرح التأثير والحصول على موافقة قبل تعميمه.

------------------------------------------------------------------------

## 13. Selective 3D & Visual Depth Strategy

Sprint 01 لا ينفذ الـ3D Hero النهائي ولا يفرض 3D على الموقع بالكامل.

الهدف هو السماح باستخدام **Selective 3D / Visual Depth** عندما يضيف قيمة
حقيقية لهوية Portfolio شركة برمجيات، مع الحفاظ على الأداء والوضوح.

> **المبدأ الأساسي:** 3D عنصر اختياري وانتقائي، وليس Requirement لكل صفحة
> أو Section.

المناطق المرشحة يمكن أن تشمل:

-   Home Hero.
-   Decorative software/network visual.
-   Layered technical illustration.
-   Subtle perspective/depth around selected visuals.
-   Interactive visual element عندما يكون له سبب واضح.

لا يفضل استخدام 3D في:

-   كل Card.
-   كل Section.
-   Form controls.
-   Navigation الأساسية.
-   النصوص التي تحتاج قراءة مباشرة.
-   أماكن تجعل Interaction أقل وضوحًا.

### 13.1 Lightweight First

يجب البدء بالحلول الخفيفة أولًا، مثل:

-   CSS transforms / CSS 3D.
-   Perspective.
-   Layered elements.
-   SVG.
-   Gradients.
-   Pseudo-elements.
-   Lightweight pointer interaction.
-   Lightweight scroll interaction.

إذا كان يمكن تحقيق النتيجة المطلوبة بدون WebGL أو مكتبة ثقيلة، يفضل الحل
الأخف.

### 13.2 Heavy 3D Libraries

إذا رأى Codex أن مكتبة مثل Three.js أو أي WebGL/3D Dependency ضرورية، يجب
تقديم Proposal منفصل يشرح:

-   ما التأثير المطلوب بالضبط.
-   لماذا CSS/SVG أو حل أخف غير كافٍ.
-   الفائدة البصرية/التفاعلية.
-   البدائل.
-   Bundle impact.
-   Runtime/performance impact.
-   Mobile behavior.
-   Reduced-motion behavior.
-   Fallback behavior.
-   Maintenance cost.

لا يجوز إضافة مكتبة 3D دون موافقة صريحة.

### 13.3 3D Accessibility & Performance

أي 3D أو depth effect:

-   لا يجب أن يحمل محتوى أساسيًا لا يوجد بدونه.
-   يجب ألا يمنع القراءة أو Navigation.
-   يجب أن يملك fallback مناسبًا.
-   يجب أن يبقى مقبولًا عند Reduced Motion.
-   يجب أن يبسط أو يعطل على Mobile إذا كان ذلك أفضل للأداء.
-   لا يجب أن يسبب Horizontal overflow.
-   لا يجب أن يعتمد على Pointer فقط لفهم الصفحة.
-   يجب ألا يسبب Jank أو استهلاكًا غير مبرر.

### 13.4 Sprint Ownership

Sprint 01 يحدد الاستراتيجية فقط.

التنفيذ النهائي لأي 3D أو visual motion خاص بصفحة يتم داخل Sprint الصفحة
المعنية وبعد الموافقة.

التنفيذ النهائي للـHome Hero يتم في Sprint 02.

Sprint 10 يقوم لاحقًا بالمراجعة النهائية للأداء، Accessibility، Reduced
Motion، والـregressions المتعلقة بالحركة والـ3D، لكنه ليس المكان الذي يتم
فيه إدخال هذه المؤثرات لأول مرة.

------------------------------------------------------------------------

## 14. Assets Strategy

مراجعة وتنظيم طريقة التعامل مع Assets بما يسمح بالتغيير مستقبلًا.

يمكن اقتراح Structure مناسب مثل:

``` text
src/assets/
├── fonts/
├── icons/
├── images/
└── placeholders/
```

لكن يجب أولًا فحص Structure المشروع الحالي وعدم إنشاء مجلدات أو نقل ملفات
دون سبب وموافقة.

يجب أن تكون الأصول المؤقتة سهلة الاستبدال لاحقًا.

------------------------------------------------------------------------

## 15. Temporary Logo Strategy

لا يوجد Logo نهائي للشركة حاليًا.

لذلك:

-   لا يتم إنشاء Logo واعتباره رسميًا.
-   يمكن استخدام اسم الشركة أو Placeholder بسيط مؤقتًا.
-   يجب ألا تعتمد المكونات على أبعاد أو شكل Logo مؤقت بشكل يصعب تغييره.
-   يجب أن يكون استبدال Logo مستقبلًا بسيطًا قدر الإمكان.
-   Navbar وFooter والمكونات المشتركة يجب أن تكون قابلة لاستقبال Logo
    النهائي لاحقًا دون إعادة بناء.

------------------------------------------------------------------------

## 16. Images & Media Foundation

تحديد قواعد عامة للتعامل مع الصور والوسائط، مثل:

-   Responsive images
-   Aspect ratios
-   `object-fit`
-   Lazy loading
-   Missing image fallback
-   Temporary placeholders
-   Project images
-   Service images
-   Video/embed behavior

لا يتم إنشاء Project Gallery النهائية في Sprint 01.

ولا يتم اختراع صور مشاريع حقيقية أو اعتبار Placeholder صورة Production.

------------------------------------------------------------------------

## 17. Responsive Foundation

مراجعة Responsive implementation الحالي وتوحيد المبادئ المشتركة لـ:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

مع الانتباه إلى:

-   Containers
-   Grids
-   Typography
-   Spacing
-   Images
-   Touch targets
-   Navigation behavior
-   No horizontal overflow

لا يجب أن تبني كل صفحة Responsive System منفصلًا عن بقية الموقع.

------------------------------------------------------------------------

## 18. Shared Components Audit

مراجعة المكونات المشتركة الموجودة، ومنها حسب المشروع الحالي:

-   Navbar
-   Footer
-   SectionHeading
-   ProjectCard
-   ServiceCard
-   Pagination

وتحديد حالة كل مكون:

-   Reusable as-is
-   Reusable with improvement
-   Needs future refactor
-   Should be replaced
-   Missing shared primitive

لا يجوز تنفيذ Refactor شامل فقط بهدف "تنظيف الكود".

أي Refactor يجب أن يكون له سبب واضح يخدم الـFoundation أو السبرنتات
القادمة ويخضع لموافقة المستخدم.

------------------------------------------------------------------------

## 19. Data-Driven Architecture & Future Data Management Review

مراجعة ملفات Data الحالية وطريقة استهلاكها من المكونات.

المبدأ المطلوب هو **فصل الـUI عن المصدر الفيزيائي للبيانات وعن طريقة
إدارتها**.

``` text
Current:
Local Data Files → UI Components

Future — architecture to be decided later:
Data / Content Source
        ↓
Dashboard Direct Management / API / Backend / CMS / Managed Service / Other Approved Approach
        ↓
UI Components
```

لا يفترض Sprint 01 أن الانتقال المستقبلي يتطلب Backend + Database + API.

قد يتم لاحقًا اعتماد Dashboard يعدل/يدير مصدر البيانات بطريقة مناسبة دون
بناء Backend مخصص وقاعدة بيانات وAPI، إذا كان ذلك ممكنًا وآمنًا ومناسبًا
لبيئة النشر والمتطلبات.

وقد يتم بدلًا من ذلك اعتماد API أو Backend/Database أو CMS/Content Source
أو Serverless/BaaS أو Approach آخر.

**Sprint 01 لا يختار ولا يبني هذه الآلية.** هدفه فقط أن تبقى الواجهة
قابلة لتغيير مصدر البيانات وطريقة إدارته مستقبلًا دون إعادة بناء الصفحات
والمكونات.

يجب ألا تكون UI مرتبطة بالقيم الحالية أو بعدد العناصر الحالي.

يجب مراعاة:

-   تغير عدد المشاريع.
-   تغير عدد الخدمات.
-   تغير النصوص.
-   تغير الصور.
-   تغير العلاقات.
-   Optional fields.
-   Missing media.
-   Future multilingual dynamic content.

لا يتضمن Sprint 01 بناء Backend أو Database أو API وهمي أو Dashboard،
ولا اتخاذ قرار نهائي حول طريقة إدارة البيانات مستقبلًا.

------------------------------------------------------------------------

## 20. Accessibility Foundation

وضع القواعد المشتركة الأساسية من البداية، بما يشمل:

-   Semantic HTML
-   Keyboard navigation
-   Focus states
-   Color contrast
-   Accessible buttons and links
-   Icon labels
-   Image alt strategy
-   Reduced motion
-   Touch targets

Sprint 10 سيقوم بالمراجعة النهائية الشاملة، لكن Accessibility لا تؤجل
بالكامل حتى Sprint 10.

------------------------------------------------------------------------

## 21. Performance Foundation

وضع مبادئ أداء مشتركة، ومنها:

-   عدم إضافة Dependencies غير ضرورية.
-   عدم تحميل Assets كبيرة دون حاجة.
-   Lazy loading عند الحاجة.
-   استخدام `transform` و`opacity` قدر الإمكان في Animations.
-   Cleanup للـlisteners / observers عند الحاجة.
-   عدم تحميل YouTube/video embeds عند عدم وجود فيديو.
-   تجنب Layout Shifts قدر الإمكان.
-   عدم تحميل Assets غير مستخدمة.
-   الحفاظ على تجربة جيدة على Mobile.

------------------------------------------------------------------------

## 22. Design System Is Revisable

القرارات التي يتم اعتمادها في Sprint 01 تمثل **الأساس الحالي للمشروع
وليست قرارات أبدية أو غير قابلة للتغيير**.

يمكن في Sprints اللاحقة اقتراح تغيير:

-   Color
-   Font
-   Spacing rule
-   Button behavior
-   Icon strategy
-   Motion rule
-   Asset strategy
-   Other shared design decision

إذا ظهر أن البديل أفضل أثناء تنفيذ صفحة فعلية.

لكن:

-   يجب شرح سبب التغيير.
-   يجب تحديد الملفات والصفحات المتأثرة.
-   يجب توضيح إن كان التغيير Local للصفحة أو Global.
-   أي Global change يحتاج موافقة المستخدم قبل تطبيقه على بقية المشروع.
-   لا يجوز تغيير Foundation بصمت أثناء Sprint لاحق.

------------------------------------------------------------------------

## 23. Out of Scope

Sprint 01 لا يشمل:

-   Home Page Complete Redesign.
-   Final Home Hero.
-   Final 3D Hero implementation.
-   About Page Complete Redesign.
-   Final Statistics Count-Up implementation.
-   Services Page Complete Implementation.
-   Service Details Complete Redesign.
-   Projects Page Complete Redesign.
-   Project Details Gallery/Lightbox implementation.
-   Contact Page Complete Redesign.
-   Full Arabic/English translation implementation.
-   Final Navbar/Footer redesign.
-   Admin Dashboard implementation.
-   Backend implementation.
-   API integration.
-   Final company branding.
-   Final company logo.
-   Final brand colors.
-   Final project images.
-   Inventing production content.

------------------------------------------------------------------------

## 24. Mandatory Execution Rules

جميع قواعد `documents/RULES.md` إلزامية.

وبشكل خاص:

1.  لا يجوز تعديل Source Code قبل تقديم Proposal والحصول على موافقة
    المستخدم.
2.  يجب شرح **كل تعديل مقترح ولماذا هو مطلوب**.
3.  يجب تقديم Pre-Implementation File List كاملة قبل التنفيذ.
4.  لا يجوز تعديل ملف غير موجود في القائمة المعتمدة.
5.  لا يجوز حذف أي ملف أو كود أو Component أو Dependency أو Feature دون
    موافقة صريحة.
6.  إذا اكتشف Codex حاجة لتغيير جديد أثناء التنفيذ، يجب التوقف وطلب
    موافقة جديدة.
7.  لا يجوز توسيع Scope إلى Sprint 02 أو أي Sprint لاحق.
8.  لا يجوز إعادة بناء المشروع من الصفر.
9.  يجب إعادة استخدام الموجود عندما يكون مناسبًا.
10. لا يجوز تعديل Repomix packed file بدل ملفات المشروع الأصلية.
11. أي Dependency جديدة تحتاج سببًا واضحًا وموافقة قبل إضافتها.

------------------------------------------------------------------------

## 25. Required Workflow

### Stage A --- Inspect

فحص المشروع الحالي فقط دون Source Code changes.

### Stage B --- Proposal

تقديم Proposal يتضمن لكل تغيير:

-   Current state
-   Proposed change
-   Why
-   Exact files affected
-   CREATE / MODIFY / DELETE
-   Impact
-   Cross-page impact
-   Dependencies if any
-   Risks
-   Tests required

ثم **التوقف وانتظار موافقة المستخدم**.

### Stage C --- Approval

المستخدم يمكنه:

-   Approve all.
-   Approve only selected changes.
-   Reject changes.
-   Request modifications to the Proposal.

الموافقة تغطي فقط ما تم اعتماده صراحة.

### Stage D --- Git Checkpoint

قبل تنفيذ Source Code changes، يجب التأكد من وجود نقطة رجوع واضحة في Git
وحالة يمكن الرجوع إليها إذا لم تعجب المستخدم النتيجة.

لا يجوز حذف أو فقدان عمل المستخدم الحالي.

### Stage E --- Apply

بعد الموافقة فقط، تنفيذ التغييرات المعتمدة دون زيادة Scope.

### Stage F --- Validate

تشغيل Build والاختبارات والتحقق المناسب لما تم تغييره فعليًا.

### Stage G --- Visual Review

بعد التنفيذ، يجب أن يتمكن المستخدم من تشغيل المشروع ومراجعة النتيجة
بصريًا.

إذا لم تعجب المستخدم نتيجة معينة يمكن:

-   تعديل الجزء المحدد عبر Proposal جديد.
-   الإبقاء على الأجزاء المقبولة.
-   أو الرجوع عن تنفيذ السبرنت/التغيير باستخدام Git عند الحاجة.

لا يعتبر مجرد تنفيذ Codex قبولًا نهائيًا من المستخدم.

### Stage H --- Documentation

بعد استقرار التنفيذ، إنشاء/استكمال:

-   `documents/sprints/TEST01.md`
-   `documents/sprints/REPORT01.md`

بناءً على ما تم فعليًا.

------------------------------------------------------------------------

## 26. Expected Sprint Outputs

بنهاية Sprint 01، وبعد الموافقة والتنفيذ، يجب أن يصبح لدينا:

-   Audit واضح للحالة الحالية.
-   Flexible design foundation.
-   Centralized temporary design tokens.
-   Typography strategy.
-   Icons strategy.
-   Motion/animation rules المناسبة لهوية Software Company بدون مبالغة.
-   Shared motion hierarchy and reduced-motion rules.
-   Selective 3D / visual depth strategy.
-   Assets strategy.
-   Temporary logo strategy.
-   Responsive foundation.
-   Shared components decisions.
-   Data-driven architecture decisions.
-   Accessibility foundation.
-   Performance foundation.
-   Working minimal implementation proving the Foundation.
-   `documents/sprints/TEST01.md`
-   `documents/sprints/REPORT01.md`

ولا يشترط أن تكون أي صفحة قد أعيد تصميمها بالكامل.

------------------------------------------------------------------------

## 27. REPORT01.md Requirements

يجب أن يوثق التقرير النهائي على الأقل:

-   ماذا تم فحصه.
-   ماذا تم تغييره.
-   لماذا تم تغييره.
-   الملفات التي تم تعديلها/إنشاؤها/حذفها.
-   مقارنة قائمة الملفات المعتمدة مع الملفات التي تغيرت فعليًا.
-   القرارات المعتمدة.
-   Temporary color strategy.
-   Typography decision.
-   Icon strategy.
-   Motion strategy and motion-intensity decisions.
-   Reduced-motion/mobile motion decisions.
-   Selective 3D / visual depth strategy.
-   Asset strategy.
-   Logo strategy.
-   Responsive decisions.
-   Shared component decisions.
-   Data architecture observations.
-   Accessibility decisions.
-   Performance decisions.
-   Dependencies added، إن وجدت وبعد الموافقة.
-   Items deferred to later Sprints.
-   Known limitations.
-   Build/test result.

------------------------------------------------------------------------

## 28. TEST01.md Requirements

يجب أن يحتوي ملف الاختبار على الاختبارات المناسبة لما تم تنفيذه فعليًا،
مثل:

-   Build validation.
-   Existing functionality regression check.
-   Design token validation.
-   Typography loading/fallback.
-   Shared button states إن تم تعديلها.
-   Icons rendering إن تم تعديلها.
-   Responsive smoke checks.
-   Reduced-motion behavior إن تم تنفيذه.
-   Shared motion smoke checks إن تم تعديل Motion Foundation.
-   Motion performance checks إن تم تطبيق Animations مشتركة.
-   Missing asset/fallback checks إن تم تعديلها.
-   RTL/LTR foundation checks إن تأثرت.
-   Console/runtime errors.
-   Dependency/build checks.

يجب ألا يدعي `TEST01.md` تنفيذ اختبار لم يتم تشغيله فعليًا.

------------------------------------------------------------------------

## 29. Definition of Done

يعتبر Sprint 01 منتهيًا فقط عندما:

-   تم فحص المشروع الحالي قبل التعديل.
-   تم تقديم Proposal.
-   تم تقديم Exact Pre-Implementation File List.
-   وافق المستخدم على التغييرات المنفذة.
-   لم يتم تعديل ملف خارج القائمة المعتمدة دون موافقة جديدة.
-   لم يتم تنفيذ أي تغيير غير معتمد.
-   لم يتم حذف أي شيء دون موافقة.
-   بقي العمل ضمن Scope الخاص بـSprint 01.
-   تم الحفاظ على المشروع الحالي وعدم إعادة بنائه.
-   أصبح Foundation مرنًا تجاه تغيير الهوية المستقبلية.
-   لا تعتمد البنية على Logo أو Colors أو Project Images نهائية.
-   لم يتم ربط UI بالقيم الحالية في Data كقيم نهائية.
-   لم يتم تنفيذ Page Redesign كامل.
-   توجد Git rollback point واضحة.
-   Build يعمل بنجاح.
-   الاختبارات المطلوبة تم تنفيذها وتوثيقها.
-   المستخدم حصل على فرصة Visual Review بعد التنفيذ.
-   تم إنشاء/استكمال `documents/sprints/TEST01.md`.
-   تم إنشاء/استكمال `documents/sprints/REPORT01.md`.
-   تم توثيق العناصر المؤجلة للسبرنتات القادمة.
-   تمت مراجعة Diff والتأكد أنه يطابق التغييرات الموافق عليها فقط.

------------------------------------------------------------------------

## 30. Stop Conditions

يجب على Codex التوقف وطلب موافقة المستخدم إذا احتاج إلى:

-   تعديل ملف غير موجود في Pre-Implementation File List المعتمدة.
-   إنشاء ملف إضافي غير معتمد.
-   حذف كود أو ملف أو Component.
-   تغيير Architecture بشكل مؤثر.
-   إضافة Dependency.
-   تنزيل Font جديد.
-   إضافة مكتبة Icons.
-   إضافة مكتبة 3D.
-   تغيير يؤثر على صفحات خارج Scope بصورة غير متوقعة.
-   تغيير Route.
-   تغيير Data structure بشكل قد يؤثر على أجزاء أخرى.
-   تنفيذ Refactor واسع.
-   اتخاذ قرار Branding نهائي.
-   تجاوز Sprint 01.
-   تنفيذ أي تغيير لم تتم الموافقة عليه مسبقًا.

------------------------------------------------------------------------

## 31. Sprint Completion Note

Sprint 01 يؤسس النظام الذي ستبنى عليه Sprints الصفحات اللاحقة، لكنه لا
يمنع مراجعة هذا النظام مستقبلًا.

بعد إغلاق Sprint 01، تكون المرحلة التالية:

**Sprint 02 --- Home Page Complete Redesign**

ويتم قبل تنفيذ Sprint 02 إعداد Sprint specification مستقلة ومراجعتها
واعتمادها بنفس Workflow الموافقة المستخدم في `documents/RULES.md`.
