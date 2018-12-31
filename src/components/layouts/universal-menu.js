!(function() {
  function t(i, o, e) {
    function c(s, a) {
      if (!o[s]) {
        if (!i[s]) {
          var h = 'function' == typeof require && require
          if (!a && h) return h(s, !0)
          if (n) return n(s, !0)
          var r = new Error("Cannot find module '" + s + "'")
          throw ((r.code = 'MODULE_NOT_FOUND'), r)
        }
        var p = (o[s] = {
          exports: {},
        })
        i[s][0].call(
          p.exports,
          function(t) {
            var o = i[s][1][t]
            return c(o || t)
          },
          p,
          p.exports,
          t,
          i,
          o,
          e
        )
      }
      return o[s].exports
    }
    for (
      var n = 'function' == typeof require && require, s = 0;
      s < e.length;
      s++
    )
      c(e[s])
    return c
  }
  return t
})()(
  {
    1: [
      function(t, i, o) {
        i.exports = {
          top: [
            {
              t: 'Start here',
              h: 'https://ravencoin.online/getting-started/',
            },
            {
              t: 'News',
              h: 'https://news.ravencoin.online/',
            },
            {
              t: 'Forum',
              h: 'https://forum.ravencoin.online/',
            },
            {
              t: 'Games',
              h: 'https://cashgames.ravencoin.online/',
            },
            {
              t: 'Buy<span> Ravencoin</span>',
              h: 'https://buy.ravencoin.online/',
            },
            {
              t: 'Mining',
              h: 'https://pool.ravencoin.online/',
            },
          ],
          promo: [
            {
              t:
                '<span id="desktop-promo">The North American Ravencoin Conference</span><span id="mobile-promo">Miami</span>',
              h: 'https://btcmiami.com/',
              c: 'miami',
              e: new Date('2019-01-18'),
            },
          ],
          popup: [
            {
              label: {
                t: 'Start here',
                h: 'https://ravencoin.online/getting-started/',
              },
              links: [
                {
                  t: 'Ravencoin Basics',
                  h: 'https://ravencoin.online/you-need-to-know',
                },
                {
                  t: 'ravencoin.online Wallet',
                  h: 'https://wallet.ravencoin.online/',
                },
                {
                  t: 'Ravencoin Wallets',
                  h: 'https://ravencoin.online/choose-your-wallet',
                },
                {
                  t: 'Avoiding Fraud',
                  h:
                    'https://ravencoin.online/guides/your-guide-to-avoiding-ravencoin-fraud',
                },
                {
                  t: 'FAQs',
                  h: 'https://ravencoin.online/faq',
                },
                {
                  t: 'Original Whitepaper',
                  h: 'https://ravencoin.online/ravencoin.pdf',
                },
              ],
            },
            {
              label: {
                t: 'Get Ravencoin',
                h: 'https://ravencoin.online/buy-ravencoin',
              },
              links: [
                {
                  t:
                    'Free Ravencoin <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://free.ravencoin.online/',
                },
                {
                  t: 'Ravencoin Exchanges',
                  h: 'https://ravencoin.online/buy-ravencoin',
                },
                {
                  t: 'Buy with Credit Card',
                  h: 'https://buy.ravencoin.online/',
                },
                {
                  t: 'Cloud Mining',
                  h: 'https://pool.ravencoin.online/index_en.html#buyhashrate',
                },
                {
                  t: 'Send Us Traffic',
                  h: 'https://games.ravencoin.online/referral',
                },
              ],
            },
            {
              label: {
                t: 'Use Ravencoin',
                h: 'https://store.ravencoin.online/',
              },
              links: [
                {
                  t:
                    'Tip with Ravencoin <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://tips.ravencoin.online/',
                },
                {
                  t: 'ravencoin.online Store',
                  h: 'https://store.ravencoin.online/',
                },
                {
                  t: 'Buy Gift Cards',
                  h: 'https://giftcards.ravencoin.online/',
                },
                {
                  t: 'Ravencoin ATMs',
                  h: 'https://ravencoin.online/ravencoin-atm/',
                },
                {
                  t: 'Debit Cards',
                  h: 'https://ravencoin.online/ravencoin-card',
                },
                {
                  t: 'Merchant Solutions',
                  h: 'https://ravencoin.online/merchant-solutions',
                },
                {
                  t: 'Play Games',
                  h: 'https://cashgames.ravencoin.online/',
                },
              ],
            },
            {
              label: {
                t: 'News',
                h: 'https://news.ravencoin.online/',
              },
              links: [
                {
                  t: 'Top Stories',
                  h: 'https://news.ravencoin.online/',
                },
                {
                  t: 'Blockchain Tech',
                  h: 'https://news.ravencoin.online/category/blockchain/',
                },
                {
                  t: 'Opinion',
                  h: 'https://news.ravencoin.online/op-ed/',
                },
                {
                  t: 'Altcoins',
                  h: 'https://news.ravencoin.online/category/altcoins/',
                },
                {
                  t: 'Press Releases',
                  h: 'https://news.ravencoin.online/press-releases/',
                },
                {
                  t: 'Submit Press Release',
                  h: 'https://news.ravencoin.online/submit-press-release/',
                },
              ],
            },
            {
              label: {
                t: 'Forum',
                h: 'https://forum.ravencoin.online/',
              },
              links: [
                {
                  t: 'AMA - Ask Me Anything',
                  h: 'https://forum.ravencoin.online/ama-ask-me-anything/',
                },
                {
                  t: 'General Discussion',
                  h: 'https://forum.ravencoin.online/ravencoin-discussion/',
                },
                {
                  t: 'Marketplace',
                  h: 'https://forum.ravencoin.online/marketplace/',
                },
                {
                  t: 'Technical',
                  h: 'https://forum.ravencoin.online/dev-tech-talk/',
                },
                {
                  t: 'Mining',
                  h: 'https://forum.ravencoin.online/mining/',
                },
              ],
            },
            {
              label: {
                t: 'Tools',
                h: 'https://tools.ravencoin.online/',
              },
              links: [
                {
                  t:
                    'Developer Platform <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://developer.ravencoin.online/',
                },
                {
                  t: 'Oracle <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://oracle.ravencoin.online/',
                },
                {
                  t: 'Blockchain Notary',
                  h: 'https://notary.ravencoin.online/',
                },
                {
                  t: 'Site Widgets',
                  h: 'https://ravencoin.online/widgets',
                },
                {
                  t: 'Block Explorer',
                  h: 'https://explorer.ravencoin.online/',
                },
                {
                  t: 'Signature Verifier',
                  h: 'https://tools.ravencoin.online/verify-message/',
                },
                {
                  t: 'Paper Wallet <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://paperwallet.ravencoin.online/',
                },
                {
                  t: 'Bounty Hunter',
                  h: 'https://bounty.ravencoin.online/',
                },
              ],
            },
            {
              label: {
                t: 'Economy',
                h: 'https://markets.ravencoin.online/',
              },
              links: [
                {
                  t: 'Markets <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://markets.ravencoin.online/',
                },
                {
                  t:
                    'Ravencoin (RVN) Charts <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://charts.ravencoin.online',
                },
                {
                  t: 'Price Converter',
                  h: 'https://tools.ravencoin.online/',
                },
                {
                  t: 'Issue Voting',
                  h: 'https://vote.ravencoin.online/',
                },
                {
                  t: 'Derivatives Exchanges',
                  h: 'https://ravencoin.online/derivative-exchanges',
                },
                {
                  t: 'Ravencoin Mining Pool',
                  h: 'https://pool.ravencoin.online/',
                },
              ],
            },
            {
              label: {
                t: 'Learn More',
                h: 'https://ravencoin.online/guides',
              },
              links: [
                {
                  t: 'Ravencoin Mining',
                  h: 'https://ravencoin.online/ravencoin-mining',
                },
                {
                  t: 'Podcast',
                  h: 'https://podcast.ravencoin.online/',
                },
                {
                  t: 'Guides',
                  h: 'https://ravencoin.online/guides',
                },
                {
                  t: 'Security',
                  h: 'https://ravencoin.online/security',
                },
              ],
            },
            {
              label: {
                t: 'Events',
                h: 'https://events.ravencoin.online/',
              },
            },
            {
              label: {
                t: 'About Us',
                h: 'https://ravencoin.online/about-us',
              },
              links: [
                {
                  t: 'Company Blog',
                  h: 'https://blog.ravencoin.online/',
                },
                {
                  t: 'Press Kit',
                  h: 'https://ravencoin.online/press',
                },
                {
                  t: 'Contact',
                  h: 'https://ravencoin.online/contact-us',
                },
                {
                  t: 'Work for Ravencoin',
                  h: 'https://ravencoin.online/jobs',
                },
                {
                  t: 'Advertise',
                  h: 'https://ravencoin.online/advertise',
                },
                {
                  t: 'Freedom <font color="#fab915"><em>[new]</em></font>',
                  h: 'https://freedom.ravencoin.online/',
                },
              ],
            },
          ],
        }
      },
      {},
    ],
    2: [
      function(t, i, o) {
        function e(t) {
          if (!t || 1 !== t.nodeType)
            throw new Error('A DOM Element reference is required')
          ;(this.el = t), (this.classList = t.classList)
        }

        function c(t, i) {
          if (((i = i || 'a method'), 'string' != typeof t))
            throw new TypeError(
              "Failed to execute '" +
                i +
                "' on 'ClassList': the token provided ('" +
                t +
                "') is not a string."
            )
          if ('' === t)
            throw new SyntaxError(
              "Failed to execute '" +
                i +
                "' on 'ClassList': the token provided must not be empty."
            )
          if (/\s/.test(t))
            throw new Error(
              "Failed to execute '" +
                i +
                "' on 'ClassList': the token provided ('" +
                t +
                "') contains HTML space characters, which are not valid in tokens."
            )
        }
        ;(i.exports = function(t) {
          return new e(t)
        }),
          (e.prototype.toArray = function() {
            var t = (this.el.getAttribute('class') || '').replace(
                /^\s+|\s+$/g,
                ''
              ),
              i = t.split(/\s+/)
            return '' === i[0] && i.shift(), i
          }),
          (e.prototype.add = function(t) {
            var i, o
            c(t, 'add'),
              this.classList
                ? this.classList.add(t)
                : ((i = this.toArray()),
                  (o = i.indexOf(t)),
                  -1 === o &&
                    (i.push(t), this.el.setAttribute('class', i.join(' '))))
          }),
          (e.prototype.contains = function(t) {
            return (
              c(t, 'contains'),
              this.classList
                ? this.classList.contains(t)
                : this.toArray().indexOf(t) > -1
            )
          }),
          (e.prototype.remove = function(t) {
            var i, o, e, n, s
            if ('[object RegExp]' == Object.prototype.toString.call(t))
              for (i = this.toArray(), e = 0, s = i.length; s > e; e++)
                t.test(i[e]) && this.remove(i[e])
            else
              c(t, 'remove'),
                this.classList
                  ? this.classList.remove(t)
                  : ((o = this.toArray()),
                    (n = o.indexOf(t)),
                    n > -1 &&
                      (o.splice(n, 1),
                      this.el.setAttribute('class', o.join(' '))))
          }),
          (e.prototype.toggle = function(t, i) {
            c(t, 'toggle')
            var o = this.contains(t),
              e = o ? i !== !0 && 'remove' : i !== !1 && 'add'
            return e && this[e](t), 'boolean' == typeof i ? i : !o
          })
      },
      {},
    ],
    3: [
      function(t, i, o) {
        i.exports = {
          id: 174,
          stamp: 1544461146145,
        }
      },
      {},
    ],
    4: [
      function(t, i, o) {
        function e() {
          if (!(document.getElementsByTagName('rvntm-top').length > 0)) {
            if ('string' == typeof RavencoinMenuLang) {
              var t = RavencoinMenuLang.toLowerCase()
              b[t] ? ((w = b[t]), (d = t)) : (w = b.en)
            }
            var i = RavencoinMenu.BASE + 'universal-menu.css'
            RavencoinMenu.BUILD.id && (i += '?' + RavencoinMenu.BUILD.id), l(i)
          }
        }

        function c() {
          if (!p()) return void window.setTimeout(c, 16)
          if (
            (a(),
            n(),
            s(),
            'undefined' != typeof RavencoinMenuWidth &&
              !isNaN(RavencoinMenuWidth))
          )
            for (
              var t = document.getElementsByClassName('rvntm-wrap'), i = 0;
              i < t.length;
              i++
            )
              t[i].style = 'max-width: ' + RavencoinMenuWidth + 'px !important;'
          if (
            ('https://markets.ravencoin.online/' !== document.URL &&
              ((g = new f(document.getElementById('rvntm-price'), !1)),
              (v = new f(document.getElementById('rvntm-price'), !0))),
            RavencoinMenuWidth < 1225)
          ) {
            var o = document.getElementsByClassName('rvntm-promo')
            if (o.length > 0) {
              var e = o[0]
              e.className = 'promo-hidden'
            }
          }
          h()
        }

        function n() {
          for (
            var t = [], i = new Date().getTime(), o = 0;
            o < w.promo.length;
            o++
          )
            w.promo[o].e.getTime() > i && t.push(w.promo[o])
          var e = null
          t.length > 0 && (e = t[Math.floor(Math.random() * t.length)])
          var c = document.createElement('div'),
            n = ['rvntm-top', 'cleanslate']
          null != e && n.push(e.c),
            d.length > 0 && n.push(d),
            (c.className = n.join(' ')),
            (c.id = 'rvntm-top')
          var s = [],
            a = 0
          ;(s[a++] = '<div class="rvntm-wrap">'),
            (s[a++] = '<h3 id="top-menu-logo">'),
            (s[a++] =
              '<a id="universal-menu-link" href="https://ravencoin.online/"><span>ravencoin.online</span></a>'),
            (s[a++] = '</h3>'),
            (s[a++] = '<ul>')
          for (var o = 0; o < w.top.length; o++)
            (s[a++] = '<li><a id="universal-menu-link" href="'),
              (s[a++] = w.top[o].h),
              (s[a++] = '">'),
              (s[a++] = w.top[o].t),
              (s[a++] = '</li>')
          ;(s[a++] = '</ul>'),
            null != e &&
              ((s[a++] = '<a id="header-promo" class="rvntm-promo" href="'),
              (s[a++] = e.h),
              (s[a++] = '" target="_new">'),
              (s[a++] = e.t),
              (s[a++] = '</a>')),
            (s[a++] = '<div id="rvntm-price" class="rvntm-right"></div>'),
            (s[a++] = '<div id="rvntm-price" class="rvntm-right"></div>'),
            (s[a++] = '<div id="univ-hmbgr" class="hmbgr-wrap">'),
            (s[a++] = '<div class="hmbgr"></div>'),
            (s[a++] = '</div>'),
            (s[a++] = '</div>'),
            (c.innerHTML = s.join('')),
            p().appendChild(c)
        }

        function s() {
          var t = document.createElement('div'),
            i = ['rvntm-popup', 'cleanslate']
          d.length > 0 && i.push(d),
            (t.className = i.join(' ')),
            (t.id = 'rvntm-popup')
          var o = [],
            e = 0
          o[e++] = '<div class="rvntm-wrap">'
          for (var c = 0; c < w.popup.length; c++) {
            var n = w.popup[c]
            ;(o[e++] = '<div class="cat">'),
              (o[e++] = '<a id="universal-megamenu-link" href="'),
              (o[e++] = n.label.h),
              (o[e++] = '" class="label">'),
              (o[e++] = n.label.t),
              (o[e++] = '</a>'),
              (o[e++] = '<ul>')
            for (var s = 0; s < n.links.length; s++)
              (o[e++] = '<li><a id="universal-megamenu-link" href="'),
                (o[e++] = n.links[s].h),
                (o[e++] = '">'),
                (o[e++] = n.links[s].t),
                (o[e++] = '</a>'),
                (o[e++] = '</li>')
            ;(o[e++] = '</ul>'), (o[e++] = '</div>')
          }
          ;(o[e++] = '<div class="clear">&nbsp;</div>'),
            (o[e++] = '<div class="social">'),
            (o[e++] =
              '<a id="universal-menu-link" href="https://twitter.com/Ravencoin">'),
            (o[e++] = u.twitter),
            (o[e++] = '</a>'),
            (o[e++] =
              '<a id="universal-menu-link" href="https://www.youtube.com/channel/UCetxkZolEBHX47BqtZktbkg">'),
            (o[e++] = u.youtube),
            (o[e++] = '</a>'),
            (o[e++] = '</div>'),
            (o[e++] = '</div>'),
            (t.innerHTML = o.join('')),
            p().appendChild(t)
        }

        function a() {
          var t = document.createElement('div')
          t.className = 'rvntm-spacer cleanslate'
          var i = p()
          i.childNodes.length > 0
            ? i.insertBefore(t, i.firstChild)
            : i.appendChild(t)
        }

        function h() {
          var t = document.getElementById('univ-hmbgr')
          t.addEventListener('click', r)
          var i = document.getElementById('rvntm-popup')
          i.addEventListener('wheel', function(t) {
            try {
              t.deltaY > 0
                ? i.scrollHeight - i.scrollTop - i.clientHeight <= 1 &&
                  t.preventDefault()
                : t.deltaY < 0 && 0 == i.scrollTop && t.preventDefault()
            } catch (o) {}
          })
        }

        function r() {
          var t = document.getElementById('rvntm-top'),
            i = document.getElementById('rvntm-popup')
          m(t).toggle('popped'), m(i).toggle('shown')
        }

        function p() {
          return document.getElementsByTagName('body')[0]
        }

        function l(t) {
          var i = document.createElement('link')
          ;(i.rel = 'stylesheet'),
            (i.type = 'text/css'),
            (i.href = t),
            (i.media = 'all'),
            (i.onload = c),
            document.getElementsByTagName('head')[0].appendChild(i)
        }
        var m = t('dom-classlist'),
          b = {
            en: t('../../menu'),
            jp: t('../../menu-jp'),
            es: t('../../menu-es'),
          },
          w = b.en,
          d = '',
          u = t('./svg'),
          f = t('./price'),
          g = null,
          v = null
        e()
      },
      {
        '../../menu': 3,
        '../../menu-es': 1,
        '../../menu-jp': 2,
        './price': 7,
        './svg': 11,
        'dom-classlist': 4,
      },
    ],
    5: [
      function(t, i, o) {
        function e(t, i) {
          ;(this.el = t),
            (this.last = {
              price: NaN,
              stamp: 0,
            }),
            (this.rvn = !!i)
          var o = 'core:usd'
          this.rvn && (o = 'rvn:usd'),
            n.register(o, this.processData.bind(this)),
            n.subscribe(o),
            n.subscribe('source:the-menu'),
            (this.key = this.rvn ? 'rvntm-price' : 'rvntm-price')
          var e = s.getObj(this.key)
          null != e &&
            (e.price && (this.last.price = e.price),
            e.stamp && (this.last.stamp = e.stamp)),
            this.build()
        }
        var c = t('dom-classlist'),
          n = t('./stream'),
          s = t('./storage')
        ;(e.prototype.build = function() {
          var t = document.createElement('a')
          ;(t.className = 'price-widget'),
            (t.href = 'https://markets.ravencoin.online/')
          var i = document.createElement('div')
          i.className = 'label'
          var o = document.createElement('div')
          ;(this.priceEl = document.createElement('span')),
            (this.priceEl.className = 'price'),
            (this.priceEl.innerHTML = '&mdash;'),
            (this.arrow = document.createElement('strong')),
            (this.arrow.className = 'arrow'),
            this.rvn
              ? ((i.innerHTML = 'RVN/USD'),
                (t.className += ' rvn'),
                (t.id = 'rvn-price-widget'))
              : ((i.innerHTML = 'RVN/USD'), (t.id = 'core-price-widget')),
            o.appendChild(this.priceEl),
            o.appendChild(this.arrow),
            t.appendChild(i),
            t.appendChild(o),
            this.el.appendChild(t)
        }),
          (e.prototype.update = function(t) {
            ;(this.priceEl.innerHTML = '$' + t.price.toFixed(0)),
              c(this.arrow).remove('up'),
              c(this.arrow).remove('down'),
              t.price > this.last.price && c(this.arrow).add('up'),
              t.price < this.last.price && c(this.arrow).add('down')
          }),
          (e.prototype.processData = function(t) {
            if (t.price) {
              var i = {
                price: t.price / 100,
                stamp: t.stamp,
              }
              this.update(i),
                (this.last.price = i.price),
                (this.last.stamp = i.stamp),
                s.setObj(this.key, this.last)
            }
          }),
          (Date.now = Date.now || new Date().getTime()),
          (i.exports = e)
      },
      {
        './storage': 9,
        './stream': 10,
        'dom-classlist': 4,
      },
    ],
    6: [
      function(t, i, o) {
        ;(window.RavencoinMenu = {
          BASE: 'https://menu.ravencoin.online/',
          WS: 'wss://index-api.ravencoin.online/ws',
          BUILD: t('./build'),
        }),
          t('./main')
      },
      {
        './build': 5,
        './main': 6,
      },
    ],
    7: [
      function(t, i, o) {
        function e() {
          return window.localStorage && 'localStorage' in window ? !0 : !1
        }

        function c(t, i) {
          var o = e() ? window.localStorage : h
          o[t] = i
        }

        function n(t) {
          var i = e() ? window.localStorage : h
          return i[t]
        }

        function s(t, i) {
          c(t, JSON.stringify(i))
        }

        function a(t) {
          var i = n(t)
          try {
            return JSON.parse(i)
          } catch (o) {
            return null
          }
        }
        var h = {}
        i.exports = {
          available: e,
          get: n,
          set: c,
          getObj: a,
          setObj: s,
        }
      },
      {},
    ],
    8: [
      function(t, i, o) {
        function e() {
          ;(this.callbacks = {}),
            (this.last = {}),
            (this.subscriptions = {}),
            (this.socket = null)
        }

        function c(t, i) {
          window[a].register(t, i), window[a].connect()
        }

        function n(t) {
          window[a].subscribe(t)
        }
        var s = RavencoinMenu.WS
        ;(e.prototype.register = function(t, i) {
          if (
            (this.callbacks.hasOwnProperty(t) || (this.callbacks[t] = []),
            'function' == typeof i && (this.callbacks[t].push(i), this.last[t]))
          )
            try {
              i(this.last[t])
            } catch (o) {}
        }),
          (e.prototype.subscribe = function(t) {
            this.subscriptions[t] ||
              (this.doSubscribe(t),
              (this.subscriptions[t] = new Date().getTime()))
          }),
          (e.prototype.doSubscribe = function(t) {
            try {
              this.socket.send(this.subscribeMessage(t))
            } catch (i) {}
          }),
          (e.prototype.subscribeMessage = function(t) {
            return JSON.stringify({
              op: 'subscribe',
              channel: t,
            })
          }),
          (e.prototype.dispatch = function(t, i) {
            if (((this.last[t] = i), this.callbacks.hasOwnProperty(t)))
              for (var o = 0; o < this.callbacks[t].length; o++)
                try {
                  this.callbacks[t][o](i)
                } catch (e) {}
          }),
          (e.prototype.connect = function() {
            if (null === this.socket)
              try {
                ;(this.socket = new WebSocket(s)),
                  (this.socket.onopen = this.onOpen.bind(this)),
                  (this.socket.onclose = this.onClose.bind(this)),
                  (this.socket.onmessage = this.onMessage.bind(this))
              } catch (t) {}
          }),
          (e.prototype.reconnect = function() {
            try {
              this.socket.readyState != WebSocket.CLOSED && this.socket.close()
            } catch (t) {}
            ;(this.socket = null),
              window.setTimeout(
                this.connect.bind(this),
                1e3 * (15 + 15 * Math.random())
              )
          }),
          (e.prototype.onOpen = function() {
            for (var t in this.subscriptions)
              this.subscriptions[t] && this.doSubscribe(t)
          }),
          (e.prototype.onClose = function() {
            this.reconnect()
          }),
          (e.prototype.onMessage = function(t) {
            try {
              var i = JSON.parse(t.data)
              i.hasOwnProperty('op') &&
                i.hasOwnProperty('data') &&
                this.dispatch(i.op, i.data)
            } catch (o) {}
          })
        var a = 'RavencoinComStream'
        ;(a in window && window.hasOwnProperty(a)) || (window[a] = new e()),
          (i.exports = {
            register: c,
            subscribe: n,
          })
      },
      {},
    ],
    9: [
      function(t, i, o) {
        var e =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M82.667,1H17.335C8.351,1,1,8.351,1,17.336v65.329c0,8.99,7.351,16.335,16.334,16.335h65.332 C91.652,99.001,99,91.655,99,82.665V17.337C99,8.353,91.652,1.001,82.667,1L82.667,1z M84.318,50H68.375v42.875H50V50h-8.855V35.973 H50v-9.11c0-12.378,5.339-19.739,19.894-19.739h16.772V22.3H72.967c-4.066-0.007-4.57,2.12-4.57,6.078l-0.023,7.594H86.75 l-2.431,14.027V50z"></path></svg>',
          c =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M97.284,26.359c-1-5.352-5.456-9.346-10.574-9.839c-12.221-0.784-24.488-1.42-36.731-1.428 c-12.244-0.007-24.464,0.616-36.687,1.388c-5.137,0.497-9.592,4.47-10.589,9.842C1.567,34.058,1,41.869,1,49.678 s0.568,15.619,1.703,23.355c0.996,5.372,5.451,9.822,10.589,10.314c12.226,0.773,24.439,1.561,36.687,1.561 c12.239,0,24.515-0.688,36.731-1.479c5.118-0.497,9.574-5.079,10.574-10.428C98.43,65.278,99,57.477,99,49.676 C99,41.88,98.428,34.083,97.284,26.359z M38.89,63.747V35.272l26.52,14.238L38.89,63.747z"></path></svg>',
          n =
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="height:100px;width:100px;">  <path class="inner-shape" style="opacity: 1; fill: rgb(255, 255, 255);" transform="translate(0,0) scale(1)" d="M99.001,19.428c-3.606,1.608-7.48,2.695-11.547,3.184c4.15-2.503,7.338-6.466,8.841-11.189 c-3.885,2.318-8.187,4-12.768,4.908c-3.667-3.931-8.893-6.387-14.676-6.387c-11.104,0-20.107,9.054-20.107,20.223 c0,1.585,0.177,3.128,0.52,4.609c-16.71-0.845-31.525-8.895-41.442-21.131C6.092,16.633,5.1,20.107,5.1,23.813 c0,7.017,3.55,13.208,8.945,16.834c-3.296-0.104-6.397-1.014-9.106-2.529c-0.002,0.085-0.002,0.17-0.002,0.255 c0,9.799,6.931,17.972,16.129,19.831c-1.688,0.463-3.463,0.71-5.297,0.71c-1.296,0-2.555-0.127-3.783-0.363 c2.559,8.034,9.984,13.882,18.782,14.045c-6.881,5.424-15.551,8.657-24.971,8.657c-1.623,0-3.223-0.096-4.796-0.282 c8.898,5.738,19.467,9.087,30.82,9.087c36.982,0,57.206-30.817,57.206-57.543c0-0.877-0.02-1.748-0.059-2.617 C92.896,27.045,96.305,23.482,99.001,19.428z"></path></svg>'
        i.exports = {
          twitter: n,
          youtube: c,
        }
      },
      {},
    ],
  },
  {},
  [8]
)
