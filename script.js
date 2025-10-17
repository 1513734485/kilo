// script.js

// 等待页面 DOM 完全加载后执行（避免操作未存在的元素）
document.addEventListener('DOMContentLoaded', function() {
  // 获取按钮元素
  const btn = document.getElementById('btn');
  // 获取标题元素
  const title = document.querySelector('h1');

  // 给按钮绑定点击事件
  btn.addEventListener('click', function() {
    // 点击后修改标题文本
    title.textContent = '按钮被点击了！';
    // 同时修改标题颜色
    title.style.color = 'red';
  });
});
