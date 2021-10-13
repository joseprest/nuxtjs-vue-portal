import Vue from 'vue'
import scrollmonitor from 'scrollmonitor'

Vue.directive("scroll", {
  bind(el, binding, vnode) {
    const modifiers = binding.modifiers;
    if (modifiers.fadeup) {
      el.style.opacity = 0
      el.style.transform = 'translate3d(0, 300px, 0)'

      const elementWatcher = scrollMonitor.create( el );

      elementWatcher.enterViewport(function() {
        el.style.opacity = 1
        el.style.transform = 'none'
      })

      elementWatcher.exitViewport(function() {
        el.style.opacity = 0
        el.style.transform = 'translate3d(0, 300px, 0)'
      })
    } else if (modifiers.fadeRight) {
      el.style.opacity = 0
      el.style.transform = 'translate3d(-100px,0,0)'

      const elementWatcher = scrollMonitor.create( el );

      elementWatcher.enterViewport(function() {
        el.style.opacity = 1
        el.style.transform = 'none'
      })
    } else if (modifiers.animation) {
      el.style.opacity = 0.1
      el.style.transform = 'none'

      if (el.className.includes('img-left')) {
        const elementWatcher = scrollMonitor.create( el )

        elementWatcher.enterViewport(function() {
          el.style.opacity = 1
          el.style.transform = ''
        })
      } else if (el.className.includes('img-right')) {
        setTimeout(() => {
          const elementWatcher = scrollMonitor.create( el )

          elementWatcher.enterViewport(function() {
            el.style.opacity = 1
            el.style.transform = ''
          })
        }, 1500)
      } else if (el.className.includes('desc-left')) {
        el.style.opacity = 0
        setTimeout(() => {
          const elementWatcher = scrollMonitor.create( el )

          elementWatcher.enterViewport(function() {
            el.style.opacity = 1
          })
        }, 2000)
      } else {
        el.style.opacity = 0
        setTimeout(() => {
          const elementWatcher = scrollMonitor.create( el )

          elementWatcher.enterViewport(function() {
            el.style.opacity = 1
          })
        }, 2500)
      }
    } else {
      el.style.opacity = 0.2
      el.style.transform = 'translate3d(0, 100px, 0)'

      const elementWatcher = scrollMonitor.create( el, -100 );

      elementWatcher.enterViewport(function() {
        el.style.opacity = 1
        el.style.transform = 'none'
      })
    }
  }
});
