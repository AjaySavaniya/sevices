(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(2056)
            }])
        },
        2056: function(e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                __N_SSG: function() {
                    return F
                },
                default: function() {
                    return W
                }
            });
            var t = r(5893),
                o = r(355),
                i = r(9008),
                s = r.n(i),
                a = r(1163),
                c = r(8847),
                l = r(7746),
                d = r(1664),
                u = r.n(d),
                h = r(7294),
                p = r(8917),
                f = r.n(p);

            function _(e) {
                var n = e.works,
                    r = (0, h.useState)(0),
                    i = r[0],
                    s = r[1],
                    a = {
                        "7-eleven": {
                            alt: "7-Eleven 7Rewards loyalty mobile app developed by Codigo",
                            title: "Mobile Application"
                        },
                        "fairprice-online": {
                            alt: "FairPrice online ecommerce website - UIUX by Codigo",
                            title: "Ecommerce Website"
                        },
                        comfortdelgro: {
                            alt: "ComfortDelGro taxi booking app developed by Codigo",
                            title: "Mobile Application (iOS/Android)"
                        }
                    };
                return (0, t.jsxs)("section", {
                    style: (0, c.P)({
                        x: -i,
                        items: n.length,
                        color: n[i].colour_scheme
                    }),
                    className: f().root,
                    children: [(0, t.jsx)("ul", {
                        className: f().list,
                        children: n.map(function(e) {
                            var n = e.title,
                                r = e.work_title,
                                i = e.intro,
                                s = e.slug,
                                d = e.retina_image,
                                h = e.colour_scheme,
                                p = a[s];
                            return (0, t.jsxs)("li", {
                                children: [(0, t.jsxs)("div", {
                                    className: f().content,
                                    children: [(0, t.jsxs)("h3", {
                                        children: [r, "-", (0, t.jsx)("span", {
                                            children: p.title
                                        })]
                                    }), (0, t.jsx)("h4", {
                                        children: n
                                    }), (0, t.jsx)("h5", {
                                        children: i
                                    }), (0, t.jsxs)(u(), {
                                        href: "/work/".concat(s),
                                        className: "animate-arrow",
                                        children: [(0, t.jsx)("span", {
                                            children: "Find out more"
                                        }), (0, t.jsx)(l.L, {})]
                                    })]
                                }), (0, t.jsx)("div", {
                                    style: (0, c.P)({
                                        bg: h
                                    }),
                                    className: f().image,
                                    children: (0, t.jsx)(o.Z, {
                                        alt: p.alt,
                                        src: d,
                                        priority: !0
                                    })
                                })]
                            }, s)
                        })
                    }), (0, t.jsx)("span", {
                        className: f().indicator,
                        children: n.map(function(e, n) {
                            return (0, t.jsx)("i", {
                                className: "".concat(n === i && f().active),
                                onClick: function() {
                                    return s(n)
                                }
                            }, n)
                        })
                    })]
                })
            }
            var m = r(6958),
                g = r.n(m);

            function w() {
                var e = [{
                        header: ["Create", "Bridges."],
                        body: "Design and development for brands and start-ups."
                    }, {
                        header: ["Build", "Digital."],
                        body: "Between your business objectives and what your customers want."
                    }, {
                        header: ["Make", "Sense."],
                        body: "Not client-vendor or vendor-client, we collaborate for the win."
                    }, ],
                    n = (0, h.useState)(0),
                    r = n[0],
                    o = n[1],
                    i = (0, h.useState)(!1),
                    s = i[0],
                    a = i[1],
                    c = (0, h.useState)(e[0].header[0]),
                    l = c[0],
                    d = c[1],
                    u = (0, h.useState)(e[0].header[1]),
                    p = u[0],
                    f = u[1];
                return (0, h.useEffect)(function() {
                    var n = [];
                    return n[0] = setTimeout(function() {
                            if (s) p ? f(p.slice(0, -1)) : l ? d(l.slice(0, -1)) : l || p || a(!1);
                            else {
                                var t = e[r].header;
                                l.length < t[0].length ? d(l + t[0][l.length]) : p.length < t[1].length ? f(p + t[1][p.length]) : n[1] = setTimeout(function() {
                                    o(r < e.length - 1 ? r + 1 : 0), a(!0)
                                }, 4e3)
                            }
                        }, 35),
                        function() {
                            n.map(clearTimeout)
                        }
                }, [r, s, l, p]), (0, t.jsxs)("section", {
                    className: g().root,
                    children: [(0, t.jsxs)("h1", {
                        className: g().title,
                        children: [(0, t.jsx)("span", {
                            children: "We"
                        }), (0, t.jsx)("span", {
                            children: l
                        }), (0, t.jsx)("span", {
                            children: p
                        })]
                    }), (0, t.jsxs)("div", {
                        className: g().description,
                        children: [(0, t.jsx)("p", {
                            className: "".concat(g().line, " ").concat(!s && g().animate),
                            children: (0, t.jsx)("i", {})
                        }), (0, t.jsx)("ul", {
                            className: g().list,
                            children: e.map(function(e, n) {
                                var o = e.body;
                                return (0, t.jsx)("li", {
                                    className: "".concat(!s && n === r && g().show),
                                    children: (0, t.jsx)("h2", {
                                        children: o
                                    })
                                }, n)
                            })
                        })]
                    })]
                })
            }
            var x = function(e) {
                    (0, h.useEffect)(e, [])
                },
                b = function(e) {
                    var n = (0, h.useRef)(e);
                    n.current = e, x(function() {
                        return function() {
                            return n.current()
                        }
                    })
                },
                y = function(e) {
                    var n = (0, h.useRef)(0),
                        r = (0, h.useState)(e),
                        t = r[0],
                        o = r[1],
                        i = (0, h.useCallback)(function(e) {
                            cancelAnimationFrame(n.current), n.current = requestAnimationFrame(function() {
                                o(e)
                            })
                        }, []);
                    return b(function() {
                        cancelAnimationFrame(n.current)
                    }), [t, i]
                },
                v = r(6362),
                j = function(e, n) {
                    void 0 === e && (e = 1 / 0), void 0 === n && (n = 1 / 0);
                    var r = y({
                            width: v.jU ? window.innerWidth : e,
                            height: v.jU ? window.innerHeight : n
                        }),
                        t = r[0],
                        o = r[1];
                    return (0, h.useEffect)(function() {
                        if (v.jU) {
                            var e = function() {
                                o({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            };
                            return (0, v.on)(window, "resize", e),
                                function() {
                                    (0, v.S1)(window, "resize", e)
                                }
                        }
                    }, []), t
                },
                k = r(8844),
                S = r.n(k),
                C = [{
                    label: "UX",
                    title: "User Experience",
                    content: function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("h2", {
                                children: "Because we are all users."
                            }), (0, t.jsx)("h4", {
                                children: "There are 4 key stages to our UX process."
                            }), (0, t.jsx)("h3", {
                                children: "Stage I - UNDERSTAND"
                            }), (0, t.jsx)("h4", {
                                children: "Through collaborative client sessions and hands-on experience of the service or product, we aim to fully apprehend all business objectives to kickstart our UX process via Requirements & Constraints Gathering, Field Studies, Stakeholder interviews, User interviews, Google Design Sprints and more."
                            }), (0, t.jsx)("h3", {
                                children: "Stage II - EXPLORE"
                            }), (0, t.jsx)("h4", {
                                children: "Understanding what the target audience’ needs and wants then taking a deep dive into the varied user behaviours to define the core architecture of the product’s user experience through processes like User Focus Groups, Quantitative Research / Qualitative Research, Competitive Analysis, Card Sorting, User Stories, Personas Building and Journey Mapping."
                            }), (0, t.jsx)("h3", {
                                children: "Stage III - CONSTRUCT"
                            }), (0, t.jsx)("h4", {
                                children: "Bringing UX to life through thorough content maps, meticulous and high fidelity wireframes and beautiful designs of various screen sizes with Information Architecture, Content Strategy, User Flows, Wireframes and Screen Designs."
                            }), (0, t.jsx)("h3", {
                                children: "Stage IV - VALIDATE"
                            }), (0, t.jsx)("h4", {
                                children: "We take user feedback seriously. Different degrees of user tests are conducted with wireframe/design prototypes to help validate our thinking and intent."
                            })]
                        })
                    }
                }, {
                    label: "UI",
                    title: "Interface Design",
                    content: function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("h3", {
                                children: "We live to design."
                            }), (0, t.jsx)("h4", {
                                children: "Our design motto: Don’t be the same, be better. (as written on our office wall)"
                            }), (0, t.jsx)("h3", {
                                children: "INTERPRETING WIREFRAMES"
                            }), (0, t.jsx)("h4", {
                                children: "Our UI designers do not colour the wireframes, we interpret and handpick the most ideal font, typography, iconography and photography style to present your product in the most appealing manner. We take effort and pride in designing the most intuitive interface for anyone experiencing the product."
                            }), (0, t.jsx)("h3", {
                                children: "CONSTANTLY CHALLENGED"
                            }), (0, t.jsx)("h4", {
                                children: "We never design any product similar. We believe in creating a distinctive look & feel for any of our clients. We learn from every product we’ve designed and apply the learnings to design a fresher and comfortable experience for the next one."
                            }), (0, t.jsx)("h3", {
                                children: "INTERACTION IS KING"
                            }), (0, t.jsx)("h4", {
                                children: "Beyond the screen designs, our team of designers work closely with our developers during the entire development process to infuse delightful interactions and visual feedback into our products to create an impression that will stick with all users."
                            }), (0, t.jsx)("h3", {
                                children: "BRAND GUIDELINES & BEYOND"
                            }), (0, t.jsx)("h4", {
                                children: "We know how to work our way with brand guidelines and push the design to greater heights that will constantly remind your users of your brand hence keeping you top of mind."
                            })]
                        })
                    }
                }, {
                    label: "M",
                    title: "Mobile App Development",
                    content: function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("h3", {
                                children: "We’re native & hybrid."
                            }), (0, t.jsx)("h4", {
                                children: "Our strong team of engineers are passionate about coding, anime and all things tech."
                            }), (0, t.jsx)("h3", {
                                children: "STARTING THE RIGHT WAY"
                            }), (0, t.jsx)("h4", {
                                children: "Our tech team is involved right from the beginning, Tech leads participate in the Software Requirements Specifications process, anticipate and suggest appropriate tech stacks considering your business existing system architecture if applicable or simply recommend the best solution according to the business needs."
                            }), (0, t.jsx)("h3", {
                                children: "ALL STACK, ANY STACK"
                            }), (0, t.jsx)("h4", {
                                children: "We have expertise across these stacks - Kotlin, Java, Swift, ObjectiveC, React Native & Flutter and will be ready for anything Apple or Google will spin up in future."
                            }), (0, t.jsx)("h4", {
                                children: "For every project, a tech team will be set up with a lead and min. 2 engineers per OS (native) to ensure maximum efficacy and code hygience. Also, the knowledge will be shared across the entire tech team as well as resolving any potential coding difficulties with the team’s collective experience of coding numerous products of various industries and complexities."
                            }), (0, t.jsx)("h3", {
                                children: "ANALYTICS CHECKED"
                            }), (0, t.jsx)("h4", {
                                children: "All products or platforms we built are by defaulted integrated with Google Analytics or Firebase or your own analytical tool to keep track of your product’s performance and your users’ behaviours."
                            }), (0, t.jsx)("h3", {
                                children: "KEEPING US AHEAD"
                            }), (0, t.jsx)("h4", {
                                children: "Via weekly sharing sessions, the tech team shares latest industry standards, updates as well new ways to work more efficiently with one another so we are never behind any upcoming tech trends."
                            })]
                        })
                    }
                }, {
                    label: "W",
                    title: "Website Development",
                    content: function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("h3", {
                                children: "Responsive is a default."
                            }), (0, t.jsx)("h4", {
                                children: "Any screen size, any browser, any kind of website - microsite, web platform or web app."
                            }), (0, t.jsx)("h3", {
                                children: "STARTING THE RIGHT WAY"
                            }), (0, t.jsx)("h4", {
                                children: "Our web team is involved right from the beginning, Tech leads participate in the Software Requirements Specifications process, anticipate and suggest appropriate tech stacks considering your business existing system architecture if applicable or simply recommend the best solution according to the business needs."
                            }), (0, t.jsx)("h3", {
                                children: "RESPONSIVE IS A MUST"
                            }), (0, t.jsx)("h4", {
                                children: "Making sure we cover mobile web is a default in Codigo, our web team strives to translate the immersive desktop experience as closely as possible to our tiny phone screens. Our web team also takes pride in creating the exact experience across all common browsers,like Chrome, Safari, Firefox and Edge, on both PC and Mac."
                            }), (0, t.jsx)("h3", {
                                children: "ANALYTICS CHECKED"
                            }), (0, t.jsx)("h4", {
                                children: "All products or platforms we built are by defaulted integrated with Google Analytics or Firebase or your own analytical tool to keep track of your product’s performance and your users’ behaviours."
                            }), (0, t.jsx)("h3", {
                                children: "KEEPING US AHEAD"
                            }), (0, t.jsx)("h4", {
                                children: "Via weekly sharing sessions, the web team shares latest industry standards, updates as well new ways to work more efficiently with one another so we are never behind any upcoming tech trends."
                            })]
                        })
                    }
                }, {
                    label: "C",
                    title: "Customised CMS Solutions",
                    content: function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("h3", {
                                children: "Your business’ command centre."
                            }), (0, t.jsx)("h4", {
                                children: "Building a fully customised and readily expandable CMS to control content and harvest user data."
                            }), (0, t.jsx)("h3", {
                                children: "INTEGRATION-READY"
                            }), (0, t.jsx)("h4", {
                                children: "We are proficient and recognised in Amazon Web Services and Microsoft Azure. Our tech team can work independently to provide guidance on your infrastructure set-up or collaborate with your existing partner or internal team to ensure a smooth integration for your product."
                            }), (0, t.jsx)("h3", {
                                children: "DASHBOARD ENVY"
                            }), (0, t.jsx)("h4", {
                                children: "All our bespoke CMS include a dashboard for a god’s eye view of how your product is performing or operating with defined access for your own internal stakeholders or users. User activities and behaviour are all recorded via our backend and can be allowed for data extraction for you to optimise or improve your product’s performance."
                            }), (0, t.jsx)("h3", {
                                children: "SECURITY IS KEY"
                            }), (0, t.jsx)("h4", {
                                children: "We take users' privacy very seriously. Data security and encryption is top priority for all projects we build and we are always prepared to work with your team for rigorous penetration tests."
                            }), (0, t.jsx)("h3", {
                                children: "SKIP THE MAINTENANCE CONTRACT"
                            }), (0, t.jsx)("h4", {
                                children: "Your team and yourself will also have access to create or edit any content published on your mobile apps or websites easily via the CMS at your convenience without constantly updating your mobile apps in App Store or Google Play."
                            })]
                        })
                    }
                }, ];

            function N() {
                var e = (0, h.useRef)(null),
                    n = j(),
                    r = (0, h.useState)(0),
                    o = r[0],
                    i = r[1];
                return (0, h.useEffect)(function() {
                    Array.from(e.current.querySelectorAll("article")).forEach(function(e) {
                        var n = e.querySelector(".content").clientHeight;
                        e.style.height = "".concat(n + 100, "px")
                    })
                }, [e, n]), (0, t.jsxs)("section", {
                    className: S().root,
                    children: [(0, t.jsx)("h2", {
                        className: "section-title",
                        children: "The Codigo Process"
                    }), (0, t.jsxs)("div", {
                        className: S().container,
                        children: [(0, t.jsx)("ul", {
                            className: S().tabs,
                            children: C.map(function(e, n) {
                                var r = e.label,
                                    s = e.title;
                                return (0, t.jsxs)("li", {
                                    className: "".concat(n === o && S().active),
                                    onClick: function() {
                                        return i(n)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        children: r
                                    }), (0, t.jsx)("button", {
                                        children: (0, t.jsx)("h2", {
                                            children: s
                                        })
                                    })]
                                }, r)
                            })
                        }), (0, t.jsx)("div", {
                            ref: e,
                            className: S().text,
                            children: C.map(function(e, n) {
                                var r = e.label,
                                    i = e.content;
                                return (0, t.jsx)("article", {
                                    className: "".concat(n !== o && S().hidden),
                                    children: (0, t.jsx)("div", {
                                        className: "content",
                                        children: i()
                                    })
                                }, r)
                            })
                        })]
                    })]
                })
            }
            var A = r(9606),
                I = r.n(A),
                F = !0;

            function W(e) {
                var n = e.works,
                    r = (0, a.useRouter)();
                return (0, t.jsxs)("main", {
                    className: I().main,
                    children: [(0, t.jsxs)(s(), {
                        children: [(0, t.jsx)("title", {
                            children: "Mobile App Development Company in Singapore | Codigo SG"
                        }), (0, t.jsx)("meta", {
                            name: "description",
                            content: "Top trusted mobile, web and system developers in Singapore since 2010. Specialist in UIUX, consultancy and full cycle product development. Apps used by millions monthly."
                        })]
                    }), (0, t.jsx)(w, {}), (0, t.jsxs)("section", {
                        className: I().logos,
                        children: [(0, t.jsx)("h1", {
                            className: "section-title",
                            children: "Award Winning Mobile App and Web Development Company Based in Singapore"
                        }), (0, t.jsx)("ul", {
                            children: [{
                                alt: "Brother Printer mobile app developed by Codigo",
                                image: "brother"
                            }, {
                                alt: "Furama hotel mobile app developed by Codigo",
                                image: "furama"
                            }, {
                                alt: "HBO Go - UIUX by Codigo",
                                image: "HBO"
                            }, {
                                alt: "Isetan mobile app developed by Codigo",
                                image: "isetan"
                            }, {
                                alt: "OCBC Pay Anyone - UIUX by Codigo",
                                image: "OCBC"
                            }, {
                                alt: "SATS Ready to Travel mobile app developed by Codigo",
                                image: "SATS"
                            }, {
                                alt: "Suntory Waterful mobile app developed by Codigo",
                                image: "suntory"
                            }, {
                                alt: "Wildlife Reserves Singapore zoo mobile app developed by Codigo",
                                image: "wildlife-reserves"
                            }, ].map(function(e, n) {
                                var r = e.alt,
                                    i = e.image;
                                return (0, t.jsxs)("li", {
                                    children: [(0, t.jsx)(o.Z, {
                                        alt: r,
                                        src: "logos/".concat(i, ".svg"),
                                        fill: !0
                                    }), (0, t.jsxs)("h3", {
                                        style: {
                                            display: "none"
                                        },
                                        children: [" ", r]
                                    })]
                                }, n)
                            })
                        })]
                    }), (0, t.jsx)(_, {
                        works: n
                    }), (0, t.jsxs)("section", {
                        className: I().services,
                        children: [(0, t.jsx)("h2", {
                            className: "section-title",
                            children: "What we can do for you or your business"
                        }), (0, t.jsx)("ul", {
                            children: [{
                                link: "/uiux",
                                image: "ux",
                                color: "#ffff65",
                                header: "User Experience",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "UX is the core to everything we build in Codigo. We take user research, competitive analysis, wireframes, user flows, content maps etc. very seriously."
                                    })
                                }
                            }, {
                                link: "/uiux",
                                image: "ui",
                                color: "#eed9dc",
                                header: "Interface Design",
                                desc: function() {
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: ["Form & Function co-exists in Codigo.", (0, t.jsx)("br", {}), "We keep ourselves constantly inspired with top trends in the design industry to craft gorgeous interactions for your brand."]
                                    })
                                }
                            }, {
                                image: "co",
                                color: "#b3262e",
                                header: "Consultancy",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype."
                                    })
                                }
                            }, {
                                link: "/mobile-app",
                                image: "mob",
                                color: "#177bd1",
                                header: "Mobile Development",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant."
                                    })
                                }
                            }, {
                                link: "/web",
                                image: "web",
                                color: "#ff8d6e",
                                header: "Web Development",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "Websites, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does."
                                    })
                                }
                            }, {
                                image: "cms",
                                color: "#0f7173",
                                header: "CMS",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "We build fully customisable and readily expandable Content Management System with a dashboard so you can monitor the activities on your product 24/7."
                                    })
                                }
                            }, {
                                image: "et",
                                color: "#453042",
                                header: "Emerging Tech",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did."
                                    })
                                }
                            }, {
                                image: "coach",
                                color: "#873955",
                                header: "Coaching",
                                desc: function() {
                                    return (0, t.jsx)(t.Fragment, {
                                        children: "Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams."
                                    })
                                }
                            }, ].map(function(e) {
                                var n = e.link,
                                    i = e.image,
                                    s = e.color,
                                    a = e.desc,
                                    l = e.header;
                                return (0, t.jsxs)("li", {
                                    style: {
                                        cursor: n ? "pointer" : "default"
                                    },
                                    onClick: function() {
                                        return n && r.push(n)
                                    },
                                    children: [(0, t.jsx)("div", {
                                        style: (0, c.P)({
                                            color: s
                                        }),
                                        className: I().image,
                                        children: (0, t.jsx)(o.Z, {
                                            alt: l,
                                            src: "services/".concat(i, ".png")
                                        })
                                    }), (0, t.jsxs)("article", {
                                        className: I().content,
                                        children: [(0, t.jsx)("a", {
                                            href: n,
                                            children: (0, t.jsx)("h2", {
                                                children: l
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: a()
                                        })]
                                    })]
                                }, s)
                            })
                        })]
                    }), (0, t.jsx)(N, {})]
                })
            }
        },
        8847: function(e, n, r) {
            "use strict";
            r.d(n, {
                P: function() {
                    return c
                },
                Y: function() {
                    return a
                }
            });
            var t = r(4924),
                o = r(6042),
                i = r(9396),
                s = r(828),
                a = function(e) {
                    return e.replace("&amp;", "&")
                },
                c = function(e) {
                    return Object.entries(e).reduce(function(e, n) {
                        var r = (0, s.Z)(n, 2),
                            a = r[0],
                            c = r[1];
                        return c ? (0, i.Z)((0, o.Z)({}, e), (0, t.Z)({}, "--".concat(a), c)) : e
                    }, {})
                }
        },
        9606: function(e) {
            e.exports = {
                "font-sans": "Index_font-sans__myxFv",
                "font-mono": "Index_font-mono__F37ka",
                "font-serif": "Index_font-serif__k2Hie",
                paging: "Index_paging__RPNKj",
                services: "Index_services__eZdpb",
                logos: "Index_logos__1AV04",
                "fade-in-70px": "Index_fade-in-70px__RlwKx",
                "fade-in": "Index_fade-in__OC2RI",
                main: "Index_main__DZLha",
                image: "Index_image__qCPb4",
                content: "Index_content__Sv2oK",
                "fade-out": "Index_fade-out__SY3mc",
                "grow-up": "Index_grow-up__f4pT1",
                "grow-down": "Index_grow-down__cBnm9",
                "scale-in": "Index_scale-in__yw0i2",
                "scale-down": "Index_scale-down__cm1f_",
                wave: "Index_wave__Kdey8",
                blink: "Index_blink__CSkSa",
                spin: "Index_spin__jHfaS"
            }
        },
        8917: function(e) {
            e.exports = {
                "font-sans": "Featured_font-sans__HXLcI",
                "font-mono": "Featured_font-mono__YM0HD",
                "font-serif": "Featured_font-serif__etoWj",
                paging: "Featured_paging__A9nVc",
                root: "Featured_root__Mvzuc",
                "fade-in-70px": "Featured_fade-in-70px__5_C2s",
                "fade-in": "Featured_fade-in__B0Cqq",
                list: "Featured_list__CA6pf",
                image: "Featured_image__1Wzz7",
                content: "Featured_content__xVIyl",
                indicator: "Featured_indicator__xYCXo",
                active: "Featured_active__pl2Nk",
                "fade-out": "Featured_fade-out__nt4Pf",
                "grow-up": "Featured_grow-up__acMvB",
                "grow-down": "Featured_grow-down__hbRzM",
                "scale-in": "Featured_scale-in__Ev_lO",
                "scale-down": "Featured_scale-down__8WfGI",
                wave: "Featured_wave__UA73u",
                blink: "Featured_blink__BKJV_",
                spin: "Featured_spin__moSA1"
            }
        },
        6958: function(e) {
            e.exports = {
                "font-sans": "Hero_font-sans__ppMQu",
                "font-mono": "Hero_font-mono__80uxH",
                "font-serif": "Hero_font-serif__qhNcC",
                paging: "Hero_paging__ukMpS",
                "fade-in-70px": "Hero_fade-in-70px__VZ8Al",
                "fade-in": "Hero_fade-in__k2Bbx",
                root: "Hero_root__dVdur",
                title: "Hero_title__jQyYh",
                "header-onboard": "Hero_header-onboard__dPFey",
                description: "Hero_description__x819h",
                list: "Hero_list__BJZV_",
                show: "Hero_show__Q_N5W",
                "fade-in-top": "Hero_fade-in-top__oZQVT",
                line: "Hero_line__jYE2T",
                animate: "Hero_animate__8fRU2",
                progress: "Hero_progress__0xXFf",
                "fade-out": "Hero_fade-out__hRRCM",
                "grow-up": "Hero_grow-up__NO2TA",
                "grow-down": "Hero_grow-down__DDZ_2",
                "scale-in": "Hero_scale-in___8VKp",
                "scale-down": "Hero_scale-down__sODET",
                wave: "Hero_wave__TamtZ",
                blink: "Hero_blink__75BjP",
                spin: "Hero_spin__nSC8i",
                "top-full": "Hero_top-full__aGk3w"
            }
        },
        8844: function(e) {
            e.exports = {
                "font-sans": "Workflows_font-sans__0eo16",
                "font-mono": "Workflows_font-mono___ETob",
                "font-serif": "Workflows_font-serif__s0Bcj",
                paging: "Workflows_paging__fvk_K",
                root: "Workflows_root__GHAtF",
                "fade-in-70px": "Workflows_fade-in-70px__w_8cu",
                "fade-in": "Workflows_fade-in__psh87",
                tabs: "Workflows_tabs__EQnFJ",
                active: "Workflows_active__ZfNvN",
                text: "Workflows_text__vDnBF",
                hidden: "Workflows_hidden__eQee1",
                container: "Workflows_container__9185Y",
                articles: "Workflows_articles__KLA5u",
                "fade-out": "Workflows_fade-out__Kp_65",
                "grow-up": "Workflows_grow-up__N8FCN",
                "grow-down": "Workflows_grow-down__USBFt",
                "scale-in": "Workflows_scale-in__1j2A9",
                "scale-down": "Workflows_scale-down__XAgXm",
                wave: "Workflows_wave__XadTe",
                blink: "Workflows_blink__WP6f7",
                spin: "Workflows_spin__vdJZY"
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);