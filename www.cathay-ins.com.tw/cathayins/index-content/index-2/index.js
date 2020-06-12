/** 讀取模板列表 */
function loadTemplates(prefix = '../../../') {
  loadContent('#sidebar', prefix, "sidebar.html")
  loadContent('#desktop-header', prefix, "index-2/desktop/desktop-header.html")
  loadContent('#desktop-footer', prefix, "index-2/desktop/desktop-footer.html")
  loadContent('#mobile-header', prefix, "index-2/mobile/mobile-header.html")
  loadContent('#mobile-footer', prefix, "index-2/mobile/mobile-footer.html")
}

/** 讀取模板 */
function loadContent(selector, prefix, template) {
  const path = prefix + 'index-content/' + template
  $(selector).load(path)
}