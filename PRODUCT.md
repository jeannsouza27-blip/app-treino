# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

One person: Jeann, who trains for hypertrophy and body recomposition. They use the app mostly on their phone, at the gym between sets and at home to check nutrition, supplements and progress. The login screen and the `admin` account exist, but the app is personal: all accounts share one saved state, and keeping data separate per account is not a goal.

## Product Purpose

"Projeto Shape" is a personal training log and coach. It shows the workout of the day, logs sets (set number, reps and load) per exercise, keeps a history of finished workouts, and tracks body weight, body-fat percentage, daily meals and supplements. It succeeds when logging a set mid-workout takes a few seconds and progress (loads, personal records, weight and fat trend) is obvious at a glance.

## Positioning

A single-user tool built around Jeann's own A/B full-body split, their own exercise photos and their own goals (fat-percentage target, protein and water targets). It is not a generic multi-user fitness platform.

## Operating Context

- Used one-handed on a phone at the gym, often in the middle of a set, sometimes with sweaty hands and bright light. Desktop use is secondary.
- Installed as a PWA (standalone, portrait). Served as static files by nginx (see `Dockerfile`).
- Rhythm: alternating Full Body A / B days, roughly 4 sessions per week, in 40-day program cycles.

## Capabilities and Constraints

- Single static `index.html` with inline CSS and JS. No build step, no backend. Lightweight CDN libraries are allowed only when needed. Inline SVG is preferred.
- Data lives in `localStorage` under the existing keys `meuTreino_state`, `meuTreino_users`, `meuTreino_active_user` and `meuTreino_programs`. These keys must keep working. Any structural change needs a migration that preserves existing data.
- Backup export and import (JSON) must keep round-tripping.
- Tabs: Início, Treino, Progresso, Nutrição, Suplementos, Coach. An admin panel manages exercises and program days.
- Streak means consecutive calendar weeks with at least one finished workout.
- Interface language: Brazilian Portuguese. Numbers use pt-BR formatting ("82,0 kg", "20,2%").

## Brand Commitments

- Name: "Projeto Shape".
- Voice: confident, direct, short Portuguese. Premium fitness, data-first, nothing childish.
- Binding visual constraint from the owner: blue/indigo base palette. Green is used only for success and achievements.
- Must support dark mode through `prefers-color-scheme`.

## Evidence on Hand

- Real exercise demonstration photos are in `imagem treino/`, one per default exercise.
- The weight history comes from saved profile edits. Body-fat history did not exist before this redesign.
- There are no testimonials, external users or published claims, and none should be invented.

## Product Principles

1. Logging during a workout comes first: big targets, few taps, nothing in the way.
2. Show real numbers from saved data, never placeholders dressed up as stats.
3. Empty states teach the next action instead of showing zeros.
4. Never lose the user's history: migrate, never reset.

## Accessibility & Inclusion

Mobile-first at 375px and 414px. Touch targets of at least 44×44px. Every input has a visible label. Gym conditions (glare, quick glances) call for strong contrast in both themes.
