window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
  // 原有：拦截_blank新窗口代码
const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
document.addEventListener('click', function (e) {
  const origin = e.target.closest('a')
  console.log('origin', origin, isBaseTargetBlank)
  if (
    (origin && origin.href && origin.target === '_blank') ||
    (origin && origin.href && isBaseTargetBlank)
  ) {
    e.preventDefault()
    console.log('handle origin', origin)
    location.href = origin.href
  } else {
    console.log('not handle origin', origin)
  }
})
window.open = function (url, target, features) {
  console.log('open', url, target, features)
  location.href = url
}

// ==========下面是我们新加的弹窗代码==========
window.onload = function(){
    const div = document.createElement('div');
    div.style=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:99999`;
    const box = document.createElement('div');
    box.style=`background:#fff;padding:24px;border-radius:12px;text-align:center;max-width:80%`;
    box.innerHTML=`
        <h3>游戏公告</h3>
        <p>你想要写的提示文字</p>
        <br>
        <button id="closeBtn" style="padding:6px 16px;">确定</button>
    `;
    div.appendChild(box);
    document.body.appendChild(div);
    document.getElementById('closeBtn').onclick=()=>div.remove();
}

