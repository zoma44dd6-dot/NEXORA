# نبض | NABD Health

موقع مقالات طبية عربي مبني باستخدام Next.js App Router وTypeScript وSupabase، بواجهة RTL متجاوبة.

## المزايا الحالية
- صفحة رئيسية وهوية عربية متجاوبة.
- تصنيفات طبية وصفحات أقسام.
- بحث فوري وتصفية المقالات.
- صفحات مستقلة للمقالات مع metadata وOpen Graph.
- صفحات عن نبض، التواصل، الخصوصية، وإخلاء المسؤولية.
- لوحة إدارة للمحررين: تسجيل الدخول، عرض المقالات، إضافة المقالات وتعديلها، ومسودات/نشر.
- تكامل اختياري مع Supabase؛ الموقع يعرض بيانات تجريبية عند عدم ضبطه.
- تحقق من بيانات نماذج الإدارة والتواصل.
- ملف SQL لقاعدة البيانات وسياسات RLS.
- ملف بيئة نموذجي ولا توجد أسرار ضمن المستودع.

## المتطلبات
- Node.js 20+
- npm
- حساب Supabase عند تفعيل لوحة الإدارة وقاعدة البيانات

## تشغيل محلي
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd nabd-github-ready
npm install
cp .env.example .env.local
npm run dev
```
افتح `http://localhost:3000`.

بدون إعداد Supabase، تعمل الواجهة بالمقالات التجريبية، لكن لوحة الإدارة لن تعمل.

## إعداد Supabase
1. أنشئ مشروعًا في Supabase.
2. افتح SQL Editor وشغّل `supabase/schema.sql`.
3. انسخ Project URL وPublishable/anon key إلى `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. أنشئ مستخدمًا من Authentication في لوحة Supabase.
5. انسخ UUID للمستخدم، ثم أنشئ ملف صلاحيات admin من SQL Editor:
```sql
insert into public.profiles (id, display_name, role)
values ('UUID-OF-YOUR-AUTH-USER', 'NABD Admin', 'admin');
```
6. افتح `/admin/login` وسجّل الدخول.
7. اضبط `NEXT_PUBLIC_SITE_URL` على رابط الموقع النهائي.

لا تضف `service_role` key إلى متغيرات `NEXT_PUBLIC_*` أو إلى GitHub. هذا المشروع يستخدم جلسة المستخدم وRLS، وليس مفتاح الخدمة.

## رفع المشروع على GitHub
```bash
git init
git add .
git commit -m "Initial NABD medical website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
أنشئ المستودع على GitHub أولًا، واتركه فارغًا دون README تلقائي لتجنب تعارض أول push. لا ترفع `.env.local`.

## النشر على Vercel
1. استورد مستودع GitHub في Vercel.
2. أضف متغيرات البيئة نفسها في Project Settings → Environment Variables.
3. انشر المشروع.
4. حدّث `NEXT_PUBLIC_SITE_URL` إلى النطاق النهائي وأعد النشر.
5. اختبر تسجيل الدخول وسياسات RLS على بيئة الإنتاج.

## مهم قبل الإطلاق الفعلي
- شغّل `npm run build` واختبر جميع المسارات قبل النشر.
- اربط نموذج التواصل بمزود بريد أو قاعدة بيانات؛ الـAPI الحالي يتحقق من المدخلات فقط ولا يرسل الرسائل فعليًا.
- أضف حماية من الإساءة ومعدل الطلبات (rate limiting) إلى النماذج.
- راجع إعدادات Supabase RLS والصلاحيات بعد إنشاء أول حساب مسؤول.
- أضف مراجعة طبية موثقة ومصادر وتواريخ تحديث للمقالات. المحتوى التجريبي غير معتمد طبيًا.
- استبدل صور Unsplash بصور مرخصة أو مستضافة محليًا قبل الإنتاج.
- خصص سياسة الخصوصية قانونيًا حسب الدول التي يستهدفها الموقع.
- أضف اختبارات آلية ومراقبة للأخطاء وخطة نسخ احتياطي.

## حدود النسخة
هذه قاعدة مشروع كاملة كبداية، لكنها ليست خدمة جاهزة للإطلاق دون إعداد Supabase، واختبار بناء، ومراجعة أمنية وطبية.
