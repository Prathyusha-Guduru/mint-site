(this.webpackJsonpbuddhamint = this.webpackJsonpbuddhamint || []).push([
  [0],
  {
    238: function (e) {
      e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"destination","type":"address"}],"name":"gift","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmountPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleEndDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleMaxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setNftPerAddressLimitPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_preSaleDate","type":"uint256"}],"name":"setPreSaleDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_preSaleEndDate","type":"uint256"}],"name":"setPreSaleEndDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setPresaleCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPresaleMaxSupply","type":"uint256"}],"name":"setPresaleMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_publicSaleDate","type":"uint256"}],"name":"setPublicSaleDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmountPreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"whitelistUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]');
    },
    246: function (e, t, n) {},
    259: function (e, t) {},
    268: function (e, t) {},
    286: function (e, t) {},
    288: function (e, t) {},
    307: function (e, t) {},
    308: function (e, t) {},
    370: function (e, t) {},
    372: function (e, t) {},
    405: function (e, t) {},
    407: function (e, t) {},
    408: function (e, t) {},
    413: function (e, t) {},
    415: function (e, t) {},
    421: function (e, t) {},
    423: function (e, t) {},
    436: function (e, t) {},
    448: function (e, t) {},
    451: function (e, t) {},
    456: function (e, t) {},
    463: function (e, t) {},
    472: function (e, t) {},
    474: function (e, t) {},
    544: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(28),
        i = n.n(a),
        s = n(234),
        r = n.n(s),
        u = (n(245), n(246), n(4)),
        p = n.n(u),
        o = n(66),
        d = n(42),
        c = n(78),
        l = n.n(c),
        y = n(131),
        m = n(238),
        b = new l.a(
          "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        ),
        f = "0x91EEEd7eaD1248c96172646FfC0eFf835259f4fB",
        h = new b.eth.Contract(m, f),
        j = n.p + "static/media/buddhaspinner.610286e9.gif",
        w = n.p + "static/media/mint.4dda94df.png",
        v = n(14);
      var T = function () {
          var e = 0.121,
            t = Object(a.useState)(),
            n = Object(d.a)(t, 2),
            i = n[0],
            s = n[1],
            r = Object(a.useState)(),
            u = Object(d.a)(r, 2),
            c = (u[0], u[1], Object(a.useState)(0)),
            m = Object(d.a)(c, 2),
            b = m[0],
            T = m[1],
            x = Object(a.useState)("0%"),
            O = Object(d.a)(x, 2),
            g = O[0],
            M = O[1],
            k = Object(a.useState)(1),
            I = Object(d.a)(k, 2),
            F = I[0],
            N = I[1],
            S = Object(a.useState)(e),
            A = Object(d.a)(S, 2),
            B = A[0],
            _ = A[1],
            C = Object(a.useState)(!1),
            E = Object(d.a)(C, 2),
            P = (E[0], E[1], Object(a.useState)(!1)),
            R = Object(d.a)(P, 2),
            U = R[0],
            L = R[1];
          async function J() {
            return (J = Object(o.a)(
              p.a.mark(function e() {
                var t, n;
                return p.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = B.toString()),
                          console.log(y.a.utils.parseEther(t)._hex),
                          (n = {
                            from: i,
                            to: f,
							gasPrice: y.a.utils.formatEther('36')._hex,
                            value: y.a.utils.parseEther(t)._hex,
                            data: h.methods.mint(F).encodeABI(),
                          }),
                          (e.next = 5),
                          window.ethereum.request({
                            method: "eth_sendTransaction",
                            params: [n],
                          })
                        );
                      case 5:
                        e.sent;
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(a.useEffect)(function () {
              function e() {
                return (e = Object(o.a)(
                  p.a.mark(function e() {
                    return p.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (void 0 === typeof window.ethereum) {
                              e.next = 4;
                              break;
                            }
                            return (
                              console.log("MetaMask is installed!"),
                              (e.next = 4),
                              window.ethereum.enable()
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              function t() {
                return (t = Object(o.a)(
                  p.a.mark(function e() {
                    var t;
                    return p.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!window.ethereum) {
                              e.next = 4;
                              break;
                            }
                            (t = new l.a(window.ethereum)), (e.next = 9);
                            break;
                          case 4:
                            if (!window.web3) {
                              e.next = 8;
                              break;
                            }
                            (t = new l.a(window.web3.currentProvider)),
                              (e.next = 9);
                            break;
                          case 8:
                            return e.abrupt("return");
                          case 9:
                            t.eth.getAccounts().then(
                              (function () {
                                var e = Object(o.a)(
                                  p.a.mark(function e(t) {
                                    return p.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            s(t[0]);
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            );
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              function n() {
                return (n = Object(o.a)(
                  p.a.mark(function e() {
                    var t;
                    return p.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), h.methods.totalSupply().call();
                          case 2:
                            (t = e.sent),
                              T(t),
                              M(((t / 8000) * 100).toString() + "%"),
                              console.log(g);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                n.apply(this, arguments);
              })(),
                (function () {
                  t.apply(this, arguments);
                })(),
                (function () {
                  e.apply(this, arguments);
                })();
            }),
            Object(v.jsxs)("header", {
              id: "showcase",
              children: [
                Object(v.jsx)("div", { className: "showcase-cover" }),
                Object(v.jsxs)("div", {
                  className: "showcase-content",
                  children: [
                    Object(v.jsx)("img", { src: j, width: "300px" }),
                    !U &&
                      Object(v.jsxs)("div", {
                        id: "info-block",
                        children: [
                          Object(v.jsx)("h1", {
                            children: "Minting Now! Click the Button Below",
                          }),
                          Object(v.jsx)("br", {}),
                          Object(v.jsx)("div", {
                            className: "progress",
                            children: Object(v.jsx)("div", {
                              style: { width: g },
                              className: "progress-bar bg-danger",
                              role: "progressbar",
                              "aria-valuenow": "0",
                              "aria-valuemin": "0",
                              "aria-valuemax": "100",
                            }),
                          }),
                          Object(v.jsxs)("p", {
                            style: { color: "#fff" },
                            children: [b, " minted of 9,999"],
                          }),
                          Object(v.jsx)("a", {
                            href: "javascript:void(0);",
                            onClick: function () {
                              L(!0);
                            },
                            className: "btn btn-danger btn-lg",
                            children: "MINT NOW!",
                          }),
                          Object(v.jsx)("br", {}),
                          Object(v.jsx)("br", {}),
                          Object(v.jsx)("p", {
                            children: Object(v.jsx)("small", {
                              children:
                                void 0 !== i &&
                                Object(v.jsxs)("span", {
                                  className: "badge bg-dark",
                                  children: [
                                    Object(v.jsx)("span", {
                                      className:
                                        "badge rounded-pill bg-success",
                                      style: { marginRight: "5px" },
                                      children: "Online",
                                    }),
                                    (function (e) {
                                      if (e)
                                        return (
                                          e.substring(0, 5) +
                                          "..." +
                                          e.substring(e.length - 4, e.length)
                                        );
                                    })(i),
                                  ],
                                }),
                            }),
                          }),
                        ],
                      }),
                    U &&
                      Object(v.jsxs)("div", {
                        id: "info-block",
                        children: [
                          void 0 !== i &&
                            Object(v.jsxs)(v.Fragment, {
                              children: [
                                Object(v.jsxs)("div", {
                                  className: "row",
                                  children: [
                                    Object(v.jsx)("p", {
                                      style: { fontWeight: "bold" },
                                      children:
                                        "Select how many Fishi you would like!",
                                    }),
                                    Object(v.jsxs)("div", {
                                      className: "col-md-12 text-center",
                                      children: [
                                        Object(v.jsx)("h1", { children: F }),
                                        Object(v.jsx)("p", {
                                          children: "Buddha(s)",
                                        }),
                                        Object(v.jsx)("a", {
                                          style: { marginRight: "4px" },
                                          href: "javascript:void(0);",
                                          className: "btn btn-lg btn-danger",
                                          onClick: function () {
                                            20 !== F &&
                                              (N(F + 1), _(e * (F + 1)));
                                          },
                                          children: "+",
                                        }),
                                        Object(v.jsx)("a", {
                                          style: { marginLeft: "4px" },
                                          href: "javascript:void(0);",
                                          className: "btn btn-lg btn-danger",
                                          onClick: function () {
                                            1 !== F && (N(F - 1), _(B - e));
                                          },
                                          children: "-",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(v.jsx)("br", {}),
                                Object(v.jsx)("a", {
                                  href: "javascript:void(0);",
                                  onClick: function () {
                                    return J.apply(this, arguments);
                                  },
                                  children: Object(v.jsx)("img", {
                                    src: w,
                                    width: "150px",
                                  }),
                                }),
                              ],
                            }),
                          void 0 === i &&
                            Object(v.jsxs)("p", {
                              children: [
                                "Please connect to a MetaMask wallet. If you are using another wallet provider, please refer to our ",
                                Object(v.jsx)("a", {
                                  href: "https://rinkeby.etherscan.io/address/0x91EEEd7eaD1248c96172646FfC0eFf835259f4fB",
                                  children: "smart contract",
                                }),
                                " on Etherscan. To find out how to mint using Etherscan, please ",
                                Object(v.jsx)("a", {
                                  href: "https://tokenmint.io/blog/how-to-mint-new-tokens-using-etherscan.html",
                                  target: "_blank",
                                  children: "use this resource for details",
                                }),
                                ". Sorry for the inconvenience.",
                              ],
                            }),
                          Object(v.jsx)("br", {}),
                          Object(v.jsxs)("p", {
                            children: ["Price: ", B.toFixed(4), " ETH + gas "],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        x = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 548))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), i(e), s(e), r(e);
              });
        };
      r.a.render(
        Object(v.jsx)(i.a.StrictMode, { children: Object(v.jsx)(T, {}) }),
        document.getElementById("root")
      ),
        x();
    },
  },
  [[544, 1, 2]],
]);
