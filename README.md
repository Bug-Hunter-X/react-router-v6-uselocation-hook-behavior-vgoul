# React Router v6: `useLocation` Hook Issue

This repository demonstrates a common error encountered when using the `useLocation` hook in React Router v6 outside of the context of a route component.  The example shows how accessing `location` directly leads to incorrect or outdated state.

The `bug.js` file exhibits the problematic code.  The `bugSolution.js` file provides a solution using techniques like context or props to pass location data correctly.