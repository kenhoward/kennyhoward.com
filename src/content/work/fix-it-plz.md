---
title: Fix It Plz
showcasePriority: 1
publishDate: 2025-07-03 00:00:00
img: https://res.cloudinary.com/dqlpq0s6t/image/upload/v1775378384/admin-dashboard_z4dr8m.png
img_alt: Screenshot of the Fix It Plz admin dashboard showing household requests
description: |
  A mobile-first family task and ticketing web app where household members submit home-related requests and an admin manages them through a protected in-app portal.
tags:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Firebase Auth
  - Firestore
  - Vercel
websiteUrl: https://fix-it-plz.kennyhoward.dev/
githubUrl: https://github.com/kenhoward/fix-it-plz
portraitImg: true
---

## Fix It Plz - A Household Request System

> "The best way to predict the future is to create it." – Peter Drucker

**Fix It Plz** is a mobile-first web app that brings the convenience of an IT ticketing system into the home. Family members can submit requests like replacing a lightbulb, installing a shelf, or fixing a leaky faucet, and an admin can triage, track, and resolve them through a protected portal without digging through texts or forgotten reminders.

### **Why I Built This**
I wanted a lightweight, purpose-built system for managing household requests. Instead of relying on group texts or mental notes that inevitably get lost, family members can open the app, describe what needs fixing, and submit a request. On my end, I needed a proper admin experience to manage requests, family members, and workflows directly in the app rather than through the Firebase Console.

The goal was something that felt like a real product, polished, intuitive, and genuinely useful for everyday life.

### **Current Features**
Family members verify their identity through a simple code-based flow with no traditional account creation required. Shared devices remember the last verified member so returning users get a frictionless experience. From there, members can submit household requests through a mobile-first creation flow, view their own submissions, and check on a ticket's full activity history.

On the admin side, there's a protected portal with its own auth flow and dashboard for viewing all household requests. Admins can update ticket statuses, leave comments, track activity, and manage family members directly in the UI.

![Screenshot of the new request screen in Fix It Plz](https://res.cloudinary.com/dqlpq0s6t/image/upload/v1775378380/new-request_tgh980.png)
*The mobile-first request creation screen where family members describe what needs fixing*

### **Technical Highlights**
The app runs on a **dual auth model** with completely separate member and admin flows. Members authenticate through server-validated verification with signed cookies, while admins go through Firebase Auth with protected session handling. This keeps the two experiences cleanly isolated so family members only ever see their own requests, while admins get full visibility.

Under the hood, Firestore is structured with collections for family members, admins, tickets, and ticket events, keeping data organized and queries efficient. The entire UX was built **mobile-first**, designed for phone-sized screens with an app-like feel, then scaled up for larger viewports.

Development was done incrementally with AI-assisted tooling while maintaining architectural oversight and thorough code vetting at every step.

### **Future Enhancements**
Next up, I plan to add **push and email notifications** so members get updates when their requests are triaged or resolved. I'd also like to support **photo attachments** so members can show exactly what needs fixing. On the admin side, better **filtering, sorting, and workflow visualization** will make the dashboard more powerful as the number of requests grows. Longer term, I'm exploring **richer analytics** and potentially evolving the app toward a **native-like mobile experience**.

---

This project started as a practical solution to a real household problem and has grown into a fully functional product that my family uses regularly.
