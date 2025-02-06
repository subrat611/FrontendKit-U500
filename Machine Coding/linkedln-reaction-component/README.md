# Linkedln like reaction component

**Duration:** 90 minutes

**Expectation:** Write clean code, focusing on modularity, performance, and usability.

## Problem Statement

You need to build a reaction component similar to LinkedIn, where users can react to a post.

## Without details (RADIO framework)

### Requirements Exploration

- Should the reaction options appear on hover or on click?
- Can users remove their reaction after selecting one?
- Should we show reaction counts (e.g., "10 Likes, 2 Loves")?
- Can multiple users react to a post, or is it one reaction per user per post?
- Should the component support mobile responsiveness?

### Architecture / High-Level Design

- What are the main components of the reaction feature? (E.g., Post, ReactionButton, ReactionList)
- Should we use context state (React Context) for managing reactions, or is per-component state enough?
- Should the UI have animation/transitions when showing reactions?

### Data Model:

- What does a post’s reaction data look like? (E.g., { postId, userId, reactionType })
- How do we track which reaction the user selected?
- If multiple users can react, should we store total counts per reaction?

### Interactions:

- If backend is involved, should we assume APIs like:
  - GET /posts/{id}/reactions → Fetch reactions for a post
  - POST /posts/{id}/reactions → Save user reaction
  - DELETE /posts/{id}/reactions → Remove reaction
- If it's frontend-only, how should we mock data?

### Optimizations & Deep Dive

- How do we optimize re-renders when reactions update?
- Should we lazy-load reaction counts for better performance?
- Any accessibility (ARIA, keyboard navigation) requirements?

## With given details 😄 (most of the details already covered).

### Requirements:

#### Hover to Show Options:

- When the user hovers over the reaction button, display a set of reaction options (Like, Love, Celebrate, Insightful, Funny).
- The options disappear when the mouse moves away.

#### Selecting a Reaction:

- Clicking on a reaction updates the UI with the selected reaction.
- The user can change their reaction by selecting a different one.
- Clicking the selected reaction again removes it (i.e., resets to default).

#### State Management:

- Each post should manage its own reaction state independently.

#### UI Expectations:

- A default reaction button (e.g., "👍 Like") should be visible before any reaction is selected.
- Once a reaction is selected, it should replace the default text/icon.
- Use simple emojis or icons for reactions.

#### Performance Considerations:

- The component should be reusable and optimized.
- Avoid unnecessary re-renders.

#### Bonus (Optional, If Time Permits):

- Implement animations for smooth reaction selection.
- Add keyboard accessibility (e.g., arrow keys to navigate reactions).
