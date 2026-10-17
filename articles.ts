export type Article = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image: string | null;
  author_name: string;
  reviewer_name: string | null;
  status: "draft" | "published";
  published_at: string | null;
  updated_at?: string;
  created_at?: string;
  reading_minutes?: number;
};

export const categories = [
  { name: "الصحة العامة", slug: "general-health", icon: "✚", color: "mint" },
  { name: "التغذية", slug: "nutrition", icon: "✳", color: "peach" },
  { name: "صحة القلب", slug: "heart-health", icon: "♡", color: "rose" },
  { name: "الصحة النفسية", slug: "mental-health", icon: "☼", color: "lilac" },
  { name: "الأطفال", slug: "children", icon: "⌂", color: "blue" },
  { name: "الجلدية", slug: "dermatology", icon: "✧", color: "sand" }
];

export const demoArticles: Article[] = [
  { title: "عادات يومية تدعم صحة القلب", slug: "heart-health-habits", excerpt: "خطوات عامة في نمط الحياة قد تساعد في الحفاظ على صحة القلب، من الحركة المنتظمة إلى الطعام المتوازن.", content: "## لماذا نهتم بصحة القلب؟\n\nالقلب جزء أساسي من الجهاز الدوري، وتساعد العادات الصحية على دعم الصحة العامة. تختلف الاحتياجات من شخص لآخر، لذلك من المهم مناقشة عوامل الخطورة الشخصية مع مختص.\n\n## خطوات عامة\n\n- مارس نشاطًا بدنيًا مناسبًا لقدرتك وحالتك الصحية.\n- اختر نمطًا غذائيًا متوازنًا ومتنوعًا.\n- تجنب التدخين واطلب مساعدة متخصصة للإقلاع عنه.\n- تابع ضغط الدم والسكري والدهون وفق نصيحة الطبيب.\n\n## متى تطلب المساعدة؟\n\nألم الصدر الشديد أو ضيق التنفس المفاجئ أو الإغماء قد تستلزم رعاية طارئة. لا تعتمد على مقال لتقييم الأعراض.", category: "صحة القلب", cover_image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85", author_name: "فريق تحرير نبض", reviewer_name: null, status: "published", published_at: "2026-10-12T09:00:00.000Z", reading_minutes: 4 },
  { title: "كيف تبني طبقًا غذائيًا متوازنًا؟", slug: "balanced-plate-guide", excerpt: "دليل مبسط للتنوع في الوجبات اليومية ومراعاة الخضراوات ومصادر البروتين والحبوب.", content: "## التنوع أساس مهم\n\nيمكن أن يساعد التنوع في الطعام على توفير مجموعة من العناصر الغذائية. لا توجد خطة واحدة تناسب الجميع؛ فالاحتياجات تختلف حسب العمر والحالة الصحية والثقافة والموارد المتاحة.\n\n## أفكار عملية\n\n- أضف الخضراوات والفواكه بألوان متنوعة.\n- نوّع مصادر البروتين حسب تفضيلاتك واحتياجاتك.\n- اختر الحبوب الكاملة عندما تكون مناسبة ومتاحة.\n- اشرب الماء بانتظام، وناقش أي قيود غذائية مع مختص.\n\nالمعلومات هنا عامة ولا تستبدل التقييم الغذائي الفردي.", category: "التغذية", cover_image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85", author_name: "فريق تحرير نبض", reviewer_name: null, status: "published", published_at: "2026-10-08T09:00:00.000Z", reading_minutes: 3 },
  { title: "خطوات بسيطة لتحسين عادات النوم", slug: "healthy-sleep-habits", excerpt: "تعرف على عادات قد تساعد في تنظيم النوم، ومتى يكون من المفيد استشارة مختص.", content: "## عادات قد تساعد\n\n- حاول الحفاظ على مواعيد نوم واستيقاظ متقاربة.\n- اجعل غرفة النوم مريحة وهادئة قدر الإمكان.\n- قلل الكافيين في الساعات المتأخرة إذا كان يؤثر في نومك.\n- خصص وقتًا للاسترخاء قبل النوم.\n\nإذا استمرت صعوبات النوم أو أثرت في نشاطك اليومي، فتحدث مع مختص صحي. هذه المعلومات تثقيفية وليست تشخيصًا.", category: "الصحة العامة", cover_image: "https://images.unsplash.com/photo-1511295742362-92c96b8d5f74?auto=format&fit=crop&w=1200&q=85", author_name: "فريق تحرير نبض", reviewer_name: null, status: "published", published_at: "2026-10-03T09:00:00.000Z", reading_minutes: 3 },
  { title: "دعم الصحة النفسية في الحياة اليومية", slug: "everyday-mental-wellbeing", excerpt: "ممارسات عامة للعناية بالنفس، ومؤشرات قد تعني أن الوقت مناسب لطلب الدعم.", content: "## الاهتمام بالنفس جزء من الصحة\n\nقد يساعد التواصل الاجتماعي، والنشاط المناسب، والراحة المنتظمة على دعم الرفاه النفسي. لا تغني هذه الممارسات عن المساعدة المهنية عند الحاجة.\n\n## متى تطلب الدعم؟\n\nإذا استمر الضيق أو أثّر في الحياة اليومية، فالتواصل مع مختص مؤهل خطوة مناسبة. إذا كنت في خطر فوري، تواصل مع خدمات الطوارئ المحلية أو شخص موثوق يستطيع مساعدتك.", category: "الصحة النفسية", cover_image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85", author_name: "فريق تحرير نبض", reviewer_name: null, status: "published", published_at: "2026-09-28T09:00:00.000Z", reading_minutes: 4 }
];
