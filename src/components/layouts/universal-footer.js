!(function() {
  function t(e, o, i) {
    function n(c, r) {
      if (!o[c]) {
        if (!e[c]) {
          var a = 'function' == typeof require && require
          if (!r && a) return a(c, !0)
          if (s) return s(c, !0)
          var l = new Error("Cannot find module '" + c + "'")
          throw ((l.code = 'MODULE_NOT_FOUND'), l)
        }
        var h = (o[c] = {
          exports: {},
        })
        e[c][0].call(
          h.exports,
          function(t) {
            var o = e[c][1][t]
            return n(o || t)
          },
          h,
          h.exports,
          t,
          e,
          o,
          i
        )
      }
      return o[c].exports
    }
    for (
      var s = 'function' == typeof require && require, c = 0;
      c < i.length;
      c++
    )
      n(i[c])
    return n
  }
  return t
})()(
  {
    1: [
      function(t, e, o) {
        e.exports = {
          col1: [
            {
              title: 'Quote',
              content:
                '<p>Ravencoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It\'s the dawn of a better, more free world.<br> <span class="right">â€” Roger Ver<br>&emsp; CEO Bitcoin.com</span></p>',
            },
          ],
          col2: [
            {
              label: {
                title: 'Quick Links',
              },
              links: [
                {
                  t: 'DEVELOPERS <font color="#fab915"><em>[new]</em></font>',
                  h: 'http://developer.ravencoin.online/',
                },
                {
                  t: 'MARKETS <font color="#fab915"><em>[new]</em></font>',
                  h: 'http://markets.ravencoin.online/',
                },
                {
                  t: 'PRINT MONEY <font color="#fab915"><em>[new]</em></font>',
                  h: 'http://paperwallet.ravencoin.online/',
                },
                {
                  t: 'EVENTS',
                  h: 'http://events.ravencoin.online/',
                },
                {
                  t: 'FORUM',
                  h: 'http://www.ravencointalk.org/',
                },
                {
                  t: 'NEWS',
                  h: 'http://news.ravencoin.online/',
                },
                {
                  t: 'PODCAST',
                  h: 'http://podcast.ravencoin.online/',
                },
                {
                  t: 'STORE',
                  h: 'http://store.ravencoin.online/',
                },
                {
                  t: 'GETTING STARTED',
                  h: 'http://ravencoin.online/getting-started',
                },
                {
                  t: 'PROMOTIONAL MATERIAL',
                  h: 'http://ravencoin.online/press',
                },
                {
                  t: 'CONTACT US',
                  h: 'http://ravencoin.online/contact-us',
                },
                {
                  t: 'WALLETS',
                  h: 'http://ravencoin.online/choose-your-wallet',
                },
                {
                  t: 'GUIDE',
                  h: 'http://ravencoin.online/you-need-to-know',
                },
                {
                  t: 'FAQ',
                  h: 'http://ravencoin.online/faq',
                },
                {
                  t: 'RVN CHARTS <font color="#fab915"><em>[new]</em></font>',
                  h: 'http://charts.ravencoin.online',
                },
                {
                  t: 'DEVELOPER DISCORD',
                  h: 'https://discord.gg/44APdew',
                },
                {
                  t: 'ADVERTISE',
                  h: 'http://ravencoin.online/advertise',
                },
                {
                  t: 'LEGAL',
                  h: 'http://ravencoin.online/legal',
                },
                {
                  t: 'PRIVACY',
                  h: 'http://ravencoin.online/privacy-policy',
                },
                {
                  t: 'ABOUT US',
                  h: 'http://ravencoin.online/about-us',
                },
                {
                  t: 'PARTNERS',
                  h: 'http://ravencoin.online/partners',
                },
                {
                  t: 'WIDGETS',
                  h: 'http://ravencoin.online/widgets',
                },
                {
                  t: 'RAVENCOIN.ONLINE ESPAÃ‘OL',
                  h: 'http://es.ravencoin.online/',
                },
                {
                  t: 'RAVENCOIN.ONLINE ä¸­æ–‡',
                  h: 'http://cn.ravencoin.online/',
                },
              ],
            },
          ],
          col3: [
            {
              title: 'About ravencoin.online',
              content:
                '<p>ravencoin.online is your premier source for everything Ravencoin related. We can help you choose a ravencoin <a id="universal-footer-link" href="https://ravencoin.online/choose-your-wallet">wallet</a>. You can also read the latest <a id="universal-footer-link" href="https://news.ravencoin.online/">news</a>, or engage with the community on our <a id="universal-footer-link" href="https://www.ravencointalk.org/">Ravencoin Forum</a>. Please keep in mind that this is a community website that lists wallets, exchanges and other ravencoin related companies.</p>',
            },
          ],
          col4: [
            {
              title: 'NEW FROM RAVENCOIN.ONLINE',
              subhead: '',
              buttons: [
                {
                  t: 'Give Feedback',
                  h: 'https://ravencoinrvn.typeform.com/to/####',
                },
                {
                  t: 'Build on Ravencoin',
                  h: 'https://developer.ravencoin.online/',
                },
                {
                  t: 'Tip with Ravencoin',
                  h: 'https://tips.ravencoin.online/',
                },
                {
                  t: 'Buy Gift Cards',
                  h: 'https://giftcards.ravencoin.online/',
                },
                {
                  t: 'RavenCoin Markets',
                  h: 'https://markets.ravencoin.online/',
                },
                {
                  t: 'Paper Wallet',
                  h: 'https://paperwallet.ravencoin.online/',
                },
              ],
            },
          ],
        }
      },
      {},
    ],
    2: [
      function(t, e, o) {
        function i(t) {
          if (!t || 1 !== t.nodeType)
            throw new Error('A DOM Element reference is required')
          ;(this.el = t), (this.classList = t.classList)
        }

        function n(t, e) {
          if (((e = e || 'a method'), 'string' != typeof t))
            throw new TypeError(
              "Failed to execute '" +
                e +
                "' on 'ClassList': the token provided ('" +
                t +
                "') is not a string."
            )
          if ('' === t)
            throw new SyntaxError(
              "Failed to execute '" +
                e +
                "' on 'ClassList': the token provided must not be empty."
            )
          if (/\s/.test(t))
            throw new Error(
              "Failed to execute '" +
                e +
                "' on 'ClassList': the token provided ('" +
                t +
                "') contains HTML space characters, which are not valid in tokens."
            )
        }
        ;(e.exports = function(t) {
          return new i(t)
        }),
          (i.prototype.toArray = function() {
            var t = (this.el.getAttribute('class') || '').replace(
                /^\s+|\s+$/g,
                ''
              ),
              e = t.split(/\s+/)
            return '' === e[0] && e.shift(), e
          }),
          (i.prototype.add = function(t) {
            var e, o
            n(t, 'add'),
              this.classList
                ? this.classList.add(t)
                : ((e = this.toArray()),
                  (o = e.indexOf(t)),
                  -1 === o &&
                    (e.push(t), this.el.setAttribute('class', e.join(' '))))
          }),
          (i.prototype.contains = function(t) {
            return (
              n(t, 'contains'),
              this.classList
                ? this.classList.contains(t)
                : this.toArray().indexOf(t) > -1
            )
          }),
          (i.prototype.remove = function(t) {
            var e, o, i, s, c
            if ('[object RegExp]' == Object.prototype.toString.call(t))
              for (e = this.toArray(), i = 0, c = e.length; c > i; i++)
                t.test(e[i]) && this.remove(e[i])
            else
              n(t, 'remove'),
                this.classList
                  ? this.classList.remove(t)
                  : ((o = this.toArray()),
                    (s = o.indexOf(t)),
                    s > -1 &&
                      (o.splice(s, 1),
                      this.el.setAttribute('class', o.join(' '))))
          }),
          (i.prototype.toggle = function(t, e) {
            n(t, 'toggle')
            var o = this.contains(t),
              i = o ? e !== !0 && 'remove' : e !== !1 && 'add'
            return i && this[i](t), 'boolean' == typeof e ? e : !o
          })
      },
      {},
    ],
    3: [
      function(t, e, o) {
        e.exports = {
          id: 272,
          stamp: 1545219732852,
        }
      },
      {},
    ],
    4: [
      function(t, e, o) {
        function i() {
          if (!(document.getElementsByTagName('Footer').length > 0)) {
            if ('string' == typeof RavencoinMenuLang) {
              var t = RavencoinMenuLang.toLowerCase()
              a[t] ? ((l = a[t]), (h = t)) : (l = a.en)
            }
            var e = RavencoinMenu.BASE + 'universal-footer.css'
            RavencoinMenu.BUILD.id && (e += '?' + RavencoinMenu.BUILD.id), r(e)
          }
        }

        function n() {
          return c() ? void s() : void window.setTimeout(n, 16)
        }

        function s() {
          var t = document.createElement('footer'),
            e = ['cleanslate']
          h.length > 0 && e.push(h),
            (t.className = e.join(' ')),
            (t.id = 'universal-footer')
          var o = [],
            i = 0
          o[i++] = '<div class="wrap">'
          for (var n = 0; n < l.col1.length; n++) {
            var s = l.col1[n]
            ;(o[i++] = '<div class="col"><h3>'),
              (o[i++] = s.title),
              (o[i++] = '</h3>'),
              (o[i++] = s.content),
              (o[i++] = '</div>')
          }
          for (var n = 0; n < l.col2.length; n++) {
            var s = l.col2[n]
            ;(o[i++] = '<div class="col"><h3>'),
              (o[i++] = s.label.title),
              (o[i++] = '</h3>'),
              (o[i++] = '<ul>')
            for (var r = 0; r < s.links.length; r++)
              (o[i++] = '<li><a id="universal-footer-link" href="'),
                (o[i++] = s.links[r].h),
                (o[i++] = '">'),
                (o[i++] = s.links[r].t),
                (o[i++] = '</a>'),
                (o[i++] = '</li>')
            ;(o[i++] = '</ul>'), (o[i++] = '</div>')
          }
          for (var n = 0; n < l.col3.length; n++) {
            var s = l.col3[n]
            ;(o[i++] = '<div class="col"><h3>'),
              (o[i++] = s.title),
              (o[i++] = '</h3>'),
              (o[i++] = s.content),
              (o[i++] = '</div>')
          }
          for (var n = 0; n < l.col4.length; n++) {
            var s = l.col4[n]
            ;(o[i++] = '<div class="col"><h3 class="text-uppercase mt-4">'),
              (o[i++] = s.title),
              (o[i++] = '</h3><h4 style="color:#fff; text-transform:none">'),
              (o[i++] = s.subhead),
              (o[i++] = '</h4>')
            for (var r = 0; r < s.buttons.length; r++)
              (o[i++] =
                '<a id="universal-footer-link" class="btn newsletter-button" href="'),
                (o[i++] = s.buttons[r].h),
                (o[i++] = '">'),
                (o[i++] = s.buttons[r].t),
                (o[i++] = '</a>')
            o[i++] = '</a></div>'
          }
          ;(o[i++] = '</div>'),
            (o[i++] = '<hr>'),
            (o[i++] =
              '<div class="wrap"><div class="final"><p class="left">MSFTserver 2018&ensp;|&ensp;ravencoin.online</p><ul class="right social">'),
            (o[i++] =
              '<li><a id="universal-footer-link" href="https://twitter.com/Ravencoin" class="tw">'),
            (o[i++] = p.twitter),
            (o[i++] = '</a></li>'),
            (o[i++] =
              '<li><a id="universal-footer-link" href="https://www.youtube.com/channel/UCErMFCpXwY5kkStdoo0JU-g" class="yt">'),
            (o[i++] = p.youtube),
            (o[i++] = '</a></li>'),
            (o[i++] =
              '<li><a id="universal-footer-link" href="https://ravencoin.online/feed" class="rs">'),
            (o[i++] = p.rss),
            (o[i++] = '</a></li>'),
            (o[i++] = '</ul><div class="clearfix"></div></div>'),
            (o[i++] = '</div>'),
            (o[i++] = '</footer>'),
            (t.innerHTML = o.join('')),
            c().appendChild(t)
        }

        function c() {
          return document.getElementsByTagName('body')[0]
        }

        function r(t) {
          var e = document.createElement('link')
          ;(e.rel = 'stylesheet'),
            (e.type = 'text/css'),
            (e.href = t),
            (e.media = 'all'),
            (e.onload = n),
            document.getElementsByTagName('head')[0].appendChild(e)
        }
        var a = (t('dom-classlist'),
          {
            en: t('../../footer-content'),
          }),
          l = a.en,
          h = '',
          p = t('./svg')
        i()
      },
      {
        '../../footer-content': 1,
        './svg': 6,
        'dom-classlist': 2,
      },
    ],
    5: [
      function(t, e, o) {
        ;(window.RavencoinMenu = {
          BASE: './',
          BUILD: t('./build'),
        }),
          t('./main')
      },
      {
        './build': 3,
        './main': 4,
      },
    ],
    6: [
      function(t, e, o) {
        var i =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M82.667,1H17.335C8.351,1,1,8.351,1,17.336v65.329c0,8.99,7.351,16.335,16.334,16.335h65.332 C91.652,99.001,99,91.655,99,82.665V17.337C99,8.353,91.652,1.001,82.667,1L82.667,1z M84.318,50H68.375v42.875H50V50h-8.855V35.973 H50v-9.11c0-12.378,5.339-19.739,19.894-19.739h16.772V22.3H72.967c-4.066-0.007-4.57,2.12-4.57,6.078l-0.023,7.594H86.75 l-2.431,14.027V50z"></path></svg>',
          n =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M97.284,26.359c-1-5.352-5.456-9.346-10.574-9.839c-12.221-0.784-24.488-1.42-36.731-1.428 c-12.244-0.007-24.464,0.616-36.687,1.388c-5.137,0.497-9.592,4.47-10.589,9.842C1.567,34.058,1,41.869,1,49.678 s0.568,15.619,1.703,23.355c0.996,5.372,5.451,9.822,10.589,10.314c12.226,0.773,24.439,1.561,36.687,1.561 c12.239,0,24.515-0.688,36.731-1.479c5.118-0.497,9.574-5.079,10.574-10.428C98.43,65.278,99,57.477,99,49.676 C99,41.88,98.428,34.083,97.284,26.359z M38.89,63.747V35.272l26.52,14.238L38.89,63.747z"></path></svg>',
          s =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M99.001,19.428c-3.606,1.608-7.48,2.695-11.547,3.184c4.15-2.503,7.338-6.466,8.841-11.189 c-3.885,2.318-8.187,4-12.768,4.908c-3.667-3.931-8.893-6.387-14.676-6.387c-11.104,0-20.107,9.054-20.107,20.223 c0,1.585,0.177,3.128,0.52,4.609c-16.71-0.845-31.525-8.895-41.442-21.131C6.092,16.633,5.1,20.107,5.1,23.813 c0,7.017,3.55,13.208,8.945,16.834c-3.296-0.104-6.397-1.014-9.106-2.529c-0.002,0.085-0.002,0.17-0.002,0.255 c0,9.799,6.931,17.972,16.129,19.831c-1.688,0.463-3.463,0.71-5.297,0.71c-1.296,0-2.555-0.127-3.783-0.363 c2.559,8.034,9.984,13.882,18.782,14.045c-6.881,5.424-15.551,8.657-24.971,8.657c-1.623,0-3.223-0.096-4.796-0.282 c8.898,5.738,19.467,9.087,30.82,9.087c36.982,0,57.206-30.817,57.206-57.543c0-0.877-0.02-1.748-0.059-2.617 C92.896,27.045,96.305,23.482,99.001,19.428z"></path></svg>',
          c =
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75.3613281px" height="75.3608398px" viewBox="0 0 75.3613281 75.3608398" enable-background="new 0 0 75.3613281 75.3608398" xml:space="preserve"><circle fill="#FFFFFF" cx="15.0957031" cy="61.4072266" r="7.0786133"></circle><path fill="#FFFFFF" d="M8.0253906,43.5629883c6.6342773,0,12.8666992,2.5947266,17.5561523,7.3017578 c4.6918945,4.7148438,7.2734375,10.9921875,7.2734375,17.6757813h10.2182617 c0-19.4082031-15.7211914-35.1987305-35.0478516-35.1987305V43.5629883z"></path><path fill="#FFFFFF" d="M8.0390625,25.4448242c23.6367188,0,42.8710938,19.3398438,42.8710938,43.1035156H61.125 c0-29.4033203-23.8125-53.3227539-53.0859375-53.3227539V25.4448242z"></path></svg>'
        e.exports = {
          facebook: i,
          twitter: s,
          youtube: n,
          rss: c,
        }
      },
      {},
    ],
  },
  {},
  [5]
)
