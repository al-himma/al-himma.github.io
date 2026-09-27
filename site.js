// site.js — زر المشاركة الموحد بالرأس (يُستخدم فقط إذا الصفحة ما عرفت دالتها)
if (typeof window.shareApp !== 'function') {
  window.shareApp = async function () {
    var data = { title: 'تطبيق الهمة', text: 'الهمة حتى القمة', url: 'https://alhimmah.app/' };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(data.url);
    } catch (e) {}
  };
}
