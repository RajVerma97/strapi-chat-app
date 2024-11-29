(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_page_tsx_32efbb._.js", {

"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$fetch$2d$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-fetch-users.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$logout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-logout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2d$io$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/socket-io.ts [app-client] (ecmascript)");
// import { User } from "@/types/login-user";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { data: strapiUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$fetch$2d$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(strapiUsers);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    console.log(users);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2d$io$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].on("newMessage", {
                "Home.useEffect": (incomingMessage)=>{
                    setData({
                        "Home.useEffect": (prev)=>[
                                ...prev,
                                incomingMessage
                            ]
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2d$io$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].off("newMessage");
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!message.trim()) return;
        if (!user) {
            console.error("User is not logged in");
            return;
        }
        const messageData = {
            type: "text",
            content: message,
            sender: user.id,
            receiver: user.id
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$socket$2d$io$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].emit("sendMessage", messageData);
        setMessage("");
    };
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$logout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogout"])();
    const handleLogout = ()=>{
        logout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold",
                children: "Chat Application"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "List of users"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            users.map(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        user?.username,
                        "L"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-4",
                children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Username: ",
                                user.username
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Email: ",
                                user.email
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            children: "logout"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            children: "login"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/register",
                            children: "register"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block mb-2 text-sm font-medium",
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "text",
                        name: "message",
                        placeholder: "Type your message",
                        className: "w-full p-2 border border-gray-300 rounded-md text-black",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        type: "submit",
                        className: "mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
                        children: "Send Message"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: "Login to send messages."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: "Chat Messages"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: data.length > 0 ? data.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: msg.sender
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            ": ",
                            msg.content
                        ]
                    }, `${msg.sender}-${index}`, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No messages yet."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
} // import React, { useState, useEffect, useRef } from "react";
 // import { Card, CardContent, CardFooter } from "@/components/ui/card";
 // import { Input } from "@/components/ui/input";
 // import { Button } from "@/components/ui/button";
 // const ChatInterface = ({ user, socket }) => {
 //   const [messages, setMessages] = useState([]);
 //   const [currentMessage, setCurrentMessage] = useState("");
 //   const [sessions, setSessions] = useState([]);
 //   const [currentSession, setCurrentSession] = useState(null);
 //   const messagesEndRef = useRef(null);
 //   useEffect(() => {
 //     // Fetch user's chat sessions from Strapi
 //     const fetchSessions = async () => {
 //       try {
 //         // Replace with your actual Strapi API call
 //         const response = await fetch(`/api/chat-sessions?user=${user.id}`);
 //         const data = await response.json();
 //         setSessions(data);
 //       } catch (error) {
 //         console.error("Failed to fetch sessions", error);
 //       }
 //     };
 //     // WebSocket message handling
 //     const handleSocketMessage = (event) => {
 //       const message = JSON.parse(event.data);
 //       setMessages((prev) => [...prev, message]);
 //     };
 //     if (socket) {
 //       socket.addEventListener("message", handleSocketMessage);
 //     }
 //     fetchSessions();
 //     return () => {
 //       if (socket) {
 //         socket.removeEventListener("message", handleSocketMessage);
 //       }
 //     };
 //   }, [user, socket]);
 //   // Scroll to bottom when messages update
 //   useEffect(() => {
 //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 //   }, [messages]);
 //   const handleSendMessage = async () => {
 //     if (currentMessage.trim() && socket) {
 //       const messageData = {
 //         content: currentMessage,
 //         user: user.id,
 //         session: currentSession?.id,
 //         timestamp: new Date().toISOString(),
 //       };
 //       // Send message via WebSocket
 //       socket.send(JSON.stringify(messageData));
 //       // Save message to Strapi
 //       try {
 //         await fetch("/api/messages", {
 //           method: "POST",
 //           headers: {
 //             "Content-Type": "application/json",
 //           },
 //           body: JSON.stringify(messageData),
 //         });
 //       } catch (error) {
 //         console.error("Failed to save message", error);
 //       }
 //       setCurrentMessage("");
 //     }
 //   };
 //   const createNewSession = async () => {
 //     try {
 //       const response = await fetch("/api/chat-sessions", {
 //         method: "POST",
 //         headers: {
 //           "Content-Type": "application/json",
 //         },
 //         body: JSON.stringify({
 //           user: user.id,
 //           title: `New Session ${sessions.length + 1}`,
 //           createdAt: new Date().toISOString(),
 //         }),
 //       });
 //       const newSession = await response.json();
 //       setSessions([...sessions, newSession]);
 //       setCurrentSession(newSession);
 //     } catch (error) {
 //       console.error("Failed to create new session", error);
 //     }
 //   };
 //   return (
 //     <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
 //       <div className="flex border-b p-4">
 //         <div className="flex-grow">
 //           <h2 className="text-xl font-bold">
 //             {currentSession ? currentSession.title : "Select a Session"}
 //           </h2>
 //         </div>
 //         <Button variant="outline" onClick={createNewSession}>
 //           New Session
 //         </Button>
 //       </div>
 //       <CardContent className="flex-grow overflow-y-auto p-4">
 //         {messages.map((msg, index) => (
 //           <div
 //             key={index}
 //             className={`mb-2 p-2 rounded ${
 //               msg.user === user.id
 //                 ? "bg-blue-100 text-right self-end"
 //                 : "bg-gray-100 text-left self-start"
 //             }`}
 //           >
 //             {msg.content}
 //           </div>
 //         ))}
 //         <div ref={messagesEndRef} />
 //       </CardContent>
 //       <CardFooter className="border-t p-4">
 //         <div className="flex w-full space-x-2">
 //           <Input
 //             value={currentMessage}
 //             onChange={(e) => setCurrentMessage(e.target.value)}
 //             placeholder="Type a message..."
 //             onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
 //             className="flex-grow"
 //           />
 //           <Button onClick={handleSendMessage}>Send</Button>
 //         </div>
 //       </CardFooter>
 //     </Card>
 //   );
 // };
 // export default ChatInterface;
_s(Home, "DxD5YLAFEzawBmgARN22CS89yBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$fetch$2d$users$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$logout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogout"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_page_tsx_32efbb._.js.map